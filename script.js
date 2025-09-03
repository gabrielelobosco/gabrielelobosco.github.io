document.addEventListener("DOMContentLoaded", (event) => {
    var title = document.getElementById("title")
    title.style.transform = "translate(0)";
    title.style.opacity = 1;
    var socialmediagroup = document.getElementsByClassName("socialMediaIcons")[0];
    socialmediagroup.style.transform = "translate(0)";
    socialmediagroup.style.opacity = 1;
    var socialmediaicons = document.querySelectorAll(".socialMediaIcons > a");
    socialmediaicons.forEach(icon =>{
        icon.style.margin = "1rem";
    })
    var logo = document.getElementsByClassName("logoContainer")[0];
    logo.style.transform = "translateY(0)";
    logo.style.opacity = 1;
})

var nav = document.getElementById("nav");
var navPlaceholder = document.getElementById("nav-placeholder");

addEventListener("scroll", (event) => {
    if (navPlaceholder.getBoundingClientRect().top < 0) {
        nav.classList.add("fixed-nav");
    }
    if (navPlaceholder.getBoundingClientRect().top > 0) {
        nav.classList.remove("fixed-nav");
    }
});

const aboutMeSection = document.getElementById("aboutme");
const aboutMeText = document.querySelector(".aboutMeText");
const aboutMeImage = document.querySelector(".aboutMeImage")

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutMeText.classList.add("visible");
            aboutMeImage.classList.add("visible");
        } else {
            aboutMeText.classList.remove("visible");
            aboutMeImage.classList.remove("visible");
        }
    })
}

const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
});

observer.observe(aboutMeSection);