<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>name:<MyInput v-model="state.name" name="name" type="text" /></label>
    </div>
    <div>
      <label>number:<MyInput
        v-model.number="state.number"
        name="number"
        type="number"
      /></label>
    </div>
    <button type="submit">
      submit
    </button>
  </form>
</template>

<script lang="ts">
export interface MyFormData {
  name: string;
  number: number;
};
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import { reactive } from 'vue'

type State = MyFormData;
interface Emits {
  (e: 'submit', value: MyFormData): void;
}

interface Props {
  name?: string
  number?:number
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const state = reactive<State>({
  name: '',
  number: 0
})

const onSubmit = () => {
  const { name, number } = state

  const payload: MyFormData = { name, number }
  emit('submit', payload)
}

onMounted(() => {
  nextTick(() => {
    if (props.name) {
      state.name = props.name
    }
    if (props.number) {
      state.number = props.number
    }
  })
})
</script>

<style scoped></style>
