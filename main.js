// navbar event

const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add("navbar-dark");
    } else {
        navbar.classList.remove("navbar-dark");
    }
});

// scrolling event

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollToSection(link);
});

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
    scrollToSection("#contact");
});

// transparent home

const home = document.querySelector("#home");
const homeContent = document.querySelector(".homeContent");
const homeHeight = homeContent.offsetHeight;
window.addEventListener("scroll", () => {
    if (window.scrollY < homeHeight) {
        homeContent.style.opacity = 1 - window.scrollY / homeHeight;
    } else {
        homeContent.style.opacity = 0;
    }
});

// arrow

const arrowBtn = document.querySelector(".arrowBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowBtn.classList.add("visible");
    } else {
        arrowBtn.classList.remove("visible");
    }
});
arrowBtn.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth" });
});

function scrollToSection(section) {
    const movingTo = document.querySelector(section);
    movingTo.scrollIntoView({ behavior: "smooth" });
}
