import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CounterPinia from '@/components/CounterPinia.vue'
import MyButton from '@/components/MyButton.vue'
// import { useCounterStore } from '@/store/counter'

test('counter pinia test:1', () => {
  const pinia = createTestingPinia({ initialState: { counter: { count: 5 } }, stubActions: false })
  const wrapper = mount(CounterPinia, {
    global: {
      plugins: [pinia],
      components: { MyButton }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.find('p').html()).toContain('5')
})

test('counter pinia test:2', () => {
  const pinia = createTestingPinia({ initialState: { counter: { count: 10 } }, stubActions: false })
  const wrapper = mount(CounterPinia, {
    global: {
      plugins: [pinia],
      components: { MyButton }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.find('p').html()).toContain('10')
})
