<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>name:<input name="name" type="text" v-model="state.name" /></label>
    </div>
    <div>
      <label
        >number:<input
          name="number"
          type="number"
          v-model.number="state.number"
      /></label>
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script setup lang="ts">
type Data = {
  name: string;
  number: number;
};

type State = Data;

interface Emits {
  (e: "submit", value: Data): void;
}

const emit = defineEmits<Emits>();

const state = reactive<State>({
  name: "",
  number: 0,
});

const onSubmit = () => {
  const { name, number } = state;

  const payload: Data = { name, number };
  emit("submit", payload);
};
</script>

<style scoped></style>
