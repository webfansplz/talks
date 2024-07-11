<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  count?: number
}>()

const emit = defineEmits<{
  (e: 'update', value: number): void
}>()

const internalCount = ref(0)

function update(value: number) {
  emit('update', value)
  internalCount.value = value
}
</script>

<template>
  <div w-100 flex="~ col justify-center items-center">
    <p text-center text-yellow-200>
      <strong>Count:</strong> <span op80>{{ count ?? internalCount }}</span>
    </p>
    <div flex="~" gap-2>
      <button border="~ cyan" transition-all text-cyan w-10 rounded cursor-pointer hover="bg-cyan text-white"
        @click="update(++internalCount)">
        +
      </button>
      <button border="~ red-400" transition-all text-red-400 w-10 rounded cursor-pointer hover="bg-red-400 text-white"
        @click="update(--internalCount)">
        -
      </button>
    </div>
  </div>
</template>
