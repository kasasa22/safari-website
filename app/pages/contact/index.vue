<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="breadcrumb">
              <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">Contact Us</span>
            </div>
            <h1 class="hero-title">Get In Touch With Us</h1>
            <p class="hero-subtitle">Let's Talk Our Expert Travel Guides</p>
            <div class="hero-stats">
              <div class="stat-item">
                <svg class="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Kampala, Uganda</span>
              </div>
              <div class="stat-item">
                <svg class="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+256 768 461 164</span>
              </div>
              <div class="stat-item">
                <svg class="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>8 AM - 10 PM Daily</span>
              </div>
              <div class="stat-item price">
                <span class="price-label">Response Time</span>
                <span class="price-amount">< 1 Hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image" :style="{ backgroundImage: 'url(/much3.jpeg)' }"></div>
    </section>

    <!-- Contact Methods Section -->
    <section class="contact-methods">
      <div class="container">
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>+256 768 461 164</p>
            <p>+256 753 224 359</p>
            <span class="method-note">Mon-Sun: 8:00 AM - 10:00 PM</span>
          </div>
          
          <div class="method-card">
            <div class="method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>Kilagalaescapesafaris@gmail.com</p>
            <span class="method-note">Response within 1 hour</span>
          </div>
          
          <div class="method-card">
            <div class="method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Uganda | Kampala | Kansanga, Opp UK Mall</p>
            <span class="method-note">Monday - Sunday</span>
          </div>
          
          <div class="method-card">
            <div class="method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>+256 768 461 164</p>
            <span class="method-note">Instant messaging</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="contact-form-section">
      <div class="container">
        <div class="contact-grid">
          <div class="form-content">
            <div class="section-header">
              <span class="section-badge">GET TO KNOW US</span>
              <h2>Send a Message</h2>
              <p>Do you have a question or need help planning your Safari? Be it a first-time trip, next Uganda adventure or want to get started on tailoring your safari? Kilagala Escape Safari team is here to your rescue, we do all the heavy and hard work just for you to come and have an adventure that will last a lifetime. Tailor your Safari. Own it to suit your tests and preferences. We would love to hear from you.</p>
            </div>
            
            <div class="form-header">
              <h3>Looking for any help?</h3>
            </div>
            
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required>
              </div>
              
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" placeholder="Title" required>
              </div>
              
              <div class="form-group">
                <label for="comment">Comment</label>
                <textarea id="comment" name="comment" rows="5" placeholder="Enter Comment" required></textarea>
              </div>
              
              <button type="submit" class="submit-btn">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9"/>
                </svg>
              </button>
            </form>
          </div>
          
          <div class="contact-visual">
            <div class="main-contact-image">
              <img src="/much4.jpeg" alt="Uganda Safari Planning" class="primary-img">
              <div class="image-overlay">
                <span class="overlay-text">Expert Safari Planning</span>
              </div>
            </div>
            
            <div class="contact-gallery">
              <div class="gallery-item">
                <img src="/much5.jpeg" alt="Wildlife Safari">
                <span class="caption">Wildlife Adventures</span>
              </div>
              <div class="gallery-item">
                <img src="/much6.jpeg" alt="Cultural Experiences">
                <span class="caption">Cultural Tours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Us - Kilagala Escape Safaris',
  meta: [
    {
      name: 'description',
      content: 'Contact Kilagala Escape Safaris to plan your Uganda safari adventure. Get in touch with our expert team for personalized wildlife experiences.'
    }
  ]
})
</script>

<style scoped>
/* Contact Page Styles */
.contact-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: var(--color-forest-green);
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(45, 80, 22, 0.8) 0%, rgba(26, 48, 9, 0.6) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  color: white;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--color-golden-yellow);
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb-current {
  color: var(--color-golden-yellow);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-golden-yellow);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  align-items: center;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.stat-item.price {
  margin-left: auto;
}

.stat-icon {
  color: var(--color-golden-yellow);
}

.price-label {
  font-size: var(--font-size-sm);
  opacity: 0.8;
}

.price-amount {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-golden-yellow);
  margin-left: var(--spacing-xs);
}

/* Contact Methods Section */
.contact-methods {
  background: white;
  padding: var(--spacing-4xl) 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
}

.method-card {
  text-align: center;
  padding: var(--spacing-2xl);
  background: var(--color-light-beige);
  border-radius: var(--border-radius-lg);
  transition: transform var(--transition-fast);
}

.method-card:hover {
  transform: translateY(-5px);
}

.method-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
}

.method-card h3 {
  font-size: var(--font-size-lg);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.method-card p {
  color: var(--color-gray);
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  word-break: break-all;
  overflow-wrap: break-word;
}

.method-note {
  font-size: var(--font-size-sm);
  color: var(--color-golden-yellow);
  font-weight: 600;
}

/* Contact Form Section */
.contact-form-section {
  padding: var(--spacing-5xl) 0;
  background: var(--color-light-beige);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-5xl);
  align-items: start;
}

/* Global Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section-badge {
  display: inline-block;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-lg);
}

.section-header h2 {
  font-size: var(--font-size-3xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
  line-height: 1.2;
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: var(--spacing-2xl);
}

/* Form Styles */
.form-header {
  margin-bottom: var(--spacing-xl);
}

.form-header h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

.contact-form {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-3xl);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid #e5e5e5;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast);
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-golden-yellow);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: var(--color-forest-green);
  color: white;
  padding: var(--spacing-lg) var(--spacing-2xl);
  border: none;
  border-radius: 50px;
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.submit-btn:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Contact Visual */
.contact-visual {
  display: grid;
  gap: var(--spacing-lg);
  padding-left: var(--spacing-xl);
  padding-top: var(--spacing-3xl);
}

.main-contact-image {
  position: relative;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  height: 350px;
}

.primary-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: var(--spacing-xl);
  color: white;
}

.overlay-text {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.contact-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  height: 150px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.caption {
  position: absolute;
  bottom: var(--spacing-sm);
  left: var(--spacing-sm);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: var(--font-size-xs);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
  
  .contact-visual {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    gap: var(--spacing-md);
  }
  
  .stat-item.price {
    margin-left: 0;
  }
  
  .methods-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .contact-gallery {
    grid-template-columns: 1fr;
  }
  
  .gallery-item {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: flex-start;
  }
  
  .methods-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    padding: var(--spacing-lg);
  }
  
  .section-header h2 {
    font-size: var(--font-size-2xl);
  }
}
</style>