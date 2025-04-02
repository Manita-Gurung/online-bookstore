document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");


    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
