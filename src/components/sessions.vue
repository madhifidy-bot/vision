<template>
  <div class="routine-container">
    <img src="C:\Users\ooo\OneDrive\Pictures\exposure.jpg" alt="Football Field" class="background-image" />
    <div class="background-overlay"></div>
    <div class="content-wrapper">
      <header class="program-header">
        <h2 class="program-title">🏃‍♂️ Our Training Program Is Here</h2>
        <div class="accent-line"></div>
      </header>

      <div class="routine-details">
        <div class="schedule-card">
          <div class="schedule-header">
            <h3 class="day">saturday - sunday</h3>
            <h4 class="tomorrow">weekends</h4>
          </div>
          
          <div class="schedule-info">
            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div class="info-content">
                <p class="info-label">Time</p>
                <p class="info-value">2PM - 5PM</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <p class="info-label">Venue</p>
                <p class="info-value">Garden Estate Primary School Ground</p>
              </div>
            </div>
          </div>
        </div>

        <div class="requirements-card">
          <h3 class="requirements-title">What to Bring</h3>
          <div class="requirements-list">
            <div class="requirement-item">
              <div class="requirement-icon">👕</div>
              <p>Full training kit</p>
            </div>
            <div class="requirement-item">
              <div class="requirement-icon">💧</div>
              <p>Water bottle</p>
            </div>
            <div class="requirement-item">
              <div class="requirement-icon">🦵</div>
              <p>Shin guards</p>
            </div>
            <div class="requirement-item">
              <div class="requirement-icon">⏱️</div>
              <p>Arrive on time</p>
            </div>
          </div>
        </div>

        <div class="note-card">
          <div class="note-header">
            <div class="note-icon">📢</div>
            <h3>IMPORTANT NOTE</h3>
          </div>
          <p class="note-text">
            WE ONLY TRAIN ON WEEKENDS. IN CASE OF ANY CHANGES, WE WILL NOTIFY ALL PARENTS!
          </p>
          <div class="closing-message">
            <p>See you on the field! ⚽</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trainers",
};
</script>

<style scoped>
.routine-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  overflow: hidden;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://picsum.photos/seed/football-field/1600/900.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  z-index: -2;
}

.background-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 78, 146, 0.7) 100%);
  z-index: -1;
}

.content-wrapper {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.program-header {
  text-align: center;
  margin-bottom: 2rem;
}

.program-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff9800, #f44336);
  margin: 0 auto;
  border-radius: 2px;
}

.routine-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.schedule-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.schedule-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.day {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tomorrow {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ff9800;
  margin: 0.5rem 0 0;
  text-transform: capitalize;
}

.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.info-content {
  flex: 1;
}

.info-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
}

.info-value {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.requirements-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.requirements-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem;
  text-align: center;
}

.requirements-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.requirement-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.requirement-item:hover {
  transform: translateY(-5px);
}

.requirement-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.requirement-item p {
  margin: 0;
  font-weight: 500;
}

.note-card {
  background: rgba(255, 152, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.note-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.note-icon {
  font-size: 1.5rem;
}

.note-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ff9800;
  margin: 0;
}

.note-text {
  font-weight: 600;
  margin: 0 0 1rem;
  line-height: 1.5;
}

.closing-message {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 1.5rem;
  }
  
  .program-title {
    font-size: 2rem;
  }
  
  .requirements-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>