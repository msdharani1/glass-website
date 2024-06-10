/*
Theme Name: msd-static
Theme URI: http://artistmsdharani.com
Author: MS Dharani
Author URI: http://artistmsdharani.com
Description: The staitc webpage for the organization
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: msd-static
*/
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    hamburgerMenu.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});

function viewArtical1() {
    var x = document.getElementById("article1");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function viewArtical2() {
    var x = document.getElementById("article2");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function viewArtical3() {
    var x = document.getElementById("article3");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function viewQ1(){
    var x = document.getElementById("q1");
    var y = document.getElementById('p1');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        y.innerHTML = '-';
        y.style.fontSize = '30px';
    } else {
        x.style.display = "none";
        y.innerHTML = '+';

    }
}
function viewQ2(){
    var x = document.getElementById("q2");
    var y = document.getElementById('p2');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        y.innerHTML = '-';
        y.style.fontSize = '30px';
    } else {
        x.style.display = "none";
        y.innerHTML = '+';
    }
}
function viewQ3(){
    var x = document.getElementById("q3");
    var y = document.getElementById('p3');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        y.innerHTML = '-';
        y.style.fontSize = '30px';
    } else {
        x.style.display = "none";
        y.innerHTML = '+';
    }
}
function viewQ4(){
    var x = document.getElementById("q4");
    var y = document.getElementById('p4');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        y.innerHTML = '-';
        y.style.fontSize = '30px';
    } else {
        x.style.display = "none";
        y.innerHTML = '+';
    }
}

function scrollToContact() {
    // Get the target element
    var contactElement = document.getElementById("aboutus");

    // Scroll to the target element
    contactElement.scrollIntoView({ behavior: "smooth" });
}
