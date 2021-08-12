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
    navbarMenu.classList.remove("open");

    // activate button by scrolling

    const scrollPosition = window.scrollY;
    const navbarItems = document.querySelectorAll(".navbar__menu__item");
    const homeBtn = document.querySelector(
        `.navbar__menu__item[data-link='#work']`
    );

    switch (scrollPosition) {
        case "1000":
            navbarItems.forEach((li) => {
                li.classList.remove("active");
            });
            homeBtn.classList.add("active");
            break;
    }

    // // active navBtn
    // const navbarItems = document.querySelectorAll(".navbar__menu__item");
    // navbarItems.forEach((li) => {
    //     li.classList.remove("active");
    // });
    // target.classList.add("active");
});

// toggle Btn
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

// home contact

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

// click event on projects

const categories = document.querySelector(".work__categories");
const categoriesBtns = document.querySelectorAll(".categories__btn");
const projectcframe = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

categories.addEventListener("click", (event) => {
    const filter =
        event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    // active btn
    categoriesBtns.forEach((categoriesBtn) => {
        categoriesBtn.classList.remove("active");
        if (
            event.target === categoriesBtn ||
            event.target.parentNode === categoriesBtn
        )
            categoriesBtn.classList.add("active");
    });

    projectcframe.classList.add("project__anim");

    setTimeout(() => {
        projects.forEach((project) => {
            const type = project.dataset.type;

            if (filter === "all" || type === filter) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });

        projectcframe.classList.remove("project__anim");
    }, 300);
});

// function

function scrollToSection(section) {
    const movingTo = document.querySelector(section);
    movingTo.scrollIntoView({ behavior: "smooth" });
}

// activate by scrolling

// 1. get all element to use
// 2. Observe all section through IntersectionObserver
// 3. active menu items by the section showed

const navbarItems = document.querySelectorAll(".navbar__menu__item");
const navbarItemsArray = Array.from(navbarItems);
const sectionIds = navbarItemsArray.map((id) => id.dataset.link);

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
    document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex;
let selectedNavItem = navItems[0];
function selecteNavItem(selected) {
    selectedNavItem.classList.remove("active");
    selectedNavItem = selected;
    selectedNavItem.classList.add("active");
}

const observerOption = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};
const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRatio > 0) {
            // scrolling up
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            if (entry.target.getBoundingClientRect().y < 0) {
                selectedNavIndex = index + 1;
            } else {
                selectedNavIndex = index - 1;
            }
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOption);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        selectedNavIndex = 0;
    } else if (
        Math.round(window.scrollY + window.innerHeight) >=
        document.body.scrollHeight
    ) {
        selectedNavIndex = navItems.length - 1;
    }
    selecteNavItem(navItems[selectedNavIndex]);
});
