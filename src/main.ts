import "./style.scss";
// Get the menu toggle checkbox and the menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.getElementById("hamburger-icon");

// Add an event listener to the checkbox to toggle the menu
menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    menu.classList.remove("hidden");
    hamburgerIcon.classList.add("rotate-90");
  } else {
    menu.classList.add("hidden");
    hamburgerIcon.classList.remove("rotate-90");
  }
});
