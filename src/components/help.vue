<template>
  <div class="page">
    <div class="card">
      <header class="card-header">
        <h1 class="title">WELCOME TO NEW VISION ACADEMY</h1>
        <h2 class="subtitle">WELCOME TO OUR SUPPORT SERVICES</h2>
      </header>

      <main class="card-content">
        <p class="intro">
          If you need assistance, please refer to the FAQ or contact support.
        </p>
        
        <div class="contact-section">
          <a href="tel:+254718088461" class="phone-link">
            📞 Call Us: +254 718 088 461
          </a>
          <a href="newvisionfootballacademy@gmail.com" class="email-link">
            ✉️ Email Us: support@newvisionacademy.com
          </a>
        </div>

        <section class="faq-section">
          <h3 class="faq-title">FREQUENTLY ASKED QUESTIONS</h3>
          <div class="faq-list">
            <div 
              v-for="(item, index) in faqItems" 
              :key="index" 
              class="faq-item"
              :class="{ 'active': activeIndex === index }"
            >
              <div class="faq-question" @click="toggleFaq(index)">
                <span>{{ item.question }}</span>
                <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="activeIndex === index">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </section>

        <section class="subscription-section">
          <h3 class="subscription-title">Subscribe to Our Newsletter</h3>
          <form @submit.prevent="subscribe" class="subscription-form">
            <div class="input-group">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="email-input"
                required
                :class="{ 'error': emailError }"
              />
              <button type="submit" class="btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Subscribe</span>
                <span v-else>Subscribing...</span>
              </button>
            </div>
            <div v-if="emailError" class="error-message">{{ emailError }}</div>
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
          </form>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpPage",
  data() {
    return {
      email: "",
      emailError: "",
      successMessage: "",
      isSubmitting: false,
      activeIndex: null,
      faqItems: [
        {
          question: "1️⃣ When is the Mazingira Cup and where will it be held?",
          answer: "The Mazingira Cup will be held on June 15th, 2023 at the Nairobi National Stadium. Registration starts at 8:00 AM and the event begins at 9:00 AM."
        },
        {
          question: "2️⃣ Where do you conduct your training?",
          answer: "We conduct our training at our main campus located at 123 Academy Road, Nairobi. We also offer online training sessions for remote students."
        },
        {
          question: "3️⃣ How much is the registration?",
          answer: "Registration fees vary by program. Basic courses start at KES 5,000, while advanced programs are KES 15,000. Scholarships are available for eligible students."
        }
      ]
    };
  },
  methods: {
    validateEmail() {
      if (!this.email) {
        this.emailError = "Email is required";
        return false;
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.emailError = "Email is invalid";
        return false;
      }
      this.emailError = "";
      return true;
    },
    async subscribe() {
      if (!this.validateEmail()) return;
      
      this.isSubmitting = true;
      this.successMessage = "";
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        this.successMessage = "Thank you for subscribing! Check your email for confirmation.";
        this.email = "";
      } catch (error) {
        this.emailError = "Failed to subscribe. Please try again later.";
      } finally {
        this.isSubmitting = false;
      }
    },
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(135deg, #00e6e6, #007bff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
}

.card {
  background: #ffffffdd; /* slight transparency */
  backdrop-filter: blur(6px);
  border-radius: 16px;
  padding: 2rem 3rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 600px;
  width: 100%;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card-header {
  margin-bottom: 1.5rem;
}

.title {
  color: #005fa3;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  color: #222;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-content {
  text-align: left;
}

.intro {
  color: #444;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: center;
}

.contact-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.phone-link, .email-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s;
}

.phone-link:hover, .email-link:hover {
  color: #7e0add;
}

.faq-section {
  margin-bottom: 2rem;
}

.faq-title {
  color: #005fa3;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  text-align: center;
}

.faq-list {
  list-style: none;
  padding: 0;
}

.faq-item {
  margin-bottom: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.faq-item.active {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #333;
}

.faq-question:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.faq-icon {
  font-size: 1.2rem;
  color: #007bff;
}

.faq-answer {
  padding: 0 1rem 1rem;
  color: #444;
  line-height: 1.5;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 200px; }
}

.subscription-section {
  margin-top: 2rem;
}

.subscription-title {
  color: #005fa3;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-align: center;
}

.subscription-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.email-input {
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 65%;
  outline: none;
  transition: 0.3s;
}

.email-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
}

.email-input.error {
  border-color: #e74c3c;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  min-width: 100px;
}

.btn:hover:not(:disabled) {
  background-color: #005fa3;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  text-align: center;
}

.success-message {
  color: #2ecc71;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

@media (max-width: 600px) {
  .card {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .email-input {
    width: 100%;
  }
  
  .input-group {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>