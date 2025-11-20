<template>
  <div class="tournament-container">
    <!-- Header Section -->
    <header class="header">
      <h1 class="main-title">  New vision football academy Tournament Fixtures 2025</h1>
      <p class="header-subtitle">Register now for our upcoming tournaments</p>
    </header>

    <!-- Tournament Cards Grid -->
    <div class="tournaments-grid">
      <!-- Holiday League Card -->
      <div class="tournament-card holiday-league">
        <div class="card-header">
          <h2 class="tournament-name">HOLIDAY LEAGUE</h2>
          <div class="tournament-date">
            <span class="date-icon">📅</span>
            <span>3rd – 29th November 2025</span>
          </div>
        </div>
        
        <div class="card-content">
          <div class="tournament-details">
            <div class="detail-item">
              <span class="detail-label">Categories:</span>
              <span class="detail-value">U7, U9, U11, U13, U15</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Registration Fee:</span>
              <span class="detail-value fee">KSh 1,500/- per category</span>
            </div>
            <div class="detail-item total">
              <span class="detail-label">All Categories:</span>
              <span class="detail-value">KSh 7,500/-</span>
            </div>
            <div class="detail-item deadline">
              <span class="detail-label">Registration Deadline:</span>
              <span class="detail-value">25th October 2025</span>
            </div>
          </div>
          
          <div class="card-actions">
            <a href="https://wa.me/+254728799968?text=Hello%20I%20would%20like%20to%20register%20for%20the%20Holiday%20League%202025"
  target="_blank"
  rel="noopener noreferrer">
            <button class="btn-register">Register Now</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Mazingira Cup Card -->
      <div class="tournament-card mazingira-cup">
        <div class="card-header">
          <h2 class="tournament-name">MAZINGIRA KID'S SUPER CUP</h2>
          <div class="tournament-date">
            <span class="date-icon">📅</span>
            <span>November 21–22, 2025</span>
          </div>
        </div>
        
        <div class="card-content">
          <div class="tournament-details">
            <div class="detail-item">
              <span class="detail-label">Location:</span>
              <span class="detail-value">Lower Kabete</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Categories:</span>
              <span class="detail-value">U7, U9, U11, U13, U15</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Registration Fee:</span>
              <span class="detail-value fee">KSh 1,400/- per player</span>
            </div>
          </div>
          
          <div class="card-actions">
            <a
  href="https://wa.me/+254 728799968?text=Hello%20I%20would%20like%20to%20register%20for%20the%20Mazingira%20Kid's%20Super%20Cup%202025"
  target="_blank"
  rel="noopener noreferrer">
            <button class="btn-register">Register Now!!</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Nairobi International Cup Card -->
      <div class="tournament-card nairobi-cup">
        <div class="card-header">
          <h2 class="tournament-name">NAIROBI INTERNATIONAL CUP</h2>
          <div class="tournament-date">
            <span class="date-icon">📅</span>
            <span>August 12–16, 2025</span>
          </div>
        </div>
        
        <div class="card-content">
          <div class="tournament-details">
            <div class="detail-item">
              <span class="detail-label">Location:</span>
              <span class="detail-value">Lenana School</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Categories:</span>
              <span class="detail-value">U9, U11, U13, U15, U17</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Schedule:</span>
              <span class="detail-value">Tuesday - Saturday</span>
            </div>
          </div>
          
          <div class="card-actions">
            <button class="btn-register">COMPLETED</button>
          </div>
        </div>
      </div>

      <!-- Talanta Cup Card -->
      <div class="tournament-card talanta-cup">
        <div class="card-header">
          <h2 class="tournament-name">TAMBUA TALANTA</h2>
          <div class="tournament-date">
            <span class="date-icon">📅</span>
            <span>August 23rd, 2025</span>
          </div>
        </div>
        
        <div class="card-content">
          <div class="tournament-details">
            <div class="detail-item">
              <span class="detail-label">Location:</span>
              <span class="detail-value">Kiambu Ground</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Categories:</span>
              <span class="detail-value">U9, U11, U13, U15, U17</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Registration Fee:</span>
              <span class="detail-value fee">KSh 400/- per category</span>
            </div>
            <div class="detail-item total">
              <span class="detail-label">All Categories:</span>
              <span class="detail-value">KSh 12,000/-</span>
            </div>
            <div class="detail-item deadline">
              <span class="detail-label">Confirmation By:</span>
              <span class="detail-value">August 5th, 2025</span>
            </div>
          </div>
          
          <div class="card-actions">
            <button class="btn-register">COMPLETED</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">If you need assistance, please refer to the FAQ or contact support.</p>
        <div class="contact-info">
          <span class="contact-item">📧 info@tournaments.com</span>
          <span class="contact-item">📞 +254 728 799968</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default { 
  name: "fixtures"
}
import { ref } from 'vue'  
</script>

<style scoped>
/* Background and Container Styles */
.tournament-container {
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('https://picsum.photos/seed/soccer-stadium/1920/1080.jpg');
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

/* Tournament Grid */
.tournaments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Tournament Card Styles */
.tournament-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.tournament-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

/* Card Header */
.card-header {
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
}

.holiday-league .card-header {
  background: linear-gradient(135deg, #005fa3, #0077cc);
}

.mazingira-cup .card-header {
  background: linear-gradient(135deg, #2e7d32, #4caf50);
}

.nairobi-cup .card-header {
  background: linear-gradient(135deg, #c62828, #e53935);
}

.talanta-cup .card-header {
  background: linear-gradient(135deg, #6a1b9a, #9c27b0);
}

.tournament-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.tournament-date {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
}

.date-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

/* Card Content */
.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.tournament-details {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 600;
  color: #333;
}

.detail-value {
  color: #555;
  text-align: right;
  max-width: 60%;
}

.detail-item.total .detail-value {
  font-weight: 700;
  color: #005fa3;
}

.detail-item.deadline .detail-value {
  font-weight: 600;
  color: #c62828;
}

.fee {
  font-weight: 600;
  color: #2e7d32;
}

/* Card Actions */
.card-actions {
  margin-top: auto;
  text-align: center;
}

.btn-register {
  background: linear-gradient(135deg, #005fa3, #0077cc);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 95, 163, 0.3);
}

.btn-register:hover {
  background: linear-gradient(135deg, #004d8a, #0066b3);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 95, 163, 0.4);
}

.btn-register:active {
  transform: translateY(0);
}

/* Footer Styles */
.footer {
  margin-top: 3rem;
  text-align: center;
  color: white;
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
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.2rem;
  }
  
  .tournaments-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>