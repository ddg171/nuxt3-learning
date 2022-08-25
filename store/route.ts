import { defineStore } from 'pinia'

interface PageRoute {
  path:string
}

export const useRouteStore = defineStore('route', {
  state: ():PageRoute => {
    return { path: '' }
  },

  actions: {
    move (path:string):void {
      this.path = path
    }
  }
})
