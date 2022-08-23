// stores/counter.js
import { defineStore } from 'pinia'

interface Counter {
  count:number
}

export const useCounterStore = defineStore('counter', {
  state: ():Counter => {
    return { count: 0 }
  },
  getters: {
    double (state:Counter):number {
      return state.count * 2
    },
    isOdd (state:Counter):boolean {
      return state.count % 2 !== 0
    }
  },
  actions: {
    increment ():void {
      this.count++
    },
    decrement ():void {
      this.count--
    }
  }
})
