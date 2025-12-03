/**
 * Electro Theme - Main JavaScript
 * Salla Platform Theme
 */

import anime from 'animejs';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSpinner();
    initBackToTop();
    initStickyHeader();
    initAnimations();
});

/**
 * Spinner - Hide loading spinner
 */
function initSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        setTimeout(() => {
            spinner.classList.remove('show');
        }, 100);
    }
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Sticky Header
 */
function initStickyHeader() {
    if (window.header_is_sticky === 'true' || window.header_is_sticky === true) {
        const navBar = document.querySelector('.nav-bar');
        
        if (navBar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navBar.classList.add('sticky-top', 'shadow-sm');
                } else {
                    navBar.classList.remove('sticky-top', 'shadow-sm');
                }
            });
        }
    }
}

/**
 * Scroll Animations using Anime.js
 */
function initAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const animationType = el.dataset.animate;
                    const delay = el.dataset.delay || 0;
                    
                    anime({
                        targets: el,
                        opacity: [0, 1],
                        translateY: animationType === 'fadeInUp' ? [30, 0] : 0,
                        translateX: animationType === 'fadeInLeft' ? [-30, 0] : 
                                   animationType === 'fadeInRight' ? [30, 0] : 0,
                        duration: 800,
                        delay: parseInt(delay),
                        easing: 'easeOutQuad'
                    });
                    
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
}

/**
 * Salla Events Listeners
 */
document.addEventListener('salla::cart.updated', function(event) {
    console.log('Cart updated:', event.detail);
});

document.addEventListener('salla::product.added', function(event) {
    console.log('Product added to cart:', event.detail);
});

// Export functions for external use
window.ElectroTheme = {
    initSpinner,
    initBackToTop,
    initStickyHeader,
    initAnimations
};
