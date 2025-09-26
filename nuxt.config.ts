// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  
  app: {
    head: {
      title: 'Safari Adventures - Experience the Wild Beauty of Africa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Embark on unforgettable safari adventures in Africa. Discover wildlife, stunning landscapes, and authentic experiences with our expert guides.' },
        { name: 'keywords', content: 'safari, africa, wildlife, tours, adventure, travel, kenya, tanzania, botswana' },
        { name: 'author', content: 'Safari Adventures' },
        { property: 'og:title', content: 'Safari Adventures - Experience the Wild Beauty of Africa' },
        { property: 'og:description', content: 'Embark on unforgettable safari adventures in Africa. Discover wildlife, stunning landscapes, and authentic experiences.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/safari-og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Safari Adventures - Experience the Wild Beauty of Africa' },
        { name: 'twitter:description', content: 'Embark on unforgettable safari adventures in Africa. Discover wildlife, stunning landscapes, and authentic experiences.' },
        { name: 'twitter:image', content: '/safari-og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  
  
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
