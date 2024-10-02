// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'reporte',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  plugins : ['@/plugins/chart.ts'],
  css: ['~/assets/css/main.css'],

})