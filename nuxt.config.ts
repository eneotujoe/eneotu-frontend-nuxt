import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          async:true,
          defer:true,
          'data-website-id':'2c38409d-821c-4cf3-a5e8-9ee3921f4da2',
          src:'https://analytics-admin.netlify.app/umami.js'
        }
      ]
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
