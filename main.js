// navbar fixing

const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", (event) => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add("navbar-dark");
    } else {
        navbar.classList.remove("navbar-dark");
    }
});
