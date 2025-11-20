<template>
  <main class="about-page">
    
  
    <section class="hero">
      <div class="hero-content">
        <h1>Where Vision Takes Shape</h1>
        <p>New Vision Design is a collective of creative thinkers, strategists, and builders dedicated to transforming bold ideas into impactful, beautiful realities.</p>
      </div>
    </section>
    <section class="content-section our-story">
      <h2>More Than a Name, Our Mission</h2>
      <p>The world is full of noise. Great ideas get lost in a sea of sameness. New Vision Design was born from a simple belief: that exceptional design isn't just about aesthetics; it's about clarity, connection, and purpose.</p>
      <p>Our founder, [ABIUD], saw a gap between strategic thinking and beautiful execution. We set out to build a different kind of studio—one where data-driven strategy and human-centered creativity work in perfect harmony.</p>
    </section>
    <section class="content-section philosophy">
      <h2>Our Approach: Strategy, Heart, and Craft</h2>
      <p>We believe the best design is invisible—it works so well that the user feels understood. Our process is built on three core pillars:</p>
      <div class="pillars">
        <div class="pillar" v-for="pillar in pillars" :key="pillar.title">
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.description }}</p>
        </div>
      </div>
    </section>

  
    <section class="content-section team-section">
      <h2>The Visionaries</h2>
      <div class="team-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <img :src="member.imageSrc" :alt="`Photo of ${member.name}`" class="team-member-photo">
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <p>{{ member.bio }}</p>
        </div>
      </div>
    </section>

    
    <section class="content-section values-section">
      <h2>What We Believe In</h2>
      <p>Our values are the compass that guides our work and our relationships.</p>
      <div class="values-grid">
        <div class="value" v-for="value in companyValues" :key="value.title">
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </section>
    <section class="cta">
      <h2>Ready to Bring Your Vision to Life?</h2>
      <p>Let's stop talking about the future and start building it. Whether you have a fully-formed concept or just a spark of an idea, we're here to help.</p>
      <button class="cta-button" @click="handleCtaClick">Get in Touch</button>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
// If you use Vue Router, import useRouter:
// import { useRouter } from 'vue-router';

// const router = useRouter();

// --- CUSTOMIZE YOUR DATA HERE ---

const teamMembers = ref([
  {
    name: '[ABIUD]',
    role: 'Creative Director & Founder',
    bio: 'With over 15 years of experience, Jane is the heart and soul of New Vision Design. Her passion lies in uncovering the core story of a brand.',
    // IMPORTANT: Place your team images in the /src/assets/images/ folder
    imageSrc: "C:\Users\ooo\OneDrive\Pictures\Screenshots\ABIUD.png"
  },
  {
    name: 'Wahome',
    role: 'technical coach',
    bio: 'wahome is our technical coach ensures that young talents are well equipped and transformed.',
    imageSrc: "C:\Users\ooo\OneDrive\Pictures\Screenshots\ONEMINUTEMAN.png"
  },
  {
    name: 'mwalimu',
    role: 'hostilic coach',
    bio: ' mwalimu is our holistic coach ensuring that our talents are well grounded both physically and mentally.',
    imageSrc: "C:\Users\ooo\OneDrive\Pictures\Screenshots\MWALIMU.png"
  },
   {
    name: 'steve',
    role: 'assistant coach',
    bio: 'steve is our assistant coach helping in training and mentoring our young talents.',
    imageSrc:"C:\Users\ooo\OneDrive\Pictures\Screenshots\STEVE.png"
  },
   {
    name: 'maria',
    role: 'official',
    bio: 'maria is our official ensuring that all our activities are well documented and organized.',
    imageSrc: "C:\Users\ooo\OneDrive\Pictures\Screenshots\MSISTA.png"
  }

]);

const pillars = ref([
  {
    title: 'Strategy First',
    description: 'We start by diving deep into your goals, your audience, and your market. Every choice is deliberate and aimed at achieving a specific objective.'
  },
  {
    title: 'Human-Centered',
    description: 'We design for people. By empathizing with the end-user, we create experiences that are intuitive, engaging, and solve real problems.'
  },
  {
    title: 'Collaborative Partnership',
    description: 'We\'re an extension of your team. We believe the best results come from a transparent, iterative process where your insights are invaluable.'
  }
]);

const companyValues = ref([
  {
    title: 'Innovation',
    description: 'We are endlessly curious, always exploring new technologies and techniques to find a better way.'
  },
  {
    title: 'Collaboration',
    description: 'Your dream is our blueprint. We foster open communication and believe the best ideas are born from partnership.'
  },
  {
    title: 'Integrity',
    description: 'We do what we say we will do. We operate with transparency, honesty, and a commitment to excellence.'
  },
  {
    title: 'Impact',
    description: 'Design must do more than just look good—it must deliver results. We measure our success by the success of our clients.'
  }
]);

// --- END OF CUSTOM DATA ---


// CTA Button Click Handler
function handleCtaClick() {

  window.location.href = 'mailto:hello@newvisiondesign.com?subject=Project Inquiry';


  console.log('CTA button clicked!');
}

</script>

<style scoped>
.about-page {
  background-image: url("C:\Users\ooo\OneDrive\Pictures\download.jpg");
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  background-repeat: no-repeat;
}

.content-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0056b3; /* A nice accent color */
}

p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #555;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Philosophy Pillars */
.pillars {
  display: flex;
  gap: 30px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.pillar {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
    transform: translateY(-5px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.1); 
}
.team-member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
.role {
  font-style: italic;
  color: #777;
  margin-bottom: 1rem;
}
/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 2rem;
}
.value {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}
/* Call to Action Section */
.cta {    
  background-color: #0056b3;
  color: #fff;
  text-align: center;
  padding: 60px 20px;
  margin-top: 40px;
}
.cta-button {
  background-color: #ff6f61;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.cta-button:hover {
  background-color: #e65b50;
}
</style>