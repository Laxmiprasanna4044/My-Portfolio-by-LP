
// MOBILE MENU

const hamburger = document.querySelector(".humburger");
const menuBar = document.querySelector(".navbar-menu .menu-bar");

hamburger.addEventListener("click", () => {
    menuBar.classList.toggle("show");
});

// CLOSE MENU AFTER CLICKING

const navLinks = document.querySelectorAll(".navbar-menu .menu-bar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuBar.classList.remove("show");
    });
});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".menu-bar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// IMAGE ANIMATION

const profileImage = document.querySelector(".sec-1-1 img");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    profileImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(
    ".sec1,.sec2,.sec3,.sec4,.sec5,.sec6"
);

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();