const navLinks = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".logo");

toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});