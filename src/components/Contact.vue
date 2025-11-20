<template>
  <div class="contact-page">
    <!-- Header Section -->
    <header class="contact-header">
      <div class="header-overlay"></div>
      <div class="header-content">
        <h1 class="page-title">CONTACT US</h1>
        <p class="header-subtitle">We're here to help and answer any questions you might have</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="contact-main">
      <div class="contact-container">
        <!-- Contact Information Section -->
        <section class="contact-info-section">
          <h2 class="section-title">GET IN TOUCH</h2>
          <div class="contact-cards">
            <div class="contact-card">
              <div class="card-icon">📞</div>
              <h3>Phone</h3>
              <p>+254 718 088 461</p>
              <p>Mon-Fri: 9am-5pm</p>
            </div>
            
            <div class="contact-card">
              <div class="card-icon">✉️</div>
              <h3>Email</h3>
              <p>info@newvisionacademy.com</p>
              <p>support@newvisionacademy.com</p>
            </div>
            
            <div class="contact-card">
              <div class="card-icon">📍</div>
              <h3>Location</h3>
              <p>Garden Estate Primary School</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </section>

        <!-- Contact Form and Image Section -->
        <section class="contact-form-section">
          <div class="form-container">
            <h2 class="section-title">SEND US A MESSAGE</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>
              
              <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="formSubmitted" class="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            </form>
          </div>
          
          <div class="image-container">
            <img src="../assets/kids.jpg" alt="Kids at New Vision Academy" class="contact-image" />
          </div>
        </section>

        <!-- Map Section -->
        <section class="map-section">
          <h2 class="section-title">FIND US</h2>
          <div class="map-container">
            <div class="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817374617433!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTcnMzIuMCJTIDM2wrA0OSsxMi4wIkU!5e0!3m2!1sen!2ske!4v1234567890" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
          <h2 class="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div class="faq-container">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="faq-item"
              :class="{ 'active': activeIndex === index }"
            >
              <div class="faq-question" @click="toggleFaq(index)">
                <h3>{{ faq.question }}</h3>
                <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="activeIndex === index">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Social Media Section -->
        <section class="social-section">
          <h2 class="section-title">FOLLOW US</h2>
          <div class="social-links">
            <a href="#" class="social-link facebook">
              <i class="icon">f</i>
              <span>Facebook</span>
            </a>
            <a href="#" class="social-link twitter">
              <i class="icon">t</i>
              <span>Twitter</span>
            </a>
            <a href="#" class="social-link instagram">
              <i class="icon">i</i>
              <span>Instagram</span>
            </a>
            <a href="#" class="social-link youtube">
              <i class="icon">y</i>
              <span>YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';

export default { 
  name: "contact",
  setup() {
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const isSubmitting = ref(false);
    const formSubmitted = ref(false);
    const activeIndex = ref(null);
    
    const faqs = ref([
      {
        question: "What are the training schedules?",
        answer: "We train on weekends (Saturday and Sunday) from 2PM to 5PM at Garden Estate Primary School Ground. Please ensure your child comes in full training kit with water and shin guards."
      },
      {
        question: "How can I enroll my child?",
        answer: "You can enroll your child by filling out the registration form on our website or by visiting our academy during training hours. Our staff will guide you through the process."
      },
      {
        question: "What are the fees for the training program?",
        answer: "Our fees vary depending on the program. Please contact us directly for detailed information about our training programs and associated costs."
      },
      {
        question: "Are there any age restrictions?",
        answer: "We accept children of various age groups with different training programs tailored to specific age ranges. Contact us to find the right program for your child."
      },
      {
        question: "Do you provide transportation?",
        answer: "Currently, we don't provide transportation services. Parents are responsible for dropping off and picking up their children from the training venue."
      }
    ]);
    
    const submitForm = async () => {
      isSubmitting.value = true;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      isSubmitting.value = false;
      formSubmitted.value = true;
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    };
    
    const toggleFaq = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };
    
    return {
      form,
      isSubmitting,
      formSubmitted,
      faqs,
      activeIndex,
      submitForm,
      toggleFaq
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

.contact-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  overflow-x: hidden;
}

/* Header Section */
.contact-header {
  position: relative;
  height: 40vh;
  min-height: 300px;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://picsum.photos/seed/football-academy-contact/1920/600.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 0;
}

.header-content {
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  max-width: 800px;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s ease-out;
}

.header-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out;
}

/* Main Content */
.contact-main {
  padding: 3rem 0;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.2rem;
  color: #1a73e8;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #1a73e8, #0d47a1);
  border-radius: 2px;
}

/* Contact Cards */
.contact-info-section {
  margin-bottom: 4rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.contact-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a73e8;
}

.contact-card p {
  margin-bottom: 0.5rem;
  color: #555;
}

/* Contact Form Section */
.contact-form-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
}

.form-container {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a73e8;
  box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
}

.submit-btn {
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(26, 115, 232, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  animation: fadeIn 0.5s ease;
}

.image-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-container:hover .contact-image {
  transform: scale(1.05);
}

/* Map Section */
.map-section {
  margin-bottom: 4rem;
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map-placeholder {
  width: 100%;
  height: 450px;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 4rem;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.faq-item.active {
  box-shadow: 0 8px 25px rgba(26, 115, 232, 0.15);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f5f9ff;
}

.faq-question h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.faq-icon {
  font-size: 1.5rem;
  color: #1a73e8;
  font-weight: bold;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #555;
  line-height: 1.6;
  animation: slideDown 0.3s ease-out;
}

/* Social Media Section */
.social-section {
  margin-bottom: 4rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-link.facebook {
  background-color: #1877f2;
}

.social-link.twitter {
  background-color: #1da1f2;
}

.social-link.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-link.youtube {
  background-color: #ff0000;
}

.social-link:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.social-link .icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

.social-link span {
  font-size: 0.9rem;
  font-weight: 600;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .header-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-form-section {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    width: 100px;
    height: 100px;
  }
  
  .social-link .icon {
    font-size: 2rem;
  }
}
</style>