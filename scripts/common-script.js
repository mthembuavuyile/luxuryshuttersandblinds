document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');
    const navOverlay = document.querySelector('.nav-overlay');
    const header = document.querySelector('header');

    function toggleNavigation(active = null) {
        const elements = [nav, burger, navOverlay];
        const action = (active === null) ? 'toggle' : (active ? 'add' : 'remove');
        
        elements.forEach(el => el.classList[action]('active'));
        document.body.classList[action]('nav-active');
    }

    burger.addEventListener('click', () => toggleNavigation());
    navOverlay.addEventListener('click', () => toggleNavigation(false));
    navLinks.forEach(link => link.addEventListener('click', () => toggleNavigation(false)));

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            toggleNavigation(false);
        }
    });

    nav.addEventListener('click', (e) => e.stopPropagation());

    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img.lazy').forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }

    // Check if renderProducts function exists and call it
    if (typeof renderProducts === 'function' && typeof products !== 'undefined') {
        renderProducts(products);
    }
});