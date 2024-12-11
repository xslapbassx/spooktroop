document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const headerLinks = document.querySelector(".header-links");

    hamburgerMenu.addEventListener("click", function () {
        headerLinks.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const storiesContainer = document.getElementById("stories-container");

    // Fetch stories from the server
    fetch("/stories")
        .then((response) => response.json())
        .then((stories) => {
            storiesContainer.innerHTML = ""; // Clear the container
            stories.forEach((story) => {
                const storyDiv = document.createElement("div");
                storyDiv.classList.add("story");

                const title = document.createElement("h3");
                title.textContent = story.title;

                const content = document.createElement("p1");
                content.textContent = story.content;

                storyDiv.appendChild(title);
                storyDiv.appendChild(content);
                storiesContainer.appendChild(storyDiv);
            });
        })
        .catch((err) => {
            console.error("Error fetching stories", err);
        });
});