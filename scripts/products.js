const products = [
            // Shutters
            {
                "name": "Roller Blinds",
                "description": "Sleek Roller Blinds designed for modern interiors, combining functionality with style.",
                "category": ["blinds", "residential"],
                "imageUrl": "assets/images/blinds/latest-blinds (2).jpg"
            },
            {
                "name": "Blinds",
                "description": "Versatile Blinds for large windows, offering light control and a professional ambiance.",
                "category": ["blinds", "residential"],
                "imageUrl": "assets/images/blinds/latest-blinds (7).jpg"
            },
            {
                "name": "Premium Aluminum Security Shutters",
                "description": "Elegant and secure Aluminum Shutters that enhance your home's style while providing robust protection.",
                "category": ["shutters", "residential"],
                "imageUrl": "assets/images/shutters/lsbshutter (1).jpg"
            },
            {
                "name": "White Roller Blinds",
                "description": "White Roller Blinds for a light, airy feel, managing light and privacy in any spaces.",
                "category": ["blinds", "residential"],
                "imageUrl": "assets/images/blinds/latest-blinds (5).jpg"
            },

            {
                name: "Compact Horizontal Shutter",
                description: "A sleek, white horizontal shutter designed for ventilation and privacy.",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/latest-window-shutter (3).jpg"
            },
            {
                name: "Modern Window Shutters",
                description: "Sleek and stylish shutters designed for privacy and aesthetics.",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/latest-window-shutter (5).jpg"
            },
            {
                name: "Modern Window Shutters",
                description: "Sleek and stylish shutters designed for privacy and aesthetics.",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/latest-window-shutter (7).jpg"
            },
            {
                name: "Bedroom Window Shutters",
                description: "Modern window shutters enhancing privacy and light control in a stylish bedroom setting.",
                category: ["shutters", "interior design"],
                imageUrl: "assets/images/shutters/latest-window-shutter (14).jpg"
            },
            {
                name: "Minimalist Bedroom Shutters",
                description: "Clean white shutters complementing a modern bedroom with platform bed and natural lighting.",
                category: ["shutters", "bedroom"],
                imageUrl: "assets/images/shutters/latest-window-shutter (19).jpg"
            },
            {
                name: "Contemporary Living Space Shutters",
                description: "Elegant white shutters paired with modern furniture, offering both style and functionality.",
                category: ["shutters", "living room"],
                imageUrl: "assets/images/shutters/latest-window-shutter (21).jpg"
            },
            {
                name: "Modern Bedroom Privacy Shutters",
                description: "Sophisticated window shutters providing light control in a contemporary bedroom setting.",
                category: ["shutters", "bedroom"],
                imageUrl: "assets/images/shutters/latest-window-shutter (23).jpg"
            },


            {
                "name": "Enhanced Security Shutters",
                "description": "Durable aluminum shutters with advanced security features.",
                "category": ["shutters", "residential"],
                "imageUrl": "assets/images/shutters/lsbshutter (5).jpg"
            },
            {
                name: "Kitchen Shutters",
                description: "Functional shutters designed for kitchen privacy and light control",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/kitchen-shutters.jpg"
            },
            {
                name: "Bathroom Shutters",
                description: "Luxurious shutters for bathroom privacy and ambiance",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/shutter-lsb (2).jpg"
            },
            {
                name: "Living Room Shutters",
                description: "Sophisticated shutters for optimal living space light control",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/lsbshutter (4).jpg"
            },
            {
                name: "Privacy Shutters",
                description: "High-quality bedroom shutters for light control and privacy",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/shutter-lsb (3).jpg"
            },
            {
                name: "Dining Room Shutters",
                description: "Elegant shutters for enhanced dining room ambiance",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/lsbshutter (3).jpg"
            },
            {
                name: "Patio Enclosure Shutters",
                description: "Contemporary shutters for outdoor living spaces",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/exterior (4).jpg"
            },
            {
                name: "Designer Exterior Shutters",
                description: "Sleek exterior shutters for enhanced curb appeal",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/exterior (5).jpg"
            },
            {
                name: "All-Weather Security Shutters",
                description: "Durable shutters for all-weather protection",
                category: ["shutters", "residential"],
                imageUrl: "assets/images/shutters/exterior (8).jpg"
            },

            // Blinds
            {
                name: "Premium Venetian Blinds",
                description: "Modern horizontal blinds with precise light control",
                category: ["blinds", "residential", "commercial"],
                imageUrl: "assets/images/blinds/blind (38).jpg"
            },
            {
                name: "Anti-Glare Horizontal Blinds",
                description: "Office blinds optimized for screen visibility",
                category: ["blinds", "commercial"],
                imageUrl: "assets/images/blinds/blind (25).jpg"
            },
            {
                name: "Contemporary Vertical Blinds",
                description: "Stylish vertical blinds for versatile light management",
                category: ["blinds", "residential", "commercial"],
                imageUrl: "assets/images/blinds/blind (8).jpg"
            },
            {
                name: "Architectural Venetian Blinds",
                description: "Angle-mounted blinds combining safety and style",
                category: ["blinds", "commercial"],
                imageUrl: "assets/images/blinds/blind (35).jpg"
            },
            {
                name: "Classic Residential Venetian Blinds",
                description: "Versatile home blinds for privacy and natural light",
                category: ["blinds", "residential"],
                imageUrl: "assets/images/blinds/blind (13).jpg"
            },
            {
                name: "Office Partition Vertical Blinds",
                description: "Practical blinds for office spaces and large windows",
                category: ["blinds", "commercial"],
                imageUrl: "assets/images/blinds/blind (6).jpg"
            },

            // Curtains
            {
                name: "Elegant Living Room Curtains",
                description: "Luxurious curtains for enhanced living space ambiance",
                category: ["curtains", "residential"],
                imageUrl: "https://media.istockphoto.com/id/1445425775/photo/room-with-a-window-with-closed-curtains-1.jpg?s=612x612&w=0&k=20&c=6TwG9HCfuzPeCsDtI0jABPPq3bf-eJQZADSkaGtPUow="
            },
            {
                name: "Versatile Home Curtains",
                description: "Adaptable curtains for multiple room settings",
                category: ["curtains", "residential"],
                imageUrl: "https://media.istockphoto.com/id/1341378132/photo/side-view-of-open-plan-kitchen-with-living-room-and-garden-view-from-the-window.jpg?s=612x612&w=0&k=20&c=oOM1OPUlhkPBamoY3yj4mnc8Dg7qb_JIHhdAKpZAi64="
            },
            {
                name: "Cozy Bedroom Curtains",
                description: "Soft, light-filtering curtains for peaceful sleep",
                category: ["curtains", "residential"],
                imageUrl: "assets/images/curtains/curtain (67).jpg"
            },
            {
                name: "Navy Blockout Curtains",
                description: "Premium light-blocking navy curtains",
                category: ["curtains", "residential"],
                imageUrl: "assets/images/curtains/curtain (33).jpg"
            },
            {
                name: "Home Curtains",
                description: "Classic curtains for versatile home styling",
                category: ["curtains", "residential"],
                imageUrl: "assets/images/curtains/curtain (57).jpg"
            },
            {
                name: "Ready-to-Hang Curtains",
                description: "Pre-made curtains for quick installation",
                category: ["curtains", "residential"],
                imageUrl: "assets/images/curtains/curtain (37).jpg"
            },
            {
                name: "Designer Collection Curtains",
                description: "Luxury curtains for sophisticated interiors",
                category: ["curtains", "residential"],
                imageUrl: "assets/images/curtains/curtain (22).jpg"
            },

            // Gates
            {
                name: "Premium Burglar Guard Security Gate",
                description: "Robust security gate for superior home protection",
                category: ["burglar-guards", "residential"],
                imageUrl: "assets/images/gates/gate (3).jpg"
            },
            {
                name: "Residential-Grade Security Gate",
                description: "Heavy-duty gate meeting security standards",
                category: ["burglar-guards", "residential"],
                imageUrl: "assets/images/gates/gate (9).jpg"
            },
            {
                name: "Customizable Security Gate",
                description: "Adaptable gate for various residential needs",
                category: ["burglar-guards", "residential"],
                imageUrl: "assets/images/gates/gate (6).jpg"
            },
            {
                name: "Space-Saving Bifold Security Gate",
                description: "Compact bifold gate for efficient security",
                category: ["burglar-guards", "residential"],
                imageUrl: "assets/images/gates/gate (7).jpg"
            },

            // Flyscreens
            {
                name: "Double Sliding Flyscreen",
                description: "Efficient double sliding flyscreen for easy operation and maintenance; fitted with powder-coated stainless mesh.",
                category: ["flyscreen", "residential"],
                imageUrl: "assets/images/flyscreens/flyscreen-1.jpg"
            },
            {
                name: "Monkey Screen - Peace of Mind",
                description: "Keep windows open with peace of mind; fitted with powder-coated stainless mesh for durability and security.",
                category: ["flyscreen", "residential"],
                imageUrl: "assets/images/flyscreens/flyscreen-2.jpg"
            },
            {
                name: "Easy-Operate Flyscreen",
                description: "Easy-to-operate flyscreen with powder-coated stainless mesh for low maintenance and durability.",
                category: ["flyscreen", "residential"],
                imageUrl: "assets/images/flyscreens/flyscreen-3.jpg"
            },
            {
                "name": "Sliding Flyscreen Door",
                "description": "Stylish and durable sliding flyscreen door, perfect for residential use to provide easy access while keeping insects out. Modern and functional design that seamlessly blends with outdoor decor.",
                "category": ["flyscreen", "residential", "sliding door"],
                "imageUrl": "assets/images/flyscreens/flyscreen-img.jpg"
            },
            {
                name: "Durable Flyscreen",
                description: "Built to last with powder-coated stainless mesh for effective insect protection and easy maintenance.",
                category: ["flyscreen", "residential"],
                imageUrl: "assets/images/flyscreens/flyscreen (4).jpg"
            },
            {
                name: "Sliding Window Flyscreen",
                description: "Compact and easy-to-slide flyscreen that ensures security with powder-coated stainless mesh.",
                category: ["flyscreen", "residential"],
                imageUrl: "assets/images/flyscreens/flyscreen (5).jpg"
            },
            {
                name: "Powder-Coated Mesh Flyscreen",
                description: "Efficient flyscreen with a powder-coated stainless mesh, ideal for open windows and easy to maintain.",
                category: ["flyscreen", "residential"],
                imageUrl: "assets/images/flyscreens/flyscreen (6).jpg"
            }
        ];

        const productGrid = document.getElementById('productGrid');
        const filterButtons = document.querySelectorAll('.filter-button');

        // Create popup elements
        const popup = document.createElement('div');
        popup.className = 'image-popup';
        popup.innerHTML = `
    <div class="popup-content">
        <span class="close-popup">&times;</span>
        <img class="popup-image" src="" alt="">
    </div>
`;
        document.body.appendChild(popup);

        // Preload images
        function preloadImages() {
            const imageCache = new Map();
            products.forEach(product => {
                const img = new Image();
                img.src = product.imageUrl;
                imageCache.set(product.imageUrl, img);
            });
            return imageCache;
        }

        const imageCache = preloadImages();

        function createProductElement(product) {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';

            // Use IntersectionObserver for lazy loading
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                root: null,
                rootMargin: '50px',
                threshold: 0.1
            });

            productElement.innerHTML = `
        <img 
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
            data-src="${product.imageUrl}" 
            alt="${product.name}" 
            class="product-image"
            loading="lazy"
        >
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `;

            const productImage = productElement.querySelector('.product-image');
            observer.observe(productImage);

            // Add click event to image
            productImage.addEventListener('click', () => {
                const popupImage = popup.querySelector('.popup-image');
                popupImage.src = product.imageUrl;
                popupImage.alt = product.name;
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });

            return productElement;
        }

        // Close popup when clicking the close button or outside the image
        popup.addEventListener('click', (e) => {
            if (e.target.className === 'image-popup' || e.target.className === 'close-popup') {
                closePopup();
            }
        });

        // Add escape key functionality to close popup
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.style.display === 'flex') {
                closePopup();
            }
        });

        // Function to close the popup
        function closePopup() {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function renderProducts(filteredProducts) {
            productGrid.innerHTML = '';
            filteredProducts.forEach(product => {
                productGrid.appendChild(createProductElement(product));
            });
        }

        function filterProducts(category) {
            const filteredProducts = category === 'all'
                ? products
                : products.filter(product => product.category.includes(category));
            renderProducts(filteredProducts);
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.getAttribute('data-filter');
                filterProducts(filter);
            });
        });

        // Add CSS for fade-in effect
        const style = document.createElement('style');
        style.textContent = `
    .product-image {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    
    .product-image.loaded {
        opacity: 1;
    }
`;
        document.head.appendChild(style);

        // Initial render
        renderProducts(products);