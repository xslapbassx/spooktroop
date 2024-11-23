fetch("mongodb+srv://michaelthomasfrancis:rjt6z0G7VVjzr0SP@cluster0.alu8q.mongodb.net/stories")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error", error);
    });

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const headerLinks = document.querySelector(".header-links");

    hamburgerMenu.addEventListener("click", function () {
        headerLinks.classList.toggle("show");
    });
});