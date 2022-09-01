<template>
  <button :id="id" class="my-button" :color="color|| '' " @click="$emit('click', $event)">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  text: string;
  color?:'red'|'blue'|undefined
}
interface Emits {
  (e: 'click', value: Event): void;
}
withDefaults(defineProps<Props>(), { id: () => '', text: () => 'btn', color: undefined })
defineEmits<Emits>()
</script>

<style scoped>
.my-button {
  font-size: 1.25rem;
  width: 200px;

}

@media screen and (max-width: 960px) {
  .my-button {
    width: 100%;
  }
}

.my-button[color="blue"] {
  background-color: aqua;
  color: black;
}

.my-button[color="red"] {
  background-color: orangered;
  color: white;
}
</style>
