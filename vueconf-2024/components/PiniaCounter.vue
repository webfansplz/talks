<script setup lang="ts">
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Arlo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return { count, name, doubleCount, increment, decrement }
})

const counterStore = useCounterStore()


</script>

<template>
  <div w-100 flex="~ col justify-center items-center">
    <p text-center text-yellow-200>
      <strong>Count:</strong> <span op80>{{ counterStore.count }}</span>
    </p>
    <div flex="~" gap-2>
      <button border="~ cyan" transition-all text-cyan w-10 rounded cursor-pointer hover="bg-cyan text-white"
        @click="counterStore.increment()">
        +
      </button>
      <button border="~ red-400" transition-all text-red-400 w-10 rounded cursor-pointer hover="bg-red-400 text-white"
        @click="counterStore.decrement()">
        -
      </button>
    </div>
  </div>
</template>
