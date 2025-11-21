// Load plugins
const { src, dest, watch, parallel, series } = require("gulp");
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const useref = require("gulp-useref");
const gulpIf = require("gulp-if");
const npmDist = require("gulp-npm-dist");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const replace = require("gulp-replace");
const del = require("del");
const autoprefixer = require("autoprefixer");
const terser = require("gulp-terser");
const minifyCSS = require("gulp-clean-css");
const tailwindcss = require("@tailwindcss/postcss");
const concat = require("gulp-concat");

//**************************//
// Set Your Default Paths
//**************************//
const paths = {
  base: {
    base: "./",
    node: "./node_modules",
  },
  src: {
    basesrc: "./src",
    basesrcfiles: "./src/**/*",
    css: "./src/assets/css",
    tailwind: "./src/assets/tailwind/**/*.css",
    js: "./src/assets/js/**/*.js",
    html: "./src/**/*.html",
    fonts: "./src/assets/fonts/**/*",
    assets: "./src/assets/**/*",
    shared: "./src/partials/**/*",
    images: "./src/assets/images/**/*",
  },
  temp: {
    basetemp: "./.temp",
  },
  dist: {
    basedist: "./dist",
    css: "./dist/assets/css",
    js: "./dist/assets/js",
    images: "./dist/assets/images",
    fonts: "./dist/assets/fonts",
    libs: "./dist/assets/libs",
  },
};

//**************************//
// Compile tailwind to CSS
//**************************//

// function tcss() {
//   return (
//     src(paths.src.tailwind)
//       .pipe(postcss([tailwindcss(TD_CONFIG), require("autoprefixer")]))
//       .pipe(concat({ path: "theme.css" }))
//       .pipe(dest(paths.src.css))
//       .pipe(browsersync.stream())
//   );
// }

// New
function tcss() {
  return src(paths.src.tailwind)
    //  .pipe(postcss([tailwindcss(TD_CONFIG), require("autoprefixer")]))
     .pipe(
      postcss([
        tailwindcss(),
        autoprefixer(),
        cssnano(), 
      ])
    )
    .pipe(concat("theme.css"))
    .pipe(dest(paths.src.css))
    .pipe(browsersync.stream());
}

//**************************//
// File Includes
//**************************//
function html() {
  return src([paths.src.html, "!./src/partials/**/*"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(replace(/src="(.{0,10})node_modules/g, 'src="$1assets/libs'))
    .pipe(replace(/href="(.{0,10})node_modules/g, 'href="$1assets/libs'))
    .pipe(useref())
    .pipe(gulpIf("*.css", postcss([autoprefixer(), cssnano()])))
    .pipe(gulpIf("*.js", terser()))
    .pipe(dest(paths.dist.basedist))
    .pipe(browsersync.stream());
}

// File include task for temp
function fileincludeTask() {
  return src([paths.src.html, "!./src/partials/**/*"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest(paths.temp.basetemp));
}

// Copy libs file from nodemodules to dist
function copyLibs() {
  return src(npmDist(), { base: paths.base.node }).pipe(dest(paths.dist.libs));
}

// Image
function images() {
  return src(paths.src.images).pipe(dest(paths.dist.images));
}
// Image
function fonts() {
  return src(paths.src.fonts).pipe(dest(paths.dist.fonts));
}
// Js
function js() {
  return src(paths.src.js).pipe(dest(paths.dist.js));
}
// Css
function css() {
  return src("./src/assets/css/**/*.css").pipe(dest(paths.dist.css));
}

// Clean .temp folder
function cleanTemp(callback) {
  del.sync(paths.temp.basetemp);
  callback();
}

// Clean Dist folder
function cleanDist(callback) {
  del.sync(paths.dist.basedist);
  callback();
}

// Browser Sync Serve
function browsersyncServe(callback) {
  browsersync.init({
    server: {
      baseDir: [paths.temp.basetemp, paths.src.basesrc, paths.base.base],
    },
  });
  callback();
}

// SyncReload
function syncReload(callback) {
  browsersync.reload();
  callback();
}

// Watch Task
function watchTask() {
  watch(paths.src.html, series(fileincludeTask, syncReload));
  watch([paths.src.images, paths.src.fonts], series(images, fonts));
  watch(
    [paths.src.tailwind, paths.src.html],
    series(tcss, syncReload)
  );
}

// Default Task Preview
exports.default = series(fileincludeTask, browsersyncServe, watchTask);

// Build Task for Dist
exports.build = series(
  parallel(cleanDist),
  html,
  images,
  tcss,
  css,
  js,
  fonts,
  copyLibs,
  cleanTemp
);

// export tasks
exports.css = css;
exports.html = html;
exports.fileincludeTask = fileincludeTask;
exports.copyLibs = copyLibs;
exports.cleanTemp = cleanTemp;
exports.cleanDist = cleanDist;
exports.images = images;
exports.fonts = fonts;
exports.js = js;
