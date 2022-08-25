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

<script setup lang="ts">
import { reactive } from 'vue'
type Data = {
  name: string;
  number: number;
};

type State = Data;

interface Emits {
  (e: 'submit', value: Data): void;
}

const emit = defineEmits<Emits>()

const state = reactive<State>({
  name: '',
  number: 0
})

const onSubmit = () => {
  const { name, number } = state

  const payload: Data = { name, number }
  emit('submit', payload)
}
</script>

<style scoped></style>
