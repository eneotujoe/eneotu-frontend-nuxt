import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Eneotu',
      meta: [
        { name: 'description', content: 'Artificial intelligence and software engineering blog' },
        { name: 'keywords', content: 'Artificial intelligence, machine learning, reinforcement learning, data science' },
        { name: 'author', content: 'Eneotu Joe' },
        { name: "twitter:card", content: "summary_large_image" },
        { hid: 'twitter:title', name: "twitter:title", content: 'Eneotu', },
        { hid: 'description', name: "description", content: 'Artificial intelligence and software engineering blog', },
        { hid: 'twitter:description', name: "twitter:description", content: 'Artificial intelligence and software engineering blog' },
        { hid: 'image', name: "image", content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1672850732/eneotu.com/share-image_i0tqn7.png', },
        { hid: 'twitter:image', name: "twitter:image", content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1672850732/eneotu.com/share-image_i0tqn7.png', },
        { hid: 'og:title', property: "og:title", content: 'Eneotu', },
        { hid: 'og:description', property: "og:description", content: 'Artificial intelligence and software engineering blog', },
        { hid: 'og:image', property: "og:image", content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1672850732/eneotu.com/share-image_i0tqn7.png', },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1672850732/eneotu.com/share-image_i0tqn7.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Twitter Share Image' },
        { hid: 'twitter:site', name: 'twitter:site', content: 'Eneotu' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://eneotu.com' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'OG Share Image' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Eneotu' },
        { hid: 'og:type', property: 'og:type', content: 'Website' },
        { hid: 'og:url', property: 'og:url', content: 'https://eneotu.com' },
      ],
      script: [
        { 'data-website-id': '2c38409d-821c-4cf3-a5e8-9ee3921f4da2', src: 'https://analytics-admin.netlify.app/umami.js' }
      ],
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {'process.env.DEBUG': false}
  },
  
  modules: [
    '@nuxt/content',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
    },
    '@nuxtjs/robots',
    ['@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: ''
      },
      { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`}
    ],
    '@nuxtjs/strapi',
  ],
  
  buildModules: [
    '@nuxtjs/dayjs',
  ],

  content: {
    documentDriven: false
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.STRAPI_URL || 'http://localhost:1337',
    }
 },

 dayjs: {
  locales: ['en'],
  defaultLocale: 'en',
  plugins: ['relativeTime', 'advancedFormat'],
},
 
})
