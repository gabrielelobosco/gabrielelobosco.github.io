/* Starting animations on DOM Content Loaded */

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

/* Generating the project cards using a JSON Array - Coming Soon: CMS Headless Integration - API call */

const projects = [
    {
        title: "Placeholder - Title #1",
        description: "Placeholder - Descrizione #1",
        image: "https://picsum.photos/id/212/128/128",
        url: "https://placeholder1.com"
    },
    {
        title: "PyPong",
        description: "A simple Pong game made using PyGames library",
        image: "https://picsum.photos/id/334/128/128",
        url: "https://github.com/gabrielelobosco/pypong"
    },
    {
        title: "Placeholder - Title #3",
        description: "Placeholder - Descrizione #3",
        image: "https://picsum.photos/id/13/128/128",
        url: "https://placeholder3.com"
    },
    {
        title: "Placeholder - Title #4",
        description: "Placeholder - Descrizione #4",
        image: "https://picsum.photos/id/2/128/128",
        url: "https://placeholder4.com"
    },
    {
        title: "Placeholder - Title #5",
        description: "Placeholder - Descrizione #5",
        image: "https://picsum.photos/id/231/128/128",
        url: "https://placeholder5.com"
    },
    {
        title: "Placeholder - Title #6",
        description: "Placeholder - Descrizione #6",
        image: "https://picsum.photos/id/233/128/128",
        url: "https://placeholder6.com"
    }
]

const projectGrid = document.getElementsByClassName("projects-grid")[0];

projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card", "animate-on-scroll");

    if (index % 2 == 0) {
        projectCard.dataset.animation = "left";
    } else {
        projectCard.dataset.animation = "right";
    }

    projectCard.innerHTML = `
        <div class="project-image-box">
            <img src="${project.image}" alt="${project.title} image" class="project-image">
        </div>
        <div class="project-info">    
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <hr>
            <a href="${project.url}" target="_blank" class="project-link">Vai al progetto</a>
        </div>
    `;

    projectGrid.appendChild(projectCard);
})

/* Observing the nav placeholder to make the nav sticky on scroll */

var nav = document.getElementById("nav");
var navPlaceholder = document.getElementById("nav-placeholder");

const stickyNavObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("fixed-nav")
        } else {
            nav.classList.remove("fixed-nav")
        }
    });
}, {
    rootMargin: "-1px 0px 0px 0px",
    threshold: 0
});

stickyNavObserver.observe(navPlaceholder);

/* Observing all the elements containing a 'animate-on-scroll' class to animate them at the right time */

document.querySelector(".aboutMeText").dataset.animation = "left";
document.querySelector(".aboutMeImage").dataset.animation = "right";

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
};

const animationObserver = new IntersectionObserver(animateOnScroll, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
});

const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

elementsToAnimate.forEach(element => {
    animationObserver.observe(element);
});