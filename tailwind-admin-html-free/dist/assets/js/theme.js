//add Shadow to header on scroll
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function () {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.querySelector(".top-header").classList.add("shadow-sm");  
        } else {
            document.querySelector(".top-header").classList.remove("shadow-sm");
        }
    })
});