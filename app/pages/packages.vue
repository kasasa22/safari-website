<template>
  <div class="packages-page">
    <!-- Hero Section -->
    <section class="packages-hero">
      <div class="hero-background">
        <img src="/images/landscape.jpeg" alt="Uganda Safari" class="hero-image">
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <span class="hero-badge">🌍 SAFARI PACKAGES</span>
            <h1 class="hero-title">Choose Your Perfect Safari Package</h1>
            <p class="hero-subtitle">Tailored safari experiences designed for every traveler - from gorilla trekking to wildlife safaris and cultural tours</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Categories -->
    <section class="package-categories">
      <div class="container">
        <div class="section-header">
          <h2>Our Safari Packages</h2>
          <p>Discover Uganda's incredible wildlife and landscapes with our expertly crafted safari packages</p>
        </div>
        
        <div class="packages-grid">
          <!-- 1-Day Short Gorilla Trekking -->
          <div class="package-card featured">
            <div class="package-badge">MOST POPULAR</div>
            <div class="package-image">
              <img src="/images/gorilla.jpg" alt="Gorilla Trekking">
            </div>
            <div class="package-content">
              <div class="package-icon">🦍</div>
              <h3>1 Day Short Gorilla Trekking Safari</h3>
              <p>Perfect for travelers with limited time - encounter mountain gorillas in Bwindi Impenetrable National Park, home to 50% of world's remaining mountain gorillas.</p>
              
              <div class="package-features">
                <div class="feature">✓ Gorilla trekking permit included</div>
                <div class="feature">✓ Professional park rangers</div>
                <div class="feature">✓ 4x4 safari vehicle transport</div>
                <div class="feature">✓ Lunch and drinking water</div>
                <div class="feature">✓ 1 hour with gorilla family</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">1 Day</div>
                <div class="price">From $400</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 Early 3:00 AM pickup from Kisoro/Kabale/Kigali</div>
                <div class="highlight">🌟 17 habituated gorilla families available</div>
                <div class="highlight">🌟 Mental and physical fitness required</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>

          <!-- 3-Day Bwindi Gorilla Safari -->
          <div class="package-card">
            <div class="package-image">
              <img src="/images/bwindi.jpeg" alt="Bwindi Gorilla Safari">
            </div>
            <div class="package-content">
              <div class="package-icon">🦍</div>
              <h3>3 Days Bwindi Gorilla Safari</h3>
              <p>Complete gorilla trekking experience with cultural encounters. Visit indigenous Batwa Pygmies and enjoy true African jungle adventure.</p>
              
              <div class="package-features">
                <div class="feature">✓ Gorilla trekking permit</div>
                <div class="feature">✓ Batwa cultural encounter</div>
                <div class="feature">✓ 2 nights accommodation</div>
                <div class="feature">✓ All meals included</div>
                <div class="feature">✓ Equator stopover</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">3 Days</div>
                <div class="price">Contact for Pricing</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 120+ mammals including forest elephants</div>
                <div class="highlight">🌟 Cultural village visit with Batwa people</div>
                <div class="highlight">🌟 Optional Lake Bunyonyi visit</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>

          <!-- 3-Day Queen Elizabeth Safari -->
          <div class="package-card">
            <div class="package-image">
              <img src="/images/Queen_main.jpeg" alt="Queen Elizabeth Safari">
            </div>
            <div class="package-content">
              <div class="package-icon">🦁</div>
              <h3>3 Days Queen Elizabeth Safari</h3>
              <p>Uganda's most visited safari destination featuring tree-climbing lions, 95+ mammal species, and the famous Kazinga Channel boat cruise.</p>
              
              <div class="package-features">
                <div class="feature">✓ Game drives in Mweya Peninsula</div>
                <div class="feature">✓ Kazinga Channel boat cruise</div>
                <div class="feature">✓ Lake Katwe salt mining visit</div>
                <div class="feature">✓ 606 bird species viewing</div>
                <div class="feature">✓ Mountain Rwenzori views</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">3 Days</div>
                <div class="price">Contact for Pricing</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 Famous tree-climbing lions</div>
                <div class="highlight">🌟 Optional chimpanzee tracking</div>
                <div class="highlight">🌟 Equator crossing experience</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>

          <!-- 3-Day Murchison Falls Safari -->
          <div class="package-card">
            <div class="package-image">
              <img src="/images/murchion_main.jpeg" alt="Murchison Falls Safari">
            </div>
            <div class="package-content">
              <div class="package-icon">💧</div>
              <h3>3 Days Murchison Falls Safari</h3>
              <p>Uganda's largest and oldest park featuring the world's strongest waterfall and 4 of Africa's Big 5, plus rhino tracking at Ziwa.</p>
              
              <div class="package-features">
                <div class="feature">✓ Rhino tracking at Ziwa Sanctuary</div>
                <div class="feature">✓ Game drives with Big 5</div>
                <div class="feature">✓ Nile River boat cruise</div>
                <div class="feature">✓ Hike to top of falls</div>
                <div class="feature">✓ 76+ mammal species</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">3 Days</div>
                <div class="price">Contact for Pricing</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 World's strongest waterfall</div>
                <div class="highlight">🌟 White rhino tracking experience</div>
                <div class="highlight">🌟 Optional fishing and birding</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>

          <!-- 3-Day Lake Mburo Safari -->
          <div class="package-card">
            <div class="package-image">
              <img src="/images/mburo_main.jpeg" alt="Lake Mburo Safari">
            </div>
            <div class="package-content">
              <div class="package-icon">🦓</div>
              <h3>3 Days Lake Mburo Safari</h3>
              <p>Uganda's smallest savannah park and nearest to Kampala. Best park for spotting zebras, elands, and leopards with excellent boat cruising.</p>
              
              <div class="package-features">
                <div class="feature">✓ Morning and evening game drives</div>
                <div class="feature">✓ Night game drive experience</div>
                <div class="feature">✓ Lake Mburo boat cruise</div>
                <div class="feature">✓ Zebra and eland viewing</div>
                <div class="feature">✓ Bird watching opportunities</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">3 Days</div>
                <div class="price">Contact for Pricing</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 Best park for leopard spotting</div>
                <div class="highlight">🌟 Optional horseback riding</div>
                <div class="highlight">🌟 Extension of Serengeti Plains</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>

          <!-- 1-Day Kampala City Tour -->
          <div class="package-card">
            <div class="package-image">
              <img src="/images/kampala.jpg" alt="Kampala City Tour">
            </div>
            <div class="package-content">
              <div class="package-icon">🏛️</div>
              <h3>1 Day Kampala City Tour</h3>
              <p>Explore Uganda's capital built on 7 hills. Visit UNESCO World Heritage sites, cultural landmarks, and experience local markets and traditions.</p>
              
              <div class="package-features">
                <div class="feature">✓ Kasubi Tombs (UNESCO site)</div>
                <div class="feature">✓ Gaddafi National Mosque</div>
                <div class="feature">✓ Kabaka's Palace and Parliament</div>
                <div class="feature">✓ Local markets exploration</div>
                <div class="feature">✓ Cultural and religious sites</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">1 Day</div>
                <div class="price">From $180</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 Visit Baha'i Temple</div>
                <div class="highlight">🌟 Namirembe & Rubaga Cathedrals</div>
                <div class="highlight">🌟 Optional night tour available</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>

          <!-- 1-Day Jinja Adventure Tour -->
          <div class="package-card">
            <div class="package-image">
              <img src="/images/water.jpeg" alt="Jinja Adventure Tour">
            </div>
            <div class="package-content">
              <div class="package-icon">🌊</div>
              <h3>1 Day Jinja Adventure Tour</h3>
              <p>Visit the source of the world's longest river and adventure capital of East Africa. Includes Mabira Forest exploration and cultural sites.</p>
              
              <div class="package-features">
                <div class="feature">✓ Source of the Nile boat ride</div>
                <div class="feature">✓ Mabira Forest canopy walk</div>
                <div class="feature">✓ Sezibwa Falls cultural site</div>
                <div class="feature">✓ Bird watching opportunities</div>
                <div class="feature">✓ Jinja city tour</div>
              </div>
              
              <div class="package-pricing">
                <div class="duration">1 Day</div>
                <div class="price">From $180</div>
              </div>
              
              <div class="package-highlights">
                <div class="highlight">🌟 Optional white water rafting</div>
                <div class="highlight">🌟 Bungee jumping available</div>
                <div class="highlight">🌟 Largest natural forest visit</div>
              </div>
              
              <NuxtLink to="/contact" class="package-cta">Book This Package</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Inclusions -->
    <section class="package-inclusions">
      <div class="container">
        <div class="section-header">
          <h2>What's Included in Our Packages</h2>
          <p>Every Kilagala Escape Safari package comes with these premium inclusions</p>
        </div>
        
        <div class="inclusions-grid">
          <div class="inclusion-item">
            <div class="inclusion-icon">🚗</div>
            <h4>Transportation</h4>
            <p>Comfortable 4WD safari vehicles with experienced drivers</p>
          </div>
          <div class="inclusion-item">
            <div class="inclusion-icon">🏨</div>
            <h4>Accommodation</h4>
            <p>Carefully selected lodges and camps for your comfort</p>
          </div>
          <div class="inclusion-item">
            <div class="inclusion-icon">🍽️</div>
            <h4>Meals</h4>
            <p>All meals included with local and international cuisine options</p>
          </div>
          <div class="inclusion-item">
            <div class="inclusion-icon">👨‍🏫</div>
            <h4>Expert Guides</h4>
            <p>Professional guides with deep local knowledge and experience</p>
          </div>
          <div class="inclusion-item">
            <div class="inclusion-icon">📋</div>
            <h4>Permits & Fees</h4>
            <p>All park entrance fees and permits included in package price</p>
          </div>
          <div class="inclusion-item">
            <div class="inclusion-icon">📞</div>
            <h4>24/7 Support</h4>
            <p>Round-the-clock support throughout your safari experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Package CTA -->
    <section class="custom-package-cta">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2>Need a Custom Package?</h2>
            <p>Let us create a personalized safari experience tailored to your specific interests, budget, and schedule. Our experts will work with you to design the perfect Uganda adventure.</p>
            <div class="cta-features">
              <div class="cta-feature">✓ Personalized itineraries</div>
              <div class="cta-feature">✓ Flexible scheduling</div>
              <div class="cta-feature">✓ Budget-friendly options</div>
              <div class="cta-feature">✓ Expert consultation</div>
            </div>
          </div>
          <div class="cta-actions">
            <NuxtLink to="/contact" class="cta-button primary">Plan My Custom Safari</NuxtLink>
            <a href="tel:+256768461164" class="cta-button secondary">Call Us Now</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Safari Packages - Kilagala Escape Safaris',
  meta: [
    {
      name: 'description',
      content: 'Choose from our expertly crafted safari packages including gorilla trekking, wildlife safaris, city tours, and adventure experiences in Uganda.'
    }
  ]
})
</script>

<style scoped>
/* Hero Section */
.packages-hero {
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(45, 80, 22, 0.8), rgba(26, 48, 9, 0.6));
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  text-align: center;
  color: white;
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

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-lg);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  opacity: 0.95;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Package Categories */
.package-categories {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-4xl);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  line-height: 1.6;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.package-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  position: relative;
  border: 2px solid transparent;
}

.package-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border-color: var(--color-golden-yellow);
}

.package-card.featured {
  border-color: var(--color-golden-yellow);
  box-shadow: 0 10px 30px rgba(244, 200, 66, 0.2);
}

.package-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: var(--font-size-sm);
  z-index: 1;
}

.package-image {
  height: 250px;
  overflow: hidden;
}

.package-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.package-card:hover .package-image img {
  transform: scale(1.05);
}

.package-content {
  padding: var(--spacing-2xl);
}

.package-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-lg);
}

.package-content h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.package-content p {
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: var(--spacing-xl);
}

.package-features {
  margin-bottom: var(--spacing-xl);
}

.feature {
  padding: var(--spacing-xs) 0;
  color: var(--color-forest-green);
  font-size: var(--font-size-base);
}

.package-pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-light-beige);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
}

.duration {
  font-weight: 600;
  color: var(--color-forest-green-dark);
}

.price {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-golden-yellow-dark);
}

.package-highlights {
  margin-bottom: var(--spacing-xl);
  border-top: 1px solid #eee;
  padding-top: var(--spacing-lg);
}

.highlight {
  padding: var(--spacing-xs) 0;
  color: var(--color-forest-green-dark);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.package-cta {
  display: block;
  width: 100%;
  padding: var(--spacing-lg);
  background: var(--color-forest-green);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: var(--font-size-lg);
  transition: all var(--transition-normal);
}

.package-cta:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
}

/* Package Inclusions */
.package-inclusions {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.inclusions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
}

.inclusion-item {
  text-align: center;
  padding: var(--spacing-xl);
  background: white;
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
}

.inclusion-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.inclusion-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-lg);
}

.inclusion-item h4 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.inclusion-item p {
  color: var(--color-gray);
  line-height: 1.6;
}

/* Custom Package CTA */
.custom-package-cta {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(135deg, var(--color-forest-green-dark), var(--color-forest-green));
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-4xl);
  align-items: center;
}

.cta-text {
  color: white;
}

.cta-text h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.cta-text p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
  line-height: 1.6;
}

.cta-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.cta-feature {
  color: var(--color-golden-yellow);
  font-size: var(--font-size-base);
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.cta-button {
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--border-radius-md);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-lg);
  text-align: center;
  transition: all var(--transition-normal);
  white-space: nowrap;
}

.cta-button.primary {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
}

.cta-button.primary:hover {
  background: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: white;
  color: var(--color-forest-green-dark);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
  }
  
  .inclusions-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .cta-features {
    grid-template-columns: 1fr;
  }
  
  .package-pricing {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
}
</style>