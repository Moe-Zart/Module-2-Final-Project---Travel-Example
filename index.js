
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const mobileMenuLinks = document.querySelectorAll(
  ".mobile-menu-link, .mobile-menu-btn-primary"
);

// Open mobile menu
mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
  mobileMenuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  mobileMenuOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

mobileMenuClose.addEventListener("click", closeMobileMenu);
mobileMenuOverlay.addEventListener("click", closeMobileMenu);

// Close menu when clicking on a link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
