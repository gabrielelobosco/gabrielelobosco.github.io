const projects = [
    {
        title: "Placeholder - Title #1",
        description: "Placeholder - Descrizione #1",
        image: "https://picsum.photos/seed/picsum/200/300",
        url: "https://placeholder1.com"
    },
    {
        title: "Placeholder - Title #2",
        description: "Placeholder - Descrizione #2",
        image: "path/to/placeholder-img-2.jpg",
        url: "https://placeholder2.com"
    },
    {
        title: "Placeholder - Title #3",
        description: "Placeholder - Descrizione #3",
        image: "path/to/placeholder-img-3.jpg",
        url: "https://placeholder3.com"
    },
    {
        title: "Placeholder - Title #4",
        description: "Placeholder - Descrizione #4",
        image: "path/to/placeholder-img-4.jpg",
        url: "https://placeholder4.com"
    },
    {
        title: "Placeholder - Title #5",
        description: "Placeholder - Descrizione #5",
        image: "path/to/placeholder-img-5.jpg",
        url: "https://placeholder5.com"
    },
    {
        title: "Placeholder - Title #6",
        description: "Placeholder - Descrizione #6",
        image: "path/to/placeholder-img-6.jpg",
        url: "https://placeholder6.com"
    }
]

const projectGrid = document.getElementsByClassName("projects-grid")[0];

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title} image" class="project-image">
        <div class="project-info">    
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.url}" target="_blank" class="project-link">Vai al progetto</a>
        </div>
    `;

    projectGrid.appendChild(projectCard);
})