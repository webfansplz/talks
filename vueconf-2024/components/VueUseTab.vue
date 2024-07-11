<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { getCurrentInstance } from 'vue'
const { $clicks } = useSlideContext()
import { addCustomTab } from '@vue/devtools-api'

function addVueUseTab() {
  addCustomTab({
    name: 'vueuse',
    title: 'VueUse',
    icon: 'https://vueuse.org/favicon.svg',
    view: {
      type: 'iframe',
      src: 'https://vueuse.org/',
    },
    category: 'advanced',
  })
}


</script>

<template>
  <div class="absolute left-12 top-40">
    <button v-if="$clicks === 1"
      class="border-1 rounded-1 px2 text-4 cursor-pointer hover:(border-green:500 text-green:500)"
      @click="addVueUseTab">
      添加 VueUse Tab
    </button>
  </div>
</template>
