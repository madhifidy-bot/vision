<template>
  <div class="staff-container">
    <!-- Header Section -->
    <header class="header">
      <h1 class="main-title">⚽ Our Coaching Team</h1>
      <p class="header-subtitle">Meet the dedicated professionals behind our success</p>
    </header>

    <!-- Staff Cards Grid -->
    <div class="staff-grid">
      <!-- Director Card - Abiud -->
      <div class="staff-card director-card">
        <div class="card-header director">
          <div class="staff-avatar">
            <img src="C:\Users\ooo\OneDrive\Pictures\Screenshots\ABIUD.png" alt="Abiud" class="avatar-img clickable-avatar" @click="openFullscreen('https://picsum.photos/seed/abiud-director/800/800.jpg')">
            <div class="role-badge director-badge">Director</div>
          </div>
          <h2 class="staff-name">Abiud</h2>
          <p class="staff-title">Club Director</p>
        </div>
        
        <div class="card-content">
          <div class="staff-bio">
            <p>Leading our club with vision and dedication, Abiud brings years of experience in sports management and youth development.</p>
          </div>
          
          <div class="staff-details">
            <div class="detail-item">
              <img src="https://picsum.photos/seed/abiud-passport-1/50/50.jpg" alt="Strategic Planning" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/abiud-passport-1/800/800.jpg')">
              <span class="detail-text">Strategic Planning & Development</span>
            </div>
            <div class="detail-item">
              <img src="https://picsum.photos/seed/abiud-passport-2/50/50.jpg" alt="Program Oversight" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/abiud-passport-2/800/800.jpg')">
              <span class="detail-text">Program Oversight</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\download (2).jpeg" alt="Partnership" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/abiud-passport-3/800/800.jpg')">
              <span class="detail-text">Partnership Management</span>
            </div>
          </div>
          
          <div class="card-actions">
               <a
  href="https://wa.me/254728799968?text=Hello%20Director%20Abiud"
  target="_blank"
  rel="noopener noreferrer">
            <button class="btn-contact">Contact Director</button>
          </a>
          </div>
        </div>
      </div>

      <!-- Finance Director Card - Maria -->
      <div class="staff-card finance-card">
        <div class="card-header finance">
          <div class="staff-avatar">
            <img src="C:\Users\ooo\OneDrive\Pictures\Screenshots\MSISTA.png" alt="Maria" class="avatar-img clickable-avatar" @click="openFullscreen('https://picsum.photos/seed/maria-finance/800/800.jpg')">
            <div class="role-badge finance-badge">Finance Director</div>
          </div>
          <h2 class="staff-name">Maria</h2>
          <p class="staff-title">Finance & Administration Manager</p>
        </div>
        
        <div class="card-content">
          <div class="staff-bio">
            <p>Maria ensures transparent financial management and efficient administration of all club operations and tournament finances.</p>
          </div>
          
          <div class="staff-details">
            <div class="detail-item">
              <img src="https://picsum.photos/seed/maria-passport-1/50/50.jpg" alt="Financial Planning" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/maria-passport-1/800/800.jpg')">
              <span class="detail-text">Financial Planning</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\download (3).jpeg" alt="Budget Management" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/maria-passport-2/800/800.jpg')">
              <span class="detail-text">Budget Management</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\download (3).jpeg" alt="Registration" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/maria-passport-3/800/800.jpg')">
              <span class="detail-text">Registration & Payments</span>
            </div>
          </div>
          
          <div class="card-actions">
           <a
  href="https://wa.me/254710402296?text=Hello%20Finance%20Team"
  target="_blank"
  rel="noopener noreferrer"
>
  <button class="btn-contact">Contact Finance</button>
</a>

          </div>
        </div>
      </div>

      <!-- Coach Card - Wahome -->
      <div class="staff-card coach-card">
        <div class="card-header coach">
          <div class="staff-avatar">
            <img src="C:\Users\ooo\OneDrive\Pictures\Screenshots\ONEMINUTEMAN.png" alt="Wahome" class="avatar-img clickable-avatar" @click="openFullscreen('https://picsum.photos/seed/wahome-coach/800/800.jpg')">
            <div class="role-badge coach-badge"> Coach</div>
          </div>
          <h2 class="staff-name">Wahome</h2>
          <p class="staff-title">  Technical Coach</p>
        </div>
        
        <div class="card-content">
          <div class="staff-bio">
            <p>Coach Wahome specializes in technical development and tactical training, bringing out the best in young athletes.</p>
          </div>
          
          <div class="staff-details">
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\download.jpeg " alt="Technical Training" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/wahome-passport-1/800/800.jpg')">
              <span class="detail-text">Technical Training</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\download.jpeg" alt="Tactical Development" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/wahome-passport-2/800/800.jpg')">
              <span class="detail-text">Tactical Development</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\Screenshots\UNDER11.png" alt="U13 & U15 Teams" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/wahome-passport-3/800/800.jpg')">
              <span class="detail-text">U11 Team</span>
            </div>
          </div>
          
          <div class="card-actions">
             <a
  href="https://wa.me/254718088461?text=Hello%20coach%20wahome"
  target="_blank"
  rel="noopener noreferrer">
            <button class="btn-contact">Contact Director</button>
          </a>
          </div>
        </div>
      </div>

      <!-- Coach Card - Steve -->
      <div class="staff-card coach-card">
        <div class="card-header coach">
          <div class="staff-avatar">
            <img src="C:\Users\ooo\OneDrive\Pictures\Screenshots\STEVE.png" alt="Steve" class="avatar-img clickable-avatar" @click="openFullscreen('https://picsum.photos/seed/steve-coach/800/800.jpg')">
            <div class="role-badge coach-badge">Coach</div>
          </div>
          <h2 class="staff-name">Steve</h2>
          <p class="staff-title">Youth Development Coach</p>
        </div>
        
        <div class="card-content">
          <div class="staff-bio">
            <p>Coach Steve focuses on foundational skills and nurturing young talent, creating a positive learning environment.</p>
          </div>
          
          <div class="staff-details">
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-24 at 20.33.39_1a09d5d9.jpg" alt="Youth Development" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/steve-passport-1/800/800.jpg')">
              <span class="detail-text">Youth Development</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-24 at 20.33.39_1a09d5d9.jpg" alt="Fitness Training" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/steve-passport-2/800/800.jpg')">
              <span class="detail-text">Fitness & Conditioning</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-24 at 20.33.39_1a09d5d9.jpg" alt="U7 & U9 Teams" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/steve-passport-3/800/800.jpg')">
              <span class="detail-text">U13 & U15 Teams</span>
            </div>
          </div>
          
          <div class="card-actions">
             <a
  href="https://wa.me/+254710783305?text=Hello%20coach%20%Steve"
  target="_blank"
  rel="noopener noreferrer">
            <button class="btn-contact">Contact Director</button>
          </a>
          </div>
        </div>
      </div>

      <!-- Coach Card - Mwalimu -->
      <div class="staff-card coach-card">
        <div class="card-header coach">
          <div class="staff-avatar">
            <img src="C:\Users\ooo\OneDrive\Pictures\Screenshots\MWALIMU.png" alt="Mwalimu" class="avatar-img clickable-avatar" @click="openFullscreen('https://picsum.photos/seed/mwalimu-coach/800/800.jpg')">
            <div class="role-badge coach-badge">Coach</div>
          </div>
          <h2 class="staff-name">Mwalimu</h2>
          <p class="staff-title">Holistic Coach</p>
        </div>
        
        <div class="card-content">
          <div class="staff-bio">
            <p>Coach Mwalimu brings expertise in advanced techniques and game strategy, preparing players for competitive matches.</p>
          </div>
          
          <div class="staff-details">
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\soccer-football-game-strategy-plan-260nw-1244194036.webp" alt="Game Strategy" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/mwalimu-passport-1/800/800.jpg')">
              <span class="detail-text">Game Strategy</span>
            </div>
            <div class="detail-item">
              <img src="C:\Users\ooo\OneDrive\Pictures\soccer-football-game-strategy-plan-260nw-1244194036.webp" alt="Performance Analysis" class="detail-passport" @click="openFullscreen('https://picsum.photos/seed/mwalimu-passport-2/800/800.jpg')">
              <span class="detail-text">Performance Analysis</span>
            </div>
            <div class="detail-item">
              <!-- Example with your local image -->
              <img src="C:\Users\ooo\OneDrive\Pictures\under9.5.jpg" alt="U11 Teams" class="detail-passport" @click="openFullscreen('/images/UNDER11.png')">
              <span class="detail-text">U7 & u9</span>
            </div>
          </div>
          
          <div class="card-actions">
            <a
  href="https://wa.me/+254718828004?text=Hello%20coach20%Mwalimu"
  target="_blank"
  rel="noopener noreferrer">
            <button class="btn-contact">Contact Director</button>
          </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Image Modal -->
    <div v-if="showFullscreen" class="fullscreen-modal" @click="closeFullscreen">
      <div class="fullscreen-content">
        <button class="close-btn" @click="closeFullscreen">×</button>
        <img :src="fullscreenImage" alt="Full size image" class="fullscreen-image">
        <div class="image-info">
          <p class="image-caption">{{ imageCaption }}</p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <h2 class="contact-title">Get in Touch</h2>
        <p class="contact-subtitle">Our team is here to support your football journey</p>
        
        <div class="contact-options">
          <div class="contact-option">
            <div class="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p>info@footballclub.com</p>
          </div>
          
          <div class="contact-option">
            <div class="contact-icon">📞</div>
            <h3>Call Us</h3>
            <a href="tel:+254718088461" class="phone-link">
              +254 718 088 461
          </a>
          </div>
          
          <div class="contact-option">
            <div class="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <template>
  <div class="visit-us-section">
    <h2>Come See Us</h2>
    <p>We would love to welcome you to our school.</p>
    
    <!-- This button controls the modal's visibility -->
    <button @click="showMap = true" class="visit-button">
      Visit Us
    </button>

    <!-- The MapModal is only shown when showMap is true -->
    <MapModal v-if="showMap" @close="showMap = false" />
  </div>
</template>
            <p>Garden Estate Primary Ground</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">© 2025 Football Academy. Building champions on and off the field.</p>
        <div class="social-links">
          <span class="social-link">📘 Facebook</span>
          <span class="social-link">📷 Instagram</span>
          <span class="social-link">🐦 Twitter</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default { 
  name: "coaches",
  setup() {
    const showFullscreen = ref(false)
    const fullscreenImage = ref('')
    const imageCaption = ref('')
    
    const openFullscreen = (imageSrc, caption = '') => {
      fullscreenImage.value = imageSrc
      imageCaption.value = caption
      showFullscreen.value = true
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }
    
    const closeFullscreen = () => {
      showFullscreen.value = false
      imageCaption.value = ''
      // Restore body scroll
      document.body.style.overflow = 'auto'
    }
    
    // Close modal on ESC key press
    const handleKeydown = (event) => {
      if (event.key === 'Escape' && showFullscreen.value) {
        closeFullscreen()
      }
    }
    
    // Add event listener when component is mounted
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown)
    }
    
    return {
      showFullscreen,
      fullscreenImage,
      imageCaption,
      openFullscreen,
      closeFullscreen
    }
  }
}
</script>

<style scoped>
/* Background and Container Styles */
.staff-container {
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('https://picsum.photos/seed/football-coaching/1920/1080.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 3rem;
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

/* Staff Grid */
.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

/* Staff Card Styles */
.staff-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.staff-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

/* Card Header */
.card-header {
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
}

.card-header.director {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}

.card-header.finance {
  background: linear-gradient(135deg, #134e5e, #71b280);
}

.card-header.coach {
  background: linear-gradient(135deg, #c31432, #240b36);
}

.staff-avatar {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.clickable-avatar {
  cursor: pointer;
}

.clickable-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.role-badge {
  position: absolute;
  bottom: 5px;
  right: 0;
  background: #ff6b6b;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.director-badge {
  background: #ffd700;
  color: #333;
}

.finance-badge {
  background: #4ecdc4;
}

.coach-badge {
  background: #ff6b6b;
}

.staff-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: white;
}

.staff-title {
  font-size: 1rem;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.9);
}

/* Card Content */
.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.staff-bio {
  margin-bottom: 1.5rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
}

.staff-details {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.detail-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-passport {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #f0f0f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.detail-passport:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.detail-text {
  color: #333;
  font-weight: 500;
  flex: 1;
}

/* Card Actions */
.card-actions {
  margin-top: auto;
  text-align: center;
}

.btn-contact {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
}

.btn-contact:hover {
  background: linear-gradient(135deg, #5a6fd8, #6a4190);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);
}

/* Fullscreen Modal Styles */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fullscreen-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.fullscreen-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.image-info {
  margin-top: 1rem;
  text-align: center;
}

.image-caption {
  color: white;
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

/* Contact Section */
.contact-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.contact-container {
  text-align: center;
  color: white;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.contact-option {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem 1rem;
  border-radius: 15px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.contact-option:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-option h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.contact-option p {
  opacity: 0.9;
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
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.social-link:hover {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.2rem;
  }
  
  .staff-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-options {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .detail-passport {
    width: 35px;
    height: 35px;
  }
  
  .close-btn {
    top: -40px;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .avatar-img {
    width: 100px;
    height: 100px;
  }
}
</style>