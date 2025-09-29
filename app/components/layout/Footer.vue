<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section footer-brand">
            <div class="footer-logo">
              <img src="/KILAGALA-LOGO-FINAL--2.jpg" alt="Kilagala Escape Safaris" class="footer-logo-img">
            </div>
            <p class="footer-description">
              Experience the wild beauty of Uganda and East Africa with our eco-friendly safari tours. 
              From mountain gorilla trekking to wildlife adventures, we offer unique and immersive 
              experiences that showcase Africa's natural beauty and rich biodiversity.
            </p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook" class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/about">About Us</NuxtLink></li>
              <li><NuxtLink to="/safaris">Safari Packages</NuxtLink></li>
              <li><NuxtLink to="/destinations">Destinations</NuxtLink></li>
              <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
              <li><NuxtLink to="/blog">Travel Blog</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Safari Types</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/safaris/gorilla">Mountain Gorilla Trekking</NuxtLink></li>
              <li><NuxtLink to="/safaris/wildlife">Wildlife Safari Tours</NuxtLink></li>
              <li><NuxtLink to="/safaris/birdwatching">Bird Watching Tours</NuxtLink></li>
              <li><NuxtLink to="/safaris/cultural">Cultural Experiences</NuxtLink></li>
              <li><NuxtLink to="/safaris/hiking">Hiking & Trekking</NuxtLink></li>
              <li><NuxtLink to="/safaris/eco">Eco-Tourism Packages</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Contact Info</h4>
            <div class="footer-contact">
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p>Head Office</p>
                  <span>Kansanga, Opp UK Mall</span>
                  <span>Kampala, Uganda</span>
                </div>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>
                </svg>
                <div>
                  <p>Call / WhatsApp</p>
                  <span>+256 768 461 164</span>
                </div>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
                <div>
                  <p>Email Us</p>
                  <span>Kilagalaescapesafaris@gmail.com</span>
                </div>
              </div>
            </div>
            <div class="working-hours">
              <p class="hours-label">Working Hours</p>
              <p class="hours-time">Monday to Sunday: 8:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} Kilagala Escape Safaris. All rights reserved.</p>
          <div class="footer-bottom-links">
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms">Terms & Conditions</NuxtLink>
            <NuxtLink to="/sitemap">Sitemap</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
  color: var(--color-white);
  margin-top: auto;
}

.footer-top {
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
  position: relative;
}

.footer-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    var(--color-golden-yellow) 0%, 
    var(--color-forest-green) 50%, 
    var(--color-golden-yellow) 100%);
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--spacing-3xl);
}

.footer-brand {
  padding-right: var(--spacing-xl);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.footer-logo-img {
  width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

.footer-title {
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-weight: 700;
  margin: 0;
}

.footer-tagline {
  font-size: var(--font-size-sm);
  color: var(--color-golden-yellow);
  margin-top: 4px;
}

.footer-description {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-sm);
}

.footer-social {
  display: flex;
  gap: var(--spacing-sm);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--color-white);
  transition: all var(--transition-fast);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
  background: var(--color-golden-yellow);
  color: var(--color-charcoal);
  transform: translateY(-3px);
  border-color: var(--color-golden-yellow);
}

.footer-heading {
  color: var(--color-golden-yellow);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  position: relative;
  padding-bottom: var(--spacing-sm);
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--color-golden-yellow);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  display: inline-block;
  position: relative;
}

.footer-links a::before {
  content: '→';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-golden-yellow);
  padding-left: var(--spacing-md);
}

.footer-links a:hover::before {
  opacity: 1;
  left: 0;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.contact-item svg {
  color: var(--color-golden-yellow);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item p {
  margin: 0;
  font-weight: 600;
  color: var(--color-white);
  font-size: var(--font-size-sm);
}

.contact-item span {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.7);
  display: block;
}

.working-hours {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.hours-label {
  font-weight: 600;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-sm);
}

.hours-time {
  color: rgba(255, 255, 255, 0.9);
  font-size: var(--font-size-sm);
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-lg) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
}

.footer-bottom-links {
  display: flex;
  gap: var(--spacing-xl);
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
  transition: color var(--transition-fast);
}

.footer-bottom-links a:hover {
  color: var(--color-golden-yellow);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
  
  .footer-logo {
    justify-content: center;
  }
  
  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-social {
    justify-content: center;
  }
  
  .footer-links {
    align-items: center;
  }
  
  .footer-links a::before {
    display: none;
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}
</style>