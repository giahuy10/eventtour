
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tạo tour tự túc - Hạnh phúc đi Hàn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bạn ước mơ một ngày được khám phá xứ sở Kim Chi nhưng điều kiện chưa cho phép? Tham gia ngay cuộc thi do tổng cục Du Lịch Hàn Quốc (KTO) tổ chức để nhận ngay tấm vé tới xử sở Kim Chi - Hoàn toàn miễn phí' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Tạo tour tự túc - Hạnh phúc đi Hàn'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'event'
      },
      {
        hid: 'event:start_time',
        property: 'event:start_time',
        content: '1563926400'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '995822403945432'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://kto-landing.firebaseapp.com'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.visitkorea.org.vn/wp-content/uploads/2019/07/AwesomeScreenshot-cover-fb-png-Google-Drive-2019-07-23-08-07-08.png'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Bạn ước mơ một ngày được khám phá xứ sở Kim Chi nhưng điều kiện chưa cho phép? Tham gia ngay cuộc thi do tổng cục Du Lịch Hàn Quốc (KTO) tổ chức để nhận ngay tấm vé tới xử sở Kim Chi - Hoàn toàn miễn phí'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.visitkorea.org.vn/wp-content/themes/kto/img/icons/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-uid.js',
    '~/plugins/vue-moment.js',
    '~/plugins/vue-social.js',
    '~/plugins/vue-clipboard.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
