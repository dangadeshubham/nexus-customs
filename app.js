/* ============================================
   NEXUS CUSTOMS - App Logic
   ============================================ */

// ---- Product Data ----
const products = [
    {
        id: 1,
        name: "Nexus Paragon HE-75 Magnetic Switch Keyboard",
        shortName: "Nexus Paragon HE-75 Magnetic...",
        category: "keyboards",
        price: 12499,
        originalPrice: 15999,
        discount: 22,
        rating: 4.9,
        reviews: 128,
        description: "75% hall-effect magnetic switch keyboard with rapid trigger, aluminum CNC case, hot-swap PCB, and premium PBT keycaps.",
        features: [
            "Hall-Effect Magnetic Switches (0.1mm-4.0mm adjustable actuation)",
            "Rapid Trigger with 0.1mm sensitivity",
            "Aluminum CNC-machined case with sound-dampening foam",
            "South-facing RGB with per-key customization",
            "Hot-swap PCB with Bluetooth 5.1 + 2.4GHz + USB-C",
            "8000Hz polling rate in wired mode"
        ],
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=400&fit=crop",
        badge: "popular",
        inStock: true
    },
    {
        id: 2,
        name: "Vortex Carbon 65% CNC Aluminum Keyboard",
        shortName: "Vortex Carbon 65% CNC Aluminum",
        category: "keyboards",
        price: 9999,
        originalPrice: 12499,
        discount: 20,
        rating: 4.8,
        reviews: 94,
        description: "Compact 65% layout with carbon fiber plate, gasket-mount design, and factory-lubed stabilizers.",
        features: [
            "65% compact layout with dedicated arrow keys",
            "Carbon fiber plate with gasket-mount design",
            "Factory-lubed Gateron Pro switches",
            "Silicone dampening pad + PE foam",
            "USB-C with detachable cable",
            "PBT double-shot keycaps included"
        ],
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop",
        badge: "new",
        inStock: true
    },
    {
        id: 3,
        name: "Nexus HyperSpeed 8K Wireless HE Mouse",
        shortName: "Nexus HyperSpeed 8K Wireless H...",
        category: "mice",
        price: 5999,
        originalPrice: 7499,
        discount: 20,
        rating: 4.9,
        reviews: 210,
        description: "Ultra-lightweight wireless gaming mouse with 8000Hz polling, PAW3950 sensor, and magnetic switches.",
        features: [
            "PAW3950 optical sensor (30000 DPI)",
            "8000Hz wireless polling rate",
            "Magnetic optical switches (100M clicks)",
            "47g ultra-lightweight design",
            "70-hour battery life",
            "Tri-mode: 2.4GHz + Bluetooth 5.1 + USB-C"
        ],
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=400&fit=crop",
        badge: "popular",
        inStock: true
    },
    {
        id: 4,
        name: "Cyberwave Japanese Dye-Sub PBT Keycap Set",
        shortName: "Cyberwave Japanese Dye-Sub...",
        category: "keycaps",
        price: 2999,
        originalPrice: 3499,
        discount: 14,
        rating: 4.7,
        reviews: 76,
        description: "Premium PBT dye-sublimation keycaps with Japanese sub-legends, Cherry profile, and vibrant colorway.",
        features: [
            "PBT material with dye-sublimation legends",
            "Cherry profile with Japanese sub-legends",
            "140-key set covering most layouts",
            "Vibrant Cyberwave colorway (cyan/teal/orange accents)",
            "Compatible with MX-style switches",
            "Anti-shine coating for long-lasting feel"
        ],
        image: "cyberwave-keycaps.jpg",
        badge: "new",
        inStock: true
    },
    {
        id: 5,
        name: "Kanagawa Wave Stitched XXL Desk Mat",
        shortName: "Kanagawa Wave Stitched XXL Des...",
        category: "deskmats",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        rating: 4.9,
        reviews: 312,
        description: "900×400mm micro-woven cloth surface with anti-slip rubber base.",
        features: [
            "900×400mm XL size fits full setup",
            "Micro-woven cloth for precise control",
            "Anti-slip natural rubber base (3mm thick)",
            "Stitched edges prevent fraying",
            "Water-resistant surface coating",
            "Machine washable"
        ],
        image: "kanagawa-deskmat.jpg",
        badge: "sale",
        inStock: true
    },
    {
        id: 6,
        name: "Nexus Studio Acoustic Foam Mod Kit",
        shortName: "Nexus Studio Acoustic Foam Mod...",
        category: "audio",
        price: 799,
        originalPrice: 999,
        discount: 20,
        rating: 4.6,
        reviews: 45,
        description: "IXPE switch pads and PE case foam for deep thocky acoustic signature.",
        features: [
            "IXPE switch pad sheets (pre-cut for popular layouts)",
            "PE case foam for hollow body fill",
            "Tape mod kit included (3 sheets)",
            "Sound dampening silicone pad",
            "Installation guide and tools included",
            "Compatible with 60%, 65%, 75%, TKL layouts"
        ],
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop",
        badge: null,
        inStock: false
    },
    {
        id: 7,
        name: "Gateron Jade Magnetic HE Switches (35 Pack)",
        shortName: "Gateron Jade Magnetic HE Switch...",
        category: "keyboards",
        price: 1899,
        originalPrice: null,
        discount: 0,
        rating: 5.0,
        reviews: 88,
        description: "Factory pre-lubed magnetic linear switches with dual-rail stability.",
        features: [
            "Magnetic hall-effect mechanism",
            "Pre-lubed factory application",
            "Dual-rail stem for zero wobble",
            "Adjustable actuation (0.1mm - 4.0mm)",
            "35 switches per pack",
            "Clear housing for RGB transparency"
        ],
        image: "magnetic-switches.jpg",
        badge: "popular",
        inStock: true
    },
    {
        id: 8,
        name: "Coiled Aviator Cable (Custom Gold Edition)",
        shortName: "Coiled Aviator Cable (Custom Gol...",
        category: "audio",
        price: 1299,
        originalPrice: 1699,
        discount: 24,
        rating: 4.8,
        reviews: 154,
        description: "Double-sleeved PET techflex custom aviator connector cable.",
        features: [
            "GX16 aviator connector (gold-plated)",
            "Double-sleeved PET techflex + paracord",
            "6-inch coil + 4ft straight cable",
            "USB-C to USB-A (USB-C host adapter included)",
            "Hand-coiled and heat-set",
            "Available in 12 color combinations"
        ],
        image: "coiled-cable.jpg",
        badge: "sale",
        inStock: true
    },
    {
        id: 9,
        name: "Nexus Phantom TKL Wireless Keyboard",
        shortName: "Nexus Phantom TKL Wireless...",
        category: "keyboards",
        price: 8499,
        originalPrice: 10999,
        discount: 23,
        rating: 4.7,
        reviews: 167,
        description: "Tenkeyless wireless keyboard with hot-swap sockets, south-facing RGB, and premium gasket-mount design.",
        features: [
            "TKL layout with dedicated function row",
            "Tri-mode wireless (2.4GHz/BT/USB-C)",
            "Hot-swap Kailh sockets",
            "Gasket-mounted plate with silicone dampening",
            "4000mAh battery (120+ hours)",
            "Per-key RGB with 16 effects"
        ],
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
        badge: null,
        inStock: true
    },
    {
        id: 10,
        name: "Nexus Velocity Pro Wireless Mouse",
        shortName: "Nexus Velocity Pro Wireless...",
        category: "mice",
        price: 3499,
        originalPrice: 4499,
        discount: 22,
        rating: 4.6,
        reviews: 89,
        description: "Ergonomic wireless mouse with PAW3395 sensor, 52g weight, and custom-molded PTFE feet.",
        features: [
            "PAW3395 sensor (26000 DPI)",
            "4000Hz polling with dongle",
            "52g ultralight honeycomb design",
            "Custom PTFE skates",
            "Kailh GM 8.0 switches",
            "80-hour battery life"
        ],
        image: "velocity-mouse.jpg",
        badge: null,
        inStock: true
    },
    {
        id: 11,
        name: "Sakura Bloom Cherry Keycap Set",
        shortName: "Sakura Bloom Cherry Keycap...",
        category: "keycaps",
        price: 3299,
        originalPrice: 3999,
        discount: 18,
        rating: 4.8,
        reviews: 62,
        description: "Pink-themed Cherry profile PBT keycaps with sakura flower sub-legends.",
        features: [
            "Cherry profile PBT keycaps",
            "Sakura flower dye-sub legends",
            "145-key complete set",
            "Soft pink and white colorway",
            "Compatible with all MX layouts",
            "Gift box packaging"
        ],
        image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&h=400&fit=crop",
        badge: "new",
        inStock: true
    },
    {
        id: 12,
        name: "Midnight Galaxy Stitched Desk Mat",
        shortName: "Midnight Galaxy Stitched Desk...",
        category: "deskmats",
        price: 1299,
        originalPrice: 1799,
        discount: 28,
        rating: 4.7,
        reviews: 198,
        description: "800×300mm dark galaxy print desk mat with stitched edges and 4mm thickness.",
        features: [
            "800×300mm generous size",
            "High-quality galaxy artwork print",
            "Stitched edges for durability",
            "4mm thickness for wrist comfort",
            "Natural rubber anti-slip base",
            "Smooth micro-cloth surface"
        ],
        image: "galaxy-deskmat.jpg",
        badge: "sale",
        inStock: true
    }
];

// ---- State ----
let cart = [];
let currentPage = 'landing';
let previousPage = 'landing';
let selectedPayment = null;
let qrTimerInterval = null;
let otpTimerInterval = null;
let currentOtpType = 'phonepe';
let shippingData = {};

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadCart();
    renderProducts();
    renderFeaturedProducts();
    updateCartCount();
    createHeroParticles();
    animateStatsOnScroll();
    
    // Check initial hash or default to landing
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(`page-${hash}`)) {
        navigateTo(hash, false);
    } else {
        navigateTo('landing', false);
    }
});

// ---- Navigation ----
function navigateTo(page, pushHistory = true) {
    if (!page || page === 'home') page = 'landing';
    
    // Remember previous page for Back button
    if (currentPage && currentPage !== page && currentPage !== 'product') {
        previousPage = currentPage;
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page with bulletproof fallback so blank white page NEVER occurs
    let targetPage = document.getElementById(`page-${page}`);
    if (!targetPage) {
        targetPage = document.getElementById('page-landing') || document.getElementById('page-shop');
        page = targetPage ? targetPage.id.replace('page-', '') : 'landing';
    }
    
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Toggle category nav visibility (show on shop, hide on landing/detail)
    const catNav = document.getElementById('categoryNav');
    if (catNav) {
        catNav.style.display = (page === 'shop') ? '' : 'none';
    }
    
    // History support for browser back/forward buttons
    if (pushHistory && window.history && window.history.pushState) {
        try {
            window.history.pushState({ page: page }, '', '#' + page);
        } catch (e) {}
    }
    
    // Page-specific rendering
    switch(page) {
        case 'shop':
            renderProducts();
            break;
        case 'cart':
            renderCart();
            break;
        case 'checkout':
            renderCheckoutSummary();
            break;
        case 'payment':
            renderPaymentSummary();
            break;
        case 'otp':
            renderOtpPage();
            break;
    }
}

// Back button handler: returns to previous page, or landing
function navigateBack() {
    if (previousPage && previousPage !== currentPage && previousPage !== 'product') {
        navigateTo(previousPage);
    } else {
        navigateTo('landing');
    }
}

// Browser Back/Forward buttons handler
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        navigateTo(event.state.page, false);
    } else {
        const hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(`page-${hash}`)) {
            navigateTo(hash, false);
        } else {
            navigateTo('landing', false);
        }
    }
});

// ---- Dark Mode ----
function initTheme() {
    const saved = localStorage.getItem('nexus_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    applyTheme(isDark);
}

function toggleDarkMode() {
    const isCurrentlyDark = document.body.classList.contains('dark-mode') || document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = !isCurrentlyDark;
    applyTheme(newTheme);
    localStorage.setItem('nexus_theme', newTheme ? 'dark' : 'light');
    showToast(newTheme ? '🌙 Dark Mode Enabled' : '☀️ Light Mode Enabled', 'info');
}

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// ---- Product Rendering ----
function renderProducts(filteredProducts = null) {
    const grid = document.getElementById('productsGrid');
    const prods = filteredProducts || products;
    
    grid.innerHTML = prods.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="product-card-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 600 400\\'><rect fill=\\'%23f0ede8\\' width=\\'600\\' height=\\'400\\'/><text x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\' fill=\\'%23999\\' font-size=\\'20\\'>${encodeURIComponent(product.shortName)}</text></svg>'">
                ${product.badge ? `<span class="product-badge badge-${product.badge}">${getBadgeText(product.badge)}</span>` : ''}
                ${!product.inStock ? '<span class="product-badge badge-oos">OUT OF STOCK</span>' : ''}
            </div>
            <div class="product-card-body">
                <div class="product-rating">
                    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span class="rating-score">${product.rating}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <h3 class="product-card-title">${product.shortName}</h3>
                <p class="product-card-desc">${product.description}</p>
                <div class="product-card-price">
                    <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
                    ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    ${product.discount > 0 ? `<span class="price-discount">${product.discount}% OFF</span>` : ''}
                </div>
                <div class="product-card-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button class="btn-wishlist" onclick="event.stopPropagation(); showToast('Added to wishlist!', 'success')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getBadgeText(badge) {
    const texts = { new: 'NEW', sale: 'SALE', popular: '🔥 POPULAR' };
    return texts[badge] || badge.toUpperCase();
}

// ---- Category Filter ----
function filterCategory(category, btn) {
    // Update active button
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    else document.querySelector(`[data-category="${category}"]`)?.classList.add('active');
    
    if (category === 'all') {
        renderProducts();
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
    
    // Stay on shop page, don't navigate to landing
    if (currentPage !== 'shop') {
        navigateTo('shop');
    }
}

// ---- Search ----
function handleSearch(query) {
    if (!query.trim()) {
        renderProducts();
        return;
    }
    const q = query.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
    renderProducts(filtered);
    // Navigate to shop page to show search results
    if (currentPage !== 'shop') {
        navigateTo('shop');
    }
}

// ---- Product Detail ----
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const detail = document.getElementById('productDetail');
    detail.innerHTML = `
        <div class="pd-image-section">
            <div class="pd-back-btn" onclick="navigateBack()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back
            </div>
            <div class="pd-main-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.style.background='#f0ede8'">
            </div>
        </div>
        <div class="pd-info-section">
            <div class="pd-category">${product.category.replace(/s$/, '')}</div>
            <h1 class="pd-title">${product.name}</h1>
            <div class="pd-rating">
                <div class="pd-stars">
                    ${Array(5).fill(0).map((_, i) => `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" ${i < Math.floor(product.rating) ? '' : 'opacity="0.3"'}/></svg>`).join('')}
                </div>
                <span class="rating-score">${product.rating}</span>
                <span class="rating-count">(${product.reviews} reviews)</span>
            </div>
            <div class="pd-price-row">
                <span class="pd-price">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.originalPrice ? `<span class="pd-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                ${product.discount > 0 ? `<span class="pd-discount-tag">${product.discount}% OFF</span>` : ''}
            </div>
            <p class="pd-desc">${product.description}</p>
            <ul class="pd-features">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="pd-quantity">
                <label>Quantity:</label>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(-1)">−</button>
                    <span class="qty-value" id="qtyValue">1</span>
                    <button class="qty-btn" onclick="changeQty(1)">+</button>
                </div>
            </div>
            <div class="pd-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id}, getQty())" ${!product.inStock ? 'disabled' : ''}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    Add to Cart
                </button>
                <button class="btn-buy-now" onclick="addToCart(${product.id}, getQty()); navigateTo('checkout')">
                    Buy Now
                </button>
            </div>
            <div class="pd-delivery-info">
                <div class="delivery-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                    <span>Free Delivery on orders above ₹2,000</span>
                </div>
                <div class="delivery-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span>1-Year Warranty | Easy Returns</span>
                </div>
                <div class="delivery-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span>Estimated delivery: 5-7 business days</span>
                </div>
            </div>
        </div>
    `;
    
    navigateTo('product');
}

function changeQty(delta) {
    const el = document.getElementById('qtyValue');
    let val = parseInt(el.textContent) + delta;
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    el.textContent = val;
}

function getQty() {
    const el = document.getElementById('qtyValue');
    return el ? parseInt(el.textContent) : 1;
}

// ---- Cart ----
function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, qty: qty });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.shortName} added to cart!`, 'success');
    
    // Animate cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = '', 300);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
    showToast('Item removed from cart', 'error');
}

function updateCartItemQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty < 1) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    renderCart();
    updateCartCount();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
}

function getCartOriginalTotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + ((product?.originalPrice || product?.price) * item.qty);
    }, 0);
}

function saveCart() {
    localStorage.setItem('nexus_cart', JSON.stringify(cart));
}

function loadCart() {
    try {
        const saved = localStorage.getItem('nexus_cart');
        if (saved) cart = JSON.parse(saved);
    } catch(e) {
        cart = [];
    }
}

function renderCart() {
    const section = document.getElementById('cartItemsSection');
    const summary = document.getElementById('cartSummarySection');
    
    if (cart.length === 0) {
        section.innerHTML = `
            <div class="cart-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any products yet.</p>
                <button class="btn-primary" onclick="navigateTo('shop')">Start Shopping</button>
            </div>
        `;
        summary.innerHTML = '';
        return;
    }
    
    section.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        return `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${product.name}</h4>
                    <p class="cart-item-variant">${product.category.charAt(0).toUpperCase() + product.category.slice(1)} • In Stock</p>
                    <div class="cart-item-bottom">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="updateCartItemQty(${product.id}, -1)">−</button>
                                <span class="qty-value">${item.qty}</span>
                                <button class="qty-btn" onclick="updateCartItemQty(${product.id}, 1)">+</button>
                            </div>
                        </div>
                        <span class="cart-item-price">₹${(product.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                    <span class="cart-item-remove" onclick="removeFromCart(${product.id})">✕ Remove</span>
                </div>
            </div>
        `;
    }).join('');
    
    const subtotal = getCartTotal();
    const originalTotal = getCartOriginalTotal();
    const savings = originalTotal - subtotal;
    const shipping = subtotal >= 2000 ? 0 : 149;
    const total = subtotal + shipping;
    
    summary.innerHTML = `
        <div class="cart-summary-card">
            <h3 class="summary-title">Order Summary</h3>
            <div class="summary-row label">
                <span>Subtotal (${cart.reduce((s,i) => s+i.qty, 0)} items)</span>
                <span>₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
            ${savings > 0 ? `
            <div class="summary-row label">
                <span>Discount</span>
                <span class="discount-amount">-₹${savings.toLocaleString('en-IN')}</span>
            </div>` : ''}
            <div class="summary-row label">
                <span>Shipping</span>
                <span>${shipping === 0 ? '<span class="free-tag">FREE</span>' : '₹' + shipping}</span>
            </div>
            <div class="summary-row label">
                <span>GST (included)</span>
                <span>₹${Math.round(subtotal * 0.18 / 1.18).toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
            <button class="btn-primary btn-full" onclick="navigateTo('checkout')" style="margin-top:16px;">
                Proceed to Checkout
            </button>
            ${savings > 0 ? `<p style="text-align:center;color:var(--success);font-size:12px;margin-top:10px;font-weight:600;">🎉 You're saving ₹${savings.toLocaleString('en-IN')} on this order!</p>` : ''}
        </div>
    `;
}

// ---- Checkout ----
function renderCheckoutSummary() {
    const summary = document.getElementById('checkoutSummary');
    const subtotal = getCartTotal();
    const shipping = subtotal >= 2000 ? 0 : 149;
    const total = subtotal + shipping;
    
    summary.innerHTML = `
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-items-preview">
            ${cart.map(item => {
                const p = products.find(pr => pr.id === item.id);
                return p ? `
                    <div class="summary-item">
                        <div class="summary-item-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"></div>
                        <span class="summary-item-name">${p.shortName} × ${item.qty}</span>
                        <span class="summary-item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                ` : '';
            }).join('')}
        </div>
        <div class="summary-row label"><span>Subtotal</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
        <div class="summary-row label"><span>Shipping</span><span>${shipping === 0 ? '<span class="free-tag">FREE</span>' : '₹' + shipping}</span></div>
        <div class="summary-row total"><span>Total</span><span>₹${total.toLocaleString('en-IN')}</span></div>
    `;
}

function submitShipping(event) {
    event.preventDefault();
    
    shippingData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value,
        country: document.getElementById('country').value
    };
    
    navigateTo('payment');
    showToast('Shipping details saved!', 'success');
}

// ---- Payment ----
function renderPaymentSummary() {
    const summary = document.getElementById('paymentSummary');
    const subtotal = getCartTotal();
    const shipping = subtotal >= 2000 ? 0 : 149;
    const total = subtotal + shipping;
    
    document.getElementById('payNowAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
    
    summary.innerHTML = `
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-items-preview">
            ${cart.map(item => {
                const p = products.find(pr => pr.id === item.id);
                return p ? `
                    <div class="summary-item">
                        <div class="summary-item-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"></div>
                        <span class="summary-item-name">${p.shortName} × ${item.qty}</span>
                        <span class="summary-item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                ` : '';
            }).join('')}
        </div>
        <div class="summary-row label"><span>Subtotal</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
        <div class="summary-row label"><span>Shipping</span><span>${shipping === 0 ? '<span class="free-tag">FREE</span>' : '₹' + shipping}</span></div>
        <div class="summary-row total"><span>Total</span><span>₹${total.toLocaleString('en-IN')}</span></div>
        ${shippingData.firstName ? `
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border-light);">
            <p style="font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:8px;">SHIP TO</p>
            <p style="font-size:13px;">${shippingData.firstName} ${shippingData.lastName}</p>
            <p style="font-size:12px;color:var(--text-light);">${shippingData.address}, ${shippingData.city}, ${shippingData.state} ${shippingData.pincode}</p>
        </div>
        ` : ''}
    `;
}

function selectPayment(method, el) {
    // Remove previous selection
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection
    el.classList.add('selected');
    selectedPayment = method;
    
    // Enable pay button
    document.getElementById('payNowBtn').disabled = false;
}

function proceedPayment() {
    if (!selectedPayment) return;
    
    const subtotal = getCartTotal();
    const shipping = subtotal >= 2000 ? 0 : 149;
    const total = subtotal + shipping;
    
    switch(selectedPayment) {
        case 'phonepe':
            document.getElementById('phonepeAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
            generateQRCode('qrCodeContainer', total);
            switchPhonePeTab('qr', document.querySelector('.phonepe-tab-btn'));
            if (shippingData.phone) {
                const pInput = document.getElementById('phonepeMobileInput');
                if (pInput) pInput.value = shippingData.phone.replace(/\D/g, '').slice(-10);
            }
            navigateTo('phonepe-qr');
            startQRTimer('qrTimer');
            break;
        case 'gpay':
            document.getElementById('gpayAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
            generateQRCode('gpayQrCode', total);
            navigateTo('gpay-qr');
            startQRTimer('gpayQrTimer');
            break;
        case 'card':
            document.getElementById('cardPayAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
            navigateTo('card-payment');
            break;
        case 'upi-direct':
            document.getElementById('phonepeAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
            generateQRCode('qrCodeContainer', total);
            navigateTo('phonepe-qr');
            startQRTimer('qrTimer');
            break;
        case 'cod':
            showProcessingOverlay('Cash on Delivery');
            break;
        default:
            showProcessingOverlay(selectedPayment);
            break;
    }
}

// ---- QR Code Generator ----
function generateQRCode(containerId, amount) {
    const container = document.getElementById(containerId);
    // Generate a realistic-looking QR code using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    canvas.className = 'qr-canvas';
    const ctx = canvas.getContext('2d');
    
    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 180, 180);
    
    // Generate QR-like pattern
    const moduleSize = 6;
    const modules = 25;
    const offset = (180 - modules * moduleSize) / 2;
    
    // Seed from amount for consistent QR
    let seed = amount;
    function pseudoRandom() {
        seed = (seed * 16807 + 5) % 2147483647;
        return seed / 2147483647;
    }
    
    ctx.fillStyle = '#000000';
    
    // Position detection patterns (3 corners)
    function drawFinderPattern(x, y) {
        // Outer border
        ctx.fillRect(offset + x * moduleSize, offset + y * moduleSize, 7 * moduleSize, 7 * moduleSize);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(offset + (x+1) * moduleSize, offset + (y+1) * moduleSize, 5 * moduleSize, 5 * moduleSize);
        ctx.fillStyle = '#000000';
        ctx.fillRect(offset + (x+2) * moduleSize, offset + (y+2) * moduleSize, 3 * moduleSize, 3 * moduleSize);
    }
    
    drawFinderPattern(0, 0);
    drawFinderPattern(18, 0);
    drawFinderPattern(0, 18);
    
    // Timing patterns
    for (let i = 8; i < 17; i++) {
        if (i % 2 === 0) {
            ctx.fillRect(offset + i * moduleSize, offset + 6 * moduleSize, moduleSize, moduleSize);
            ctx.fillRect(offset + 6 * moduleSize, offset + i * moduleSize, moduleSize, moduleSize);
        }
    }
    
    // Data modules (random-ish)
    for (let row = 0; row < modules; row++) {
        for (let col = 0; col < modules; col++) {
            // Skip finder patterns
            if ((row < 8 && col < 8) || (row < 8 && col >= 17) || (row >= 17 && col < 8)) continue;
            // Skip timing
            if (row === 6 || col === 6) continue;
            
            if (pseudoRandom() > 0.5) {
                ctx.fillRect(offset + col * moduleSize, offset + row * moduleSize, moduleSize, moduleSize);
            }
        }
    }
    
    // Add small PhonePe/UPI logo in center
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(75, 75, 30, 30);
    ctx.fillStyle = '#5F259F';
    ctx.fillRect(78, 78, 24, 24);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('UPI', 90, 90);
    
    container.innerHTML = '';
    container.appendChild(canvas);
}

// ---- QR Timer ----
function startQRTimer(timerId) {
    if (qrTimerInterval) clearInterval(qrTimerInterval);
    
    let seconds = 299; // 4:59
    const timerEl = document.getElementById(timerId);
    
    qrTimerInterval = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(qrTimerInterval);
            timerEl.textContent = '00:00';
            timerEl.style.color = 'var(--error)';
            return;
        }
        seconds--;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}

// ---- Payment Simulation ----
// ---- OTP Page State & Lifecycle ----
let activeOtpMethod = 'PhonePe UPI';
let activeOtpMeta = '';

function goToOtpPage(method = 'PhonePe UPI', meta = '') {
    activeOtpMethod = method;
    activeOtpMeta = meta;
    if (qrTimerInterval) clearInterval(qrTimerInterval);
    navigateTo('otp');
}

function renderOtpPage() {
    const subtotal = getCartTotal();
    const shipping = subtotal >= 2000 ? 0 : 149;
    const total = subtotal + shipping;
    
    const amountEl = document.getElementById('otpPageAmount');
    if (amountEl) amountEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    
    const phoneDisplay = shippingData.phone || activeOtpMeta || '+91 98765 43210';
    const cleanPhone = phoneDisplay.replace(/\D/g, '').slice(-10);
    const maskedPhone = cleanPhone.length === 10 ? `+91 ${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}` : phoneDisplay;
    const mobileEl = document.getElementById('otpPageMobile');
    if (mobileEl) mobileEl.textContent = maskedPhone;
    
    const titleEl = document.getElementById('otpPageTitle');
    const subtitleEl = document.getElementById('otpPageSubtitle');
    const logoEl = document.getElementById('otpPageLogo');
    const btnEl = document.getElementById('btnPageVerifyOtp');
    
    if (activeOtpMethod.toLowerCase().includes('card')) {
        if (titleEl) titleEl.textContent = 'Bank 3D-Secure Authentication';
        if (subtitleEl) subtitleEl.textContent = `Authorizing transaction with Card ending in ••${activeOtpMeta || '8832'}`;
        if (logoEl) logoEl.innerHTML = `<svg viewBox="0 0 48 48" width="48" height="48"><rect width="48" height="48" rx="12" fill="#2196F3"/><line x1="8" y1="18" x2="40" y2="18" stroke="white" stroke-width="4"/><rect x="8" y="24" width="8" height="6" fill="white" rx="1"/></svg>`;
        if (btnEl) btnEl.style.background = '#2196F3';
    } else if (activeOtpMethod.toLowerCase().includes('google')) {
        if (titleEl) titleEl.textContent = 'Google Pay OTP Verification';
        if (subtitleEl) subtitleEl.textContent = 'Enter the 6-digit OTP sent to approve Google Pay UPI payment';
        if (logoEl) logoEl.innerHTML = `<svg viewBox="0 0 48 48" width="48" height="48"><rect width="48" height="48" rx="12" fill="#fff" stroke="#4285F4" stroke-width="2"/><text x="24" y="30" text-anchor="middle" fill="#4285F4" font-size="12" font-weight="bold">GPay</text></svg>`;
        if (btnEl) btnEl.style.background = '#4285F4';
    } else {
        if (titleEl) titleEl.textContent = 'PhonePe OTP Verification';
        if (subtitleEl) subtitleEl.textContent = `Enter the 6-digit OTP to authorize ${activeOtpMethod}`;
        if (logoEl) logoEl.innerHTML = `<svg viewBox="0 0 48 48" width="48" height="48"><rect width="48" height="48" rx="12" fill="#5F259F"/><text x="24" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Pe</text></svg>`;
        if (btnEl) btnEl.style.background = '#5F259F';
    }
    
    // Clear page inputs and focus
    document.querySelectorAll('.page-otp-digit').forEach(inp => inp.value = '');
    setTimeout(() => {
        const first = document.querySelector('.page-otp-digit[data-idx="0"]');
        if (first) first.focus();
    }, 200);
    
    startPageOtpCountdown();
}

function handlePageOtpInput(input, idx) {
    input.value = input.value.replace(/\D/g, '');
    if (input.value && idx < 5) {
        const next = document.querySelector(`.page-otp-digit[data-idx="${idx + 1}"]`);
        if (next) next.focus();
    }
}

function handlePageOtpKeydown(input, e, idx) {
    if (e.key === 'Backspace' && !input.value && idx > 0) {
        const prev = document.querySelector(`.page-otp-digit[data-idx="${idx - 1}"]`);
        if (prev) {
            prev.focus();
            prev.value = '';
        }
    } else if (e.key === 'Enter') {
        submitPageOtp();
    }
}

function fillPageDemoOtp() {
    const digits = ['4', '8', '2', '9', '1', '0'];
    digits.forEach((d, idx) => {
        const input = document.querySelector(`.page-otp-digit[data-idx="${idx}"]`);
        if (input) input.value = d;
    });
    showToast('Demo OTP auto-filled (482910)', 'info');
}

function startPageOtpCountdown() {
    if (otpTimerInterval) clearInterval(otpTimerInterval);
    let seconds = 30;
    const btn = document.getElementById('pageResendOtpBtn');
    const timerSpan = document.getElementById('pageOtpCountdown');
    if (!btn || !timerSpan) return;
    btn.disabled = true;
    
    otpTimerInterval = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(otpTimerInterval);
            btn.disabled = false;
            btn.textContent = 'Resend OTP';
        } else {
            timerSpan.textContent = `${seconds}s`;
        }
    }, 1000);
}

function resendPageOtp() {
    showToast('A new 6-digit OTP code has been sent!', 'success');
    startPageOtpCountdown();
}

function submitPageOtp() {
    const digits = Array.from(document.querySelectorAll('.page-otp-digit')).map(i => i.value).join('');
    if (digits.length < 6) {
        showToast('Please enter all 6 digits of the OTP code', 'error');
        return;
    }
    if (otpTimerInterval) clearInterval(otpTimerInterval);
    showProcessingOverlay(activeOtpMethod);
}

// ---- Legacy Simulations redirected to OTP Page ----
function simulatePhonePePayment() {
    goToOtpPage('PhonePe App');
}

function simulateGPayPayment() {
    goToOtpPage('Google Pay App');
}

function simulatePaytmPayment() {
    goToOtpPage('Paytm App');
}

// ---- PhonePe Tabs & Helpers ----
function switchPhonePeTab(tab, btn) {
    document.querySelectorAll('.phonepe-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.phonepe-tab-content').forEach(c => c.classList.remove('active'));
    
    if (btn) btn.classList.add('active');
    const targetContent = document.getElementById(`tabContent-${tab}`);
    if (targetContent) targetContent.classList.add('active');
}

function appendUpiHandle(handle) {
    const input = document.getElementById('upiIdInput');
    let currentVal = input.value.split('@')[0].trim();
    if (!currentVal) currentVal = 'sakshi';
    input.value = currentVal + handle;
    input.focus();
}

function verifyAndPayUPI() {
    const upiId = document.getElementById('upiIdInput').value;
    if (!upiId || !upiId.includes('@')) {
        showToast('Please enter a valid UPI ID (e.g. name@ybl)', 'error');
        return;
    }
    showToast(`Payment request verified for ${upiId}`, 'success');
    setTimeout(() => {
        goToOtpPage(`UPI ID (${upiId})`);
    }, 500);
}

function requestPhonePeOTP() {
    const phoneInput = document.getElementById('phonepeMobileInput');
    const phone = phoneInput ? phoneInput.value.trim() : '';
    if (!phone || phone.length < 10) {
        showToast('Please enter a valid 10-digit mobile number', 'error');
        return;
    }
    goToOtpPage('PhonePe Mobile OTP', phone);
}

function processCardPayment(event) {
    event.preventDefault();
    const cardNum = document.getElementById('cardNumber').value.trim();
    const last4 = cardNum.slice(-4) || '8832';
    goToOtpPage('Bank Card (3D Secure)', last4);
}

function resendOtp() {
    showToast('A new OTP has been dispatched to your mobile number', 'success');
    startOtpCountdown();
}

function verifyOtpAndPay() {
    const digits = Array.from(document.querySelectorAll('.otp-digit')).map(i => i.value).join('');
    if (digits.length < 6) {
        showToast('Please enter all 6 digits of the OTP code', 'error');
        return;
    }
    closeOtpModal();
    const method = currentOtpType === 'phonepe' ? 'PhonePe OTP Verified' : 'Bank Card (3D Secure)';
    showProcessingOverlay(method);
}

function showProcessingOverlay(method) {
    if (qrTimerInterval) clearInterval(qrTimerInterval);
    
    const overlay = document.getElementById('paymentProcessingOverlay');
    overlay.classList.add('active');
    
    // Reset steps
    const steps = document.querySelectorAll('#processingSteps .proc-step');
    steps.forEach(s => { s.classList.remove('active', 'done'); });
    steps[0].classList.add('active');
    
    // Animate through steps
    const stepDelays = [1500, 2500, 3500, 4500];
    
    stepDelays.forEach((delay, index) => {
        setTimeout(() => {
            if (index > 0) {
                steps[index - 1].classList.remove('active');
                steps[index - 1].classList.add('done');
            }
            if (index < steps.length) {
                steps[index].classList.add('active');
            }
        }, delay);
    });
    
    // Complete
    setTimeout(() => {
        steps.forEach(s => { s.classList.remove('active'); s.classList.add('done'); });
        
        setTimeout(() => {
            overlay.classList.remove('active');
            showOrderConfirmation(method);
        }, 800);
    }, 5000);
}

// ---- Order Confirmation ----
function showOrderConfirmation(paymentMethod) {
    const subtotal = getCartTotal();
    const shipping = subtotal >= 2000 ? 0 : 149;
    const total = subtotal + shipping;
    
    // Generate order ID
    const orderId = `NXC-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const txnId = `TXN-${Date.now().toString().slice(-8)}`;
    
    document.getElementById('orderIdDisplay').textContent = orderId;
    document.getElementById('confirmPaymentMethod').textContent = paymentMethod;
    document.getElementById('confirmTransactionId').textContent = txnId;
    document.getElementById('confirmAmountPaid').textContent = `₹${total.toLocaleString('en-IN')}`;
    
    // Delivery date
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('estimatedDelivery').textContent = `Expected by ${deliveryDate.toLocaleDateString('en-IN', options)}`;
    
    // Order items
    const details = document.getElementById('confirmDetails');
    details.innerHTML = `
        <div class="summary-items-preview" style="text-align:left; margin: 16px 0;">
            ${cart.map(item => {
                const p = products.find(pr => pr.id === item.id);
                return p ? `
                    <div class="summary-item">
                        <div class="summary-item-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"></div>
                        <span class="summary-item-name">${p.shortName} × ${item.qty}</span>
                        <span class="summary-item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                ` : '';
            }).join('')}
        </div>
    `;
    
    navigateTo('order-confirmation');
    showToast('Payment successful! 🎉', 'success');
}

// ---- Card Formatting ----
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    input.value = value;
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    input.value = value;
}

// ---- Sign In ----
function handleSignIn(event) {
    event.preventDefault();
    showToast('Sign-in successful! Welcome back!', 'success');
    navigateTo('landing');
}

// ---- Toast ----
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        ${type === 'success' ? '<svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' : ''}
        ${type === 'error' ? '<svg viewBox="0 0 24 24" fill="none" stroke="#E53935" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>' : ''}
        ${message}
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ============================================
// LANDING PAGE FUNCTIONS
// ============================================

// ---- Featured Products (top 4 by rating/popularity) ----
function renderFeaturedProducts() {
    const grid = document.getElementById('featuredProductsGrid');
    if (!grid) return;
    
    // Pick top 4 products by reviews count (most popular)
    const featured = [...products]
        .sort((a, b) => b.reviews - a.reviews)
        .slice(0, 4);
    
    grid.innerHTML = featured.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="product-card-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 600 400\\'><rect fill=\\'%23f0ede8\\' width=\\'600\\' height=\\'400\\'/><text x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\' fill=\\'%23999\\' font-size=\\'20\\'>${encodeURIComponent(product.shortName)}</text></svg>'">
                ${product.badge ? `<span class="product-badge badge-${product.badge}">${getBadgeText(product.badge)}</span>` : ''}
            </div>
            <div class="product-card-body">
                <div class="product-rating">
                    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span class="rating-score">${product.rating}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <h3 class="product-card-title">${product.shortName}</h3>
                <p class="product-card-desc">${product.description}</p>
                <div class="product-card-price">
                    <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
                    ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    ${product.discount > 0 ? `<span class="price-discount">${product.discount}% OFF</span>` : ''}
                </div>
                <div class="product-card-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button class="btn-wishlist" onclick="event.stopPropagation(); showToast('Added to wishlist!', 'success')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ---- Hero Particles ----
function createHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = (60 + Math.random() * 40) + '%';
        particle.style.animationDelay = (Math.random() * 6) + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(particle);
    }
}

// ---- Animated Stats Counter ----
function animateStatsOnScroll() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (!statNumbers.length) return;
    
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(el => {
                    const target = parseFloat(el.dataset.target);
                    const isDecimal = target % 1 !== 0;
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out quad
                        const eased = 1 - (1 - progress) * (1 - progress);
                        const current = eased * target;
                        
                        if (isDecimal) {
                            el.textContent = current.toFixed(1);
                        } else {
                            el.textContent = Math.floor(current).toLocaleString('en-IN');
                        }
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }
                    
                    requestAnimationFrame(updateCounter);
                });
            }
        });
    }, { threshold: 0.3 });
    
    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) observer.observe(statsBar);
}

// ---- Newsletter Subscribe ----
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    if (!emailInput) return;
    const email = emailInput.value.trim();
    
    if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    emailInput.value = '';
    showToast('🎉 Subscribed successfully! Welcome to the Nexus community.', 'success');
}

// ---- Hide category nav on landing page initially ----
(function() {
    const catNav = document.getElementById('categoryNav');
    if (catNav && document.getElementById('page-landing')?.classList.contains('active')) {
        catNav.style.display = 'none';
    }
})();
