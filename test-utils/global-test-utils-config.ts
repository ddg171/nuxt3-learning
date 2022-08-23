import { ref } from 'vue'

import '@/.nuxt/components.d.ts'
/** Mock Nuxt's useState to be a simple ref for unit testing. **/
jest.mock('#app', () => ({
  useState: <T>(_key: string, init: () => T) => {
    return ref(init())
  }
}))
