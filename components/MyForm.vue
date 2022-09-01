<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>name:
        <MyInput v-model="state.name" name="name" type="text" />
      </label>
      <p><small v-if="!isNameValid">名前が空欄です。</small></p>
    </div>
    <div>
      <label>number:
        <MyInput v-model="state.number" name="number" type="number" />
      </label>
      <p><small v-if="!isNumberValid">0より大きい数字を入力してください。</small></p>
    </div>
    <button type="submit" :disabled="!isAllValid">
      submit
    </button>
    <button @click="reset">
      reset
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
import { reactive, onMounted, nextTick } from 'vue'

interface Emits {
  (e: 'submit', value: MyFormData): void;
  (e: 'validate', value: boolean): void
  (e:'reset'):void
}

interface Props {
  initialValue: {
    name: string
    number: number
  }|null
}
const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), { initialValue: () => null })

const state = reactive<MyFormData>({ name: '', number: 0 })

const isNameValid = computed(() => state.name.length > 0)

const isNumberValid = computed(() => {
  if (!state.number) { return false }
  return state.number > 0
})
const isAllValid = computed(() => {
  return !!(isNameValid.value && isNumberValid.value)
})

const onSubmit = () => {
  const name = state.name
  const number = state.number
  const payload: MyFormData = { name, number }
  emit('submit', payload)
}

const reset = () => {
  if (!props) { return }
  state.name = props.initialValue.name
  state.number = props.initialValue.number
  emit('reset')
}

onMounted(() => {
  nextTick(reset)
})

</script>

<style scoped>
</style>
