/// <reference types="vite/client" />
declare module "*.css";
declare module "swiper/css";
declare module 'vue-easy-lightbox';
declare module 'vue-slick-carousel';

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}




