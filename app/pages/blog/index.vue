<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="breadcrumb">
              <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">Blog</span>
            </div>
            <h1 class="hero-title">Safari Stories & Insights</h1>
            <p class="hero-subtitle">Discover Uganda's wilderness through our expert guides' experiences and travel tips</p>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">150+</span>
                <span class="stat-label">Articles</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">8</span>
                <span class="stat-label">Categories</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">25K+</span>
                <span class="stat-label">Readers</span>
              </div>
              <div class="stat-item price">
                <span class="price-label">Updated</span>
                <span class="price-amount">Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image" :style="{ backgroundImage: 'url(/much5.jpeg)' }"></div>
    </section>

    <!-- Featured Article Section -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">FEATURED ARTICLE</span>
          <h2>Latest Safari Adventure</h2>
        </div>
        
        <div class="featured-article">
          <div class="featured-image">
            <img src="/much1.jpeg" alt="Gorilla Trekking Adventure" class="article-image">
            <div class="category-tag">Wildlife</div>
          </div>
          <div class="featured-content">
            <div class="article-meta">
              <span class="author">By David Kilagala</span>
              <span class="date">December 15, 2024</span>
              <span class="read-time">8 min read</span>
            </div>
            <h3 class="article-title">Ultimate Guide to Gorilla Trekking in Bwindi Impenetrable Forest</h3>
            <p class="article-excerpt">
              Discover everything you need to know about encountering mountain gorillas in their natural habitat. 
              From preparation tips to what to expect during your trek, this comprehensive guide covers it all 
              based on our 9+ years of leading successful gorilla trekking expeditions.
            </p>
            <div class="article-tags">
              <span class="tag">Gorilla Trekking</span>
              <span class="tag">Bwindi</span>
              <span class="tag">Wildlife</span>
              <span class="tag">Travel Tips</span>
            </div>
            <NuxtLink to="/blog/gorilla-trekking-guide" class="read-more-btn">
              Read Full Article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories & Filter -->
    <section class="categories-section">
      <div class="container">
        <div class="categories-header">
          <h2>Explore Our Stories</h2>
          <p>Browse articles by category to find exactly what interests you</p>
        </div>
        
        <div class="category-filters">
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'all' }"
            @click="setCategory('all')"
          >
            All Articles
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'wildlife' }"
            @click="setCategory('wildlife')"
          >
            Wildlife
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'gorillas' }"
            @click="setCategory('gorillas')"
          >
            Gorilla Trekking
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'travel-tips' }"
            @click="setCategory('travel-tips')"
          >
            Travel Tips
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'culture' }"
            @click="setCategory('culture')"
          >
            Culture
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'conservation' }"
            @click="setCategory('conservation')"
          >
            Conservation
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'destinations' }"
            @click="setCategory('destinations')"
          >
            Destinations
          </button>
        </div>
      </div>
    </section>

    <!-- Main Blog Content -->
    <section class="blog-content-section">
      <div class="container">
        <div class="blog-layout">
          <!-- Articles Grid -->
          <div class="articles-grid">
            <article 
              v-for="(article, index) in filteredArticles" 
              :key="index"
              class="article-card"
            >
              <div class="card-image">
                <img :src="article.image" :alt="article.title" class="article-thumb">
                <div class="category-badge">{{ article.category }}</div>
                <div class="read-time-badge">{{ article.readTime }}</div>
              </div>
              
              <div class="card-content">
                <div class="article-meta">
                  <span class="author">{{ article.author }}</span>
                  <span class="date">{{ article.date }}</span>
                </div>
                
                <h3 class="card-title">{{ article.title }}</h3>
                <p class="card-excerpt">{{ article.excerpt }}</p>
                
                <div class="card-tags">
                  <span 
                    v-for="tag in article.tags" 
                    :key="tag" 
                    class="tag-small"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <NuxtLink :to="article.slug" class="read-more-link">
                  Read More →
                </NuxtLink>
              </div>
            </article>
          </div>

          <!-- Sidebar -->
          <aside class="blog-sidebar">
            <!-- Recent Posts -->
            <div class="sidebar-widget">
              <h3 class="widget-title">Recent Posts</h3>
              <div class="recent-posts">
                <div 
                  v-for="(post, index) in recentPosts" 
                  :key="index"
                  class="recent-post"
                >
                  <div class="recent-thumb">
                    <img :src="post.image" :alt="post.title">
                  </div>
                  <div class="recent-content">
                    <h4 class="recent-title">{{ post.title }}</h4>
                    <span class="recent-date">{{ post.date }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="sidebar-widget">
              <h3 class="widget-title">Categories</h3>
              <ul class="category-list">
                <li><a href="#" @click="setCategory('wildlife')">Wildlife (24)</a></li>
                <li><a href="#" @click="setCategory('gorillas')">Gorilla Trekking (18)</a></li>
                <li><a href="#" @click="setCategory('travel-tips')">Travel Tips (15)</a></li>
                <li><a href="#" @click="setCategory('culture')">Culture (12)</a></li>
                <li><a href="#" @click="setCategory('conservation')">Conservation (10)</a></li>
                <li><a href="#" @click="setCategory('destinations')">Destinations (8)</a></li>
              </ul>
            </div>

            <!-- Newsletter Signup -->
            <div class="sidebar-widget newsletter-widget">
              <h3 class="widget-title">Stay Updated</h3>
              <p>Get the latest safari stories and travel tips delivered to your inbox.</p>
              <form class="newsletter-form">
                <input type="email" placeholder="Your email address" class="newsletter-input">
                <button type="submit" class="newsletter-btn">Subscribe</button>
              </form>
            </div>

            <!-- Popular Tags -->
            <div class="sidebar-widget">
              <h3 class="widget-title">Popular Tags</h3>
              <div class="tag-cloud">
                <span class="cloud-tag">Gorilla Trekking</span>
                <span class="cloud-tag">Wildlife</span>
                <span class="cloud-tag">Uganda</span>
                <span class="cloud-tag">Safari Tips</span>
                <span class="cloud-tag">Bwindi</span>
                <span class="cloud-tag">Conservation</span>
                <span class="cloud-tag">Photography</span>
                <span class="cloud-tag">Culture</span>
              </div>
            </div>
          </aside>
        </div>

        <!-- Load More Section -->
        <div class="load-more-section">
          <button class="load-more-btn" @click="loadMore">
            Load More Articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14"/>
              <path d="M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const activeCategory = ref('all')
const currentPage = ref(1)
const articlesPerPage = 6

// Sample blog articles data
const articles = ref([
  {
    title: "Ultimate Guide to Gorilla Trekking in Bwindi Impenetrable Forest",
    excerpt: "Everything you need to know about encountering mountain gorillas in their natural habitat. From preparation tips to what to expect during your trek.",
    image: "/much1.jpeg",
    category: "wildlife",
    author: "David Kilagala",
    date: "December 15, 2024",
    readTime: "8 min read",
    tags: ["Gorilla Trekking", "Bwindi", "Wildlife", "Travel Tips"],
    slug: "/blog/gorilla-trekking-guide"
  },
  {
    title: "5 Essential Photography Tips for Your Uganda Safari",
    excerpt: "Capture stunning wildlife photos on your safari adventure with these expert photography techniques and equipment recommendations.",
    image: "/much2.jpeg",
    category: "travel-tips",
    author: "Sarah Nakamura",
    date: "December 12, 2024",
    readTime: "6 min read",
    tags: ["Photography", "Safari Tips", "Wildlife"],
    slug: "/blog/safari-photography-tips"
  },
  {
    title: "Queen Elizabeth National Park: A Wildlife Paradise",
    excerpt: "Discover the diverse ecosystems and incredible wildlife that make Queen Elizabeth National Park one of Uganda's premier safari destinations.",
    image: "/much3.jpeg",
    category: "destinations",
    author: "Michael Ssemakula",
    date: "December 10, 2024",
    readTime: "10 min read",
    tags: ["Queen Elizabeth", "Wildlife", "Safari", "Uganda"],
    slug: "/blog/queen-elizabeth-park-guide"
  },
  {
    title: "Cultural Encounters: Meeting Uganda's Local Communities",
    excerpt: "Experience the rich cultural heritage of Uganda through authentic community visits and traditional ceremonies during your safari.",
    image: "/much4.jpeg",
    category: "culture",
    author: "Grace Nalubega",
    date: "December 8, 2024",
    readTime: "7 min read",
    tags: ["Culture", "Community", "Traditional", "Uganda"],
    slug: "/blog/uganda-cultural-encounters"
  },
  {
    title: "Conservation Success Stories in Ugandan National Parks",
    excerpt: "Learn about the remarkable conservation efforts that have helped protect Uganda's endangered species and pristine wilderness areas.",
    image: "/much5.jpeg",
    category: "conservation",
    author: "Dr. James Okello",
    date: "December 5, 2024",
    readTime: "12 min read",
    tags: ["Conservation", "Wildlife Protection", "National Parks"],
    slug: "/blog/conservation-success-stories"
  },
  {
    title: "Best Time to Visit Uganda for Wildlife Viewing",
    excerpt: "Plan your perfect safari with our comprehensive guide to Uganda's seasons, weather patterns, and optimal wildlife viewing times.",
    image: "/much6.jpeg",
    category: "travel-tips",
    author: "Robert Mukasa",
    date: "December 3, 2024",
    readTime: "9 min read",
    tags: ["Travel Planning", "Seasons", "Wildlife Viewing"],
    slug: "/blog/best-time-to-visit-uganda"
  },
  {
    title: "Murchison Falls: The Jewel of Northern Uganda",
    excerpt: "Explore the magnificent Murchison Falls National Park, home to the world's most powerful waterfall and incredible wildlife diversity.",
    image: "/much7.jpeg",
    category: "destinations",
    author: "David Kilagala",
    date: "November 30, 2024",
    readTime: "11 min read",
    tags: ["Murchison Falls", "Waterfall", "Wildlife", "Northern Uganda"],
    slug: "/blog/murchison-falls-guide"
  },
  {
    title: "Chimpanzee Tracking in Kibale Forest",
    excerpt: "Discover our closest living relatives in their natural habitat with expert tips for chimpanzee tracking in Kibale National Park.",
    image: "/much8.jpeg",
    category: "wildlife",
    author: "Sarah Nakamura",
    date: "November 28, 2024",
    readTime: "8 min read",
    tags: ["Chimpanzees", "Kibale", "Primates", "Tracking"],
    slug: "/blog/chimpanzee-tracking-kibale"
  },
  {
    title: "Safari Packing Essentials: What to Bring to Uganda",
    excerpt: "Complete packing checklist for your Uganda safari, including essential gear, clothing, and items for different activities.",
    image: "/much2.jpeg",
    category: "travel-tips",
    author: "Michael Ssemakula",
    date: "November 25, 2024",
    readTime: "7 min read",
    tags: ["Packing", "Safari Gear", "Travel Tips"],
    slug: "/blog/safari-packing-essentials"
  },
  {
    title: "Rwenzori Mountains: Trekking the Mountains of the Moon",
    excerpt: "Challenge yourself with a trek through the mystical Rwenzori Mountains, Africa's third-highest peak and a UNESCO World Heritage Site.",
    image: "/much3.jpeg",
    category: "destinations",
    author: "Grace Nalubega",
    date: "November 22, 2024",
    readTime: "14 min read",
    tags: ["Rwenzori", "Trekking", "Mountains", "Adventure"],
    slug: "/blog/rwenzori-mountains-trekking"
  },
  {
    title: "Birdwatching Paradise: Uganda's Avian Diversity",
    excerpt: "Discover why Uganda is considered one of the world's top birdwatching destinations with over 1,000 recorded bird species.",
    image: "/much4.jpeg",
    category: "wildlife",
    author: "Dr. James Okello",
    date: "November 20, 2024",
    readTime: "10 min read",
    tags: ["Birdwatching", "Avian", "Species", "Biodiversity"],
    slug: "/blog/uganda-birdwatching-guide"
  },
  {
    title: "Sustainable Tourism: Supporting Local Communities",
    excerpt: "Learn how responsible tourism practices help support local communities and conservation efforts in Uganda's national parks.",
    image: "/much5.jpeg",
    category: "conservation",
    author: "Robert Mukasa",
    date: "November 18, 2024",
    readTime: "8 min read",
    tags: ["Sustainable Tourism", "Community Support", "Responsible Travel"],
    slug: "/blog/sustainable-tourism-uganda"
  }
])

// Recent posts for sidebar
const recentPosts = ref([
  {
    title: "Ultimate Guide to Gorilla Trekking",
    image: "/much1.jpeg",
    date: "Dec 15, 2024"
  },
  {
    title: "Safari Photography Tips",
    image: "/much2.jpeg",
    date: "Dec 12, 2024"
  },
  {
    title: "Queen Elizabeth National Park",
    image: "/much3.jpeg",
    date: "Dec 10, 2024"
  },
  {
    title: "Cultural Encounters in Uganda",
    image: "/much4.jpeg",
    date: "Dec 8, 2024"
  }
])

// Computed property for filtered articles
const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') {
    return articles.value.slice(0, currentPage.value * articlesPerPage)
  }
  return articles.value
    .filter(article => article.category === activeCategory.value)
    .slice(0, currentPage.value * articlesPerPage)
})

// Methods
const setCategory = (category) => {
  activeCategory.value = category
  currentPage.value = 1
}

const loadMore = () => {
  currentPage.value++
}

// SEO Meta
useSeoMeta({
  title: 'Safari Stories & Insights - Ronnie Safaris Uganda',
  description: 'Discover Uganda\'s wilderness through expert guides\' experiences, travel tips, and wildlife stories. Read our latest safari insights and adventure guides.',
  ogTitle: 'Safari Stories & Insights - Ronnie Safaris Uganda',
  ogDescription: 'Discover Uganda\'s wilderness through expert guides\' experiences, travel tips, and wildlife stories.',
  ogImage: '/much5.jpeg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.blog-page {
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

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(45, 80, 22, 0.8) 0%, rgba(26, 48, 9, 0.6) 100%);
  z-index: 1;
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
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  color: white;
}

.hero-text {
  color: white;
  max-width: 600px;
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

.stat-number, .price-amount {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-golden-yellow);
  margin-bottom: var(--spacing-xs);
}

.stat-label, .price-label {
  font-size: var(--font-size-sm);
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Featured Section */
.featured-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
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

.section-header h2 {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
}

.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.featured-image {
  position: relative;
  height: 400px;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.featured-content {
  padding: 2rem;
}

.article-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
}

.author {
  font-weight: 600;
}

.article-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  line-height: 1.3;
  margin-bottom: var(--spacing-md);
}

.article-excerpt {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-gray);
  margin-bottom: var(--spacing-lg);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-2xl);
}

.tag {
  background: var(--color-light-beige);
  color: var(--color-forest-green);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.read-more-btn:hover {
  background: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Categories Section */
.categories-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-white);
}

.categories-header {
  text-align: center;
  margin-bottom: 3rem;
}

.categories-header h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
}

.categories-header p {
  color: var(--color-gray);
  font-size: var(--font-size-lg);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-md);
}

.filter-btn {
  background: transparent;
  border: 2px solid var(--color-light-beige);
  color: var(--color-gray);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--color-golden-yellow);
  border-color: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
}

/* Blog Content Section */
.blog-content-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.blog-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-4xl);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
}

.article-card {
  background: var(--color-white);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.article-card:hover .article-thumb {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: capitalize;
}

.read-time-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
}

.card-content {
  padding: var(--spacing-xl);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-excerpt {
  color: var(--color-gray);
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.tag-small {
  background: var(--color-light-beige);
  color: var(--color-forest-green);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-xs);
  font-weight: 500;
}

.read-more-link {
  color: var(--color-forest-green);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.read-more-link:hover {
  color: var(--color-golden-yellow);
}

/* Sidebar */
.blog-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.sidebar-widget {
  background: var(--color-white);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
}

.widget-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-light-beige);
}

.recent-posts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.recent-post {
  display: flex;
  gap: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-light-beige);
}

.recent-post:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.recent-thumb {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.recent-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recent-content {
  flex: 1;
}

.recent-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-forest-green-dark);
  line-height: 1.3;
  margin-bottom: var(--spacing-xs);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.recent-date {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  margin-bottom: 0.75rem;
}

.category-list a {
  color: var(--color-gray);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-light-beige);
  transition: color var(--transition-fast);
}

.category-list a:hover {
  color: var(--color-forest-green);
}

.newsletter-widget {
  background: linear-gradient(135deg, var(--color-forest-green), var(--color-forest-green-dark));
  color: var(--color-white);
}

.newsletter-widget .widget-title {
  color: var(--color-white);
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.newsletter-widget p {
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.newsletter-input {
  padding: var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
}

.newsletter-btn {
  background: var(--color-white);
  color: var(--color-forest-green);
  border: none;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.newsletter-btn:hover {
  background: var(--color-light-beige);
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.cloud-tag {
  background: var(--color-light-beige);
  color: var(--color-forest-green);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-xl);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.cloud-tag:hover {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
}

/* Load More Section */
.load-more-section {
  text-align: center;
  margin-top: var(--spacing-3xl);
}

.load-more-btn {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  border: none;
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-normal);
}

.load-more-btn:hover {
  background: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .blog-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
  
  .featured-article {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .featured-image {
    height: 300px;
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
  
  .articles-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .category-filters {
    gap: var(--spacing-sm);
  }
  
  .filter-btn {
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .section-header h2 {
    font-size: var(--font-size-3xl);
  }
  
  .featured-section,
  .categories-section,
  .blog-content-section {
    padding: var(--spacing-3xl) 0;
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
  
  .category-filters {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-btn {
    width: 200px;
  }
  
  .sidebar-widget {
    padding: var(--spacing-xl);
  }
  
  .featured-content {
    padding: var(--spacing-xl);
  }
  
  .article-title {
    font-size: var(--font-size-xl);
  }
}
</style>