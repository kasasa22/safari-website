<template>
  <div class="destination-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="breadcrumb">
              <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <NuxtLink to="/destinations" class="breadcrumb-link">Destinations</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">{{ destination.title }}</span>
            </div>
            <h1 class="hero-title">{{ destination.title }}</h1>
            <p class="hero-subtitle">{{ destination.subtitle }}</p>
            <div class="hero-stats">
              <div class="stat-item">
                <svg class="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{{ destination.location }}</span>
              </div>
              <div class="stat-item">
                <svg class="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>{{ destination.duration }}</span>
              </div>
              <div class="stat-item">
                <div class="rating-stars">
                  <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= destination.rating }">★</span>
                </div>
                <span>({{ destination.reviewCount }} reviews)</span>
              </div>
              <div class="stat-item price">
                <span class="price-label">From</span>
                <span class="price-amount">USD ${{ destination.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image" :style="{ backgroundImage: `url('${destination.images[0]}')` }"></div>
    </section>

    <!-- Quick Info Bar -->
    <section class="quick-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-icon">⏱️</div>
            <div class="info-content">
              <h4>Duration</h4>
              <p>{{ destination.duration }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">👥</div>
            <div class="info-content">
              <h4>Group Size</h4>
              <p>{{ destination.groupSize }} people</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📈</div>
            <div class="info-content">
              <h4>Difficulty</h4>
              <p>{{ destination.difficulty }}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🌤️</div>
            <div class="info-content">
              <h4>Best Season</h4>
              <p>{{ destination.season }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <div class="content-grid">
          <!-- Left Column -->
          <div class="content-left">
            <!-- Image Gallery -->
            <section class="gallery-section">
              <h2 class="section-title">Photo Gallery</h2>
              
              <!-- Full Width Hero Image -->
              <div class="gallery-hero" @click="openLightbox(0)">
                <img :src="destination.images[0]" :alt="destination.title + ' main view'" />
                <div class="gallery-hero-overlay">
                  <div class="gallery-info">
                    <span class="gallery-count">{{ destination.images.length }} Photos</span>
                    <span class="gallery-action">View Gallery</span>
                  </div>
                </div>
              </div>

              <!-- Image Grid -->
              <div class="gallery-grid">
                <div 
                  v-for="(image, index) in destination.images.slice(1, 7)" 
                  :key="index"
                  class="gallery-item"
                  @click="openLightbox(index + 1)"
                >
                  <img :src="image" :alt="destination.title + ' image ' + (index + 2)" />
                  <div class="gallery-overlay">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
                <div 
                  v-if="destination.images.length > 7"
                  class="gallery-more"
                  @click="openLightbox(7)"
                >
                  <div class="gallery-more-bg" :style="{ backgroundImage: `url('${destination.images[7]}')` }"></div>
                  <div class="gallery-more-overlay">
                    <span class="more-count">+{{ destination.images.length - 7 }}</span>
                    <span class="more-text">more photos</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Description -->
            <section class="description-section">
              <h2 class="section-title">About This Destination</h2>
              <p class="description-text">{{ destination.description }}</p>
            </section>

            <!-- Highlights -->
            <section class="highlights-section">
              <h2 class="section-title">Safari Highlights</h2>
              <div class="highlights-grid">
                <div 
                  v-for="highlight in destination.highlights" 
                  :key="highlight"
                  class="highlight-item"
                >
                  <svg class="highlight-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,11 12,14 22,4"/>
                    <path d="M21,12v7a2,2 0,0 1,-2,2H5a2,2 0,0 1,-2,-2V5a2,2 0,0 1,2,-2h11"/>
                  </svg>
                  <span>{{ highlight }}</span>
                </div>
              </div>
            </section>

            <!-- Activities -->
            <section class="activities-section">
              <h2 class="section-title">Activities & Experiences</h2>
              <div class="activities-grid">
                <div 
                  v-for="activity in destination.activities" 
                  :key="activity"
                  class="activity-card"
                >
                  <div class="activity-icon">🎯</div>
                  <h4>{{ activity }}</h4>
                </div>
              </div>
            </section>

            <!-- Wildlife -->
            <section class="wildlife-section">
              <h2 class="section-title">Wildlife You'll Encounter</h2>
              <div class="wildlife-grid">
                <div 
                  v-for="animal in destination.wildlife" 
                  :key="animal"
                  class="wildlife-item"
                >
                  <div class="wildlife-icon">🦁</div>
                  <span>{{ animal }}</span>
                </div>
              </div>
            </section>

            <!-- Bird Species Section (Special for Murchison Falls & Bwindi) -->
            <section v-if="destination.id === 'murchisons' || destination.id === 'bwindi-impenetrable'" class="birds-section">
              <h2 class="section-title">Bird Species Paradise</h2>
              <div class="birds-intro">
                <p v-if="destination.id === 'murchisons'">
                  Murchison Falls National Park boasts being one of the best birding destinations in Uganda and Africa with over <strong>556 recorded bird species</strong>. The park offers exceptional opportunities for both casual and serious birders.
                </p>
                <p v-else-if="destination.id === 'bwindi-impenetrable'">
                  Bwindi Impenetrable National Park is a birdwatcher's paradise with over <strong>345 recorded bird species</strong>, with 99% being Albert Rift Valley endemics. At least 100 bird species can be sighted by seasoned birders in this ancient forest.
                </p>
              </div>
              <div class="birds-grid">
                <!-- Murchison Birds -->
                <template v-if="destination.id === 'murchisons'">
                  <div class="bird-category">
                    <h4>🦅 Rare & Endemic Species</h4>
                    <ul>
                      <li>Shoebill Stork</li>
                      <li>Abyssinian Ground Hornbill</li>
                      <li>Denham's Bustard</li>
                      <li>Black Scimitar-bill</li>
                    </ul>
                  </div>
                  <div class="bird-category">
                    <h4>🐦 Water Birds</h4>
                    <ul>
                      <li>African Fish Eagle</li>
                      <li>Giant Kingfisher</li>
                      <li>African Jacana</li>
                      <li>Black Crake</li>
                    </ul>
                  </div>
                  <div class="bird-category">
                    <h4>🌳 Forest Species</h4>
                    <ul>
                      <li>Black-billed Barbet</li>
                      <li>Black-headed Gonolek</li>
                      <li>Sulphur-breasted Bush-shrike</li>
                      <li>Grey-winged Ptyilia</li>
                    </ul>
                  </div>
                  <div class="bird-category">
                    <h4>🏞️ Savanna Birds</h4>
                    <ul>
                      <li>African Quail-Finch</li>
                      <li>Long-tailed Nightjar</li>
                      <li>Eastern Grey Plantain-eater</li>
                      <li>Black-faced Waxbill</li>
                    </ul>
                  </div>
                </template>

                <!-- Bwindi Birds -->
                <template v-else-if="destination.id === 'bwindi-impenetrable'">
                  <div class="bird-category">
                    <h4>🦅 Forest Endemics</h4>
                    <ul>
                      <li>Yellow-eyed Black Flycatcher</li>
                      <li>White-tailed Blue Monarch</li>
                      <li>Strange Weaver</li>
                      <li>Red-faced Woodland Warbler</li>
                    </ul>
                  </div>
                  <div class="bird-category">
                    <h4>🌳 Montane Species</h4>
                    <ul>
                      <li>Western Green Tinkerbird</li>
                      <li>Western Bronze-naped Pigeon</li>
                      <li>African Hill Babbler</li>
                      <li>Archer's Robin-Chat</li>
                    </ul>
                  </div>
                  <div class="bird-category">
                    <h4>🦜 Albert Rift Endemics</h4>
                    <ul>
                      <li>Grauer's Rush Warbler</li>
                      <li>Short-tailed Warbler</li>
                      <li>Mountain Masked Apalis</li>
                      <li>Rwenzori Batis</li>
                    </ul>
                  </div>
                  <div class="bird-category">
                    <h4>🐦 Trail Specialties</h4>
                    <ul>
                      <li>Handsome Francolin</li>
                      <li>Blue-headed Sunbird</li>
                      <li>Collared Apalis</li>
                      <li>Mountain Oriole</li>
                    </ul>
                  </div>
                </template>
              </div>
            </section>

            <!-- Special Features Section (For Murchison Falls) -->
            <section v-if="destination.specialFeatures" class="special-features-section">
              <h2 class="section-title">Special Features & Details</h2>
              
              <div class="features-grid">
                <!-- Falls Details -->
                <div v-if="destination.specialFeatures.fallsDetails" class="feature-card">
                  <div class="feature-header">
                    <div class="feature-icon">💧</div>
                    <h3>The Mighty Murchison Falls</h3>
                  </div>
                  <p>{{ destination.specialFeatures.fallsDetails }}</p>
                </div>

                <!-- Film History -->
                <div v-if="destination.specialFeatures.filmHistory" class="feature-card">
                  <div class="feature-header">
                    <div class="feature-icon">🎬</div>
                    <h3>Hollywood Fame</h3>
                  </div>
                  <p>{{ destination.specialFeatures.filmHistory }}</p>
                </div>

                <!-- Historical Notes -->
                <div v-if="destination.specialFeatures.historicalNotes" class="feature-card">
                  <div class="feature-header">
                    <div class="feature-icon">📜</div>
                    <h3>Historical Background</h3>
                  </div>
                  <p>{{ destination.specialFeatures.historicalNotes }}</p>
                </div>

                <!-- Fishing Info -->
                <div v-if="destination.specialFeatures.fishingInfo" class="feature-card">
                  <div class="feature-header">
                    <div class="feature-icon">🎣</div>
                    <h3>Sport Fishing Paradise</h3>
                  </div>
                  <p>{{ destination.specialFeatures.fishingInfo }}</p>
                </div>

                <!-- Camping Details -->
                <div v-if="destination.specialFeatures.campingDetails" class="feature-card">
                  <div class="feature-header">
                    <div class="feature-icon">🏕️</div>
                    <h3>Camping Adventures</h3>
                  </div>
                  <p>{{ destination.specialFeatures.campingDetails }}</p>
                </div>
              </div>
            </section>

            <!-- Itinerary -->
            <section class="itinerary-section">
              <h2 class="section-title">Sample Itinerary</h2>
              <div class="itinerary-timeline">
                <div 
                  v-for="day in destination.itinerary" 
                  :key="day.day"
                  class="timeline-item"
                >
                  <div class="timeline-marker">
                    <span class="day-number">{{ day.day }}</span>
                  </div>
                  <div class="timeline-content">
                    <h4 class="day-title">Day {{ day.day }}: {{ day.title }}</h4>
                    <p class="day-description">{{ day.description }}</p>
                    <ul class="day-activities">
                      <li v-for="activity in day.activities" :key="activity">
                        {{ activity }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Right Column - Booking Widget -->
          <div class="content-right">
            <div class="booking-widget">
              <div class="booking-header">
                <div class="booking-price">
                  <span class="price-label">From</span>
                  <span class="price-amount">USD ${{ destination.price }}</span>
                  <span class="price-note">per person</span>
                </div>
                <div class="booking-rating">
                  <div class="rating-stars">
                    <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= destination.rating }">★</span>
                  </div>
                  <span class="rating-count">{{ destination.reviewCount }} reviews</span>
                </div>
              </div>

              <form class="booking-form" @submit.prevent="submitBooking">
                <div class="form-group">
                  <label for="checkin">Check-in Date</label>
                  <input type="date" id="checkin" v-model="bookingData.checkin" required />
                </div>
                <div class="form-group">
                  <label for="guests">Number of Guests</label>
                  <select id="guests" v-model="bookingData.guests" required>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                  </select>
                </div>
                <button type="submit" class="book-now-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Book This Safari
                </button>
              </form>

              <div class="booking-features">
                <div class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,11 12,14 22,4"/>
                  </svg>
                  <span>Free cancellation</span>
                </div>
                <div class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,11 12,14 22,4"/>
                  </svg>
                  <span>Instant confirmation</span>
                </div>
                <div class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,11 12,14 22,4"/>
                  </svg>
                  <span>Expert local guides</span>
                </div>
              </div>

              <!-- What's Included -->
              <div class="included-section">
                <h3>What's Included</h3>
                <ul class="included-list">
                  <li v-for="item in destination.included" :key="item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9,11 12,14 22,4"/>
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- What's Not Included -->
              <div class="not-included-section">
                <h3>What's Not Included</h3>
                <ul class="not-included-list">
                  <li v-for="item in destination.notIncluded" :key="item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Contact Info -->
              <div class="contact-info">
                <h3>Need Help?</h3>
                <div class="contact-details">
                  <a href="tel:+256768461164" class="contact-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +256 768 461 164
                  </a>
                  <a href="mailto:Kilagalaescapesafaris@gmail.com" class="contact-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 5L2 7"/>
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <section class="additional-info">
      <div class="container">
        <div class="info-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-button"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <div class="tab-content">
          <div v-if="activeTab === 'best-time'" class="tab-panel">
            <h3>Best Time to Visit</h3>
            <p>{{ destination.bestTimeToVisit }}</p>
          </div>
          
          <div v-if="activeTab === 'getting-there'" class="tab-panel">
            <h3>Getting There</h3>
            <p>{{ destination.gettingThere }}</p>
          </div>
          
          <div v-if="activeTab === 'accommodation'" class="tab-panel">
            <h3>Accommodation</h3>
            <p>{{ destination.accommodation }}</p>
          </div>
          
          <div v-if="activeTab === 'conservation'" class="tab-panel">
            <h3>Conservation</h3>
            <p>{{ destination.conservation }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Destinations -->
    <section class="related-destinations">
      <div class="container">
        <h2 class="section-title">Other Amazing Destinations</h2>
        <div class="destinations-grid">
          <NuxtLink 
            v-for="related in relatedDestinations" 
            :key="related.id"
            :to="`/destinations/${related.id}`"
            class="destination-card"
          >
            <div class="card-image" :style="{ backgroundImage: `url('${related.images[0]}')` }"></div>
            <div class="card-content">
              <h3>{{ related.title }}</h3>
              <p>{{ related.subtitle }}</p>
              <div class="card-price">From USD ${{ related.price }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getDestination, getAllDestinations, type Destination } from '~/data/destinations'

const route = useRoute()
const slug = route.params.slug as string

const destination = getDestination(slug)

if (!destination) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Destination not found'
  })
}

// Set page meta
useHead({
  title: `${destination.title} - Kilagala Escape Safaris`,
  meta: [
    {
      name: 'description',
      content: destination.description
    },
    {
      property: 'og:title',
      content: `${destination.title} - Kilagala Escape Safaris`
    },
    {
      property: 'og:description',
      content: destination.description
    },
    {
      property: 'og:image',
      content: destination.images[0]
    }
  ]
})

// Reactive data
const activeTab = ref('best-time')
const bookingData = ref({
  checkin: '',
  guests: '2'
})

// Tabs configuration
const tabs = [
  { id: 'best-time', name: 'Best Time' },
  { id: 'getting-there', name: 'Getting There' },
  { id: 'accommodation', name: 'Accommodation' },
  { id: 'conservation', name: 'Conservation' }
]

// Get related destinations (exclude current one)
const relatedDestinations = computed(() => {
  const allDestinations = getAllDestinations()
  return allDestinations
    .filter(d => d.id !== destination.id)
    .slice(0, 3)
})

// Methods
const openLightbox = (index: number) => {
  // TODO: Implement image lightbox
  console.log('Open lightbox at index:', index)
}

const submitBooking = () => {
  // TODO: Implement booking submission
  console.log('Booking submitted:', bookingData.value)
  alert('Booking request submitted! We\'ll contact you soon.')
}
</script>

<style scoped>
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

/* Main Content */
.main-content {
  padding: var(--spacing-4xl) 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-4xl);
  align-items: start;
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 3px solid var(--color-golden-yellow);
}

/* Gallery */
.gallery-section {
  margin-bottom: var(--spacing-4xl);
}

/* Full Width Hero Image */
.gallery-hero {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  cursor: pointer;
  margin-bottom: var(--spacing-xl);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: transform var(--transition-normal);
}

.gallery-hero:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.gallery-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-hero:hover img {
  transform: scale(1.05);
}

.gallery-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(0, 0, 0, 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background var(--transition-normal);
}

.gallery-hero:hover .gallery-hero-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
}

.gallery-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.gallery-hero:hover .gallery-play-btn {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green);
  transform: translate(-50%, -50%) scale(1.1);
}

.gallery-info {
  position: absolute;
  bottom: var(--spacing-xl);
  left: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.gallery-count {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.gallery-action {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

/* Image Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  height: 280px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: transform var(--transition-normal);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.gallery-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-more {
  position: relative;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  overflow: hidden;
  transition: transform var(--transition-normal);
}

.gallery-more:hover {
  transform: translateY(-3px);
}

.gallery-more-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.gallery-more-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 80, 22, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.more-count {
  font-size: var(--font-size-3xl);
  color: var(--color-golden-yellow);
}

.more-text {
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

/* Description */
.description-section {
  margin-bottom: var(--spacing-4xl);
}

.description-text {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--color-gray);
}

/* Highlights */
.highlights-section {
  margin-bottom: var(--spacing-4xl);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-light-beige);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
}

.highlight-item:hover {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green);
  transform: translateX(5px);
}

.highlight-icon {
  color: var(--color-forest-green);
  flex-shrink: 0;
}

/* Activities */
.activities-section {
  margin-bottom: var(--spacing-4xl);
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.activity-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: white;
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--color-light-beige);
  transition: all var(--transition-normal);
}

.activity-card:hover {
  border-color: var(--color-golden-yellow);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.activity-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.activity-card h4 {
  font-size: var(--font-size-lg);
  color: var(--color-forest-green);
  margin: 0;
}

/* Wildlife */
.wildlife-section {
  margin-bottom: var(--spacing-4xl);
}

.wildlife-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.wildlife-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: white;
  border: 1px solid var(--color-light-beige);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
}

.wildlife-item:hover {
  background: var(--color-light-beige);
  border-color: var(--color-golden-yellow);
}

.wildlife-icon {
  font-size: 1.5rem;
}

/* Bird Species Section */
.birds-section {
  margin-bottom: var(--spacing-4xl);
  background: linear-gradient(135deg, var(--color-light-beige), white);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  border: 1px solid rgba(45, 80, 22, 0.1);
}

.birds-intro {
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.birds-intro p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

.birds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.bird-category {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform var(--transition-normal);
}

.bird-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.bird-category h4 {
  font-size: var(--font-size-lg);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-golden-yellow);
}

.bird-category ul {
  list-style: none;
  padding: 0;
}

.bird-category li {
  padding: var(--spacing-sm) 0;
  color: var(--color-gray);
  position: relative;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-base);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: color var(--transition-fast);
}

.bird-category li:last-child {
  border-bottom: none;
}

.bird-category li::before {
  content: '🐦';
  position: absolute;
  left: 0;
  top: var(--spacing-sm);
}

.bird-category li:hover {
  color: var(--color-forest-green);
  padding-left: var(--spacing-xl);
}

/* Special Features Section */
.special-features-section {
  margin-bottom: var(--spacing-4xl);
  background: linear-gradient(135deg, white, var(--color-light-beige));
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  border: 2px solid var(--color-golden-yellow);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.feature-card {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-normal);
  border: 1px solid transparent;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-color: var(--color-golden-yellow);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.feature-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-golden-yellow), var(--color-golden-yellow-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(244, 200, 66, 0.3);
}

.feature-header h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green);
  margin: 0;
  flex: 1;
}

.feature-card p {
  color: var(--color-gray);
  line-height: 1.8;
  font-size: var(--font-size-base);
}

/* Itinerary */
.itinerary-section {
  margin-bottom: var(--spacing-4xl);
}

.itinerary-timeline {
  position: relative;
  padding-left: var(--spacing-2xl);
}

.itinerary-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-golden-yellow);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-3xl);
}

.timeline-marker {
  position: absolute;
  left: -32px;
  top: 0;
  width: 40px;
  height: 40px;
  background: var(--color-golden-yellow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-forest-green);
  font-weight: bold;
  font-size: var(--font-size-lg);
}

.timeline-content {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-light-beige);
}

.day-title {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-sm);
}

.day-description {
  color: var(--color-gray);
  margin-bottom: var(--spacing-lg);
}

.day-activities {
  list-style: none;
  padding: 0;
}

.day-activities li {
  padding: var(--spacing-xs) 0;
  color: var(--color-gray);
  position: relative;
  padding-left: var(--spacing-lg);
}

.day-activities li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-golden-yellow);
  font-weight: bold;
}

/* Booking Widget */
.content-right {
  position: sticky;
  top: 100px;
}

.booking-widget {
  background: white;
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-light-beige);
}

.booking-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-light-beige);
}

.booking-price {
  margin-bottom: var(--spacing-md);
}

.booking-price .price-label {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.booking-price .price-amount {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-forest-green);
  display: block;
}

.booking-price .price-note {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.booking-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.rating-count {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.booking-form {
  margin-bottom: var(--spacing-xl);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-sm);
}

.form-group input,
.form-group select {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid #ddd;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
}

.book-now-btn {
  width: 100%;
  padding: var(--spacing-lg);
  background: var(--color-forest-green);
  color: white;
  border: none;
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-normal);
}

.book-now-btn:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(45, 80, 22, 0.3);
}

.booking-features {
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-lg) 0;
  border-top: 1px solid var(--color-light-beige);
  border-bottom: 1px solid var(--color-light-beige);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.feature-item svg {
  color: var(--color-forest-green);
}

.included-section,
.not-included-section {
  margin-bottom: var(--spacing-xl);
}

.included-section h3,
.not-included-section h3 {
  font-size: var(--font-size-lg);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-md);
}

.included-list,
.not-included-list {
  list-style: none;
  padding: 0;
}

.included-list li,
.not-included-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs) 0;
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.included-list li svg {
  color: var(--color-forest-green);
  margin-top: 2px;
  flex-shrink: 0;
}

.not-included-list li svg {
  color: #dc2626;
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-info {
  text-align: center;
}

.contact-info h3 {
  font-size: var(--font-size-lg);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-md);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  color: var(--color-forest-green);
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: background var(--transition-fast);
}

.contact-link:hover {
  background: var(--color-light-beige);
}

/* Additional Info Tabs */
.additional-info {
  background: var(--color-light-beige);
  padding: var(--spacing-4xl) 0;
}

.info-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  border-bottom: 1px solid #ddd;
}

.tab-button {
  padding: var(--spacing-md) var(--spacing-xl);
  background: none;
  border: none;
  font-size: var(--font-size-base);
  color: var(--color-gray);
  cursor: pointer;
  transition: all var(--transition-fast);
  border-bottom: 3px solid transparent;
}

.tab-button.active {
  color: var(--color-forest-green);
  border-bottom-color: var(--color-golden-yellow);
}

.tab-button:hover {
  color: var(--color-forest-green);
}

.tab-content {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.tab-panel h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-lg);
}

.tab-panel p {
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-gray);
}

/* Related Destinations */
.related-destinations {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.destination-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-normal);
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: var(--spacing-xl);
}

.card-content h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-sm);
}

.card-content p {
  color: var(--color-gray);
  margin-bottom: var(--spacing-lg);
}

.card-price {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-golden-yellow);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .content-right {
    position: static;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    height: 300px;
  }
  
  .gallery-item.large {
    grid-row: span 1;
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  
  .stat-item.price {
    margin-left: 0;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .gallery-item {
    height: 200px;
  }
  
  .gallery-item.large {
    grid-column: span 1;
  }
  
  .highlights-grid,
  .activities-grid,
  .wildlife-grid {
    grid-template-columns: 1fr;
  }
  
  .info-tabs {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
}
</style>