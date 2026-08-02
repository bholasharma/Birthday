// script.js

const video = document.querySelector('.bg-video');
const overlay = document.querySelector('.overlay');
const dots = document.querySelectorAll('.dot');

function updateActiveDot() {
    let current = 0;
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 300) {
            current = index;
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
    });
}

// Main scroll effect for video fade
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    
    // Progress from 0 to 1 while scrolling through first section
    let progress = Math.min(scrollY / (vh * 0.7), 1);
    
    // Fade out video smoothly
    video.style.opacity = (1 - progress * 0.95).toFixed(2);
    
    // Darken overlay a bit more
    overlay.style.background = `rgba(0, 0, 0, ${0.45 + progress * 0.4})`;

    updateActiveDot();
});

// Click on dots
function goToSection(n) {
    document.getElementById('section' + n).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateActiveDot();
    dots[0].classList.add('active');
});

// Force proper scrolling
document.documentElement.style.scrollSnapType = "y mandatory";