<template>
  <Teleport to="body">
    <div v-if="modelValue" class="overlay" @click.self="$emit('click:overlay')">
      <div class="modal" @click.stop="$emit('click:modal')">
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-btn-box">
          <button @click.self="$emit('click:ok')">
            ok
          </button>
          <button @click.self="$emit('click:cancel')">
            cancel
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>

type ModelValue =boolean

interface Props{
  modelValue:ModelValue
}

interface Emits {
  (e: 'update:modelValue', value: ModelValue): void;
  (e: 'show'): void
  (e: 'click:overlay'): void
  (e: 'click:ok'): void
  (e: 'click:cancel'): void
  (e:'click:modal'):void
}
withDefaults(defineProps<Props>(), { modelValue: false })
defineEmits<Emits>()

</script>
<style>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  transition: opacity 0.5s;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background-color: white;
  opacity: 1;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
</style>
