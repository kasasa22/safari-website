<template>
  <div class="gallery-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="breadcrumb">
              <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">Gallery</span>
            </div>
            <h1 class="hero-title">Safari Gallery</h1>
            <p class="hero-subtitle">Captured Moments from Uganda's Wilderness</p>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">500+</span>
                <span class="stat-label">Photos</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">National Parks</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Wildlife Species</span>
              </div>
              <div class="stat-item price">
                <span class="price-label">New Photos</span>
                <span class="price-amount">Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image" :style="{ backgroundImage: 'url(/much1.jpeg)' }"></div>
    </section>

    <!-- Gallery Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-header">
          <h2>Explore Our Safari Adventures</h2>
          <p>Browse through stunning photography from Uganda's most spectacular wildlife destinations</p>
        </div>
        
        <div class="filter-tabs">
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'all' }"
            @click="setFilter('all')"
          >
            All Photos
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'wildlife' }"
            @click="setFilter('wildlife')"
          >
            Wildlife
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'gorillas' }"
            @click="setFilter('gorillas')"
          >
            Gorillas
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'parks' }"
            @click="setFilter('parks')"
          >
            National Parks
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'cultural' }"
            @click="setFilter('cultural')"
          >
            Cultural
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'adventure' }"
            @click="setFilter('adventure')"
          >
            Adventure
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid Section -->
    <section class="gallery-grid-section">
      <div class="container">
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            class="gallery-item"
            :class="[image.size, { 'featured': image.featured }]"
            @click="openLightbox(index)"
          >
            <img :src="image.src" :alt="image.title" class="gallery-image">
            <div class="image-overlay">
              <div class="overlay-content">
                <h3 class="image-title">{{ image.title }}</h3>
                <p class="image-location">{{ image.location }}</p>
                <span class="image-category">{{ image.category }}</span>
              </div>
              <div class="zoom-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M11 8v6"/>
                  <path d="M8 11h6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="load-more-section">
          <button class="load-more-btn" @click="loadMore">
            Load More Photos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14"/>
              <path d="M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        
        <div class="lightbox-image-container">
          <img :src="currentImage.src" :alt="currentImage.title" class="lightbox-image">
        </div>
        
        <div class="lightbox-info">
          <h3>{{ currentImage.title }}</h3>
          <p>{{ currentImage.location }}</p>
          <span class="lightbox-category">{{ currentImage.category }}</span>
        </div>
        
        <button class="lightbox-nav lightbox-prev" @click="previousImage">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
        
        <button class="lightbox-nav lightbox-next" @click="nextImage">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Gallery - Kilagala Escape Safaris',
  meta: [
    {
      name: 'description',
      content: 'Explore our stunning gallery of Uganda safari adventures. View amazing wildlife photos, landscapes, and cultural moments from our expert-guided tours.'
    }
  ]
})

// Reactive data
const activeFilter = ref('all')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const visibleImages = ref(12)

// Gallery images data
const galleryImages = [
  // Featured Park Images (shown first)
  {
    src: '/images/park.jpeg',
    title: 'Bwindi Impenetrable Forest',
    location: 'Bwindi Impenetrable National Park',
    category: 'parks',
    size: 'large',
    featured: true
  },
  {
    src: '/images/park1.jpeg',
    title: 'Queen Elizabeth Park',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'medium',
    featured: true
  },
  {
    src: '/images/park2.jpeg',
    title: 'Murchison Falls Park',
    location: 'Murchison Falls National Park',
    category: 'parks',
    size: 'large',
    featured: true
  },
  {
    src: '/images/park3.jpeg',
    title: 'Kibale Forest Park',
    location: 'Kibale Forest National Park',
    category: 'wildlife',
    size: 'medium',
    featured: true
  },
  {
    src: '/images/park4.jpeg',
    title: 'Lake Mburo Park',
    location: 'Lake Mburo National Park',
    category: 'wildlife',
    size: 'medium',
    featured: true
  },
  {
    src: '/images/park5.jpeg',
    title: 'Rwenzori Mountains',
    location: 'Rwenzori Mountains National Park',
    category: 'parks',
    size: 'large',
    featured: true
  },
  // Existing images
  {
    src: '/much1.jpeg',
    title: 'Mountain Gorillas',
    location: 'Bwindi Impenetrable National Park',
    category: 'gorillas',
    size: 'large'
  },
  {
    src: '/much2.jpeg',
    title: 'Wildlife Safari',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'medium'
  },
  {
    src: '/much3.jpeg',
    title: 'Murchison Falls',
    location: 'Murchison Falls National Park',
    category: 'parks',
    size: 'medium'
  },
  {
    src: '/much4.jpeg',
    title: 'Cultural Experience',
    location: 'Local Community',
    category: 'cultural',
    size: 'small'
  },
  {
    src: '/much5.jpeg',
    title: 'White Water Rafting',
    location: 'Jinja',
    category: 'adventure',
    size: 'small'
  },
  {
    src: '/much6.jpeg',
    title: 'African Elephants',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'large'
  },
  {
    src: '/much1.jpeg',
    title: 'Silverback Gorilla',
    location: 'Mgahinga Gorilla National Park',
    category: 'gorillas',
    size: 'medium'
  },
  {
    src: '/much2.jpeg',
    title: 'Savanna Landscape',
    location: 'Kidepo Valley National Park',
    category: 'parks',
    size: 'small'
  },
  {
    src: '/much3.jpeg',
    title: 'Traditional Dance',
    location: 'Cultural Center',
    category: 'cultural',
    size: 'small'
  },
  {
    src: '/much4.jpeg',
    title: 'Tree Climbing Lions',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'medium'
  },
  {
    src: '/much5.jpeg',
    title: 'Rwenzori Mountains',
    location: 'Rwenzori Mountains National Park',
    category: 'parks',
    size: 'large'
  },
  {
    src: '/much6.jpeg',
    title: 'Bungee Jumping',
    location: 'Jinja',
    category: 'adventure',
    size: 'medium'
  }
]

// Computed properties
const filteredImages = computed(() => {
  const filtered = activeFilter.value === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter.value)
  
  return filtered.slice(0, visibleImages.value)
})

const currentImage = computed(() => {
  return filteredImages.value[currentImageIndex.value] || galleryImages[0]
})

// Methods
const setFilter = (filter: string) => {
  activeFilter.value = filter
  visibleImages.value = 12 // Reset visible images when changing filter
}

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? filteredImages.value.length - 1 
    : currentImageIndex.value - 1
}

const loadMore = () => {
  visibleImages.value += 8
}

// Keyboard navigation for lightbox
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (!lightboxOpen.value) return
    
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') previousImage()
    if (e.key === 'ArrowRight') nextImage()
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  })
})
</script>

<style scoped>
/* Gallery Page Styles */
.gallery-page {
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
  text-align: center;
}

.stat-item.price {
  margin-left: auto;
  text-align: right;
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

.price-label {
  font-size: var(--font-size-sm);
  opacity: 0.8;
  display: block;
}

.price-amount {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-golden-yellow);
  margin-top: var(--spacing-xs);
}

/* Filter Section */
.filter-section {
  background: white;
  padding: var(--spacing-4xl) 0;
  text-align: center;
}

.filter-header h2 {
  font-size: var(--font-size-3xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 700;
}

.filter-header p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.filter-btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  border: 2px solid var(--color-forest-green);
  color: var(--color-forest-green);
  border-radius: 50px;
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-forest-green);
  color: white;
  transform: translateY(-2px);
}

/* Gallery Grid Section */
.gallery-grid-section {
  background: var(--color-light-beige);
  padding: var(--spacing-5xl) 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-4xl);
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  background: white;
  box-shadow: var(--shadow-md);
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.gallery-item.small {
  grid-row: span 1;
}

.gallery-item.medium {
  grid-row: span 2;
}

.gallery-item.large {
  grid-row: span 3;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  min-height: 250px;
}

.gallery-item.medium .gallery-image {
  min-height: 350px;
}

.gallery-item.large .gallery-image {
  min-height: 450px;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: opacity var(--transition-normal);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--spacing-lg);
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  margin-top: auto;
  color: white;
}

.image-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.image-location {
  font-size: var(--font-size-base);
  opacity: 0.9;
  margin-bottom: var(--spacing-sm);
}

.image-category {
  display: inline-block;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
}

.zoom-icon {
  align-self: flex-end;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all var(--transition-fast);
}

.gallery-item:hover .zoom-icon {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  transform: scale(1.1);
}

/* Load More Section */
.load-more-section {
  text-align: center;
}

.load-more-btn {
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: var(--color-forest-green);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.load-more-btn:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.lightbox-close {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast);
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

.lightbox-image-container {
  position: relative;
  max-width: 80vw;
  max-height: 70vh;
  overflow: hidden;
}

.lightbox-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 80vw;
  max-height: 70vh;
}

.lightbox-info {
  padding: var(--spacing-xl);
  text-align: center;
}

.lightbox-info h3 {
  font-size: var(--font-size-xl);
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.lightbox-info p {
  color: var(--color-gray);
  margin-bottom: var(--spacing-md);
}

.lightbox-category {
  display: inline-block;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  z-index: 10001;
}

.lightbox-nav:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: var(--spacing-lg);
  border-radius: 0 25px 25px 0;
}

.lightbox-next {
  right: var(--spacing-lg);
  border-radius: 25px 0 0 25px;
}

/* Global Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .gallery-item.large,
  .gallery-item.medium {
    grid-row: span 1;
  }
  
  .gallery-image,
  .gallery-item.medium .gallery-image,
  .gallery-item.large .gallery-image {
    min-height: 250px;
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
    justify-content: center;
  }
  
  .stat-item.price {
    margin-left: 0;
    margin-top: var(--spacing-lg);
  }
  
  .filter-tabs {
    gap: var(--spacing-sm);
  }
  
  .filter-btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-sm);
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-md);
  }
  
  .lightbox-content {
    margin: var(--spacing-lg);
  }
  
  .lightbox-nav {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: center;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-header h2 {
    font-size: var(--font-size-2xl);
  }
  
  .lightbox-image-container {
    max-width: 95vw;
    max-height: 60vh;
  }
  
  .lightbox-image {
    max-width: 95vw;
    max-height: 60vh;
  }
}
/* Featured park images */
.gallery-item.featured {
  border: 3px solid var(--color-golden-yellow);
  box-shadow: 0 8px 32px rgba(255, 193, 7, 0.4);
}

.gallery-item.featured:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 48px rgba(255, 193, 7, 0.5);
}

.gallery-item.featured .image-overlay {
  background: linear-gradient(
    transparent 0%,
    transparent 40%,
    rgba(45, 80, 22, 0.9) 100%
  );
}

.gallery-item.featured .image-title {
  color: var(--color-golden-yellow);
  font-weight: 700;
}

.gallery-item.featured .image-category {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
}
</style>