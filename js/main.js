document.addEventListener('DOMContentLoaded', async () => {
    // ==========================================
    // 1. INJECT COMPONENTS (Header & Footer)
    // ==========================================
    try {
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

        // Initialize UI navigation and Lucide icons after injection
        initNavigation();
        highlightActiveLink();
        lucide.createIcons();
    } catch (error) {
        console.error('Error loading header/footer components:', error);
        // If fetch fails (e.g. local CORS block), try to init whatever is already present in DOM
        initNavigation();
    }

    // ==========================================
    // 2. STICKY HEADER & SCROLL HANDLER
    // ==========================================
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('sticky', window.scrollY > 0);
        });
    }

    // ==========================================
    // 3. WHATSAPP BUTTON AUTO-COLLAPSE
    // ==========================================
    const whatsappBtn = document.getElementById('whatsapp-button');
    if (whatsappBtn) {
        // Wrap the text node in a span.whatsapp-text for clean styling & transitions
        const childNodes = Array.from(whatsappBtn.childNodes);
        const textNode = childNodes.find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
        if (textNode) {
            const span = document.createElement('span');
            span.className = 'whatsapp-text';
            span.textContent = textNode.textContent.trim();
            whatsappBtn.replaceChild(span, textNode);
        }

        // Automatically collapse the WhatsApp button after 4 seconds
        setTimeout(() => {
            whatsappBtn.classList.add('collapsed');
        }, 4000);
    }
});

// ==========================================
// 4. NAVIGATION INITIALIZATION
// ==========================================
function initNavigation() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (!burgerBtn || !mobileNav) return;

    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        burgerBtn.setAttribute('aria-expanded', isOpen);

        if (isOpen) {
            // Change to x icon
            burgerBtn.innerHTML = '<i data-lucide="x" width="28" height="28"></i>';
        } else {
            // Change back to menu icon
            burgerBtn.innerHTML = '<i data-lucide="menu" width="28" height="28"></i>';
        }
        lucide.createIcons();
    });

    // Close mobile nav when clicking the backdrop (empty space below links)
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
            closeMobileNav();
        }
    });
}

// Close mobile nav when clicking a link
function closeMobileNav() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (!burgerBtn || !mobileNav) return;

    mobileNav.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.innerHTML = '<i data-lucide="menu" width="28" height="28"></i>';
    lucide.createIcons();
}

// ==========================================
// 5. HIGH-LIGHT ACTIVE MENU LINK
// ==========================================
function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    const desktopLinks = document.querySelectorAll('#desktop-nav a');
    const mobileLinks = document.querySelectorAll('#mobile-nav a');
    const allLinks = [...desktopLinks, ...mobileLinks];
    
    if (page === 'index.html' || page === '') {
        const testimonialsSection = document.getElementById('testimonials');
        
        const homeLinks = allLinks.filter(link => {
            const href = link.getAttribute('href');
            return href === 'index.html' || href === '/' || href === 'index.html#';
        });
        
        const testimonialsLinks = allLinks.filter(link => {
            const href = link.getAttribute('href');
            return href.includes('#testimonials');
        });
        
        if (testimonialsSection && 'IntersectionObserver' in window) {
            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px', // Activates when the section covers the center area of viewport
                threshold: 0
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Active Testimonials
                        testimonialsLinks.forEach(l => l.classList.add('active'));
                        homeLinks.forEach(l => l.classList.remove('active'));
                    } else {
                        // Active Home
                        testimonialsLinks.forEach(l => l.classList.remove('active'));
                        homeLinks.forEach(l => l.classList.add('active'));
                    }
                });
            }, observerOptions);
            
            observer.observe(testimonialsSection);
        } else {
            homeLinks.forEach(l => l.classList.add('active'));
        }
    } else {
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}
