
/* eslint-disable @typescript-eslint/no-var-requires */
import MyButton from '../components/MyButton.vue'

// コンポーネントのメタデータを記述
export default {
  title: 'components/MyButton'
}

export const MyButtonTest = () => ({
  components: { MyButton },
  template: `
      <div style="margin-bottom:0.5rem;">
      <my-button :text="text" :color="color" />
      </div>
  `,
  args: { text: 'Button' },
  argTypes: {
    color: {
      options: ['red', 'blue', ''],
      control: 'select'
    }
  },
  data () {
    return {}
  },
  methods: {}
})
