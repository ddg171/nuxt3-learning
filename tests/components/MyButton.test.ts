import { mount } from '@vue/test-utils'
import MyButton from '@/components/MyButton.vue'

test('button test:1', () => {
  const wrapper = mount(MyButton, {
    props: {
      id: 'btn',
      text: 'hoge'
    }
  })
  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('hoge')
})

test('button test:2', () => {
  const wrapper = mount(MyButton, {
    props: {
      id: 'btn',
      text: 'hoge'
    }
  })
  // Assert the rendered text of the component
  expect(wrapper.element.getAttribute('id')).toContain('btn')
})
