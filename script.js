let walletBalance = 1500; 
let cart = [];
let itemTotal = 0;
const deliveryCharge = 45;

// ================= THE 42 ITEMS ULTRA-DATA ARRAY =================
const foodDatabase = [
    // --- BURGERS ---
    { name: "Cyber Cheese Burger", price: 149, emoji: "🍔", discount: "50% OFF", category: "burger", rating: "4.2", cuisine: "Burger, Fast Food" },
    { name: "Neon Volcano Burger", price: 199, emoji: "🍔", discount: "30% OFF", category: "burger", rating: "4.5", cuisine: "Spicy Fast Food" },
    { name: "Velox Crisp Chicken", price: 179, emoji: "🍔", discount: "Buy 1 Get 1", category: "burger", rating: "4.4", cuisine: "Gourmet Chicken" },
    { name: "Glasshouse Veg Max", price: 129, emoji: "🍔", discount: "10% OFF", category: "burger", rating: "4.1", cuisine: "Pure Veg Burger" },
    { name: "Alpha Smoked Bacon", price: 249, emoji: "🍔", discount: "Velox Special", category: "burger", rating: "4.7", cuisine: "Premium Meat" },
    { name: "Quantum Mini Slider Trio", price: 219, emoji: "🍔", discount: "Save ₹30", category: "burger", rating: "4.3", cuisine: "Mini Slider Pack" },
    { name: "Fusion Paneer Tech", price: 159, emoji: "🍔", discount: "20% OFF", category: "burger", rating: "4.2", cuisine: "Indian Fusion Veg" },

    // --- PIZZAS ---
    { name: "Neon Peri Peri Pizza", price: 299, emoji: "🍕", discount: "Pro Extra 10%", category: "pizza", rating: "4.6", cuisine: "Pizza, Italian" },
    { name: "Cyber Margherita Crust", price: 249, emoji: "🍕", discount: "40% OFF", category: "pizza", rating: "4.3", cuisine: "Cheese Pizza" },
    { name: "Quantum Dynamic Pepperoni", price: 399, emoji: "🍕", discount: "Free Cola", category: "pizza", rating: "4.8", cuisine: "Non-Veg Extreme" },
    { name: "Vortex Mushroom Truffle", price: 349, emoji: "🍕", discount: "Elite Choice", category: "pizza", rating: "4.5", cuisine: "Exotic Italian" },
    { name: "Overload Matrix Veggie", price: 289, emoji: "🍕", discount: "Save ₹50", category: "pizza", rating: "4.4", cuisine: "Loaded Vegetables" },
    { name: "Glitch Spicy Keema Dome", price: 379, emoji: "🍕", discount: "15% OFF", category: "pizza", rating: "4.5", cuisine: "Spicy Minced Chicken" },
    { name: "Hologram BBQ Paneer Pizza", price: 319, emoji: "🍕", discount: "Flat 20% Off", category: "pizza", rating: "4.2", cuisine: "Barbecue Veg" },

    // --- BIRYANIS ---
    { name: "Cyber Dum Gosht Biryani", price: 389, emoji: "🍛", discount: "Premium Pack", category: "biryani", rating: "4.8", cuisine: "Mutton Rice" },
    { name: "Electric Tikka Biryani", price: 299, emoji: "🍛", discount: "30% OFF", category: "biryani", rating: "4.6", cuisine: "Chicken Boneless" },
    { name: "Matrix Paneer Hydrabad", price: 249, emoji: "🍛", discount: "Save ₹40", category: "biryani", rating: "4.4", cuisine: "Veg Traditional" },
    { name: "Vortex Egg Dum Classic", price: 199, emoji: "🍛", discount: "Flat 10%", category: "biryani", rating: "4.2", cuisine: "Egg Layered Rice" },
    { name: "Neon Royal Prawn Biryani", price: 449, emoji: "🍛", discount: "Velox Luxury", category: "biryani", rating: "4.9", cuisine: "Seafood Specialty" },
    { name: "Lucknowi Glitch Murg", price: 320, emoji: "🍛", discount: "Free Raita", category: "biryani", rating: "4.5", cuisine: "Awadhi Fragrant Rice" },
    { name: "Saffron Tech Veg Pulao", price: 189, emoji: "🍛", discount: "20% OFF", category: "biryani", rating: "4.1", cuisine: "Light Aromatic Rice" },

    // --- PAN-ASIAN ---
    { name: "Neon Hakka Noodles", price: 169, emoji: "🥢", discount: "Flat 20%", category: "asian", rating: "4.3", cuisine: "Chinese Wok" },
    { name: "Cyber Schezwan Rice", price: 179, emoji: "🥢", discount: "Extra Spicy", category: "asian", rating: "4.4", cuisine: "Fried Rice" },
    { name: "Quantum Steamed Dimsums", price: 149, emoji: "🥢", discount: "Buy 2 Get 1", category: "asian", rating: "4.5", cuisine: "Momos & Dimsum" },
    { name: "Vortex Manchurian Gravy", price: 189, emoji: "🥢", discount: "Combo Deal", category: "asian", rating: "4.2", cuisine: "Veg Starters" },
    { name: "Matrix Crispy Chilli Potato", price: 139, emoji: "🥢", discount: "Popular Item", category: "asian", rating: "4.3", cuisine: "Sweet & Spicy Fries" },
    { name: "Hologram Sushi Platter", price: 499, emoji: "🥢", discount: "Premium Luxury", category: "asian", rating: "4.7", cuisine: "Japanese Delicacy" },
    { name: "Glitch Kung Pao Chicken", price: 269, emoji: "🥢", discount: "15% OFF", category: "asian", rating: "4.6", cuisine: "Nutty Spicy Chicken" },

    // --- SHAKES ---
    { name: "Glasshouse Mocha Blast", price: 120, emoji: "🥤", discount: "Free Delivery", category: "shakes", rating: "4.5", cuisine: "Cold Coffee" },
    { name: "Cyber Strawberry Neon", price: 110, emoji: "🥤", discount: "10% OFF", category: "shakes", rating: "4.2", cuisine: "Fruity Milkshake" },
    { name: "Quantum Oreo Dark Cloud", price: 139, emoji: "🥤", discount: "Kids Special", category: "shakes", rating: "4.6", cuisine: "Thick Chocolate Cookie" },
    { name: "Matrix Alphonso Thickshake", price: 169, emoji: "🥤", discount: "Seasonal King", category: "shakes", rating: "4.7", cuisine: "Pure Mango Shake" },
    { name: "Neon Bubblegum Bubble", price: 149, emoji: "🥤", discount: "New Release", category: "shakes", rating: "4.3", cuisine: "Trending Boba Shake" },
    { name: "Vortex Caramel Crunch", price: 130, emoji: "🥤", discount: "Save ₹15", category: "shakes", rating: "4.4", cuisine: "Salted Butter Caramel" },
    { name: "Alpha KitKat Nitro", price: 150, emoji: "🥤", discount: "20% OFF", category: "shakes", rating: "4.5", cuisine: "Crunchy Chocolate Shake" },

    // --- DESSERTS ---
    { name: "Cyber Red Velvet Slice", price: 129, emoji: "🍰", discount: "Sweet 15%", category: "dessert", rating: "4.6", cuisine: "Cake, Bakery" },
    { name: "Neon Chocolate Lava Hub", price: 99, emoji: "🍰", discount: "Buy 1 Get 1", category: "dessert", rating: "4.7", cuisine: "Molten Fudge Cake" },
    { name: "Quantum Sizzling Brownie", price: 179, emoji: "🍰", discount: "Top Rated", category: "dessert", rating: "4.8", cuisine: "Hot & Fudgy IceCream" },
    { name: "Matrix New York Cheesecake", price: 199, emoji: "🍰", discount: "Premium Slab", category: "dessert", rating: "4.9", cuisine: "Elite Baked Dessert" },
    { name: "Vortex Blueberry Glaze Mousse", price: 119, emoji: "🍰", discount: "10% OFF", category: "dessert", rating: "4.4", cuisine: "Light Cream Cup" },
    { name: "Hologram Gulab Jamun Duo", price: 79, emoji: "🍰", discount: "Desi Love", category: "dessert", rating: "4.5", cuisine: "Hot Indian Sweets" },
    { name: "Alpha Walnut Brownie Pack", price: 149, emoji: "🍰", discount: "Save ₹20", category: "dessert", rating: "4.3", cuisine: "Fudgy Dry Cake" }
];

// ================= DYNAMIC GRID RENDER ENGINE =================
function displayGrid(itemsArray) {
    const container = document.getElementById('foodGridContainer');
    container.innerHTML = ""; 

    if (itemsArray.length === 0) {
        container.innerHTML = `<p style="color: #64748b; padding: 40px; grid-column: 1/-1; text-align: center;">Koi dish nahi mili boss! Kuch aur search kijiye.</p>`;
        return;
    }

    itemsArray.forEach(item => {
        const card = document.createElement('div');
        card.className = "food-card";
        card.innerHTML = `
            <div class="food-img-wrapper">
                <span class="food-emoji">${item.emoji}</span>
                <span class="discount-tag">${item.discount}</span>
            </div>
            <div class="food-details">
                <div class="first-row">
                    <h4>${item.name}</h4>
                    <span class="rating">${item.rating} ⭐</span>
                </div>
                <div class="second-row">
                    <p class="cuisine">${item.cuisine}</p>
                    <p class="price">₹${item.price}</p>
                </div>
            </div>
            <button class="add-btn" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">Add +</button>
        `;
        container.appendChild(card);
    });
}

// Initial Grid Injection
document.addEventListener("DOMContentLoaded", () => {
    displayGrid(foodDatabase);
});

// ================= REAL-TIME PASSWORD VALIDATION =================
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const ruleLength = document.getElementById('ruleLength');
const ruleUpper = document.getElementById('ruleUpper');
const ruleSpecial = document.getElementById('ruleSpecial');

function validatePassword() {
    const passVal = passwordInput.value;
    const userVal = usernameInput.value.trim();

    const isLong = passVal.length >= 8;
    const hasUpper = /[A-Z]/.test(passVal);
    const hasSpecial = /[Valid symbols: @#$%^&*]/.test(passVal) || /[@#$%]/.test(passVal);

    if (isLong) ruleLength.classList.add('valid'); else ruleLength.classList.remove('valid');
    if (hasUpper) ruleUpper.classList.add('valid'); else ruleUpper.classList.remove('valid');
    if (hasSpecial) ruleSpecial.classList.add('valid'); else ruleSpecial.classList.remove('valid');

    if (isLong && hasUpper && hasSpecial && userVal !== "") {
        loginBtn.classList.remove('disabled-btn');
    } else {
        loginBtn.classList.add('disabled-btn');
    }
}
passwordInput.addEventListener('input', validatePassword);
usernameInput.addEventListener('input', validatePassword);

// ================= ROUTING & SPA CONTROLLER =================
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if(pageId === 'dashboardPage') {
        setTimeout(() => displayGrid(foodDatabase), 50); 
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    navigateTo('dashboardPage');
});

document.getElementById('navLogout').addEventListener('click', function() {
    document.getElementById('loginForm').reset();
    ruleLength.classList.remove('valid');
    ruleUpper.classList.remove('valid');
    ruleSpecial.classList.remove('valid');
    loginBtn.classList.add('disabled-btn');
    cart = [];
    itemTotal = 0;
    updateCartUI();
    navigateTo('loginPage');
});

// ================= FILTERS & LOCAL SEARCH =================
function filterCategory(catName) {
    document.querySelectorAll('.tab-item').forEach(tab => tab.classList.remove('active-tab'));
    event.target.classList.add('active-tab');

    if (catName === 'all') {
        document.getElementById('gridTitle').innerText = "Inspiration for your premium order (42 Options)";
        displayGrid(foodDatabase);
    } else {
        const filtered = foodDatabase.filter(food => food.category === catName);
        document.getElementById('gridTitle').innerText = `Elite ${catName.toUpperCase()} Delicacies (${filtered.length} found)`;
        displayGrid(filtered);
    }
}

function searchFood() {
    const query = document.getElementById('menuSearch').value.toLowerCase();
    const matches = foodDatabase.filter(food => food.name.toLowerCase().includes(query) || food.cuisine.toLowerCase().includes(query));
    displayGrid(matches);
}

// ================= LIVE BASKET LOGIC =================
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    itemTotal += price;
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cartItemsList');
    const itemTotalDisplay = document.getElementById('billItemTotal');
    const deliveryDisplay = document.getElementById('billDelivery');
    const grandTotalDisplay = document.getElementById('cartTotalAmount');
    
    if (cart.length === 0) {
        cartList.innerHTML = `<p style="color: #f472b6; font-size: 0.85rem; text-align: center; padding: 30px 0; opacity: 0.7;">Aapka cart khali hai. Menu se tasty items add karein!</p>`;
        itemTotalDisplay.innerText = "₹0";
        deliveryDisplay.innerText = "₹0";
        grandTotalDisplay.innerText = "₹0";
        return;
    }

    cartList.innerHTML = "";
    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `<span>${item.name}</span><strong>₹${item.price}</strong>`;
        cartList.appendChild(row);
    });

    const grandTotal = itemTotal + deliveryCharge;
    itemTotalDisplay.innerText = "₹" + itemTotal;
    deliveryDisplay.innerText = "₹" + deliveryCharge;
    grandTotalDisplay.innerText = "₹" + grandTotal;
}

// ================= PAYMENT MODAL LOGIC SYSTEM =================
const paymentModal = document.getElementById('paymentModal');
const closePaymentBtn = document.getElementById('closePaymentBtn');
const executePayBtn = document.getElementById('executePayBtn');

document.getElementById('placeOrderBtn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Vrinda Foodie Desktop Cart khali hai boss!");
        return;
    }
    // Inject pricing into Glass Payment Modal Screen
    document.getElementById('modalItemTotal').innerText = "₹" + itemTotal;
    document.getElementById('modalGrandTotal').innerText = "₹" + (itemTotal + deliveryCharge);
    
    // Show Premium Modal Display Box
    paymentModal.style.display = "flex";
});

closePaymentBtn.addEventListener('click', () => {
    paymentModal.style.display = "none";
});

executePayBtn.addEventListener('click', () => {
    const grandTotal = itemTotal + deliveryCharge;

    if (grandTotal > walletBalance) {
        alert("🔒 Gateway Error: Low balance in Vrinda Premium Wallet!");
        paymentModal.style.display = "none";
        return;
    }

    // Deduct and update
    walletBalance -= grandTotal;
    document.getElementById('walletBalance').innerText = walletBalance.toFixed(2);
    paymentModal.style.display = "none";
    
    alert(`🎉 Secure Settlement Approved!\nGrand Total: ₹${grandTotal}\nYour delicious hot order is processed by Vrinda Foodie Premium Kitchen!`);
    
    cart = [];
    itemTotal = 0;
    updateCartUI();
});