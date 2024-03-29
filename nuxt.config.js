const pkg = require('./package');
const i18n = require('./locales');
require('dotenv').config();

module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },

  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  serverMiddleware: [
    '~/server/api.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    [
      '@nuxtjs/localforage', {
        name        : 'MinishMaker',
        version     : 1.0,
        storeName   : 'roms', // Should be alphanumeric, with underscores.
        description : 'storing user roms',
      },
    ],
  ],

  markdownit: {
    injected: true,
  },

  i18n: {
    locales: i18n.locales,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: i18n.messages,
    },
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options,
    proxy: true,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  },
};
