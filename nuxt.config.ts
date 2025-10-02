// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  
  app: {
    head: {
      title: 'Kilagala Escape Safaris - Uganda Safari Adventures & Gorilla Trekking',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience Uganda\'s wildlife with Kilagala Escape Safaris. Expert gorilla trekking, Big Five safaris, and authentic East African adventures in Uganda\'s national parks.' },
        { name: 'keywords', content: 'Uganda safari, gorilla trekking, mountain gorillas, Bwindi Forest, Queen Elizabeth National Park, Murchison Falls, Uganda wildlife, East Africa tours, safari adventures' },
        { name: 'author', content: 'Kilagala Escape Safaris' },
        { name: 'application-name', content: 'Kilagala Escape Safaris' },
        { name: 'theme-color', content: '#2D5016' },
        { property: 'og:title', content: 'Kilagala Escape Safaris - Uganda Safari Adventures & Gorilla Trekking' },
        { property: 'og:description', content: 'Experience Uganda\'s wildlife with expert guides. Gorilla trekking, Big Five safaris, and authentic East African adventures.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/KILAGALA-LOGO-FINAL--2.jpg' },
        { property: 'og:site_name', content: 'Kilagala Escape Safaris' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kilagala Escape Safaris - Uganda Safari Adventures' },
        { name: 'twitter:description', content: 'Experience Uganda\'s wildlife with expert guides. Gorilla trekking, Big Five safaris, and authentic East African adventures.' },
        { name: 'twitter:image', content: '/KILAGALA-LOGO-FINAL--2.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/KILAGALA-LOGO-FINAL--2.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})
