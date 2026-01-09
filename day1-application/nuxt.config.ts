// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head:{
      title:"Sujit Barnawal",
      meta:[
        {name:"description",content:"Portfolio Website - Sujit Barnawal"}
      ]
    }
  },
  css:['/assets/css/main.css']
})
