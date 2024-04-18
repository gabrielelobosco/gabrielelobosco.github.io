addEventListener("scroll", (event) => {

    var nav = document.getElementById("nav");
    var navPlaceholder = document.getElementById("nav-placeholder");

    if (navPlaceholder.getBoundingClientRect().top < 0) {
        nav.classList.add("fixed-nav");
    }
    if (navPlaceholder.getBoundingClientRect().top > 0) {
        nav.classList.remove("fixed-nav");
    }
});