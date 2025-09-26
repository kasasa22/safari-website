<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="breadcrumb">
              <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">About Us</span>
            </div>
            <h1 class="hero-title">Kilagala Escape Safaris</h1>
            <p class="hero-subtitle">Uganda's Premier Wildlife Safari Experience</p>
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
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>Since 2015</span>
              </div>
              <div class="stat-item">
                <div class="rating-stars">
                  <span v-for="star in 5" :key="star" class="star filled">★</span>
                </div>
                <span>(500+ reviews)</span>
              </div>
              <div class="stat-item price">
                <span class="price-label">Success Rate</span>
                <span class="price-amount">99%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image" :style="{ backgroundImage: 'url(/much1.jpeg)' }"></div>
    </section>

    <!-- Quick Info Bar -->
    <section class="quick-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-icon">🦍</div>
            <div class="info-content">
              <h4>Specialization</h4>
              <p>Gorilla Tracking</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">👥</div>
            <div class="info-content">
              <h4>Experience</h4>
              <p>9+ Years</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🌍</div>
            <div class="info-content">
              <h4>Coverage</h4>
              <p>All Uganda Parks</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🏆</div>
            <div class="info-content">
              <h4>Recognition</h4>
              <p>Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <div class="section-header">
              <span class="section-badge">OUR JOURNEY</span>
              <h2>From Local Guides to Uganda's Leading Safari Company</h2>
            </div>
            
            <div class="story-text">
              <p>
                Kilagala Escape Safaris is a Ugandan-based and owned tour and travel company that takes pride in 
                offering tailor-made all-inclusive luxury, mid-range and budget safaris around your desired 
                destination all over Uganda. We cater to small groups, solo travelers, families, big groups, 
                and business travelers among others.
              </p>
              
              <p>
                Our story began with one woman's passion for exploring the beauty and diversity of Uganda. 
                Her love for travel and connecting with local cultures inspired the creation of a company 
                focused on authentic, personalized experiences. Today, her vision continues through a dedicated 
                team committed to showcasing the best of Uganda—its wildlife, landscapes, and warm hospitality.
              </p>
              
              <p>
                We truly understand that every journey has unique needs, therefore we offer customized travel 
                packages designed according to your preferences and budget. Uganda is not just a tour destination 
                to us but home, so we take pleasure in helping travelers adventure the Pearl of Africa and unveil 
                why Sir Winston Churchill named it the pearl of Africa in 1908.
              </p>
              
              <div class="founder-quote">
                <blockquote>
                  "We won't show you Uganda, we will show you the Pearl of Africa like you have never seen it before. 
                  Journey into the heart of the wilderness with Kilagala Escape Safaris - where we create memories 
                  that will leave a lifetime mark in your life."
                </blockquote>
                <cite>- Mubiru Ronnie, Chief Technology Officer & Founder</cite>
              </div>
            </div>
          </div>
          
          <div class="story-visual">
            <div class="main-story-image">
              <img src="/much2.jpeg" alt="Mountain Gorilla in Bwindi Forest" class="primary-img">
              <div class="image-overlay">
                <span class="overlay-text">Uganda's Incredible Wildlife</span>
              </div>
            </div>
            
            <div class="story-gallery">
              <div class="gallery-item">
                <img src="/much3.jpeg" alt="Murchison Falls">
                <span class="caption">Murchison Falls</span>
              </div>
              <div class="gallery-item">
                <img src="/much4.jpeg" alt="Queen Elizabeth Wildlife">
                <span class="caption">Safari Adventures</span>
              </div>
              <div class="gallery-item">
                <img src="/much5.jpeg" alt="Local Community">
                <span class="caption">Conservation Work</span>
              </div>
              <div class="gallery-item">
                <img src="/much6.jpeg" alt="Uganda Landscapes">
                <span class="caption">Uganda Beauty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="mission-section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-badge">OUR MISSION</span>
          <h2>Responsible Tourism & Conservation</h2>
          <p>Kilagala Escape Safaris is committed to responsible tourism for conservation and sustainable development. We support conservation projects and empower local communities through tourism.</p>
        </div>
        
        <div class="mission-grid">
          <div class="mission-card conservation">
            <div class="mission-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Wildlife Conservation</h3>
            <p>20% of every safari directly funds anti-poaching efforts, habitat restoration, and wildlife research programs across Uganda's national parks.</p>
            <div class="impact-stat">
              <span class="number">$50K+</span>
              <span class="label">Donated to Conservation</span>
            </div>
          </div>
          
          <div class="mission-card community">
            <div class="mission-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Community Empowerment</h3>
            <p>We employ local guides, support community projects, and ensure tourism benefits reach the people who live alongside Uganda's wildlife.</p>
            <div class="impact-stat">
              <span class="number">150+</span>
              <span class="label">Local Jobs Created</span>
            </div>
          </div>
          
          <div class="mission-card experience">
            <div class="mission-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>Authentic Experiences</h3>
            <p>Small group sizes, expert local guides, and exclusive access create intimate encounters with Uganda's incredible wildlife and cultures.</p>
            <div class="impact-stat">
              <span class="number">4.9/5</span>
              <span class="label">Guest Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div class="conservation-showcase">
          <div class="showcase-content">
            <h3>Our Conservation Impact</h3>
            <p>Since 2015, Kilagala Escape Safaris has contributed to gorilla habitat protection, 
            anti-poaching initiatives, and community development programs that benefit both wildlife and people.</p>
          </div>
          <div class="showcase-stats">
            <div class="showcase-stat">
              <span class="stat-icon">🦍</span>
              <span class="stat-number">12</span>
              <span class="stat-label">Gorilla Families Supported</span>
            </div>
            <div class="showcase-stat">
              <span class="stat-icon">🌳</span>
              <span class="stat-number">500+</span>
              <span class="stat-label">Hectares Protected</span>
            </div>
            <div class="showcase-stat">
              <span class="stat-icon">👨‍👩‍👧‍👦</span>
              <span class="stat-number">25</span>
              <span class="stat-label">Communities Benefited</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-badge">OUR TEAM</span>
          <h2>Escape Safaris Team Members</h2>
          <p>Meet the passionate team behind your unforgettable Uganda adventures</p>
        </div>
        
        <div class="team-grid">
          <div class="team-member">
            <div class="member-image">
              <img src="/much1.jpeg" alt="Mubiru Ronnie">
            </div>
            <div class="member-info">
              <h3>Mubiru Ronnie</h3>
              <p class="role">Chief Technology Officer & Founder</p>
              <p class="description">Leading the technological advancement and digital presence of Kilagala Escape Safaris while ensuring seamless safari experiences.</p>
            </div>
          </div>
          
          <div class="team-member">
            <div class="member-image">
              <img src="/much2.jpeg" alt="Kiwumulo Merandah Hildah">
            </div>
            <div class="member-info">
              <h3>Kiwumulo Merandah Hildah</h3>
              <p class="role">Travel Writer & Founder</p>
              <p class="description">The visionary behind Kilagala Escape Safaris, passionate about showcasing Uganda's beauty through authentic travel experiences.</p>
            </div>
          </div>
        </div>
        
        <div class="stats-showcase">
          <div class="stat-card">
            <span class="stat-number">50K+</span>
            <span class="stat-label">Happy Travelers</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">99%</span>
            <span class="stat-label">Satisfaction Rate</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5+</span>
            <span class="stat-label">Years of Experience</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">50K+</span>
            <span class="stat-label">Destinations</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="expertise-section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-badge">WHY BOOK WITH US</span>
          <h2>Why Book with Kilagala Escape Safaris</h2>
          <p>We combine years of experience with a commitment to excellence, ensuring your journey is both exciting and seamless</p>
        </div>
        
        <div class="expertise-grid">
          <div class="expertise-item">
            <div class="expertise-icon">📞</div>
            <h3>24/7 Customer Support</h3>
            <p>No matter the time zone, we're here to help. Round-the-clock assistance before, during, and after your safari.</p>
          </div>
          
          <div class="expertise-item">
            <div class="expertise-icon">👨‍🏫</div>
            <h3>Expert Guides</h3>
            <p>Passionate, experienced, and deeply connected to Uganda's culture and wildlife with extensive local knowledge.</p>
          </div>
          
          <div class="expertise-item">
            <div class="expertise-icon">✨</div>
            <h3>Tailor-Made Safaris</h3>
            <p>From luxury escapes to budget-friendly adventures, crafted to suit your style and preferences.</p>
          </div>
          
          <div class="expertise-item">
            <div class="expertise-icon">🛡️</div>
            <h3>Trusted & Reliable</h3>
            <p>Seamless planning, comfortable transport, and well-selected accommodations for stress-free travel.</p>
          </div>
          
          <div class="expertise-item">
            <div class="expertise-icon">🌱</div>
            <h3>Responsible Travel</h3>
            <p>We support conservation projects and empower local communities through sustainable tourism practices.</p>
          </div>
          
          <div class="expertise-item">
            <div class="expertise-icon">🎯</div>
            <h3>Authentic Experiences</h3>
            <p>Gorilla trekking, wildlife encounters, cultural immersions, and off-the-beaten-path discoveries.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-badge">GUEST STORIES</span>
          <h2>Unforgettable Uganda Experiences</h2>
          <p>Real stories from travelers who discovered Uganda's magic with us</p>
        </div>
        
        <div class="testimonials-slider">
          <div class="testimonial-card featured">
            <div class="testimonial-quote">
              <p>"Seeing mountain gorillas face-to-face in Bwindi was the most profound wildlife experience of my life. The Kilagala team's knowledge and respect for these incredible creatures made it even more special."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-details">
                <h4>Sarah Martinez</h4>
                <span>Wildlife Photographer, California</span>
                <div class="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          
          <div class="testimonials-grid">
            <div class="testimonial-card compact">
              <p>"The tree-climbing lions in Queen Elizabeth Park were incredible! Our guide James spotted them from miles away."</p>
              <div class="author-compact">
                <strong>Michael Chen</strong> • Adventure Traveler
                <div class="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div class="testimonial-card compact">
              <p>"Murchison Falls boat safari exceeded all expectations. The wildlife viewing was phenomenal and our guide's passion infectious."</p>
              <div class="author-compact">
                <strong>Emma Thompson</strong> • Nature Enthusiast
                <div class="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-background">
        <img src="/much6.jpeg" alt="Uganda Sunset Safari" class="cta-bg-image">
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Your Uganda Adventure Awaits</h2>
          <p>Experience the pearl of Africa with Uganda's most trusted safari experts</p>
          
          <div class="cta-features">
            <div class="cta-feature">
              <span class="feature-icon">✓</span>
              <span>99% Gorilla Tracking Success</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">✓</span>
              <span>All Parks & Activities Covered</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">✓</span>
              <span>Conservation-Focused Tourism</span>
            </div>
          </div>
          
          <div class="cta-buttons">
            <NuxtLink to="/destinations" class="btn-primary">
              View Our Destinations
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary">
              Start Planning Your Safari
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us - Kilagala Escape Safaris',
  meta: [
    {
      name: 'description',
      content: 'Learn about Kilagala Escape Safaris and our commitment to providing exceptional wildlife experiences while supporting conservation in East Africa.'
    }
  ]
})
</script>

<style scoped>
/* Reset and Base */
.about-page {
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

.rating-stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ccc;
  transition: color var(--transition-fast);
}

.star.filled {
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

/* Quick Info Bar */
.quick-info {
  background: white;
  padding: var(--spacing-xl) 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-light-beige);
  border-radius: var(--border-radius-lg);
  transition: transform var(--transition-fast);
}

.info-item:hover {
  transform: translateY(-2px);
}

.info-icon {
  font-size: 2rem;
  width: 50px;
  text-align: center;
}

.info-content h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-forest-green);
  margin-bottom: 4px;
}

.info-content p {
  color: var(--color-gray);
  margin: 0;
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
  margin-bottom: var(--spacing-lg);
}

.section-header {
  margin-bottom: var(--spacing-3xl);
  margin-top: var(--spacing-lg);
}

.section-header.centered {
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--spacing-3xl);
  margin-top: var(--spacing-lg);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
  line-height: 1.2;
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  line-height: 1.7;
}

/* Story Section */
.story-section {
  padding: var(--spacing-6xl) 0 var(--spacing-6xl) 0;
  background: var(--color-light-beige);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-6xl);
  align-items: center;
}

.story-text p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.founder-quote {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--color-golden-yellow);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-4xl);
}

.founder-quote blockquote {
  font-size: var(--font-size-lg);
  font-style: italic;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
}

.founder-quote cite {
  color: var(--color-golden-yellow);
  font-weight: 600;
  font-style: normal;
}

.story-visual {
  display: grid;
  gap: var(--spacing-lg);
  padding-left: var(--spacing-2xl);
}

.main-story-image {
  position: relative;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  height: 400px;
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

.story-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  height: 180px;
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

/* Mission Section */
.mission-section {
  padding: var(--spacing-4xl) 0 var(--spacing-4xl) 0;
  background: white;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.mission-card {
  background: var(--color-light-beige);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
  transition: transform var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mission-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.mission-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-golden-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: var(--color-forest-green-dark);
}

.mission-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.mission-card p {
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.impact-stat .number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-xs);
}

.impact-stat .label {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  font-weight: 600;
}

.conservation-showcase {
  background: var(--color-forest-green-dark);
  color: white;
  padding: var(--spacing-4xl);
  border-radius: var(--border-radius-xl);
  margin-top: var(--spacing-5xl);
  margin-bottom: var(--spacing-5xl);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-4xl);
  align-items: center;
}

.showcase-content h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-golden-yellow);
}

.showcase-content p {
  line-height: 1.7;
  opacity: 0.9;
}

.showcase-stats {
  display: flex;
  gap: var(--spacing-2xl);
}

.showcase-stat {
  text-align: center;
  min-width: 120px;
}

.stat-icon {
  font-size: 32px;
  display: block;
  margin-bottom: var(--spacing-xs);
}

.stat-number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

/* Team Section */
.team-section {
  padding: var(--spacing-4xl) 0 var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-4xl);
}

.team-member {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.member-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto var(--spacing-lg);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.member-info .role {
  color: var(--color-golden-yellow);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-base);
}

.member-info .description {
  color: var(--color-gray);
  line-height: 1.6;
  font-size: var(--font-size-base);
}

.stats-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.stat-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.stat-card:hover {
  transform: translateY(-3px);
}

.stat-number {
  display: block;
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  color: var(--color-gray);
  font-size: var(--font-size-base);
  font-weight: 600;
}

/* Expertise Section */
.expertise-section {
  padding: var(--spacing-4xl) 0 var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.expertise-item {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.expertise-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.expertise-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}

.expertise-item h3 {
  font-size: var(--font-size-lg);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.expertise-item p {
  color: var(--color-gray);
  line-height: 1.6;
  font-size: var(--font-size-base);
}

/* Testimonials Section */
.testimonials-section {
  padding: var(--spacing-4xl) 0 var(--spacing-5xl) 0;
  background: white;
}

.testimonials-slider {
  display: grid;
  gap: var(--spacing-4xl);
  margin-top: var(--spacing-xl);
}

.testimonial-card.featured {
  background: var(--color-light-beige);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-quote p {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: var(--spacing-2xl);
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
}

.author-details h4 {
  color: var(--color-forest-green-dark);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.author-details span {
  color: var(--color-gray);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
  display: block;
}

.rating {
  font-size: var(--font-size-lg);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.testimonial-card.compact {
  background: var(--color-light-beige);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--color-golden-yellow);
}

.testimonial-card.compact p {
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  font-style: italic;
}

.author-compact {
  font-size: var(--font-size-sm);
  color: var(--color-forest-green-dark);
}

.author-compact .rating {
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-base);
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: var(--spacing-6xl) 0 var(--spacing-6xl) 0;
  text-align: center;
  color: white;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.cta-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: var(--font-size-4xl);
  margin-top: var(--spacing-3xl);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.cta-content p {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.95;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-base);
  font-weight: 500;
}

.feature-icon {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-xl);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-3xl);
}

.btn-primary,
.btn-secondary {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all var(--transition-normal);
  display: inline-block;
}

.btn-primary {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  border: none;
}

.btn-primary:hover {
  background: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--color-forest-green-dark);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .story-grid,
  .conservation-showcase {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
  
  .conservation-showcase {
    text-align: center;
  }
  
  .showcase-stats {
    justify-content: center;
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
  
  .info-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-md);
  }
  
  .info-item {
    padding: var(--spacing-md);
  }
  
  .story-gallery {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .gallery-item {
    height: 200px;
  }
  
  .mission-grid,
  .expertise-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .testimonial-author {
    text-align: center;
  }
  
  .cta-features {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: 0 auto;
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
  
  .section-header h2 {
    font-size: var(--font-size-3xl);
  }
  
  .mission-card,
  .expertise-item {
    padding: var(--spacing-lg);
  }
  
  .testimonial-card.featured {
    padding: var(--spacing-xl);
  }
  
  .testimonial-quote p {
    font-size: var(--font-size-lg);
  }
}
</style>
