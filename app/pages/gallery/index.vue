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
            All Media
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'videos' }"
            @click="setFilter('videos')"
          >
            Videos
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
            :class="[image.size, { 'featured': image.featured, 'video-item': image.type === 'video' }]"
            @click="openLightbox(index)"
          >
            <img v-if="image.type === 'image'" :src="image.src" :alt="image.title" class="gallery-image">
            <video v-else :src="image.src" class="gallery-image" muted loop>
              <source :src="image.src" type="video/mp4">
            </video>
            <div class="image-overlay">
              <div class="overlay-content">
                <h3 class="image-title">{{ image.title }}</h3>
                <p class="image-location">{{ image.location }}</p>
                <span class="image-category">{{ image.category }}</span>
              </div>
              <div class="zoom-icon">
                <svg v-if="image.type === 'image'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M11 8v6"/>
                  <path d="M8 11h6"/>
                </svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
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
          <img v-if="currentImage.type === 'image'" :src="currentImage.src" :alt="currentImage.title" class="lightbox-image">
          <video v-else :src="currentImage.src" class="lightbox-image" controls autoplay>
            <source :src="currentImage.src" type="video/mp4">
          </video>
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

// Gallery images and videos data
const galleryImages = [
  // Featured Main Park Images
  {
    src: '/images/murchion_main.jpeg',
    title: 'Murchison Falls',
    location: 'Murchison Falls National Park',
    category: 'parks',
    size: 'large',
    featured: true,
    type: 'image'
  },
  {
    src: '/images/bwindi.jpeg',
    title: 'Bwindi Impenetrable Forest',
    location: 'Bwindi Impenetrable National Park',
    category: 'gorillas',
    size: 'large',
    featured: true,
    type: 'image'
  },
  {
    src: '/images/Queen_main.jpeg',
    title: 'Queen Elizabeth National Park',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'medium',
    featured: true,
    type: 'image'
  },
  {
    src: '/images/mburo_main.jpeg',
    title: 'Lake Mburo National Park',
    location: 'Lake Mburo National Park',
    category: 'wildlife',
    size: 'medium',
    featured: true,
    type: 'image'
  },
  
  // Gorilla and Primate Images
  {
    src: '/images/gorilla.jpg',
    title: 'Mountain Gorilla Close-up',
    location: 'Bwindi Impenetrable National Park',
    category: 'gorillas',
    size: 'large',
    type: 'image'
  },
  {
    src: '/images/gorilla.webp',
    title: 'Gorilla Family',
    location: 'Mgahinga Gorilla National Park',
    category: 'gorillas',
    size: 'medium',
    type: 'image'
  },
  
  // Adventure Videos
  {
    src: '/much9.mp4',
    title: 'River Rapids Adventure',
    location: 'Jinja - Source of the Nile',
    category: 'adventure',
    size: 'large',
    type: 'video'
  },
  {
    src: '/much10.mp4',
    title: 'Safari Game Drive',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'large',
    type: 'video'
  },
  {
    src: '/much11.mp4',
    title: 'Boat Safari Experience',
    location: 'Kazinga Channel',
    category: 'adventure',
    size: 'medium',
    type: 'video'
  },
  {
    src: '/much12.mp4',
    title: 'Wildlife Encounter',
    location: 'Murchison Falls National Park',
    category: 'wildlife',
    size: 'medium',
    type: 'video'
  },
  
  // Landscape and Nature
  {
    src: '/images/landscape.jpeg',
    title: 'Uganda Landscape',
    location: 'Western Uganda',
    category: 'parks',
    size: 'large',
    type: 'image'
  },
  {
    src: '/images/water.jpeg',
    title: 'Source of the Nile',
    location: 'Jinja',
    category: 'adventure',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/images/uganda.jpeg',
    title: 'Pearl of Africa',
    location: 'Uganda Countryside',
    category: 'parks',
    size: 'medium',
    type: 'image'
  },
  
  // Park Images
  {
    src: '/images/park.jpeg',
    title: 'Savanna Wildlife',
    location: 'Kidepo Valley National Park',
    category: 'wildlife',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/images/park1.jpeg',
    title: 'Safari Sunset',
    location: 'Queen Elizabeth National Park',
    category: 'parks',
    size: 'small',
    type: 'image'
  },
  {
    src: '/images/park2.jpeg',
    title: 'Morning Mist',
    location: 'Kibale Forest National Park',
    category: 'parks',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/images/park3.jpeg',
    title: 'Forest Trail',
    location: 'Kibale National Park',
    category: 'parks',
    size: 'small',
    type: 'image'
  },
  {
    src: '/images/park4.jpeg',
    title: 'Mountain Views',
    location: 'Rwenzori Mountains National Park',
    category: 'parks',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/images/park5.jpeg',
    title: 'Crater Lake',
    location: 'Fort Portal',
    category: 'parks',
    size: 'small',
    type: 'image'
  },
  
  // Cultural Images
  {
    src: '/images/museum.jpeg',
    title: 'Uganda Museum',
    location: 'Kampala',
    category: 'cultural',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/images/group.jpeg',
    title: 'Community Visit',
    location: 'Batwa Community',
    category: 'cultural',
    size: 'small',
    type: 'image'
  },
  {
    src: '/images/her.jpeg',
    title: 'Local Traditions',
    location: 'Cultural Village',
    category: 'cultural',
    size: 'small',
    type: 'image'
  },
  {
    src: '/images/her1.jpeg',
    title: 'Cultural Dance',
    location: 'Traditional Performance',
    category: 'cultural',
    size: 'small',
    type: 'image'
  },
  {
    src: '/images/her2.jpeg',
    title: 'Local Crafts',
    location: 'Craft Market',
    category: 'cultural',
    size: 'small',
    type: 'image'
  },
  
  // Additional Lake Mburo Images
  {
    src: '/images/mburo.jpeg',
    title: 'Zebra Herd',
    location: 'Lake Mburo National Park',
    category: 'wildlife',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/images/mburo1.jpeg',
    title: 'Lake View',
    location: 'Lake Mburo',
    category: 'parks',
    size: 'small',
    type: 'image'
  },
  
  // Queen Elizabeth Images
  {
    src: '/images/Queen.jpeg',
    title: 'Tree Climbing Lions',
    location: 'Ishasha Sector - QENP',
    category: 'wildlife',
    size: 'large',
    type: 'image'
  },
  {
    src: '/images/queen.jpeg',
    title: 'Kazinga Channel',
    location: 'Queen Elizabeth National Park',
    category: 'wildlife',
    size: 'medium',
    type: 'image'
  },
  
  // Murchison Adventure Images
  {
    src: '/much1.jpeg',
    title: 'Falls View Point',
    location: 'Top of Murchison Falls',
    category: 'adventure',
    size: 'large',
    type: 'image'
  },
  {
    src: '/much2.jpeg',
    title: 'Nile Crocodiles',
    location: 'Murchison Falls National Park',
    category: 'wildlife',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/much3.jpeg',
    title: 'Boat Safari',
    location: 'Victoria Nile',
    category: 'adventure',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/much4.jpeg',
    title: 'Elephant Crossing',
    location: 'Murchison Falls National Park',
    category: 'wildlife',
    size: 'small',
    type: 'image'
  },
  {
    src: '/much5.jpeg',
    title: 'Hippo Pool',
    location: 'Victoria Nile',
    category: 'wildlife',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/much6.jpeg',
    title: 'Sunset Safari',
    location: 'Murchison Falls National Park',
    category: 'parks',
    size: 'small',
    type: 'image'
  },
  {
    src: '/much7.jpeg',
    title: 'Buffalo Herd',
    location: 'Northern Circuit',
    category: 'wildlife',
    size: 'medium',
    type: 'image'
  },
  {
    src: '/much8.jpeg',
    title: 'Game Drive Adventure',
    location: 'Savanna Plains',
    category: 'adventure',
    size: 'small',
    type: 'image'
  },
  {
    src: '/much.jpeg',
    title: 'Wilderness Camp',
    location: 'Safari Camp',
    category: 'adventure',
    size: 'small',
    type: 'image'
  }
]

// Computed properties
const filteredImages = computed(() => {
  let filtered = galleryImages
  
  if (activeFilter.value === 'videos') {
    filtered = galleryImages.filter(img => img.type === 'video')
  } else if (activeFilter.value !== 'all') {
    filtered = galleryImages.filter(img => img.category === activeFilter.value)
  }
  
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
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .stat-item {
    flex: 1;
    min-width: 0;
  }

  .stat-item.price {
    margin-left: 0;
  }
  
  .filter-tabs {
    gap: var(--spacing-sm);
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 var(--spacing-sm);
  }

  .filter-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
    white-space: nowrap;
    flex-shrink: 0;
    min-width: auto;
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
    flex-direction: row;
    gap: var(--spacing-sm);
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .stat-item {
    flex: 1;
    min-width: 0;
    text-align: center;
  }

  .stat-number {
    font-size: var(--font-size-lg) !important;
  }

  .stat-label {
    font-size: 0.7rem !important;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-header h2 {
    font-size: var(--font-size-2xl);
  }

  .filter-tabs {
    gap: 6px;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 var(--spacing-xs);
    -webkit-overflow-scrolling: touch;
  }

  .filter-btn {
    padding: 6px 12px;
    font-size: 0.75rem;
    border-width: 1px;
    white-space: nowrap;
    flex-shrink: 0;
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

/* Video items */
.gallery-item.video-item {
  position: relative;
}

.gallery-item.video-item::before {
  content: '▶';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  transition: all var(--transition-normal);
}

.gallery-item.video-item:hover::before {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  transform: translate(-50%, -50%) scale(1.1);
}

.gallery-item.video-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox-image-container video {
  width: 100%;
  height: auto;
  max-height: 70vh;
}
</style>