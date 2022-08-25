import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  setInterval(() => console.log('timer', new Date().getTime()), 1000)

  // Doing something with nuxtApp
})
