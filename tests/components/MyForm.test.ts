import { mount } from '@vue/test-utils'
import { reactive } from 'vue'
import MyInput from '@/components/MyInput.vue'
import MyForm from '@/components/MyForm.vue'

test('form test:1', async () => {
  const wrapper = mount(MyForm, {
    global: {
      components: { MyInput },
      mocks: { reactive }
    }

  })
  await wrapper.find('button').trigger('click')
  console.log(wrapper.emitted('submit'))

  // Assert the rendered text of the component
  expect(wrapper.find('button').text()).toContain('submit')
})
