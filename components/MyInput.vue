<template>
  <input
    :modelValue="modelValue"
    :value="modelValue"
    :type="type"
    @input="onInput"
  >
</template>

<script setup lang="ts">

type ModelValue = string |number

interface Emits {
  (e: 'update:modelValue', value: ModelValue): void;
}
interface Props {
  modelValue: ModelValue;
  type:string|'text'
}
const emit = defineEmits<Emits>()
withDefaults(defineProps<Props>(), { type: 'text' })
const onInput = (e:Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>

<style scoped></style>
