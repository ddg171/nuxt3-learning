<template>
  <div>
    <p>{{ counter.count }}/{{ counter.isOdd?'偶数':"奇数" }}</p>
    <my-button id="inc-btn" text="inc" @click="inc" />
    <my-button id="dec-btn" text="dec" @click="dec" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()

const inc = () => counter.increment()
const dec = () => counter.decrement()

</script>

<style scoped>

</style>
