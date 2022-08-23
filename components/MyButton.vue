<template>
  <button :id="id" @click="$emit('click', $event)">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  text: string;
}
interface Emits {
  (e: 'click', value: Event): void;
}
withDefaults(defineProps<Props>(), { id: () => '', text: () => 'btn' })
defineEmits<Emits>()
</script>

<style scoped></style>
