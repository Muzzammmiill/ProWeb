const PRODUCTS = [
  {
    id: 'empire-hi-black',
    name: 'Empire Hi Boot',
    category: 'boots',
    gender: 'mens',
    price: 89.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
    ],
    colors: [{name:'Black',hex:'#1a1a1a'},{name:'Brown',hex:'#4a3728'},{name:'Tan',hex:'#8b7355'}],
    sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13],
    badges: ['Best Seller'],
    rating: 4.9,
    reviews: 1240,
    description: 'The iconic Empire Hi Boot — a street legend since 1993. Full-grain leather upper, cushioned collar, and a durable lug sole built to take on any surface.',
    specs: [['Upper','Full-Grain Leather'],['Outsole','Vulcanized Rubber'],['Lining','Synthetic'],['Closure','Lace-Up'],['Width','Medium (D), Wide (EE)'],['Origin','Imported']],
    features: []
  },
  {
    id: 'vantage-sneaker',
    name: 'Vantage Lo Sneaker',
    category: 'sneakers',
    gender: 'womens',
    price: 64.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'],
    colors: [{name:'White',hex:'#f5f0e8'},{name:'Rust',hex:'#c04a1a'},{name:'Olive',hex:'#2d5a3d'}],
    sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11],
    badges: ['Sale'],
    rating: 4.7,
    reviews: 890,
    description: 'The Vantage Lo combines clean street style with all-day comfort. A flexible canvas upper keeps things light while the cushioned footbed keeps you fresh from morning to night.',
    specs: [['Upper','Canvas'],['Outsole','Vulcanized Rubber'],['Insole','Memory Foam'],['Closure','Lace-Up'],['Width','Medium'],['Origin','Imported']],
    features: []
  },
  {
    id: 'grapper-work',
    name: 'Grapper Work Boot',
    category: 'work',
    gender: 'mens',
    price: 119.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80','https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'],
    colors: [{name:'Black',hex:'#1a1a1a'},{name:'Dark Brown',hex:'#2a1810'}],
    sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14],
    badges: ['Work'],
    rating: 4.8,
    reviews: 560,
    description: 'Built for the hardest job sites. The Grapper features a steel safety toe, slip-resistant outsole, and waterproof full-grain leather upper.',
    specs: [['Upper','Waterproof Full-Grain Leather'],['Safety Toe','ASTM F2413 Steel'],['Outsole','SR-rated Rubber'],['Electrical Hazard','ASTM F2413 EH'],['Width','Medium (D), Wide (EE)'],['Origin','Imported']],
    features: ['slip','safety','waterproof','wide']
  },
  {
    id: 'clipper-canvas',
    name: 'Clipper Low Canvas',
    category: 'canvas',
    gender: 'mens',
    price: 44.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80'],
    colors: [{name:'White',hex:'#f5f0e8'},{name:'Black',hex:'#1a1a1a'},{name:'Navy',hex:'#2b4f8a'},{name:'Red',hex:'#c04a1a'}],
    sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13],
    badges: ['Sale'],
    rating: 4.6,
    reviews: 2100,
    description: 'The Clipper Low — a classic silhouette done right. Lightweight canvas upper, flexible vulcanized sole, and an ortholite-style footbed for all-day comfort.',
    specs: [['Upper','Canvas'],['Outsole','Vulcanized Rubber'],['Insole','OrthoLite® Style'],['Closure','Lace-Up'],['Width','Medium'],['Origin','Imported']],
    features: []
  },
  {
    id: 'manor-mid',
    name: 'Manor Mid Boot',
    category: 'boots',
    gender: 'mens',
    price: 74.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80','https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80','https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'],
    colors: [{name:'Black',hex:'#1a1a1a'},{name:'Grey',hex:'#888888'}],
    sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13],
    badges: ['New'],
    rating: 4.5,
    reviews: 320,
    description: 'The Manor Mid offers mid-height ankle support in a clean, versatile silhouette. Synthetic suede upper with contrast stitching and padded collar.',
    specs: [['Upper','Synthetic Suede'],['Outsole','Rubber'],['Lining','Textile'],['Closure','Lace-Up'],['Width','Medium (D)'],['Origin','Imported']],
    features: []
  },
  {
    id: 'destiny-boot',
    name: 'Destiny High Boot',
    category: 'boots',
    gender: 'womens',
    price: 84.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80','https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80','https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80'],
    colors: [{name:'Black',hex:'#1a1a1a'},{name:'Brown',hex:'#4a3728'},{name:'White',hex:'#f5f0e8'}],
    sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11],
    badges: ['Sale','Best Seller'],
    rating: 4.8,
    reviews: 1560,
    description: 'The Destiny High Boot — feminine meets function. Full-grain leather upper, cushioned collar, and a stacked heel that adds just the right lift.',
    specs: [['Upper','Full-Grain Leather'],['Heel Height','1.5 inch'],['Outsole','Rubber'],['Lining','Synthetic'],['Width','Medium'],['Origin','Imported']],
    features: []
  },
  {
    id: 'charger-sneaker',
    name: 'Charger Sneaker',
    category: 'sneakers',
    gender: 'womens',
    price: 54.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'],
    colors: [{name:'White',hex:'#f5f0e8'},{name:'Pink',hex:'#c47a9a'},{name:'Black',hex:'#1a1a1a'}],
    sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11],
    badges: ['New'],
    rating: 4.6,
    reviews: 480,
    description: 'The Charger brings athletic energy to street style. Mesh upper keeps things breathable, padded collar cushions every step.',
    specs: [['Upper','Mesh + Synthetic'],['Outsole','Rubber'],['Insole','Memory Foam'],['Closure','Lace-Up'],['Width','Medium'],['Origin','Imported']],
    features: []
  },
  {
    id: 'stag-work-womens',
    name: 'Stag Work Boot (W)',
    category: 'work',
    gender: 'womens',
    price: 109.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80','https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&q=80','https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'],
    colors: [{name:'Black',hex:'#1a1a1a'},{name:'Brown',hex:'#4a3728'}],
    sizes: [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11],
    badges: ['Work'],
    rating: 4.7,
    reviews: 340,
    description: 'The Stag Work Boot for women — all the protection without the bulk. Slip-resistant outsole, composite safety toe, and a narrower last for a better fit.',
    specs: [['Upper','Full-Grain Leather'],['Safety Toe','ASTM Composite'],['Outsole','SR-rated Rubber'],['Width','Medium'],['Origin','Imported']],
    features: ['slip','safety','wide']
  },
];

/* ─────────────────────────────────────
   APP STATE
───────────────────────────────────── */
let currentPage = 'home';
let currentCatalog = 'mens';
let currentCategory = null;
let currentProduct = null;
let cartItems = [];
let selectedSize = null;
let selectedColor = null;
let qty = 1;

/* ─────────────────────────────────────
   NAVIGATION / ROUTER
   Replace with: window.history.pushState + fetch calls
───────────────────────────────────── */
function navigate(page, category = null) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  window.scrollTo(0,0);

  if (['mens','womens','work','sale'].includes(page)) {
    currentCatalog = page;
    currentCategory = category;
    document.getElementById('page-catalog').classList.add('active');
    const navEl = document.getElementById('nav-' + (page === 'sale' ? 'sale' : page));
    if (navEl) navEl.classList.add('active');
    loadCatalog(page, category);
    currentPage = 'catalog';
  } else if (page === 'cart') {
    document.getElementById('page-cart').classList.add('active');
    renderCart();
    currentPage = 'cart';
  } else if (page === 'product') {
    document.getElementById('page-product').classList.add('active');
    currentPage = 'product';
  } else {
    document.getElementById('page-home').classList.add('active');
    document.getElementById('nav-mens') && null;
    currentPage = 'home';
    initReveal();
    renderHomeProducts();
  }
}


const CATALOG_CONFIG = {
  mens:   { label: 'Men\'s Footwear', title: 'Men\'s', tabs: ['All','Boots','Sneakers','Canvas','Work','Sale'] },
  womens: { label: 'Women\'s Footwear', title: 'Women\'s', tabs: ['All','Boots','Sneakers','Canvas','Work','Sale'] },
  work:   { label: 'Work Footwear', title: 'Work', tabs: ['All','Men\'s Work','Women\'s Work','Slip Resistant','Safety Toe'] },
  sale:   { label: 'Sale Items', title: 'Sale', tabs: ['All','Men\'s Sale','Women\'s Sale','Up to 25% Off','Up to 50% Off'] },
};

function loadCatalog(gender, category) {
  const config = CATALOG_CONFIG[gender] || CATALOG_CONFIG.mens;
  document.getElementById('catalog-label').textContent = config.label;
  document.getElementById('catalog-title').textContent = config.title;

  // Build tabs
  const tabsEl = document.getElementById('catalog-tabs');
  tabsEl.innerHTML = config.tabs.map((t, i) => `<button class="catalog-tab ${i===0?'active':''}" onclick="switchTab(this,'${t.toLowerCase()}')">${t}</button>`).join('');

  applyFilters(gender, category);
}

function switchTab(btn, tabVal) {
  document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const gender = currentCatalog;
  const catMap = { 'all': null, "boots": 'boots', "sneakers": 'sneakers', "canvas": 'canvas', "work": 'work', "sale": 'sale', "men's work": 'work', "women's work": 'work', "slip resistant": 'slip', "safety toe": 'safety', "men's sale": 'sale', "women's sale": 'sale', "up to 25% off": 'sale', "up to 50% off": 'sale' };
  currentCategory = catMap[tabVal] || null;
  applyFilters();
}


function applyFilters(genderOverride, categoryOverride) {
  const gender = genderOverride || currentCatalog;
  const category = categoryOverride !== undefined ? categoryOverride : currentCategory;
  const sort = document.getElementById('sort-select')?.value || 'featured';
  const priceMin = parseFloat(document.getElementById('price-min')?.value) || 0;
  const priceMax = parseFloat(document.getElementById('price-max')?.value) || 9999;

  const checkedCats = [...document.querySelectorAll('#filter-category input:checked')].map(e => e.value);
  const checkedFeatures = [...document.querySelectorAll('#filter-size').length ? [] : []];

  let filtered = [...PRODUCTS];

  // Filter by gender/catalog
  if (gender === 'sale') {
    filtered = filtered.filter(p => p.originalPrice || p.badges.includes('Sale'));
  } else {
    filtered = filtered.filter(p => p.gender === gender);
  }

  // Filter by category
  if (category) filtered = filtered.filter(p => p.category === category);
  if (checkedCats.length) filtered = filtered.filter(p => checkedCats.includes(p.category));

  // Filter by price
  filtered = filtered.filter(p => p.price >= priceMin && p.price <= priceMax);

  // Sort
  if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'bestseller') filtered.sort((a,b) => b.reviews - a.reviews);
  else if (sort === 'newest') filtered.sort((a,b) => b.id.localeCompare(a.id));

  document.getElementById('catalog-count').textContent = `${filtered.length} Products`;
  renderCatalogGrid(filtered);
}

function clearFilter(type) {
  if (type === 'category') document.querySelectorAll('#filter-category input').forEach(c => c.checked = false);
  if (type === 'size') document.querySelectorAll('#filter-size input').forEach(c => c.checked = false);
  applyFilters();
}
function clearAllFilters() {
  document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(c => c.checked = false);
  document.getElementById('price-min').value = 0;
  document.getElementById('price-max').value = 300;
  document.querySelectorAll('.color-filter-btn').forEach(b => b.classList.remove('selected'));
  applyFilters();
}
function toggleColorFilter(btn, color) {
  btn.classList.toggle('selected');
  applyFilters();
}
function setView(mode) {
  const grid = document.getElementById('catalog-grid');
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  if (mode === 'list') {
    grid.classList.add('list-view');
    document.getElementById('view-list').classList.add('active');
  } else {
    grid.classList.remove('list-view');
    document.getElementById('view-grid').classList.add('active');
  }
}


function renderProductCard(p) {
  const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const badgesHTML = p.badges.map(b => {
    const cls = b === 'Sale' ? 'badge-red' : b === 'Work' ? 'badge-amber' : 'badge-teal';
    return `<span class="badge ${cls}">${b}</span>`;
  }).join('');
  const colorsHTML = p.colors.map(c =>
    `<div class="color-swatch" style="background:${c.hex}" title="${c.name}"></div>`
  ).join('');
  const priceHTML = p.originalPrice
    ? `<span class="price-now">$${p.price.toFixed(2)}</span>
       <span class="price-was">$${p.originalPrice.toFixed(2)}</span>
       <span class="price-save">-${discount}%</span>`
    : `<span class="price-now">$${p.price.toFixed(2)}</span>`;

  return `
    <div class="product-card" data-product-id="${p.id}" onclick="openProduct('${p.id}')">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-badges">${badgesHTML}</div>
        <button class="product-quick-add" onclick="event.stopPropagation();quickAdd('${p.id}')">Quick Add +</button>
      </div>
      <div class="product-body">
        <div class="product-category">${p.gender === 'womens' ? "Women's" : "Men's"} ${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-pricing">${priceHTML}</div>
        <div class="product-colors">${colorsHTML}</div>
      </div>
    </div>`;
}

function renderCatalogGrid(products) {
  document.getElementById('catalog-grid').innerHTML = products.length
    ? products.map(renderProductCard).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:80px;color:var(--mid)">
        <div style="font-size:40px;margin-bottom:16px;">📦</div>
        <div style="font-size:18px;color:var(--white);margin-bottom:8px;">No products found</div>
        <div style="font-size:13px;">Try adjusting your filters</div>
       </div>`;
}

function renderHomeProducts() {
  const featured = PRODUCTS.slice(0, 4);
  const el = document.getElementById('home-products-grid');
  if (el) el.innerHTML = featured.map(renderProductCard).join('');
}


function openProduct(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  if (!currentProduct) return;

  selectedSize = null;
  selectedColor = currentProduct.colors[0] || null;
  qty = 1;

  navigate('product');

  // Gallery
  document.getElementById('gallery-main-img').src = currentProduct.images[0];
  const thumbsEl = document.getElementById('gallery-thumbs');
  thumbsEl.innerHTML = currentProduct.images.map((img, i) =>
    `<div class="gallery-thumb ${i===0?'active':''}" onclick="switchThumb(this,'${img}')">
      <img src="${img}" alt="" loading="lazy">
    </div>`
  ).join('');

  // Info
  document.getElementById('detail-breadcrumb-cat').textContent = currentProduct.gender === 'womens' ? "Women's" : "Men's";
  document.getElementById('detail-breadcrumb-name').textContent = currentProduct.name;
  document.getElementById('detail-category').textContent = `${currentProduct.gender === 'womens' ? "Women's" : "Men's"} ${currentProduct.category}`;
  document.getElementById('detail-name').textContent = currentProduct.name;
  document.getElementById('detail-stars').textContent = '★'.repeat(Math.round(currentProduct.rating)) + '☆'.repeat(5 - Math.round(currentProduct.rating));
  document.getElementById('detail-reviews').textContent = `${currentProduct.rating} · ${currentProduct.reviews.toLocaleString()} reviews`;
  document.getElementById('detail-price-now').textContent = `$${currentProduct.price.toFixed(2)}`;
  document.getElementById('detail-price-was').textContent = currentProduct.originalPrice ? `$${currentProduct.originalPrice.toFixed(2)}` : '';
  document.getElementById('detail-price-save').textContent = currentProduct.originalPrice
    ? `SAVE ${Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100)}%` : '';
  document.getElementById('detail-description').textContent = currentProduct.description;

  // Colors
  const colorsEl = document.getElementById('color-options');
  colorsEl.innerHTML = currentProduct.colors.map((c, i) =>
    `<div class="color-option ${i===0?'active':''}" style="background:${c.hex}" title="${c.name}"
          onclick="selectColor(this,'${c.name}')"></div>`
  ).join('');
  document.getElementById('selected-color-name').textContent = currentProduct.colors[0]?.name || '';

  // Sizes
  const sizesEl = document.getElementById('size-options');
  sizesEl.innerHTML = currentProduct.sizes.map(s =>
    `<div class="size-option" onclick="selectSize(this,${s})">${s}</div>`
  ).join('');
  document.getElementById('selected-size').textContent = '—';

  // Qty
  document.getElementById('qty-display').textContent = '1';

  // Specs
  document.getElementById('spec-table').innerHTML = currentProduct.specs.map(([k,v]) =>
    `<tr><td>${k}</td><td>${v}</td></tr>`
  ).join('');

  // Reset tabs
  document.querySelectorAll('.detail-tab-btn').forEach((b,i) => b.classList.toggle('active', i===0));
  document.querySelectorAll('.tab-panel').forEach((p,i) => p.classList.toggle('active', i===0));
}

function switchThumb(el, src) {
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('gallery-main-img').src = src;
}
function selectColor(el, name) {
  document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedColor = name;
  document.getElementById('selected-color-name').textContent = name;
}
function selectSize(el, size) {
  document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  selectedSize = size;
  document.getElementById('selected-size').textContent = size;
}
function changeQty(delta) {
  qty = Math.max(1, Math.min(10, qty + delta));
  document.getElementById('qty-display').textContent = qty;
}
function showTab(name, btn) {
  document.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

/* ─────────────────────────────────────
   CART
   POST /api/cart/add  { productId, size, color, qty }
   GET  /api/cart
───────────────────────────────────── */
function addToCart() {
  if (!selectedSize) { showToast('Please select a size', 'error'); return; }
  if (!currentProduct) return;

  const existing = cartItems.find(i => i.id === currentProduct.id && i.size === selectedSize && i.color === selectedColor);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({
      id: currentProduct.id,
      name: currentProduct.name,
      category: currentProduct.category,
      price: currentProduct.price,
      image: currentProduct.images[0],
      color: selectedColor,
      size: selectedSize,
      qty: qty
    });
  }
  updateCartCount();
  showToast(`✓ Added ${currentProduct.name} to cart`);
}

function quickAdd(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  cartItems.push({ id: p.id, name: p.name, category: p.category, price: p.price, image: p.image, color: p.colors[0]?.name || '', size: p.sizes[4] || 9, qty: 1 });
  updateCartCount();
  showToast(`✓ Added ${p.name} (size ${p.sizes[4]}) to cart`);
}

function addToWishlist() {
  showToast('♡ Saved to Wishlist');
}

function removeFromCart(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const total = cartItems.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const countEl = document.getElementById('cart-page-count');
  const total = cartItems.reduce((s, i) => s + i.qty, 0);
  countEl.textContent = `${total} ${total === 1 ? 'item' : 'items'}`;

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <button class="btn btn-primary" onclick="navigate('mens')">Start Shopping →</button>
      </div>`;
    return;
  }

  container.innerHTML = cartItems.map(item => `
    <div class="cart-item" data-cart-id="${item.id}">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variants">Size: ${item.size} · Color: ${item.color}</div>
        <div class="cart-item-actions">
          <div class="qty-selector" style="transform:scale(0.85);transform-origin:left;">
            <button class="qty-btn" onclick="updateCartQty('${item.id}',${item.size},'${item.color}',-1)">−</button>
            <div class="qty-value">${item.qty}</div>
            <button class="qty-btn" onclick="updateCartQty('${item.id}',${item.size},'${item.color}',1)">+</button>
          </div>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove ×</button>
      </div>
    </div>
  `).join('');

  updateOrderSummary();
}

function updateCartQty(id, size, color, delta) {
  const item = cartItems.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    updateCartCount();
    renderCart();
  }
}

function updateOrderSummary() {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal >= 75 ? 0 : 7.99;
  const total = subtotal + tax + (subtotal > 0 ? shipping : 0);
  document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('summary-shipping').textContent = subtotal >= 75 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('summary-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
}

function applyPromoCode() {
  const code = document.getElementById('promo-code-input').value.trim().toUpperCase();
  // POST /api/cart/coupon { code }
  if (code === 'GRND10' || code === 'GRND25') {
    showToast(`✓ Code ${code} applied!`);
  } else {
    showToast('Invalid promo code', 'error');
  }
}

function handleCheckout() {
  if (cartItems.length === 0) { showToast('Your cart is empty', 'error'); return; }
  // POST /api/checkout/session — redirect to Stripe / payment gateway
  showToast('Redirecting to checkout... (Connect to /api/checkout/session)');
}


function handleNewsletter(e) {
  e.preventDefault();
  const email = e.target.email.value;

  showToast(`✓ Subscribed! Check ${email} for your 10% off code.`);
  e.target.reset();
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast${type === 'error' ? ' error' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* 

 */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}



document.addEventListener('DOMContentLoaded', () => {
  renderHomeProducts();
  initReveal();

  // Price range inputs
  document.getElementById('price-min')?.addEventListener('change', applyFilters);
  document.getElementById('price-max')?.addEventListener('change', applyFilters);

});

