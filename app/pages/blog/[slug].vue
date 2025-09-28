<template>
  <div class="blog-post-page">
    <!-- Hero Section -->
    <section class="post-hero">
      <div class="hero-image" :style="{ backgroundImage: `url(${post.heroImage})` }"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="breadcrumb">
              <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <NuxtLink to="/blog" class="breadcrumb-link">Blog</NuxtLink>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">{{ post.title }}</span>
            </div>
            
            <div class="category-badge">{{ post.category }}</div>
            <h1 class="post-title">{{ post.title }}</h1>
            <p class="post-subtitle">{{ post.subtitle }}</p>
            
            <div class="post-meta">
              <div class="meta-item">
                <div class="author-avatar">
                  <img :src="post.author.avatar" :alt="post.author.name">
                </div>
                <div class="author-info">
                  <span class="author-name">{{ post.author.name }}</span>
                  <span class="author-title">{{ post.author.title }}</span>
                </div>
              </div>
              <div class="meta-divider"></div>
              <div class="meta-item">
                <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>{{ post.readTime }}</span>
              </div>
              <div class="meta-divider"></div>
              <div class="meta-item">
                <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{{ post.publishDate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="post-content-section">
      <div class="container">
        <div class="content-layout">
          <!-- Main Article Content -->
          <main class="main-content">
            <div class="content-wrapper">
              <!-- Introduction -->
              <div class="intro-section">
                <p class="intro-text">{{ post.introduction }}</p>
              </div>

              <!-- Article Body -->
              <div class="article-body">
                <div v-for="(section, index) in post.content" :key="index" class="content-section">
                  <!-- Text Section -->
                  <div v-if="section.type === 'text'" class="text-section">
                    <h2 v-if="section.heading" class="section-heading">{{ section.heading }}</h2>
                    <div v-html="section.content" class="section-text"></div>
                  </div>

                  <!-- Image Section -->
                  <div v-if="section.type === 'image'" class="image-section">
                    <div class="image-container">
                      <img :src="section.src" :alt="section.alt" class="content-image">
                      <p v-if="section.caption" class="image-caption">{{ section.caption }}</p>
                    </div>
                  </div>

                  <!-- Quote Section -->
                  <div v-if="section.type === 'quote'" class="quote-section">
                    <blockquote class="content-quote">
                      <p>{{ section.text }}</p>
                      <cite v-if="section.author">{{ section.author }}</cite>
                    </blockquote>
                  </div>

                  <!-- List Section -->
                  <div v-if="section.type === 'list'" class="list-section">
                    <h3 v-if="section.heading" class="list-heading">{{ section.heading }}</h3>
                    <ul class="content-list">
                      <li v-for="(item, i) in section.items" :key="i" class="list-item">
                        {{ item }}
                      </li>
                    </ul>
                  </div>

                  <!-- Highlight Box -->
                  <div v-if="section.type === 'highlight'" class="highlight-section">
                    <div class="highlight-box">
                      <div class="highlight-icon">{{ section.icon }}</div>
                      <div class="highlight-content">
                        <h4 class="highlight-title">{{ section.title }}</h4>
                        <p class="highlight-text">{{ section.text }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tags and Social Share -->
              <div class="post-footer">
                <div class="post-tags">
                  <h4>Tags:</h4>
                  <div class="tags-list">
                    <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
                
                <div class="social-share">
                  <h4>Share this article:</h4>
                  <div class="share-buttons">
                    <a href="#" class="share-btn facebook" aria-label="Share on Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" class="share-btn twitter" aria-label="Share on Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    </a>
                    <a href="#" class="share-btn linkedin" aria-label="Share on LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="#" class="share-btn email" aria-label="Share via Email">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-10 5L2 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Author Bio -->
              <div class="author-bio">
                <div class="bio-avatar">
                  <img :src="post.author.avatar" :alt="post.author.name">
                </div>
                <div class="bio-content">
                  <h3 class="bio-name">{{ post.author.name }}</h3>
                  <p class="bio-title">{{ post.author.title }}</p>
                  <p class="bio-description">{{ post.author.bio }}</p>
                  <div class="bio-social">
                    <a v-for="social in post.author.social" :key="social.platform" :href="social.url" class="bio-social-link">
                      {{ social.platform }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <!-- Sidebar -->
          <aside class="post-sidebar">
            <!-- Table of Contents -->
            <div class="sidebar-widget toc-widget">
              <h3 class="widget-title">Table of Contents</h3>
              <nav class="table-of-contents">
                <ul class="toc-list">
                  <li v-for="(section, index) in tableOfContents" :key="index" class="toc-item">
                    <a :href="`#section-${index}`" class="toc-link">{{ section }}</a>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- Related Posts -->
            <div class="sidebar-widget">
              <h3 class="widget-title">Related Posts</h3>
              <div class="related-posts">
                <article v-for="(relatedPost, index) in relatedPosts" :key="index" class="related-post">
                  <div class="related-thumb">
                    <img :src="relatedPost.image" :alt="relatedPost.title">
                  </div>
                  <div class="related-content">
                    <h4 class="related-title">
                      <NuxtLink :to="relatedPost.slug">{{ relatedPost.title }}</NuxtLink>
                    </h4>
                    <span class="related-date">{{ relatedPost.date }}</span>
                  </div>
                </article>
              </div>
            </div>

            <!-- Quick Facts -->
            <div class="sidebar-widget facts-widget">
              <h3 class="widget-title">Quick Facts</h3>
              <div class="facts-list">
                <div v-for="(fact, index) in post.quickFacts" :key="index" class="fact-item">
                  <div class="fact-icon">{{ fact.icon }}</div>
                  <div class="fact-content">
                    <span class="fact-label">{{ fact.label }}</span>
                    <span class="fact-value">{{ fact.value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Widget -->
            <div class="sidebar-widget cta-widget">
              <div class="cta-content">
                <h3>Ready for Your Safari?</h3>
                <p>Let us help you plan your perfect Uganda adventure.</p>
                <NuxtLink to="/contact" class="cta-button">Plan My Safari</NuxtLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Related Articles Section -->
    <section class="related-articles-section">
      <div class="container">
        <div class="section-header">
          <h2>More Safari Stories</h2>
          <p>Continue exploring Uganda's wilderness through our expert insights</p>
        </div>
        
        <div class="related-grid">
          <article v-for="(article, index) in moreArticles" :key="index" class="related-article-card">
            <div class="article-image">
              <img :src="article.image" :alt="article.title">
              <div class="article-category">{{ article.category }}</div>
            </div>
            <div class="article-content">
              <h3 class="article-title">
                <NuxtLink :to="article.slug">{{ article.title }}</NuxtLink>
              </h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <div class="article-meta">
                <span class="meta-author">{{ article.author }}</span>
                <span class="meta-date">{{ article.date }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Get the slug from the route
const route = useRoute()
const slug = route.params.slug

// Blog posts data
const blogPosts = {
  'gorilla-trekking-guide': {
    title: "Ultimate Guide to Gorilla Trekking in Bwindi Impenetrable Forest",
    subtitle: "Everything you need to know for an unforgettable encounter with mountain gorillas",
    category: "Wildlife",
    heroImage: "/much1.jpeg",
    introduction: "Embarking on a gorilla trekking adventure in Bwindi Impenetrable National Park is more than just a wildlife encounter—it's a life-changing journey into the heart of Uganda's pristine wilderness. Home to nearly half of the world's remaining mountain gorillas, Bwindi offers visitors the rare opportunity to observe these magnificent creatures in their natural habitat.",
    publishDate: "December 15, 2024",
    readTime: "12 min read",
    author: {
      name: "David Kilagala",
      title: "Senior Safari Guide & Wildlife Expert",
      avatar: "/much8.jpeg",
      bio: "With over 15 years of experience leading safari expeditions across Uganda, David has guided hundreds of visitors through their first gorilla encounters. His deep knowledge of Uganda's wildlife and passion for conservation make him one of the most sought-after guides in East Africa.",
      social: [
        { platform: "Twitter", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "LinkedIn", url: "#" }
      ]
    },
    tags: ["Gorilla Trekking", "Bwindi", "Wildlife", "Uganda", "Conservation", "Adventure"],
    quickFacts: [
      { icon: "🦍", label: "Gorilla Families", value: "17 habituated" },
      { icon: "⏱️", label: "Trek Duration", value: "2-8 hours" },
      { icon: "👥", label: "Group Size", value: "Max 8 people" },
      { icon: "🎫", label: "Permit Cost", value: "$700 USD" },
      { icon: "📍", label: "Park Size", value: "331 km²" },
      { icon: "🌡️", label: "Best Time", value: "Jun-Sep, Dec-Feb" }
    ],
    content: [
      {
        type: "text",
        heading: "Why Bwindi Impenetrable Forest?",
        content: "<p>Bwindi Impenetrable National Park, a UNESCO World Heritage Site, is home to approximately 459 mountain gorillas—nearly half of the world's remaining population. This ancient rainforest, estimated to be over 25,000 years old, provides the perfect habitat for these gentle giants.</p><p>The park's dense vegetation, ranging from montane forest to bamboo zones, creates an ideal environment for gorillas to thrive. With four main sectors—Buhoma, Ruhija, Rushaga, and Nkuringo—visitors have multiple options for their trekking experience.</p>"
      },
      {
        type: "image",
        src: "/much2.jpeg",
        alt: "Mountain gorillas in Bwindi forest",
        caption: "A silverback gorilla observes visitors during a trekking encounter in Bwindi"
      },
      {
        type: "text",
        heading: "Planning Your Gorilla Trek",
        content: "<p>Successful gorilla trekking requires careful planning and preparation. The experience begins early in the morning with a briefing at the park headquarters, where you'll learn about gorilla behavior, safety protocols, and conservation efforts.</p><p>Physical fitness is essential, as treks can last anywhere from 2 to 8 hours depending on the gorilla family's location. The terrain is challenging, with steep slopes, thick vegetation, and often muddy conditions.</p>"
      },
      {
        type: "highlight",
        icon: "🎫",
        title: "Gorilla Permit Essentials",
        text: "Permits cost $700 USD and must be booked well in advance. Each permit allows one hour with a gorilla family and includes park entrance fees and professional guide services."
      },
      {
        type: "list",
        heading: "What to Pack for Your Trek",
        items: [
          "Sturdy, waterproof hiking boots with good ankle support",
          "Long-sleeved shirt and pants to protect from vegetation",
          "Rain jacket or poncho (weather can change quickly)",
          "Insect repellent and sunscreen",
          "Camera with extra batteries (no flash photography)",
          "Plenty of water and energy snacks",
          "Walking stick (often provided by guides)",
          "Small backpack for essentials"
        ]
      },
      {
        type: "text",
        heading: "The Trekking Experience",
        content: "<p>Your trek begins at dawn, led by experienced guides and trackers who have been monitoring the gorilla families since early morning. The journey through Bwindi's dense forest is an adventure in itself, with opportunities to spot other wildlife including forest elephants, various monkey species, and over 350 bird species.</p><p>When you finally encounter your designated gorilla family, the experience is nothing short of magical. Watching these gentle giants interact, play, and go about their daily lives provides insights into our own evolutionary history.</p>"
      },
      {
        type: "quote",
        text: "The moment you lock eyes with a mountain gorilla, you realize you're not just observing wildlife—you're connecting with a distant cousin who shares 98% of our DNA.",
        author: "Dr. Jane Goodall, Primatologist"
      },
      {
        type: "text",
        heading: "Conservation Impact",
        content: "<p>Gorilla trekking tourism plays a crucial role in conservation efforts and local community development. Revenue from permits directly funds anti-poaching activities, habitat protection, and community projects.</p><p>The Uganda Wildlife Authority, in partnership with international conservation organizations, has developed sustainable tourism practices that benefit both wildlife and local communities. Your visit contributes directly to these vital conservation efforts.</p>"
      },
      {
        type: "image",
        src: "/much3.jpeg",
        alt: "Conservation efforts in Bwindi",
        caption: "Local community members participate in forest conservation activities"
      },
      {
        type: "text",
        heading: "Best Time to Visit",
        content: "<p>While gorilla trekking is possible year-round, the dry seasons (June to September and December to February) offer the best conditions. During these periods, trails are less muddy and wildlife viewing is generally easier.</p><p>However, the wet seasons shouldn't be completely dismissed—fewer tourists mean a more intimate experience, and the forest is at its most lush and vibrant.</p>"
      }
    ]
  },
  'chimpanzee-tracking-kibale': {
    title: "Chimpanzee Tracking in Kibale Forest National Park",
    subtitle: "Your complete guide to encountering our closest relatives in the wild",
    category: "Wildlife",
    heroImage: "/much4.jpeg",
    introduction: "Kibale Forest National Park, known as the 'Primate Capital of the World,' offers one of the most exciting wildlife experiences in Uganda. Home to over 1,500 chimpanzees and 12 other primate species, this tropical rainforest provides an unparalleled opportunity to observe our closest living relatives in their natural habitat.",
    publishDate: "November 28, 2024",
    readTime: "10 min read",
    author: {
      name: "Sarah Nakamura",
      title: "Primate Research Specialist",
      avatar: "/much7.jpeg",
      bio: "Sarah has spent over 12 years studying primate behavior in East African forests. Her expertise in chimpanzee tracking and conservation has made her one of the most knowledgeable guides in Uganda's primate tourism sector.",
      social: [
        { platform: "Twitter", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "LinkedIn", url: "#" }
      ]
    },
    tags: ["Chimpanzee", "Kibale", "Primates", "Wildlife", "Tracking", "Conservation"],
    quickFacts: [
      { icon: "🐵", label: "Chimpanzees", value: "1,500+" },
      { icon: "⏱️", label: "Track Duration", value: "2-6 hours" },
      { icon: "👥", label: "Group Size", value: "Max 6 people" },
      { icon: "🎫", label: "Permit Cost", value: "$250 USD" },
      { icon: "📍", label: "Success Rate", value: "95%" },
      { icon: "🌡️", label: "Best Time", value: "Year-round" }
    ],
    content: [
      {
        type: "text",
        heading: "Why Choose Kibale Forest?",
        content: "<p>Kibale Forest National Park protects 795 square kilometers of rainforest and is renowned for having the highest concentration of primates in East Africa. The park's habituated chimpanzee communities offer visitors a 95% chance of successful sightings, making it one of the most reliable primate tracking destinations in the world.</p><p>Beyond chimpanzees, the forest is home to red colobus monkeys, L'Hoest's monkeys, and the rare Uganda mangabey, creating a rich tapestry of primate life.</p>"
      },
      {
        type: "image",
        src: "/much5.jpeg",
        alt: "Chimpanzees in Kibale Forest",
        caption: "A family of chimpanzees socializing in the canopy of Kibale Forest"
      },
      {
        type: "text",
        heading: "What to Expect During Tracking",
        content: "<p>Chimpanzee tracking in Kibale begins early morning with a briefing at the park headquarters. Experienced guides lead small groups through the forest, following the sounds and signs left by chimpanzee communities.</p><p>The tracking experience can last between 2-6 hours, depending on the location of the chimpanzees. Once found, visitors can spend up to one hour observing these intelligent creatures as they feed, play, and interact with each other.</p>"
      }
    ]
  },
  'queen-elizabeth-park-guide': {
    title: "Queen Elizabeth National Park: Uganda's Crown Jewel",
    subtitle: "Discover the incredible biodiversity of Uganda's most popular safari destination",
    category: "Destinations",
    heroImage: "/much6.jpeg",
    introduction: "Queen Elizabeth National Park stands as Uganda's most visited safari destination, offering an incredible diversity of ecosystems and wildlife. From the famous tree-climbing lions of Ishasha to the spectacular Kazinga Channel boat safaris, this park provides some of the most memorable wildlife experiences in East Africa.",
    publishDate: "December 10, 2024",
    readTime: "15 min read",
    author: {
      name: "Michael Ssemakula",
      title: "Wildlife Conservation Expert",
      avatar: "/much2.jpeg",
      bio: "Michael has worked in Queen Elizabeth National Park for over 18 years, initially as a ranger and now as a senior conservation specialist. His intimate knowledge of the park's wildlife and ecosystems makes him an exceptional guide.",
      social: [
        { platform: "Twitter", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "LinkedIn", url: "#" }
      ]
    },
    tags: ["Queen Elizabeth", "Safari", "Lions", "Boat Safari", "Wildlife", "Uganda"],
    quickFacts: [
      { icon: "🦁", label: "Wildlife Species", value: "95+ mammals" },
      { icon: "🐦", label: "Bird Species", value: "600+" },
      { icon: "📍", label: "Park Size", value: "1,978 km²" },
      { icon: "🚤", label: "Boat Safaris", value: "Daily" },
      { icon: "🌡️", label: "Best Time", value: "Jun-Sep, Dec-Feb" },
      { icon: "🎫", label: "Entry Fee", value: "$40 USD" }
    ],
    content: [
      {
        type: "text",
        heading: "Park Overview",
        content: "<p>Established in 1952, Queen Elizabeth National Park spans 1,978 square kilometers of diverse landscapes including savanna, wetlands, forests, and crater lakes. The park is famous for its tree-climbing lions, large herds of elephants, and one of the highest hippo concentrations in Africa.</p><p>The park is divided into several sectors, each offering unique wildlife experiences: Mweya Peninsula, Ishasha, Kyambura Gorge, and the Kazinga Channel.</p>"
      }
    ]
  }
}

// Get the current post or default to gorilla trekking guide
const post = computed(() => {
  return blogPosts[slug] || blogPosts['gorilla-trekking-guide']
})

// Generate table of contents from post content
const tableOfContents = computed(() => {
  return post.value.content
    .filter(section => section.type === 'text' && section.heading)
    .map(section => section.heading)
})

// Get other blog posts for related content
const otherPosts = computed(() => {
  return Object.keys(blogPosts)
    .filter(key => key !== slug)
    .map(key => ({
      ...blogPosts[key],
      slug: `/blog/${key}`
    }))
})

// Related posts (first 3 other posts)
const relatedPosts = computed(() => {
  return otherPosts.value.slice(0, 3).map(post => ({
    title: post.title,
    image: post.heroImage,
    slug: post.slug,
    date: post.publishDate
  }))
})

// More articles (all other posts)
const moreArticles = computed(() => {
  return otherPosts.value.map(post => ({
    title: post.title,
    excerpt: post.introduction.substring(0, 150) + '...',
    image: post.heroImage,
    category: post.category,
    author: post.author.name,
    date: post.publishDate,
    slug: post.slug
  }))
})

// SEO Meta
useSeoMeta({
  title: `${post.value.title} - Kilagala Escape Safaris`,
  description: post.value.introduction.substring(0, 155),
  ogTitle: `${post.value.title} - Kilagala Escape Safaris`,
  ogDescription: post.value.introduction.substring(0, 155),
  ogImage: post.value.heroImage,
  twitterCard: 'summary_large_image',
})

// Handle 404 for non-existent posts
if (!blogPosts[slug]) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}
</script>

<style scoped>
.blog-post-page {
  min-height: 100vh;
}

/* Hero Section */
.post-hero {
  position: relative;
  height: 70vh;
  min-height: 600px;
  display: flex;
  align-items: center;
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
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(45, 80, 22, 0.8) 0%, rgba(26, 48, 9, 0.6) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  color: white;
}

.hero-text {
  max-width: 800px;
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

.category-badge {
  display: inline-block;
  background: var(--color-golden-yellow);
  color: var(--color-forest-green-dark);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-lg);
}

.post-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.post-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.meta-divider {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--color-golden-yellow);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: white;
}

.author-title {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.8);
}

.meta-icon {
  opacity: 0.8;
}

/* Content Section */
.post-content-section {
  padding: var(--spacing-4xl) 0;
  background: white;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--spacing-4xl);
  align-items: start;
}

.main-content {
  max-width: 100%;
}

.content-wrapper {
  background: white;
  border-radius: var(--border-radius-xl);
}

.intro-section {
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 2px solid var(--color-light-beige);
}

.intro-text {
  font-size: var(--font-size-xl);
  line-height: 1.8;
  color: var(--color-gray);
  font-style: italic;
}

.article-body {
  margin-bottom: var(--spacing-4xl);
}

.content-section {
  margin-bottom: var(--spacing-3xl);
}

.section-heading {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  line-height: 1.3;
}

.section-text {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--color-charcoal);
}

.section-text p {
  margin-bottom: var(--spacing-lg);
}

.image-section {
  margin: var(--spacing-3xl) 0;
}

.image-container {
  text-align: center;
}

.content-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-md);
}

.image-caption {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  font-style: italic;
  text-align: center;
}

.quote-section {
  margin: var(--spacing-3xl) 0;
}

.content-quote {
  background: var(--color-light-beige);
  border-left: 5px solid var(--color-golden-yellow);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-xl);
  font-style: italic;
  line-height: 1.6;
  color: var(--color-forest-green-dark);
  margin: 0;
}

.content-quote cite {
  display: block;
  margin-top: var(--spacing-lg);
  font-size: var(--font-size-base);
  font-style: normal;
  font-weight: 600;
  color: var(--color-gray);
}

.list-heading {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
}

.content-list {
  list-style: none;
  padding: 0;
}

.list-item {
  position: relative;
  padding-left: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-charcoal);
}

.list-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-forest-green);
  font-weight: bold;
  font-size: var(--font-size-xl);
}

.highlight-section {
  margin: var(--spacing-3xl) 0;
}

.highlight-box {
  background: linear-gradient(135deg, var(--color-golden-yellow), var(--color-golden-yellow-dark));
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  box-shadow: var(--shadow-lg);
}

.highlight-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.highlight-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-sm);
}

.highlight-text {
  color: var(--color-forest-green-dark);
  line-height: 1.6;
  margin: 0;
}

/* Post Footer */
.post-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-2xl) 0;
  border-top: 2px solid var(--color-light-beige);
  border-bottom: 2px solid var(--color-light-beige);
  margin-bottom: var(--spacing-3xl);
}

.post-tags h4,
.social-share h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  background: var(--color-light-beige);
  color: var(--color-forest-green);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.share-buttons {
  display: flex;
  gap: var(--spacing-md);
}

.share-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all var(--transition-normal);
}

.share-btn.facebook {
  background: #1877f2;
  color: white;
}

.share-btn.twitter {
  background: #1da1f2;
  color: white;
}

.share-btn.linkedin {
  background: #0077b5;
  color: white;
}

.share-btn.email {
  background: var(--color-forest-green);
  color: white;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Author Bio */
.author-bio {
  display: flex;
  gap: var(--spacing-xl);
  background: var(--color-light-beige);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  margin-bottom: var(--spacing-3xl);
}

.bio-avatar {
  flex-shrink: 0;
}

.bio-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-golden-yellow);
}

.bio-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-xs);
}

.bio-title {
  font-size: var(--font-size-base);
  color: var(--color-golden-yellow-dark);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.bio-description {
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.bio-social {
  display: flex;
  gap: var(--spacing-md);
}

.bio-social-link {
  color: var(--color-forest-green);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: color var(--transition-fast);
}

.bio-social-link:hover {
  color: var(--color-golden-yellow);
}

/* Sidebar */
.post-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.sidebar-widget {
  background: var(--color-white);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-light-beige);
}

.widget-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-light-beige);
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: var(--spacing-sm);
}

.toc-link {
  color: var(--color-gray);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  display: block;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  font-size: var(--font-size-base);
}

.toc-link:hover {
  background: var(--color-light-beige);
  color: var(--color-forest-green);
}

.related-posts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.related-post {
  display: flex;
  gap: var(--spacing-md);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-light-beige);
}

.related-post:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.related-thumb {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  flex-shrink: 0;
}

.related-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-title a {
  color: var(--color-forest-green-dark);
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-title a:hover {
  color: var(--color-golden-yellow);
}

.related-date {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  margin-top: var(--spacing-xs);
}

.facts-widget {
  background: linear-gradient(135deg, var(--color-forest-green), var(--color-forest-green-dark));
  color: white;
}

.facts-widget .widget-title {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.facts-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.fact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.fact-icon {
  font-size: 1.5rem;
  width: 40px;
  text-align: center;
}

.fact-content {
  display: flex;
  flex-direction: column;
}

.fact-label {
  font-size: var(--font-size-sm);
  opacity: 0.8;
}

.fact-value {
  font-weight: 600;
  font-size: var(--font-size-base);
}

.cta-widget {
  background: linear-gradient(135deg, var(--color-golden-yellow), var(--color-golden-yellow-dark));
  text-align: center;
}

.cta-widget .widget-title {
  border: none;
  color: var(--color-forest-green-dark);
}

.cta-content h3 {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-lg);
}

.cta-button {
  background: var(--color-forest-green);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all var(--transition-normal);
}

.cta-button:hover {
  background: var(--color-forest-green-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Related Articles Section */
.related-articles-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-light-beige);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-forest-green-dark);
  margin-bottom: var(--spacing-md);
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
}

.related-article-card {
  background: white;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.related-article-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.article-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.related-article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-category {
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

.article-content {
  padding: var(--spacing-xl);
}

.article-title a {
  color: var(--color-forest-green-dark);
  text-decoration: none;
  font-size: var(--font-size-xl);
  font-weight: 700;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-title a:hover {
  color: var(--color-golden-yellow);
}

.article-excerpt {
  color: var(--color-gray);
  line-height: 1.5;
  margin: var(--spacing-md) 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-light-beige);
}

.meta-author {
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
  
  .post-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .post-hero {
    height: 60vh;
    min-height: 500px;
  }
  
  .post-title {
    font-size: 2.5rem;
  }
  
  .post-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  
  .meta-divider {
    display: none;
  }
  
  .post-footer {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .author-bio {
    flex-direction: column;
    text-align: center;
  }
  
  .highlight-box {
    flex-direction: column;
    text-align: center;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 2rem;
  }
  
  .section-heading {
    font-size: var(--font-size-2xl);
  }
  
  .content-section {
    margin-bottom: var(--spacing-2xl);
  }
  
  .sidebar-widget {
    padding: var(--spacing-xl);
  }
}
</style>