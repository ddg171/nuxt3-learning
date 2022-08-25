import { defineNuxtRouteMiddleware } from '#app'
import { useRouteStore } from '@/store/route'

export default defineNuxtRouteMiddleware((to) => {
  const route = useRouteStore()
  route.move(to.path)
})
