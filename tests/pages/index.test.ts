import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MyButton from '@/components/MyButton.vue'
import Page from '@/pages/index.vue'
import CounterPinia from '@/components/CounterPinia.vue'

describe('index page', () => {
  it('shows interactive click counter', async () => {
    const page = mount(Page, { global: { plugins: [createTestingPinia()], components: { CounterPinia, MyButton } } })
    expect(page.text()).toContain('0 clicks')
    const button = page.find('button')
    await button.trigger('click')
    expect(page.text()).toContain('1 clicks')
  })
})
