// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head:{
      title:"Nuxt Day-1",
      meta:[
        {name:"description",content:"Learning nuxt from scratch"}
      ]
    }
  },
  css:["/assets/css/main.css"]
})
