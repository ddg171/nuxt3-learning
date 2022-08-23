import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/store/counter'

setActivePinia(createPinia())
const counter = useCounterStore()

test('counter:1', () => {
  expect(counter.count).toBe(0)
})
test('counter:2', () => {
  counter.increment()
  expect(counter.count).toBe(1)
})
test('counter:3', () => {
  counter.decrement()
  expect(counter.count).toBe(0)
})
