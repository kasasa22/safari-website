<template>
  <div class="destinations-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <h1 class="hero-title">Explore Uganda's National Parks</h1>
            <p class="hero-subtitle">Discover the Pearl of Africa's most spectacular wilderness destinations</p>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">10</div>
                <div class="stat-label">National Parks</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1,000+</div>
                <div class="stat-label">Bird Species</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50%</div>
                <div class="stat-label">World's Gorillas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filters">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="filter-btn"
            :class="{ active: activeFilter === category.id }"
            @click="activeFilter = category.id"
          >
            <span class="filter-icon">{{ category.icon }}</span>
            <span>{{ category.name }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Destinations Grid -->
    <section class="destinations-section">
      <div class="container">
        <div class="destinations-grid">
          <NuxtLink 
            v-for="destination in filteredDestinations" 
            :key="destination.id"
            :to="`/destinations/${destination.id}`"
            class="destination-card"
          >
            <!-- Card Header -->
            <div class="card-header">
              <div class="card-image" :style="{ backgroundImage: `url('${destination.images[0]}')` }">
                <div class="card-overlay">
                  <div class="card-badges">
                    <span class="difficulty-badge" :class="getDifficultyClass(destination.difficulty)">
                      {{ destination.difficulty }}
                    </span>
                    <span class="duration-badge">{{ destination.duration }}</span>
                  </div>
                  <div class="card-actions">
                    <button class="wishlist-btn" @click.prevent="toggleWishlist(destination.id)">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                    <button class="share-btn" @click.prevent="shareDestination(destination)">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="card-content">
              <div class="card-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ destination.location }}
              </div>
              
              <h3 class="card-title">{{ destination.title }}</h3>
              <p class="card-subtitle">{{ destination.subtitle }}</p>
              
              <div class="card-highlights">
                <div 
                  v-for="highlight in destination.highlights.slice(0, 2)" 
                  :key="highlight"
                  class="highlight-tag"
                >
                  {{ highlight }}
                </div>
              </div>

              <div class="card-footer">
                <div class="card-rating">
                  <div class="rating-stars">
                    <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= destination.rating }">★</span>
                  </div>
                  <span class="rating-text">({{ destination.reviewCount }})</span>
                </div>
                
                <div class="card-price">
                  <span class="price-label">From</span>
                  <span class="price-amount">USD ${{ destination.price }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Load More Button -->
        <div v-if="canLoadMore" class="load-more-section">
          <button class="load-more-btn" @click="loadMore">
            <span>Load More Destinations</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Why Choose These Destinations -->
    <section class="why-section">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Uganda's National Parks</h2>
          <p>Discover what makes Uganda's destinations truly special</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🦍</div>
            <h3>Unique Wildlife</h3>
            <p>Home to mountain gorillas, tree-climbing lions, and over 1,000 bird species found nowhere else on Earth.</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">🌍</div>
            <h3>Conservation Impact</h3>
            <p>Your visit directly supports wildlife conservation and local community development initiatives.</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">👨‍🏫</div>
            <h3>Expert Guides</h3>
            <p>Professional local guides with deep knowledge of wildlife behavior and cultural heritage.</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">🏞️</div>
            <h3>Diverse Ecosystems</h3>
            <p>From tropical rainforests to savanna plains, mountain peaks to crater lakes - all in one country.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Safari Adventure?</h2>
          <p>Let our experts design the perfect itinerary for your Uganda experience</p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Plan My Safari
            </NuxtLink>
            <a href="tel:+256768461164" class="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getAllDestinations, type Destination } from '~/data/destinations-index'

// Set page meta
useHead({
  title: 'Uganda National Parks & Safari Destinations - Kilagala Escape Safaris',
  meta: [
    {
      name: 'description',
      content: 'Explore Uganda\'s most spectacular national parks and safari destinations. From mountain gorilla trekking to big five safaris, discover the Pearl of Africa.'
    }
  ]
})

// Get all destinations
const allDestinations = getAllDestinations()

// Filter categories
const categories = [
  { id: 'all', name: 'All Destinations', icon: '🌍' },
  { id: 'gorillas', name: 'Gorilla Parks', icon: '🦍' },
  { id: 'savanna', name: 'Savanna Parks', icon: '🦁' },
  { id: 'mountains', name: 'Mountain Parks', icon: '🏔️' },
  { id: 'adventure', name: 'Adventure', icon: '🚣' }
]

// Reactive data
const activeFilter = ref('all')
const displayCount = ref(6)
const wishlist = ref<string[]>([])

// Computed properties
const filteredDestinations = computed(() => {
  let filtered = allDestinations
  
  if (activeFilter.value !== 'all') {
    filtered = allDestinations.filter(destination => {
      switch (activeFilter.value) {
        case 'gorillas':
          return ['bwindi-impenetrable', 'mgahinga'].includes(destination.id)
        case 'savanna':
          return ['queen-elizabeth', 'murchisons', 'kidepo', 'lake-mburo'].includes(destination.id)
        case 'mountains':
          return ['rwenzori', 'mgahinga'].includes(destination.id)
        case 'adventure':
          return ['jinja', 'rwenzori'].includes(destination.id)
        default:
          return true
      }
    })
  }
  
  return filtered.slice(0, displayCount.value)
})

const canLoadMore = computed(() => {
  const totalFiltered = activeFilter.value === 'all' 
    ? allDestinations.length 
    : filteredDestinations.value.length
  return displayCount.value < totalFiltered
})

// Methods
const getDifficultyClass = (difficulty: string) => {
  const level = difficulty.toLowerCase()
  if (level.includes('easy')) return 'difficulty-easy'
  if (level.includes('moderate')) return 'difficulty-moderate'
  if (level.includes('hard')) return 'difficulty-hard'
  return 'difficulty-moderate'
}

const toggleWishlist = (id: string) => {
  const index = wishlist.value.indexOf(id)
  if (index > -1) {
    wishlist.value.splice(index, 1)
  } else {
    wishlist.value.push(id)
  }
}

const shareDestination = (destination: Destination) => {
  if (navigator.share) {
    navigator.share({
      title: destination.title,
      text: destination.subtitle,
      url: `/destinations/${destination.id}`
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(`${location.origin}/destinations/${destination.id}`)
    alert('Link copied to clipboard!')
  }
}

const loadMore = () => {
  displayCount.value += 6
}

// Watch for filter changes to reset display count
watch(activeFilter, () => {
  displayCount.value = 6
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--color-forest-green) 0%, var(--color-forest-green-dark) 100%);
  background-image: url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1600');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 80, 22, 0.7);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  color: white;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: var(--color-golden-yellow);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-3xl);
  opacity: 0.95;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4xl);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-golden-yellow);
  line-height: 1;
}

.stat-label {
  font-size: var(--font-size-base);
  opacity: 0.9;
  margin-top: var(--spacing-xs);
}

/* Filter Section */
.filter-section {
  padding: var(--spacing-2xl) 0;
  background: white;
  border-bottom: 1px solid var(--color-light-beige);
}

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  border: 2px solid var(--color-light-beige);
  border-radius: 50px;
  color: var(--color-gray);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-forest-green);
  border-color: var(--color-forest-green);
  color: white;
  transform: translateY(-2px);
}

.filter-icon {
  font-size: 1.2rem;
}

/* Destinations Section */
.destinations-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: var(--spacing-2xl);
}

.destination-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-normal);
  position: relative;
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  position: relative;
  height: 250px;
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--spacing-lg);
}

.card-badges {
  display: flex;
  gap: var(--spacing-sm);
}

.difficulty-badge,
.duration-badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 20px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: white;
}

.difficulty-easy {
  background: #10b981;
}

.difficulty-moderate {
  background: #f59e0b;
}

.difficulty-hard {
  background: #dc2626;
}

.duration-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.card-actions {
  display: flex;
  gap: var(--spacing-sm);
  align-self: flex-end;
}

.wishlist-btn,
.share-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.wishlist-btn:hover,
.share-btn:hover {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green);
}

.card-content {
  padding: var(--spacing-xl);
}

.card-location {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  margin-bottom: var(--spacing-sm);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-xs);
  line-height: 1.3;
}

.card-subtitle {
  color: var(--color-gray);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-base);
}

.card-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
}

.highlight-tag {
  background: var(--color-light-beige);
  color: var(--color-forest-green);
  padding: 4px var(--spacing-sm);
  border-radius: 15px;
  font-size: var(--font-size-xs);
  font-weight: 500;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-light-beige);
}

.card-rating {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.rating-stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #e5e5e5;
  font-size: var(--font-size-sm);
}

.star.filled {
  color: var(--color-golden-yellow);
}

.rating-text {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.card-price {
  text-align: right;
}

.price-label {
  font-size: var(--font-size-xs);
  color: var(--color-gray);
  display: block;
}

.price-amount {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-forest-green);
}

/* Load More */
.load-more-section {
  text-align: center;
  margin-top: var(--spacing-3xl);
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: var(--color-forest-green);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.load-more-btn:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
}

/* Why Section */
.why-section {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-lg);
}

.section-header p {
  font-size: var(--font-size-xl);
  color: var(--color-gray);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-2xl);
}

.benefit-card {
  text-align: center;
  padding: var(--spacing-2xl);
  background: var(--color-light-beige);
  border-radius: var(--border-radius-xl);
  transition: transform var(--transition-normal);
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-lg);
}

.benefit-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-md);
}

.benefit-card p {
  color: var(--color-gray);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(135deg, var(--color-forest-green) 0%, var(--color-forest-green-dark) 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  color: var(--color-golden-yellow);
}

.cta-content p {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: 50px;
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-normal);
}

.btn-primary {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green);
}

.btn-primary:hover {
  background: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--color-forest-green);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  
  .filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: var(--spacing-sm);
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .card-content {
    padding: var(--spacing-lg);
  }
  
  .card-footer {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: stretch;
  }
  
  .card-price {
    text-align: left;
  }
}
</style>