<template>
  <div class="landing-page">
    <!-- Header Section -->
    <header class="header">
      <div class="logo-container">
        <img src="../assets/download.jpg" alt="NEW VISION FOOTBALL ACADEMY" class="logo" />  
        <h1 class="academy-title">NEW VISION FOOTBALL ACADEMY</h1>
      </div>
      
      <nav class="navigation">
        <div class="link-container">
          <router-link to="/" class="link">Home</router-link>
          <router-link to="/about" class="link">About</router-link>
          <router-link to="/contact" class="link">Contact</router-link>
          <router-link to="/help" class="link">Help</router-link>
          <router-link to="/coaches" class="link">Coaches</router-link>
          <router-link to="/jersey" class="link">jersey</router-link>
          <router-link to="/sessions" class="link">sessions</router-link>
          <router-link to="/LatestNewsAndEvents" class="link">Latest News</router-link>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">WELCOME TO NEW VISION ACADEMY</h1>
        <h2 class="hero-subtitle">HOME OF CHAMPIONS</h2>
        <p class="hero-description">Where dreams take root and talents rise</p>
        <div class="hero-buttons">
         
          <button class="btn-secondary">Watch Video</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="../assets/under15.jpg" alt="Academy Players" />
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="statistics-section">
      <div class="stat-item">
        <h3 class="stat-number">170</h3>
        <p class="stat-label">Young Athletes</p>
      </div>
      <div class="stat-item">
        <h3 class="stat-number">5</h3>
        <p class="stat-label">Coaches</p>
      </div>
      <div class="stat-item">
        <h3 class="stat-number">1</h3>
        <p class="stat-label">National Championships</p>
      </div>
      <div class="stat-item">
        <h3 class="stat-number">5</h3>
        <p class="stat-label">Years of Excellence</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="section-header">
        <h2>ABOUT NEW VISION ACADEMY</h2>
        <div class="divider"></div>
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <p>
            Every child carries a spark—an untapped potential waiting to be discovered. At <strong>New Vision Academy</strong>, we believe that sport is more than just a game; it's a powerful tool for growth, confidence, and lifelong character.
          </p>
          <p>
            When a child steps onto our pitch, they're not just learning how to dribble or score—they're learning how to believe in themselves. Through expert coaching, structured training, and a supportive environment, we help young athletes unlock their abilities and embrace their journey with pride.
          </p>
          <p>
            Here, discipline meets joy. Teamwork becomes second nature. And every challenge is a stepping stone toward personal excellence.
          </p>
          <p class="motto">"SHAPING CHAMPIONS, BUILDING LEGENDS."</p>
        </div>
        <div class="about-image">
          <img src="C:\Users\ooo\OneDrive\Pictures\exposure.jpg" alt="Academy Facility" />
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <div class="section-header">
        <h2>SEE US IN ACTION</h2>
        <div class="divider"></div>
      </div>
      <div class="video-container">
        <div class="video-placeholder">
           <div>
    <video width="640" height="360" controls>
      <source src="C:\Users\ooo\Downloads\vedio.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
          <div class="play-button">
            <i class="play-icon">▶</i>
          </div>
        </div>
        <p class="video-description">Watch our academy in action and see how we're shaping the future of football</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
      <div class="section-header">
        <h2>GALLERY</h2>
        <div class="divider"></div>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="C:\Users\ooo\OneDrive\Pictures\on duty.jpg" alt="Training Session" />
          <div class="gallery-overlay">
            <p>Training Sessions</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-10-20 at 23.00.29_e40e338e.jpg" alt="Match Day" />
          <div class="gallery-overlay">
            <p>Match Days</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="C:\Users\ooo\OneDrive\Pictures\under9.jpg" alt="Trophy Celebration" />
          <div class="gallery-overlay">
            <p>Victory Celebrations</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="C:\Users\ooo\OneDrive\Pictures\management.jpg" alt="Coaching" />
          <div class="gallery-overlay">
            <p>Expert Coaching</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2>WHAT PARENTS AND PLAYERS SAY</h2>
        <div class="divider"></div>
      </div>
      <div class="testimonials-container">
        <div class="testimonial-item">
          <div class="testimonial-content">
            <p>"New Vision Academy has transformed my son's skills and confidence. The coaches are exceptional and truly care about each child's development."</p>
          </div>
          <div class="testimonial-author">
            <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-09-28 at 21.51.11_59b7b490.jpg" alt="Parent" />
            <div>
              <h4>Sarah Johnson</h4>
              <p>Parent</p>
            </div>
          </div>
        </div>
        <div class="testimonial-item">
          <div class="testimonial-content">
            <p>"Being part of New Vision Academy has been a life-changing experience. I've grown not just as a player but as a person."</p>
          </div>
          <div class="testimonial-author">
            <img src="C:\Users\ooo\OneDrive\Pictures\WhatsApp Image 2025-09-28 at 21.51.31_6ae8e76e.jpg" alt="Player" />
            <div>
              <h4>Michael Kamau</h4>
              <p>Player, U-15 Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="achievements-section">
      <div class="section-header">
        <h2>OUR ACHIEVEMENTS</h2>
        <div class="divider"></div>
      </div>
      <div class="achievements-container">
        <div class="achievement-item">
          <div class="achievement-icon">🏆</div>
          <h3>National Champions</h3>
          <p>U-9 talanta Championship Winners 2025</p>
        </div>
        <div class="achievement-item">
          <div class="achievement-icon">🥇</div>
          <h3>Regional Excellence</h3>
          <p>5-time Regional Tournament Champions</p>
        </div>
        <div class="achievement-item">
          <div class="achievement-icon">⭐</div>
          <h3>Talent Development</h3>
          <p>12+ Players Scouted by Professional Clubs</p>
        </div>
        <div class="achievement-item">
          <div class="achievement-icon">🌍</div>
          <h3>International Recognition</h3>
          <p>Partnership with European Football Academies</p>
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content">
        <h2>INVEST IN THE FUTURE OF FOOTBALL</h2>
        <p>Join us in nurturing the next generation of football champions. Your investment helps provide world-class training, facilities, and opportunities for young athletes.</p>
        <div class="cta-buttons">
          <button class="btn-primary">join us Now</button>
          <button class="btn-secondary">Download Prospectus</button>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>NEW VISION ACADEMY</h3>
          <p>Shaping Champions, Building Legends</p>
          <div class="social-links">
            <a href="https://www.facebook.com/p/New-Vision-Football-Academy-100065604635035/" class="social-link"><i class="icon-facebook">f</i></a>
            <a href="https://www.facebook.com/p/New-Vision-Football-Academy-100065604635035/" class="social-link"><i class="icon-tiktok">t</i></a>
            <a href="https://www.facebook.com/p/New-Vision-Football-Academy-100065604635035/" class="social-link"><i class="icon-instagram">i</i></a>
            <a href="https://www.facebook.com/p/New-Vision-Football-Academy-100065604635035/" class="social-link"><i class="icon-youtube">y</i></a>
           <a href="newvisionfootballacademy@gmail.com" class= "social-link"><i class="icon-mail">G</i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/help">Help</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>CONTACT US</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 728 799968</p>
          <p>✉️ newvisionfootballacademy@gmail.com</p>
        </div>
        <div class="footer-section">
          <h3>NEWSLETTER</h3>
          <p>Subscribe to get updates on our latest news and events</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} New Vision Football Academy. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default { 
  name: "landingpage",
  setup() {
    const showAbout = ref(true);
    
    const toggleAbout = () => {
      showAbout.value = !showAbout.value;
    };
    
    return {
      showAbout,
      toggleAbout
    };
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  overflow-x: hidden;
}

/* Header Styles */
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.academy-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a73e8;
  margin: 0;
}

.navigation {
  background-color: #1a73e8;
}

.link-container {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

.link {
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  display: block;
  transition: all 0.3s ease;
  font-weight: 500;
}

.link:hover {
  background-color: #0d47a1;
  color: white;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding: 50px 5%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
}

.hero-content {
  flex: 1;
  padding-right: 40px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #1a73e8;
  margin-bottom: 10px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 2rem;
  color: #0d47a1;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary, .btn-secondary {
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: #1a73e8;
  color: white;
}

.btn-primary:hover {
  background-color: #0d47a1;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background-color: transparent;
  color: #1a73e8;
  border: 2px solid #1a73e8;
}

.btn-secondary:hover {
  background-color: #1a73e8;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.hero-image {
  flex: 1;
}

.hero-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Statistics Section */
.statistics-section {
  display: flex;
  justify-content: space-around;
  padding: 50px 5%;
  background-color: #1a73e8;
  color: white;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 15px;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #1a73e8;
  margin: 0 auto;
}

/* About Section */
.about-section {
  padding: 80px 5%;
  background-color: #f9f9f9;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

.motto {
  font-style: italic;
  font-size: 1.3rem;
  font-weight: bold;
  color: #1a73e8;
  margin-top: 30px;
  text-align: center;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Video Section */
.video-section {
  padding: 80px 5%;
  background-color: white;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.video-placeholder {
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.video-placeholder img {
  width: 100%;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(26, 115, 232, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background-color: rgba(13, 71, 161, 0.9);
  transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
  color: white;
  font-size: 30px;
  margin-left: 5px;
}

.video-description {
  font-size: 1.1rem;
  color: #555;
}

/* Gallery Section */
.gallery-section {
  padding: 80px 5%;
  background-color: #f9f9f9;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 250px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(26, 115, 232, 0.8);
  color: white;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 5%;
  background-color: white;
}

.testimonials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.testimonial-item {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-content {
  margin-bottom: 20px;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.testimonial-author h4 {
  margin-bottom: 5px;
  color: #1a73e8;
}

.testimonial-author p {
  color: #777;
  font-size: 0.9rem;
}

/* Achievements Section */
.achievements-section {
  padding: 80px 5%;
  background-color: #f9f9f9;
}

.achievements-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.achievement-item {
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.achievement-item:hover {
  transform: translateY(-10px);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.achievement-item h3 {
  margin-bottom: 10px;
  color: #1a73e8;
}

.achievement-item p {
  color: #555;
}

/* Call to Action Section */
.cta-section {
  padding: 80px 5%;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta-section .btn-primary {
  background-color: white;
  color: #1a73e8;
}

.cta-section .btn-primary:hover {
  background-color: #f0f0f0;
}

.cta-section .btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.cta-section .btn-secondary:hover {
  background-color: white;
  color: #1a73e8;
}

/* Footer */
.footer {
  background-color: #111;
  color: white;
  padding: 50px 5% 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h3 {
  margin-bottom: 20px;
  color: #1a73e8;
}

.footer-section p {
  margin-bottom: 15px;
  color: #ccc;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #1a73e8;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #1a73e8;
  transform: translateY(-3px);
}

.newsletter-form {
  display: flex;
  margin-top: 15px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form button {
  padding: 10px 15px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #0d47a1;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
  color: #777;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 30px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .statistics-section {
    flex-wrap: wrap;
  }
  
  .stat-item {
    flex-basis: 50%;
    margin-bottom: 20px;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .testimonials-container {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>