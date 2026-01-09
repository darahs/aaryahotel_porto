/**
 * Component Loader for Aarya Hotel Website
 * Loads reusable components (header, footer, head) into HTML pages
 */

class ComponentLoader {
    constructor() {
        this.basePath = '../components/';
        this.activePage = this.getActivePage();
    }

    getActivePage() {
        const path = window.location.pathname;
        if (path.includes('homepage')) return 'home';
        if (path.includes('rooms')) return 'rooms';
        if (path.includes('dining')) return 'dining';
        if (path.includes('facilities') || path.includes('amenities')) return 'amenities';
        if (path.includes('events')) return 'events';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }

    async loadComponent(componentName, targetElement) {
        try {
            const response = await fetch(`${this.basePath}${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}: ${response.statusText}`);
            }
            const html = await response.text();
            const element = document.querySelector(targetElement);
            if (element) {
                element.innerHTML = html;
                this.initializeComponent(componentName);
            } else {
                console.warn(`Target element ${targetElement} not found for ${componentName}`);
            }
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
        }
    }

    initializeComponent(componentName) {
        if (componentName === 'header') {
            this.setActiveNavLink();
            this.setHomeLink();
        }
    }

    setActiveNavLink() {
        const navLinks = document.querySelectorAll('[data-nav-link]');
        navLinks.forEach(link => {
            const linkType = link.getAttribute('data-nav-link');
            if (linkType === this.activePage) {
                link.classList.remove('text-sm', 'font-medium', 'leading-normal', 'hover:text-primary', 'transition-colors');
                link.classList.add('text-primary', 'text-sm', 'font-bold', 'leading-normal');
            } else {
                link.classList.remove('text-primary', 'text-sm', 'font-bold', 'leading-normal');
                link.classList.add('text-sm', 'font-medium', 'leading-normal', 'hover:text-primary', 'transition-colors');
            }
        });
    }

    setHomeLink() {
        const homeLinks = document.querySelectorAll('[data-nav-home]');
        const homePath = this.activePage === 'home' ? 'code.html' : '../homepage/code.html';
        homeLinks.forEach(link => {
            link.setAttribute('href', homePath);
        });
    }

    async loadAll() {
        // Load head content (meta, fonts, config) - this needs to be handled differently
        // as it goes in <head> tag
        
        // Load header
        await this.loadComponent('header', '[data-component="header"]');
        
        // Load footer
        await this.loadComponent('footer', '[data-component="footer"]');
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const loader = new ComponentLoader();
        loader.loadAll();
    });
} else {
    const loader = new ComponentLoader();
    loader.loadAll();
}

