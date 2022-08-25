<template>
  <div>
    <MyForm :name="state.payload.name" :number="state.payload.number" @submit="update" />
    <div>{{ state.payload.name }}/{{ state.payload.number }}</div>
    <nuxt-link to="/">
      top
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import MyForm, { MyFormData } from '@/components/MyForm.vue'
definePageMeta({
  layout: 'hoge'
})

type State={
  payload: {name:string, number:number}
}

const state = reactive<State>({ payload: { name: 'uni', number: -1 } })

const update = (e: MyFormData) => {
  console.log(e)
  state.payload = e
}

</script>
