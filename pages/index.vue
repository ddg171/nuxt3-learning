<template>
  <div>
    <div>
      <h1>Hello Jest!</h1>
      <p>{{ clickCount }} clicks</p>
      <button @click="clickHandler">
        Click me
      </button>
    </div>
    <counter-pinia />
  </div>
</template>
<script setup lang="ts">
import { useState } from '#app'
const clickCount = useState<number>('clickCount', () => 0)
const clickHandler = () => {
  clickCount.value = clickCount.value + 1
}
</script>
<style lang="scss"></style>
