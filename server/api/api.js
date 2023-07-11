export default defineEventHandler(async (event) => {
    
  const {data}= await $fetch('https://api.currencyapi.com/v3/latest?apikey=Qlf3bhbOQxWuhwj4aSWrr5qXuSPuqz09ROddTAA1' )
    return data
})