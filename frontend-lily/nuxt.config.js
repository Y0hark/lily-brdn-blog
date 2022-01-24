import colors from 'vuetify/es5/util/colors'

export default {

  // Modify env variable
  env: {
    // strapiBaseUri: process.env.API_URL || 'https://lily-brdn.herokuapp.com'
    strapiBaseUri: process.env.API_URL || 'http://yohark.de:1337'
    // strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Lily Bardin',
    title: 'Lily Bardin',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog personnel d\'une passionnée de mode et de développement personnel' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Benne&family=Handlee&family=Parisienne&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/robots'
  ],

  // Configuring markdownit module for nuxtjs
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#734710',
          secondary: '#AA7060',
          accent: '#AA7060',
          error: colors.red.base,
          warning: colors.orange.base,
          info: colors.cyan.base,
          success: colors.green.base
        }
      }
    }
  },

  // Configuring strapi module for nuxtjs
  strapi: {
    entities:
    ['categories', 'articles'],
    // url: 'https://lily-brdn.herokuapp.com'
    url: 'http://yohark.de:1337'
    // url: 'http://localhost:1337'
  },

  // Configuring apollo module for nuxtjs
  apollo: {
    clientConfigs: {
      default: '/apollo/config/config.js'
    }
  },

  // Configuting nuxt robots module
  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: ['/user', '/admin']
    },
    {
      UserAgent: '*',
      Disallow: '/admin'
    }

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
