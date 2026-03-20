document.addEventListener('DOMContentLoaded', async () => {

    // ==========================================
    // 1. INJECT COMPONENTS (Header & Footer)
    // ==========================================
    try {
        // Fetch both components simultaneously for better performance
        const [headerResponse, footerResponse] = await Promise.all([
            fetch('components/header.html'),
            fetch('components/footer.html')
        ]);

        if (headerResponse.ok) {
            document.getElementById('header-placeholder').innerHTML = await headerResponse.text();
        }
        
        if (footerResponse.ok) {
            document.getElementById('footer-placeholder').innerHTML = await footerResponse.text();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }

    // ==========================================
    // 2. INITIALIZE UI (Now that DOM is complete)
    // ==========================================
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');
    const navOverlay = document.querySelector('.nav-overlay');
    const header = document.querySelector('header');

    function toggleNavigation(active = null) {
        // Safety check in case elements aren't found
        if (!nav || !burger) return;

        const action = (active === null) ? 'toggle' : (active ? 'add' : 'remove');
        
        nav.classList[action]('active');
        burger.classList[action]('active');
        if (navOverlay) navOverlay.classList[action]('active');
        document.body.classList[action]('nav-active');
    }

    // Event Listeners for Mobile Menu
    if (burger) burger.addEventListener('click', () => toggleNavigation());
    if (navOverlay) navOverlay.addEventListener('click', () => toggleNavigation(false));
    if (navLinks) navLinks.forEach(link => link.addEventListener('click', () => toggleNavigation(false)));

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav && burger && !nav.contains(e.target) && !burger.contains(e.target)) {
            toggleNavigation(false);
        }
    });

    if (nav) nav.addEventListener('click', (e) => e.stopPropagation());

    // Sticky Header
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('sticky', window.scrollY > 0);
        });
    }

    // ==========================================
    // 3. LAZY LOADING IMAGES
    // ==========================================
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if (lazyImages.length > 0) {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
        }
    }

    // ==========================================
    // 4. RENDER PRODUCTS (If applicable)
    // ==========================================
    if (typeof renderProducts === 'function' && typeof products !== 'undefined') {
        renderProducts(products);
    }
});