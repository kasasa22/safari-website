<template>
  <div class="home-page">
    <!-- Hero Section with Video Background -->
    <section class="hero">
      <div class="hero-video-container">
        <div class="hero-slides">
          <div class="hero-slide active" style="background-image: url('../../public/much1.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('../../public/much2.jpeg')"></div>
          <div class="hero-slide" style="background-image: url('../../public/much3.jpeg')"></div>
        </div>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <span class="hero-badge">🌍 KILAGALA ESCAPE SAFARIS - THE PEARL OF AFRICA</span>
            <h1 class="hero-title">Adventure into the Heart of the Wilderness</h1>
            <p class="hero-subtitle">Experience Uganda's breathtaking landscapes, mountain gorillas, and vibrant culture with expert local guides</p>
            <div class="hero-description">
              <p>🦍 Track endangered Mountain Gorillas in misty rainforests</p>
              <p>🦁 Witness lions, elephants, leopards, rhinos & buffalo in their kingdom</p>
              <p>🦓 Experience 2 million wildebeest crossing the Serengeti</p>
            </div>
            <div class="hero-cta">
              <NuxtLink to="/safaris" class="btn-primary">
                <span class="btn-icon">🧭</span>
                Start Your Journey
              </NuxtLink>
              <button class="btn-secondary">
                <span class="btn-icon">▶️</span>
                Watch Safari Video
              </button>
            </div>
            <div class="hero-scroll-indicator">
              <span>Scroll to explore</span>
              <div class="scroll-arrow">↓</div>
            </div>
          </div>
          
          <div class="hero-contact-strip">
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>Kampala, Kansanga, Opp UK Mall</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>+256 768 461 164</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">⏰</span>
              <span>Mon-Sun: 8:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Adventure Quick Links -->
    <section class="adventure-links">
      <div class="container">
        <div class="adventure-grid">
          <div class="adventure-card">
            <div class="adventure-icon">🦍</div>
            <h3>Gorilla Trekking</h3>
            <p>Trek through misty forests to meet mountain gorillas</p>
            <NuxtLink to="/safaris" class="adventure-link">Explore →</NuxtLink>
          </div>
          <div class="adventure-card">
            <div class="adventure-icon">🦁</div>
            <h3>Big Five Safari</h3>
            <p>Witness lions, elephants, leopards, rhinos & buffalo</p>
            <NuxtLink to="/safaris" class="adventure-link">Explore →</NuxtLink>
          </div>
          <div class="adventure-card">
            <div class="adventure-icon">🦓</div>
            <h3>Great Migration</h3>
            <p>2 million wildebeest crossing the Serengeti plains</p>
            <NuxtLink to="/safaris" class="adventure-link">Explore →</NuxtLink>
          </div>
          <div class="adventure-card">
            <div class="adventure-icon">🏔️</div>
            <h3>Mountain Climbing</h3>
            <p>Conquer Kilimanjaro & other African peaks</p>
            <NuxtLink to="/safaris" class="adventure-link">Explore →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Uganda Section with Images -->
    <section class="about-uganda">
      <div class="container">
        <div class="about-header">
          <span class="section-badge">DISCOVER THE PEARL OF AFRICA</span>
          <h2>Welcome to Uganda with Kilagala Escape Safaris</h2>
        </div>
        
        <div class="content-row reverse">
          <div class="content-text">
            <h3>The Pearl of Africa Awaits</h3>
            <p>Uganda, located in the heart of East Africa, is a spectacular landlocked country bordered by Kenya, Tanzania, Rwanda, South Sudan, and the Democratic Republic of Congo. Famously named "The Pearl of Africa" by Sir Winston Churchill in the early 1900s after witnessing its breathtaking landscapes and rich wildlife.</p>
            <p>Covering 93,263 square kilometers with a population of nearly 50 million, Uganda offers visitors an unforgettable blend of natural beauty, vibrant culture, and thrilling adventures. Our capital, Kampala, is a city built on seven hills, each steeped in historical, religious, and cultural heritage.</p>
            <div class="highlight-features">
              <div class="feature-item">
                <span class="feature-icon">🌍</span>
                <span>10 National Parks</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🦍</span>
                <span>Half World's Gorillas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🌊</span>
                <span>Source of the Nile</span>
              </div>
            </div>
          </div>
          <div class="content-image">
            <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" alt="Uganda Landscape">
          </div>
        </div>
        
        <div class="content-row">
          <div class="content-image">
            <img src="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?q=80&w=1200" alt="Mountain Gorilla">
          </div>
          <div class="content-text">
            <h3>Mountain Gorillas & Wildlife</h3>
            <p>Uganda is home to almost half of the world's remaining mountain gorillas. At Bwindi Impenetrable National Park and Mgahinga Gorilla National Park, you can trek deep into the forests for a once-in-a-lifetime encounter.</p>
            <p>From tree-climbing lions in Queen Elizabeth National Park to elephants, leopards, giraffes, and zebras in Murchison Falls and Kidepo Valley, Uganda offers classic safari magic in pristine wilderness. With over 1,000 bird species, including rare endemics, Uganda ranks among the world's top birding destinations.</p>
            <NuxtLink to="/safaris" class="btn-explore">Explore Our Gorilla Trekking Tours →</NuxtLink>
          </div>
        </div>
        
        <div class="content-row reverse">
          <div class="content-text">
            <h3>Cultural Richness & Heritage</h3>
            <p>Uganda's cultural tapestry is woven from 56 diverse tribes, each contributing unique traditions, music, arts, and festivals. The country's official languages are English and Kiswahili, with over 56 indigenous languages enriching our cultural exchange.</p>
            <p>Visit the Kasubi Tombs, a UNESCO World Heritage Site, experience traditional dances, explore craft markets, and immerse yourself in storytelling sessions that bring our heritage to life. Uganda is world-renowned for its hospitality - locals warmly welcome visitors, making every traveler feel at home.</p>
            <p>By choosing Kilagala Escape Safaris, you directly support local communities, wildlife conservation, and eco-friendly tourism initiatives.</p>
          </div>
          <div class="content-image">
            <img src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=1200" alt="Uganda Culture">
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Adventures Section -->
    <section class="featured-tours">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">FEATURED EXPEDITIONS</span>
          <h2>Choose Your African Adventure</h2>
          <p>Hand-crafted journeys by local experts who know every trail, every pride, and every story</p>
        </div>
        <div class="tours-grid">
          <div class="tour-card">
            <div class="tour-badge">MOST POPULAR</div>
            <div class="tour-image" style="background-image: url('https://images.unsplash.com/photo-1555583743-491c2f1fde10?q=80&w=1200'); background-size: cover; background-position: center;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Uganda - Bwindi Forest</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>3-Day Bwindi Gorilla Express</h3>
              <ul class="tour-features">
                <li>1 Gorilla trekking permit included</li>
                <li>Professional guides & trackers</li>
                <li>Luxury lodge accommodation</li>
                <li>All meals & transport included</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-duration">
                  <span class="duration-icon">🕰️</span>
                  <span>3 Days Adventure</span>
                </div>
                <NuxtLink to="/safaris" class="tour-cta">View Journey →</NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="tour-card">
            <div class="tour-badge">BEST VALUE</div>
            <div class="tour-image" style="background-image: url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200'); background-size: cover; background-position: center;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Uganda - Queen Elizabeth Park</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>5-Day Uganda Wildlife & Gorillas</h3>
              <ul class="tour-features">
                <li>Gorilla & chimpanzee trekking</li>
                <li>Queen Elizabeth National Park</li>
                <li>Big 5 game drives</li>
                <li>Boat safari on Kazinga Channel</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-duration">
                  <span class="duration-icon">🕰️</span>
                  <span>5 Days Adventure</span>
                </div>
                <NuxtLink to="/safaris" class="tour-cta">View Journey →</NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="tour-card">
            <div class="tour-badge">LUXURY</div>
            <div class="tour-image" style="background-image: url('https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1200'); background-size: cover; background-position: center;">
              <div class="tour-overlay">
                <span class="tour-location">🌍 Rwanda - Volcanoes National Park</span>
              </div>
            </div>
            <div class="tour-content">
              <h3>7-Day Rwanda Ultimate Experience</h3>
              <ul class="tour-features">
                <li>Volcanoes National Park</li>
                <li>Golden monkey trekking</li>
                <li>Cultural village experiences</li>
                <li>5-star accommodation throughout</li>
              </ul>
              <div class="tour-footer">
                <div class="tour-duration">
                  <span class="duration-icon">🕰️</span>
                  <span>7 Days Adventure</span>
                </div>
                <NuxtLink to="/safaris" class="tour-cta">View Journey →</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Our Safari Tours</h2>
          <p>We're committed to providing exceptional safari experiences while supporting conservation</p>
        </div>
        <div class="why-us-grid">
          <div class="why-card">
            <div class="why-icon">🛡️</div>
            <h3>100% Permit Guarantee</h3>
            <p>We secure your gorilla permits in advance, ensuring you never miss out on this once-in-a-lifetime experience</p>
          </div>
          <div class="why-card">
            <div class="why-icon">👨‍🏫</div>
            <h3>Expert Local Guides</h3>
            <p>Our guides are conservation experts with deep knowledge of gorilla behavior and local ecosystems</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🌱</div>
            <h3>Conservation Impact</h3>
            <p>10% of our profits go directly to gorilla conservation and community development projects</p>
          </div>
          <div class="why-card">
            <div class="why-icon">⚡</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance before, during, and after your safari adventure</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Travelers Say</h2>
          <p>Real experiences from adventurers who've trekked with us</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-text">
              "Absolutely life-changing! Seeing the gorillas up close was beyond magical. The team's professionalism and passion for conservation made this trip unforgettable."
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">SM</div>
              <div class="author-info">
                <h4>Sarah Mitchell</h4>
                <p>United States</p>
                <div class="rating">★★★★★</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <p class="testimonial-text">
              "From booking to the actual trek, everything was seamless. Our guide's knowledge was incredible, and the lodges exceeded expectations. Highly recommend!"
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">JO</div>
              <div class="author-info">
                <h4>James O'Brien</h4>
                <p>United Kingdom</p>
                <div class="rating">★★★★★</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <p class="testimonial-text">
              "Best safari company! They went above and beyond to ensure we had an amazing experience. The gorilla encounter was emotional and profound."
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">AK</div>
              <div class="author-info">
                <h4>Anna Kowalski</h4>
                <p>Germany</p>
                <div class="rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wildlife Gallery Section -->
    <section class="wildlife-gallery">
      <div class="container">
        <div class="section-header">
          <h2>Incredible Wildlife Encounters Await</h2>
          <p>Every moment in the African wilderness tells a story</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item large">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Mountain Gorilla">
            <div class="gallery-overlay">
              <h3>Mountain Gorillas</h3>
              <p>98% DNA match with humans • Only 1,000 left in the wild</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=800" alt="Lions">
            <div class="gallery-overlay">
              <h3>African Lions</h3>
              <p>King of the Savannah</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=800" alt="Elephants">
            <div class="gallery-overlay">
              <h3>African Elephants</h3>
              <p>Gentle Giants</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=800" alt="Leopard">
            <div class="gallery-overlay">
              <h3>Leopards</h3>
              <p>Master of Stealth</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800" alt="Zebras">
            <div class="gallery-overlay">
              <h3>Plains Zebras</h3>
              <p>Nature's Barcode</p>
            </div>
          </div>
          <div class="gallery-item large">
            <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200" alt="Great Migration">
            <div class="gallery-overlay">
              <h3>The Great Migration</h3>
              <p>2 Million Wildebeest • 8th Wonder of the World</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destination Highlights -->
    <section class="destinations">
      <div class="container">
        <div class="section-header">
          <h2>Your Safari Destinations</h2>
          <p>From misty mountains to endless savannahs - explore Africa's diverse ecosystems</p>
        </div>
        <div class="destinations-grid">
          <div class="destination-card">
            <div class="destination-image">
              <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1200" alt="Serengeti">
            </div>
            <div class="destination-content">
              <h3>🇹🇿 Serengeti National Park</h3>
              <div class="destination-highlights">
                <span class="highlight">🦁 Big Five</span>
                <span class="highlight">🦓 Great Migration</span>
                <span class="highlight">🌅 Endless Plains</span>
              </div>
              <p>Home to the greatest wildlife spectacle on Earth - witness millions of wildebeest and zebras on their annual journey.</p>
            </div>
          </div>
          <div class="destination-card">
            <div class="destination-image">
              <img src="https://images.unsplash.com/photo-1569109413506-cdb758790276?q=80&w=1200" alt="Bwindi">
            </div>
            <div class="destination-content">
              <h3>🇺🇬 Bwindi Impenetrable Forest</h3>
              <div class="destination-highlights">
                <span class="highlight">🦍 Mountain Gorillas</span>
                <span class="highlight">🌳 Ancient Rainforest</span>
                <span class="highlight">🦜 350 Bird Species</span>
              </div>
              <p>Trek through misty forests to meet endangered mountain gorillas - a life-changing wildlife encounter.</p>
            </div>
          </div>
          <div class="destination-card">
            <div class="destination-image">
              <img src="https://images.unsplash.com/photo-1503377365978-32d0dc982e86?q=80&w=1200" alt="Masai Mara">
            </div>
            <div class="destination-content">
              <h3>🇰🇪 Masai Mara Reserve</h3>
              <div class="destination-highlights">
                <span class="highlight">🐆 Big Cats</span>
                <span class="highlight">🏞️ Mara River</span>
                <span class="highlight">👥 Maasai Culture</span>
              </div>
              <p>Kenya's most famous reserve, offering year-round exceptional wildlife viewing and cultural experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Experience Timeline -->
    <section class="experience-timeline">
      <div class="container">
        <div class="section-header">
          <h2>Your Safari Journey</h2>
          <p>From the moment you book to memories that last a lifetime</p>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-icon">📞</div>
            <div class="timeline-content">
              <h3>Expert Consultation</h3>
              <p>Our safari specialists help design your perfect African adventure</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">✈️</div>
            <div class="timeline-content">
              <h3>Seamless Arrival</h3>
              <p>VIP airport pickup and transfer to luxury accommodations</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🦁</div>
            <div class="timeline-content">
              <h3>Wildlife Adventures</h3>
              <p>Daily game drives, gorilla trekking, and unforgettable encounters</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">📸</div>
            <div class="timeline-content">
              <h3>Capture Memories</h3>
              <p>Professional photography guidance to capture perfect moments</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Inquiry Section -->
    <section class="travel-inquiry">
      <div class="container">
        <div class="inquiry-content">
          <div class="inquiry-text">
            <span class="inquiry-badge">START YOUR JOURNEY</span>
            <h2>Let's Plan Your Perfect Safari</h2>
            <p>Tell us your dream African adventure, and our expert travel designers will create a personalized itinerary just for you.</p>
            <div class="inquiry-features">
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Personal Safari Expert</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Customized Itineraries</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>24/7 Travel Support</span>
              </div>
            </div>
          </div>
          <div class="inquiry-form">
            <form>
              <div class="form-row">
                <input type="text" placeholder="Your Name" class="form-input">
                <input type="email" placeholder="Email Address" class="form-input">
              </div>
              <div class="form-row">
                <select class="form-input">
                  <option>Preferred Destination</option>
                  <option>Kenya - Masai Mara</option>
                  <option>Tanzania - Serengeti</option>
                  <option>Uganda - Bwindi Forest</option>
                  <option>Rwanda - Volcanoes Park</option>
                  <option>Multiple Countries</option>
                </select>
                <select class="form-input">
                  <option>Travel Month</option>
                  <option>January - March</option>
                  <option>April - June</option>
                  <option>July - September</option>
                  <option>October - December</option>
                </select>
              </div>
              <textarea placeholder="Tell us about your dream safari... What animals do you want to see? Any special interests?" class="form-textarea"></textarea>
              <button type="submit" class="btn-inquiry">
                <span>Get Custom Itinerary</span>
                <span class="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Safari Adventures - Experience the Wild Beauty of Africa',
  meta: [
    {
      name: 'description',
      content: 'Embark on unforgettable safari adventures in Africa. Discover wildlife, stunning landscapes, and authentic experiences with our expert guides.'
    }
  ]
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  background-image: url('../../public/much.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  color: var(--color-white);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 80, 22, 0.8) 0%,
    rgba(45, 80, 22, 0.6) 50%,
    rgba(26, 48, 9, 0.7) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: var(--spacing-4xl) 0;
}

.hero-content .container {
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: var(--spacing-4xl);
  align-items: center;
  max-width: 1400px;
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-lg);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xl);
  color: var(--color-white);
  opacity: 0.95;
}

.hero-description {
  margin-bottom: var(--spacing-2xl);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  opacity: 0.9;
}

.hero-description p {
  margin-bottom: var(--spacing-sm);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  display: inline-block;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--color-golden-yellow);
  color: var(--color-charcoal);
}

.btn-primary:hover {
  background-color: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(244, 200, 66, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.btn-secondary:hover {
  background-color: var(--color-white);
  color: var(--color-forest-green);
  transform: translateY(-2px);
}

.hero-contact-strip {
  display: flex;
  gap: var(--spacing-3xl);
  margin-top: var(--spacing-3xl);
  padding: var(--spacing-xl);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius-xl);
  animation: fadeInUp 1.2s ease-out;
  align-items: center;
  justify-content: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: white;
  font-size: var(--font-size-base);
}

.contact-icon {
  font-size: 20px;
  color: var(--color-golden-yellow);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: bounce 2s infinite;
}

.hero-scroll-indicator span {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  font-size: 24px;
  margin-top: 10px;
  animation: scrollBounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.btn-icon {
  margin-right: 8px;
  font-size: 20px;
}

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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1024px) {
  .hero-content .container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .hero-booking {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: var(--spacing-2xl) 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: var(--font-size-xl);
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-primary,
  .btn-secondary {
    text-align: center;
  }
  
  .hero-booking {
    padding: var(--spacing-xl);
  }
}

/* About Uganda Section */
.about-uganda {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.about-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.content-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  margin-bottom: var(--spacing-4xl);
}

.content-row.reverse {
  direction: rtl;
}

.content-row.reverse > * {
  direction: ltr;
}

.content-text h3 {
  font-size: var(--font-size-3xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.content-text p {
  font-size: var(--font-size-base);
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.content-image {
  overflow: hidden;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  height: 400px;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.content-image:hover img {
  transform: scale(1.05);
}

.highlight-features {
  display: flex;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid #e0e0e0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.btn-explore {
  display: inline-block;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.btn-explore:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(244, 200, 66, 0.3);
}

/* Adventure Quick Links */
.adventure-links {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
  margin-top: 0;
  position: relative;
  z-index: 10;
}

.adventure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.adventure-card {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
}

.adventure-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-golden-yellow);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.adventure-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-lg);
}

.adventure-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
}

.adventure-card p {
  color: var(--color-gray);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.adventure-link {
  color: var(--color-golden-yellow);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
}

.adventure-link:hover {
  color: var(--color-golden-yellow-dark);
}

/* Featured Tours Styles */
.featured-tours {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  padding: 0 var(--spacing-xl);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.section-header p {
  font-size: var(--font-size-xl);
  color: var(--color-gray);
  line-height: 1.6;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: var(--spacing-2xl);
}

.tour-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  position: relative;
}

.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.tour-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: bold;
  font-size: var(--font-size-sm);
  z-index: 1;
}

.tour-image {
  height: 280px;
  background: linear-gradient(45deg, var(--color-forest-green), var(--color-forest-green-light));
  position: relative;
}

.tour-image-2 {
  background: linear-gradient(45deg, #3d6b1e, #97BC62);
}

.tour-image-3 {
  background: linear-gradient(45deg, var(--color-golden-yellow-dark), var(--color-golden-yellow));
}

.tour-content {
  padding: var(--spacing-2xl);
}

.tour-content h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.tour-features {
  list-style: none;
  margin: var(--spacing-lg) 0;
}

.tour-features li {
  padding: var(--spacing-sm) 0;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.tour-features li::before {
  content: "✓";
  color: var(--color-forest-green-light);
  font-weight: bold;
  font-size: 20px;
}

.tour-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid #eee;
}

.section-badge {
  display: inline-block;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 6px 20px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-lg);
}

.tour-duration {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-gray);
  font-size: var(--font-size-base);
}

.duration-icon {
  font-size: 20px;
}

.tour-cta {
  background: var(--color-forest-green);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.tour-cta:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
}

/* Why Choose Us Styles */
.why-us {
  background: linear-gradient(135deg, var(--color-light-beige), #F5F5F0);
  padding: var(--spacing-4xl) 0;
}

.why-us-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.why-card {
  text-align: center;
  padding: var(--spacing-2xl);
  background: white;
  border-radius: var(--border-radius-xl);
  transition: all var(--transition-normal);
}

.why-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.why-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-forest-green), var(--color-forest-green-light));
  border-radius: 50%;
  margin: 0 auto var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
}

.why-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.why-card p {
  color: var(--color-gray);
  line-height: 1.8;
  font-size: var(--font-size-base);
}

/* Testimonials Styles */
.testimonials {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.testimonial-card {
  background: var(--color-light-beige);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  position: relative;
}

.testimonial-card::before {
  content: "\201C";
  font-size: 80px;
  color: var(--color-golden-yellow);
  position: absolute;
  top: 20px;
  left: 30px;
  line-height: 1;
  font-family: Georgia, serif;
}

.testimonial-text {
  margin-bottom: var(--spacing-xl);
  padding-top: var(--spacing-2xl);
  color: var(--color-charcoal);
  font-style: italic;
  line-height: 1.8;
  font-size: var(--font-size-base);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.author-avatar {
  width: 60px;
  height: 60px;
  background: var(--color-forest-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: bold;
}

.author-info h4 {
  color: var(--color-forest-green-dark);
  margin-bottom: 5px;
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.author-info p {
  color: var(--color-gray);
  font-size: var(--font-size-sm);
}

.rating {
  color: var(--color-golden-yellow);
  font-size: var(--font-size-lg);
  margin-top: 5px;
}

/* Travel Inquiry Section */
.travel-inquiry {
  background: linear-gradient(135deg, var(--color-forest-green-dark), var(--color-forest-green));
  padding: var(--spacing-4xl) 0;
  position: relative;
  overflow: hidden;
}

.travel-inquiry::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff10" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
  background-size: cover;
  opacity: 0.1;
}

.inquiry-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
}

.inquiry-text {
  color: white;
}

.inquiry-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.inquiry-text h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.inquiry-text p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.inquiry-features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-base);
}

.feature-icon {
  width: 24px;
  height: 24px;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.inquiry-form {
  background: white;
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid #e0e0e0;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  background: white;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
  margin-bottom: var(--spacing-xl);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-golden-yellow);
  box-shadow: 0 0 0 3px rgba(244, 200, 66, 0.1);
}

.btn-inquiry {
  width: 100%;
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: var(--color-forest-green);
  color: white;
  font-size: var(--font-size-lg);
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.btn-inquiry:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(45, 80, 22, 0.3);
}

.btn-arrow {
  font-size: 24px;
  transition: transform var(--transition-fast);
}

.btn-inquiry:hover .btn-arrow {
  transform: translateX(5px);
}

/* Hero Slideshow Styles */
.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 2s ease;
  animation: slideShow 12s infinite;
}

.hero-slide.active {
  opacity: 1;
}

.hero-slide:nth-child(1) { animation-delay: 0s; }
.hero-slide:nth-child(2) { animation-delay: 4s; }
.hero-slide:nth-child(3) { animation-delay: 8s; }

@keyframes slideShow {
  0%, 33% { opacity: 1; }
  34%, 100% { opacity: 0; }
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Tour Card Enhancements */
.tour-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.tour-location {
  color: white;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* Wildlife Gallery Styles */
.wildlife-gallery {
  padding: var(--spacing-4xl) 0;
  background: var(--color-charcoal);
}

.wildlife-gallery .section-header h2,
.wildlife-gallery .section-header p {
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-3xl);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: transform var(--transition-normal);
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
  padding: var(--spacing-xl);
  transform: translateY(100%);
  transition: transform var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xs);
}

.gallery-overlay p {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

/* Destinations Section */
.destinations {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.destination-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.destination-image {
  height: 250px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.destination-card:hover .destination-image img {
  transform: scale(1.05);
}

.destination-content {
  padding: var(--spacing-xl);
}

.destination-content h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
}

.destination-highlights {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-lg);
}

.highlight {
  background: var(--color-light-beige);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: var(--font-size-sm);
  color: var(--color-forest-green);
  font-weight: 500;
}

.destination-content p {
  color: var(--color-gray);
  line-height: 1.6;
}

/* Experience Timeline */
.experience-timeline {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(135deg, var(--color-light-beige), white);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: var(--spacing-3xl) auto 0;
  padding: 0 var(--spacing-xl);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-golden-yellow);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-3xl);
  position: relative;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-icon {
  width: 80px;
  height: 80px;
  background: white;
  border: 4px solid var(--color-golden-yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  width: calc(50% - 60px);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: auto;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
}

.timeline-content h3 {
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
}

.timeline-content p {
  color: var(--color-gray);
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
  
  .timeline::before {
    left: 40px;
  }
  
  .timeline-item {
    flex-direction: row !important;
    padding-left: 100px;
  }
  
  .timeline-icon {
    left: 40px;
  }
  
  .timeline-content {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media (max-width: 768px) {
  .trust-container {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  
  .tours-grid,
  .why-us-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header h2 {
    font-size: var(--font-size-3xl);
  }
  
  .cta-features {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
  
  .gallery-item.large {
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    padding-left: 70px;
  }
  
  .timeline-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
    left: 30px;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .hero-contact-strip {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
  }
  
  .content-row,
  .content-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  
  .content-image {
    height: 300px;
  }
  
  .highlight-features {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .adventure-grid {
    grid-template-columns: 1fr;
  }
  
  .inquiry-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .inquiry-form {
    padding: var(--spacing-xl);
  }
}</style>