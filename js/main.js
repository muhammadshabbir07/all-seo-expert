// Cursor animation

var cursor = document.querySelector(".cursor")
var cursor2 = document.querySelector(".cursor2")

document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
        + "px; top: " + e.clientY + "px;";
})

// Header scroll
let navScroll = document.querySelector(".navbar")
let backToTop = document.querySelector(".back-to-top");

window.onscroll = function () {
    if (navScroll != null) {
        if (document.documentElement.scrollTop > 20) {
            navScroll.classList.add('header-scrolled');
            backToTop.style.display = "block"
        } else {
            navScroll.classList.remove('header-scrolled');
            backToTop.style.display = "none"
        }
    }
}

// navbar links hide 

let navLink = document.querySelectorAll(".nav-link")
let navbarCLosed = document.querySelector(".collapse.navbar-collapse")

navLink.forEach(function (a) {
    a.addEventListener('click', function () {
        navbarCLosed.classList.remove("show")
    })
})

