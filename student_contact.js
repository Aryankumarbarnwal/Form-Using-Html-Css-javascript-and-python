// student_contact.js

document.getElementById("menu-icon").onclick = function() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
    }
};
