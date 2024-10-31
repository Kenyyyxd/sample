// script.js
let lastScrollTop = 0; // Variable to keep track of last scroll position
const header = document.querySelector('header'); // Reference to the header element
const navLinks = document.querySelectorAll('.nav-links a'); // Reference to all nav links

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user scrolled down or up
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)'; // Hide the header
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)'; // Show the header
    }

    // Set the background color based on scroll position
    if (currentScroll > 0) {
        header.classList.add('scrolled'); // Add class for black background
    } else {
        header.classList.remove('scrolled'); // Remove class for transparent background
    }

    // Update active class on nav links based on scroll position
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in the viewport
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            link.classList.add('active'); // Add active class to the link
        } else {
            link.classList.remove('active'); // Remove active class from the link
        }
    });

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    
    // Toggle visibility of the navigation links
    if (menuToggle.checked) {
        navLinks.classList.add('show');
    } else {
        navLinks.classList.remove('show');
    }
}
