// const axios = require('axios')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt SSR Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: 'badaw2231c566767' },
      { name: 'google-site-verification', content: 'jas-adawdc8899' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409EFF' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/globals',
    '@/plugins/axios',
    { src: '~/plugins/ionic.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/amp'
  ],


  // workbox: {},
  // meta: {},
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  env: {
    appName: 'SSR Blog'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // generate: {
  //   routes: function () {
  //     return axios.get('https://my-api/users')
  //     .then((res) => {
  //       return res.data.map((user) => {
  //         return '/users/' + user.id
  //       })
  //     })
  //   }
  // }
}
