// navbar event

const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", (event) => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add("navbar-dark");
    } else {
        navbar.classList.remove("navbar-dark");
    }
});

// scrolling event

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const dataset = event.target.dataset;
    const link = event.target.dataset.link;
    if (link == null) {
        return;
    }
    const movingTo = document.querySelector(`${link}`);
    movingTo.scrollIntoView({ behavior: "smooth" });
});

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
    const contact = document.querySelector("#contact");
    contact.scrollIntoView({ behavior: "smooth" });
});
