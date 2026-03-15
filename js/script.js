const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar ul");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
