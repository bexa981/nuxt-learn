// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:'Nuxt dojo',
      meta:[
        {
          name: 'description', content:'everything about nuxt'
        }
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'}
        
      ]
    }
  },
  build: {
    transpile: [
        "@urql/vue"
    ]
},
runtimeConfig:{
  currencyKey: process.env.CURRENCY_API_KEY
  
}
})
