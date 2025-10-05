// === DOM SELECTIONS ===
const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");
const header = document.querySelector("header");
const barsBox = document.querySelector(".bars-box");

// === MENU TOGGLE ===
if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  });
}

// === ACTIVE PAGE HANDLER ===
const activePage = () => {
  if (!header || !barsBox) return;

  // header animation
  header.classList.remove("active");
  setTimeout(() => header.classList.add("active"), 1100);

  // reset links
  navLinks.forEach((link) => link.classList.remove("active"));

  // bars animation
  barsBox.classList.remove("active");
  setTimeout(() => barsBox.classList.add("active"), 1100);

  // reset sections
  sections.forEach((section) => section.classList.remove("active"));

  // reset menu
  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// === NAVIGATION LINKS ===
navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
      setTimeout(() => sections[idx].classList.add("active"), 1100);
    }
  });
});

// === LOGO CLICK ===
if (logoLink) {
  logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
      activePage();
      navLinks[0].classList.add("active");
      setTimeout(() => sections[0].classList.add("active"), 1100);
    }
  });
}

// === RESUME BUTTONS ===
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    resumeDetails.forEach((detail) => detail.classList.remove("active"));
    resumeDetails[idx].classList.add("active");
  });
});

// === PORTFOLIO NAVIGATION ===
const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  if (!imgSlide || portfolioDetails.length === 0) return;

  // ✅ prevent going out of range
  index = Math.min(Math.max(index, 0), portfolioDetails.length - 1);

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => detail.classList.remove("active"));
  portfolioDetails[index].classList.add("active");
};

// RIGHT ARROW
if (arrowRight) {
  arrowRight.addEventListener("click", () => {
    index++;
    activePortfolio();
    arrowLeft?.classList.remove("disabled");
    if (index >= document.querySelectorAll(".portfolio-detail").length - 1)
      arrowRight.classList.add("disabled");
  });
}

// LEFT ARROW
if (arrowLeft) {
  arrowLeft.addEventListener("click", () => {
    index--;
    activePortfolio();
    arrowRight?.classList.remove("disabled");
    if (index <= 0) arrowLeft.classList.add("disabled");
  });
}
