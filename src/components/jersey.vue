<template>
  <div class="jersey-container">
    <!-- Header Section -->
    <header class="header">
      <h1 class="main-title">🏆 Official Team Jerseys</h1>
      <p class="header-subtitle">Get your authentic team kits and show your support</p>
    </header>

    <!-- Pricing Banner -->
    <div class="pricing-banner">
      <div class="pricing-info">
        <div class="price-item">
          <span class="price-label">Individual Kit</span>
          <span class="price-value">KSh 1,500/-</span>
        </div>
        <div class="price-divider">OR</div>
        <div class="price-item full-kit">
          <span class="price-label">Complete Set (Home + Away)</span>
          <span class="price-value">KSh 3,000/-</span>
        </div>
      </div>
    </div>

    <!-- Jersey Showcase Grid -->
    <div class="jersey-grid">
      <!-- Home Kit Card -->
      <div class="jersey-card home-kit">
        <div class="kit-header home">
          <h2 class="kit-title">HOME KIT</h2>
          <div class="season-badge">2025 Season</div>
        </div>
        
        <div class="kit-image-container">
          <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-05 at 22.01.04_21faabd5.jpg" alt="Home Kit" class="kit-image">
          <div class="kit-overlay">
            <button class="btn-view" @click="viewKit('home')">View Details</button>
          </div>
        </div>
        
        <div class="kit-details">
          <div class="kit-features">
            <div class="feature-item">
              <span class="feature-icon">🎨</span>
              <span class="feature-text">red & White</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🏷️</span>
              <span class="feature-text">Official Team Badge</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🌟</span>
              <span class="feature-text">Premium Quality Fabric</span>
            </div>
          </div>
          
          <div class="kit-price">
            <span class="price">KSh 1,500/-</span>
            <span class="price-note">per kit</span>
          </div>
          
          <div class="kit-actions">
            <div class="size-selector">
              <label>Size:</label>
              <select v-model="homeKitSize" class="size-select">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <button class="btn-add-cart" @click="addToCart('home')">
              <span class="cart-icon">🛒</span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Away Kit Card -->
      <div class="jersey-card away-kit">
        <div class="kit-header away">
          <h2 class="kit-title">AWAY KIT</h2>
          <div class="season-badge">2025 Season</div>
        </div>
        
        <div class="kit-image-container">
          <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-05 at 22.00.58_92d90f56.jpg" alt="Away Kit" class="kit-image">
          <div class="kit-overlay">
            <button class="btn-view" @click="viewKit('away')">View Details</button>
          </div>
        </div>
        
        <div class="kit-details">
          <div class="kit-features">
            <div class="feature-item">
              <span class="feature-icon">🎨</span>
              <span class="feature-text">White & red Accents</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🏷️</span>
              <span class="feature-text">Official Team Badge</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🌟</span>
              <span class="feature-text">Moisture-Wicking Tech</span>
            </div>
          </div>
          
          <div class="kit-price">
            <span class="price">KSh 1,500/-</span>
            <span class="price-note">per kit</span>
          </div>
          
          <div class="kit-actions">
            <div class="size-selector">
              <label>Size:</label>
              <select v-model="awayKitSize" class="size-select">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <button class="btn-add-cart" @click="addToCart('away')">
              <span class="cart-icon">🛒</span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Complete Set Section -->
    <section class="complete-set-section">
      <div class="complete-set-container">
        <h2 class="set-title">💎 Get the Complete Set</h2>
        <p class="set-subtitle">Both Home and Away kits at a special price</p>
        
        <div class="set-showcase">
          <div class="set-images">
            <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-05 at 22.01.04_21faabd5.jpg" alt="Home Kit" class="set-image">
            <div class="plus-icon">+</div>
            <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-05 at 22.00.58_92d90f56.jpg" alt="Away Kit" class="set-image">
          </div>
          
          <div class="set-details">
            <div class="set-price">
              <span class="original-price">KSh 3,000/-</span>
              <span class="special-price">KSh 3,000/-</span>
            </div>
            
            <div class="set-includes">
              <h3>What's Included:</h3>
              <ul>
                <li>Home Jersey + Shorts + Socks</li>
                <li>Away Jersey + Shorts + Socks</li>
                <li>Official Team Bag</li>
                <li>Free Name & Number Printing</li>
              </ul>
            </div>
            
            <button class="btn-order-set" @click="orderCompleteSet()">
              Order Complete Set
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Shopping Cart Modal -->
    <div v-if="showCart" class="cart-modal" @click="closeCart">
      <div class="cart-content" @click.stop>
        <h3 class="cart-title">🛒 Your Cart</h3>
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <div class="item-info">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-size">Size: {{ item.size }}</span>
            </div>
            <div class="item-price">KSh {{ item.price }}/-</div>
          </div>
        </div>
        <div class="cart-total">
          <span>Total: KSh {{ cartTotal }}/-</span>
        </div>
        <div class="cart-actions">
          <button class="btn-checkout" @click="checkout()">Proceed to Checkout</button>
          <button class="btn-continue" @click="closeCart">Continue Shopping</button>
        </div>
      </div>
    </div>

    <!-- Order Information Section -->
    <section class="order-info">
      <div class="info-container">
        <h2 class="info-title">📦 Ordering Information</h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">🚚</div>
            <h3>Delivery</h3>
            <p>Free delivery within Nairobi.</p>
          </div>
          <div class="info-card">
            <div class="info-icon">⏱️</div>
            <h3>Processing Time</h3>
            <p>3-5 working days for name and number printing</p>
          </div>
          <div class="info-card">
            <div class="info-icon">💳</div>
            <h3>Payment</h3>
            <p>M-Pesa, Bank Transfer, or Cash on Delivery</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🔄</div>
            <h3>Exchanges</h3>
            <p>Size exchanges within 7 days of purchase</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">For bulk orders or team inquiries, contact us directly</p>
        <div class="contact-info">
          <span class="contact-item">📧 jerseys@footballclub.com</span>
          <span class="contact-item">📞 +254 123 456 789</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default { 
  name: "jerseys",
  setup() {
    const homeKitSize = ref('M')
    const awayKitSize = ref('M')
    const showCart = ref(false)
    const cartItems = ref([])
    
    const cartTotal = ref(0)
    
    const addToCart = (kitType) => {
      const size = kitType === 'home' ? homeKitSize.value : awayKitSize.value
      const newItem = {
        id: Date.now(),
        name: kitType === 'home' ? 'Home Kit' : 'Away Kit',
        size: size,
        price: 1500
      }
      cartItems.value.push(newItem)
      updateCartTotal()
      showCart.value = true
    }
    
    const orderCompleteSet = () => {
      const homeItem = {
        id: Date.now(),
        name: 'Home Kit (Complete Set)',
        size: homeKitSize.value,
        price: 1500
      }
      const awayItem = {
        id: Date.now() + 1,
        name: 'Away Kit (Complete Set)',
        size: awayKitSize.value,
        price: 1500
      }
      cartItems.value.push(homeItem, awayItem)
      updateCartTotal()
      showCart.value = true
    }
    
    const updateCartTotal = () => {
      cartTotal.value = cartItems.value.reduce((total, item) => total + item.price, 0)
    }
    
    const closeCart = () => {
      showCart.value = false
    }
    
    const checkout = () => {
      alert('Thank you for your order! We will contact you soon for payment and delivery details.')
      cartItems.value = []
      cartTotal.value = 0
      showCart.value = false
    }
    
    const viewKit = (kitType) => {
      alert(`Viewing ${kitType} kit details - In a real app, this would open a detailed view`)
    }
    
    return {
      homeKitSize,
      awayKitSize,
      showCart,
      cartItems,
      cartTotal,
      addToCart,
      orderCompleteSet,
      closeCart,
      checkout,
      viewKit
    }
  }
}
</script>

<style scoped>
/* Background and Container Styles */
.jersey-container {
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                    url('https://picsum.photos/seed/football-stadium-night/1920/1080.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.header-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Pricing Banner */
.pricing-banner {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.pricing-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.price-item {
  text-align: center;
  color: white;
}

.price-item.full-kit {
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem 2rem;
  border-radius: 10px;
}

.price-label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.price-value {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
}

.price-divider {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}

/* Jersey Grid */
.jersey-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 4rem;
}

/* Jersey Card Styles */
.jersey-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.jersey-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

/* Kit Header */
.kit-header {
  padding: 1.5rem;
  text-align: center;
  position: relative;
}

.kit-header.home {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}

.kit-header.away {
  background: linear-gradient(135deg, #333333, #555555);
}

.kit-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.season-badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
}

/* Kit Image */
.kit-image-container {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.kit-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.kit-image-container:hover .kit-image {
  transform: scale(1.05);
}

.kit-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.kit-image-container:hover .kit-overlay {
  opacity: 1;
}

.btn-view {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-view:hover {
  background: white;
}

/* Kit Details */
.kit-details {
  padding: 1.5rem;
}

.kit-features {
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: #555;
}

.feature-icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.feature-text {
  font-size: 0.95rem;
}

.kit-price {
  text-align: center;
  margin-bottom: 1.5rem;
}

.price {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2e7d32;
}

.price-note {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
}

/* Kit Actions */
.kit-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.size-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.size-selector label {
  font-weight: 600;
  color: #333;
}

.size-select {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
}

.btn-add-cart {
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-add-cart:hover {
  background: linear-gradient(135deg, #45a049, #3d8b40);
  transform: translateY(-2px);
}

.cart-icon {
  font-size: 1.2rem;
}

/* Complete Set Section */
.complete-set-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.complete-set-container {
  text-align: center;
  color: white;
}

.set-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.set-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.set-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.set-images {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.set-image {
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.plus-icon {
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
}

.set-details {
  text-align: left;
}

.set-price {
  margin-bottom: 1.5rem;
}

.original-price {
  text-decoration: line-through;
  opacity: 0.7;
  margin-right: 1rem;
}

.special-price {
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
}

.set-includes h3 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.set-includes ul {
  list-style: none;
  padding: 0;
}

.set-includes li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.set-includes li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4caf50;
  font-weight: 700;
}

.btn-order-set {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #333;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-top: 1.5rem;
}

.btn-order-set:hover {
  background: linear-gradient(135deg, #ffed4e, #ffd700);
  transform: translateY(-2px);
}

/* Cart Modal */
.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cart-content {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.cart-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
}

.cart-items {
  margin-bottom: 1.5rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 600;
  color: #333;
}

.item-size {
  font-size: 0.9rem;
  color: #666;
}

.item-price {
  font-weight: 700;
  color: #2e7d32;
}

.cart-total {
  text-align: right;
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
}

.cart-actions {
  display: flex;
  gap: 1rem;
}

.btn-checkout, .btn-continue {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-checkout {
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
}

.btn-checkout:hover {
  background: linear-gradient(135deg, #45a049, #3d8b40);
}

.btn-continue {
  background: #f5f5f5;
  color: #333;
}

.btn-continue:hover {
  background: #e0e0e0;
}

/* Order Information Section */
.order-info {
  margin-bottom: 3rem;
}

.info-container {
  max-width: 1000px;
  margin: 0 auto;
}

.info-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem 1rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;
}

.info-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.info-card p {
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.5;
}

/* Footer Styles */
.footer {
  text-align: center;
  color: white;
  padding: 2rem 0;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-text {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.2rem;
  }
  
  .jersey-grid {
    grid-template-columns: 1fr;
  }
  
  .set-showcase {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .set-images {
    order: 2;
  }
  
  .set-details {
    order: 1;
    text-align: center;
  }
  
  .pricing-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>