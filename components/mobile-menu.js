// Mobile Menu Toggle Functionality - Reusable Script
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;
    
    if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay) {
        return; // Exit if elements don't exist
    }
    
    function openMobileMenu() {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuOverlay.classList.remove('hidden');
        body.style.overflow = 'hidden';
        if (menuIcon) {
            menuIcon.textContent = 'close';
        }
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuOverlay.classList.add('hidden');
        body.style.overflow = '';
        if (menuIcon) {
            menuIcon.textContent = 'menu';
        }
    }
    
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('translate-x-full')) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(closeMobileMenu, 200);
        });
    });
    
    // Close menu on window resize if desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
});

