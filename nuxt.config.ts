import { defineNuxtConfig } from 'nuxt'

const PROJECT_MODE = process.env.PROJECT_MODE || 'HOGE'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    link: [{ rel: 'manifest', href: './manifest.json' }],
    script: [{ type: 'module', src: './sw.js' }]
  },
  runtimeConfig: {
    public: {
      name: process.env[`${PROJECT_MODE}_NAME`], // Exposed to the frontend as well.
      number: Number(process.env[`${PROJECT_MODE}_NUMBER`]) // Exposed to the frontend as well.
    }
  },
  buildModules: ['@pinia/nuxt'],
  typescript: {
    shim: false
  }
})
