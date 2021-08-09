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

function scrollToSection(section) {
    const movingTo = document.querySelector(section);
    movingTo.scrollIntoView({ behavior: "smooth" });
}

// transparent home

const home = document.querySelector("#home");
const homeContent = document.querySelector(".homeContent");
const homeHeight = homeContent.offsetHeight;
window.addEventListener("scroll", () => {
    homeContent.style.opacity = 1 - window.scrollY / homeHeight;
});
