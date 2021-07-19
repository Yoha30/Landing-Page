/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
const nav = document.querySelector(".navbar__menu");
const allSections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
allSections.forEach((section) => {
    const list = document.createElement('li');
    list.classList.add('sections')
    const link = document.createElement('a');
    fragment.appendChild(list);
    list.appendChild(link);
    link.href = "#" + section.id;
    link.innerHTML = section.dataset.nav;
    let navColor = section.id;
    document.addEventListener("scroll", function () {
        if (section.dataset) {
            if (isInViewport(section)) {
                section.querySelector('h2').classList.add("active");
                document.querySelector('[href="#' + navColor + '"]').classList.add("active");
            } else {
                section.querySelector('h2').classList.remove("active");
                document.querySelector('[href="#' + navColor + '"]').classList.remove("active");
            }
        }
    });
    });
    nav.appendChild(fragment);
//
    nav.style.cssText = "background:black; color:white; user-select:none; scroll-behavior: smooth;";
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
    let image = document.querySelector("img");
    image.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    let header = document.querySelector(".page__header")
    header.style.cssText = "background:lightgray";
    /**
     * End Main Functions
     * Begin Events
     *
     */

// Build menu 
    let img = document.querySelector(".image");
    img.addEventListener('click', function () {
        if (nav.classList.contains("nav-bar")) {
            nav.classList.remove("nav-bar");
        } else {
            nav.classList.add("nav-bar");
        }

    });

// Scroll to section on link click

// Set sections as active
    function isInViewport(element) {
        let rect = element.getBoundingClientRect();
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            return (
                rect.top <= ((window.innerHeight || document.documentElement.clientHeight) / 2) &&
                rect.bottom >= ((window.innerHeight || document.documentElement.clientHeight) * 0.66)
            );
        }
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }