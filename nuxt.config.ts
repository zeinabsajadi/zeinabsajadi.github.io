// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // --- Rendering ---
  ssr: false,  

  // --- GitHub Pages preset ---
  nitro: {
    preset: 'github-pages'
  },

  // --- App Base + Head ---
  app: {
    baseURL: '/',   

    head: {
      title: 'Zeinab Sajjadi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Backend developer & creative technologist — Zeinab Sajjadi',
        },
        { name: 'theme-color', content: '#050505' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap',
        },
      ],
    },
  },

  // --- Modules ---
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],

  // --- Global Styles ---
  css: ['~/assets/css/main.css'],

  // --- Build & Vite ---
  vite: {
    server: {
      host: true,
    },
  },

  // --- Compatibility ---
  compatibilityDate: '2024-11-01',

  // --- DevTools ---
  devtools: { enabled: true },
})
