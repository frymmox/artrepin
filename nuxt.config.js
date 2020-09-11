
export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content:'',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, viewport-fit=cover'
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        name: 'format-detection',
        content: 'address=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  css: [
    '@/static/fonts/styles.css',
    { src: '@/assets/less/main.less', lang: 'less' },
    'swiper/swiper-bundle.min.css'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    less: [
      '@/assets/less/general/variables.less',
    ],
  },
  build: {
    transpile: ['gsap'],
  }
}
