document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".navbar-links");
  const menuIcon = menuToggle.querySelector(".menu-icon");
  const closeIcon = menuToggle.querySelector(".close-icon");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.style.display = navLinks.classList.contains("active")
      ? "none"
      : "block";
    closeIcon.style.display = navLinks.classList.contains("active")
      ? "block"
      : "none";
  });
});
