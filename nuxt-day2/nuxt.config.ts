// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head:{
      title:"Nuxt Day-2",
      htmlAttrs:{
        lang:'en'
      },
      link:[
        {rel:'icon',type:'image/x-icon',href:'/favicon.ico'}
      ],
      charset:'utf-8',
      viewport:'width=device-width,initial-scale=1',
      meta:[
        {name:'description',content:"Learning Nuxt"}
      ],
      bodyAttrs:{
        class:'test'
      },
      script:[{
        innerHTML:'console.log(\'hello world\')'
      }]
    },
    pageTransition:{
      name:"page",mode:"out-in"
    }
  }
})
