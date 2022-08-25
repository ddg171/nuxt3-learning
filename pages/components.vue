<template>
  <div>
    <MyForm @submit="update" />
    <div>{{ state.payload?.name || "none" }}/{{ state.payload?.number || "none" }}</div>
    <nuxt-link to="/">
      top
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({ payload: null })

const update = (e) => {
  console.log(e)
  state.payload = { ...e }
}

</script>
