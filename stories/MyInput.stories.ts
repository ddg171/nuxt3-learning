
/* eslint-disable @typescript-eslint/no-var-requires */
import MyInput from '../components/MyInput.vue'

// コンポーネントのメタデータを記述
export default {
  title: 'components/MyInput'
}

export const MyButtonTest = () => ({
  components: { MyInput },
  template: `
    <div style="margin-bottom:0.5rem;">
      <my-input v-model="text" />
      </div>
      <div style="margin-bottom:0.5rem;">
      <my-input v-model.number="number" />
      </div>
  `,
  data () {
    return {
      text: '',
      number: 0

    }
  },
  methods: {}
})
