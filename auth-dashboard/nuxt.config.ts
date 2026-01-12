// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],
  css:['/assets/css/main.css'],
  app:{
    head:{
      titleTemplate:'%s - Nuxt Auth',
      meta:[
        {name:'description',content:'Auth Dashboard'}
      ]
    },
    pageTransition:{
      name:'page',mode:'out-in',appear:true
    }
  }
})
