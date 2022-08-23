<template>
  <input
    v-model="value"
    type="text"
    @input="$emit('update:modelValue', modelValue)"
  >
</template>

<script setup lang="ts">
interface Emits {
  (e: 'update:modelValue', value: string): void;
}
interface Props {
  modelValue: string;
}
defineEmits<Emits>()
const props = defineProps<Props>()

const value = computed(() => props.modelValue)
</script>

<style scoped></style>
