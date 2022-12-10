<script setup lang="ts">
import { ref,onMounted } from 'vue'
const count = ref(0)

onMounted(()=>{
  setInterval(()=>{
  count.value++
  if(count.value > 100) count.value = 0
},150)
})

</script>

<template>
  <div flex="~ col" h-10 justify-center>
    <span text-center>Count: <span text-yellow>{{count}}</span></span>
  </div>
</template>
