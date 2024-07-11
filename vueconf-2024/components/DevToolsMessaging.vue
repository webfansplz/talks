<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()

const clientCount = computed(() => Math.min($clicks.value + 1, 4))

const index = ref(0)
</script>

<template>
  <div class="flex gap-2 justify-between pt-5 relative">
    <div class="border-1 w-60 h-100 flex justify-center items-center transition-all duration-500 relative">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-white border-1">
        Vue.js 应用
      </h5>
      <p class="border-1 border-dashed w-50 rounded-1 h-30 flex justify-center items-center">DevTools Kit</p>
    </div>

    <div class="border-1 w-60 h-100 flex justify-center items-center transition-all duration-500 relative">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-white border-1">
        <div class="flex w-48 overflow-hidden">
          <p :style="{ transform: `translateX(-${index * 192}px)` }"
            class="transition-all duration-300 whitespace-nowrap flex my-0! [&_span]:(w-48 inline-flex justify-center)">
            <span>Vite 插件</span>
            <span>独立窗口</span>
            <span>Electron 应用</span>
            <span>浏览器扩展</span>
          </p>
        </div>
        <span
          class="absolute right--3 top--3 rounded-50% w6 h6 flex bg-red:300 text-3 justify-center items-center text-white"
          v-if="clientCount > 1">{{ clientCount }}</span>

        <!-- left -->
        <i class="i-carbon-chevron-left text-5 text-white inline-flex absolute top-50% translate-y--50% left-3 font-700 cursor-pointer hover:(op-60)"
          v-if="clientCount > 1" @click="index = Math.max(0, --index)"></i>

        <!-- right -->
        <i class="i-carbon-chevron-right text-5 text-white inline-flex absolute top-50% translate-y--50% right-3 font-700 cursor-pointer hover:(op-60)"
          v-if="clientCount > 1" @click="index = Math.min(3, ++index)"></i>

      </h5>
      <div class="border-1 border-dashed w-50 rounded-1 h-30 flex justify-center items-center relative">
        DevTools Client
        <h5
          class="top--4 absolute left-50% translate-x--50% py-1 w-30 bg-[#213547] rounded-1 text-white font-600 border-white border-1">
          <div class="flex w-30 overflow-hidden">
            <p :style="{ transform: `translateX(-${index * 120}px)` }"
              class="transition-all duration-300 whitespace-nowrap flex my-0! [&_span]:(w-30 inline-flex justify-center text-sm)">
              <span>iframe</span>
              <span>Web App</span>
              <span>Electron Client</span>
              <span>Chrome Panel</span>
            </p>
          </div>
        </h5>
      </div>
    </div>


    <h5 :class="$clicks <= 0 ? 'left-50% translate-x--50% top-30' : 'left-163 top--3px z--1'"
      class="absolute py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-white border-1 transition-all duration-500">
      独立窗口
      <span
        class="absolute right--4 top--4 rounded-50% w8 h8 flex bg-red:300 text-3 justify-center items-center text-white"
        v-if="$clicks <= 0">New</span>
    </h5>

    <h5 :class="$clicks <= 1 ? 'left-50% translate-x--50% top-50' : 'left-163 top--3px z--1'"
      class="absolute py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-white border-1 transition-all duration-500">
      Electron 应用
      <span
        class="absolute right--4 top--4 rounded-50% w8 h8 flex bg-red:300 text-3 justify-center items-center text-white"
        v-if="$clicks <= 1">New</span>
    </h5>



    <h5 :class="$clicks <= 2 ? 'left-50% translate-x--50% top-70' : 'left-163 top--3px z--1'"
      class="absolute py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-white border-1 transition-all duration-500">
      浏览器扩展
      <span
        class="absolute right--4 top--4 rounded-50% w8 h8 flex bg-red:300 text-3 justify-center items-center text-white"
        v-if="$clicks <= 2">New</span>
    </h5>

    <!-- vite plugin messaging -->
    <div v-if="$clicks === 3 && index === 0" class="absolute">
      <Arrow x1="260" y1="200" x2="610" y2="200" :twoWay="true" />
      <span class="absolute left-98 top-42">onMessage</span>
      <span class="absolute left-96.5 top-52">postMessage</span>
      <span class="absolute left-13 top-55 text-green:500">(contentWindow)</span>
      <span class="absolute left-171 top-55 text-green:500">(window.parent)</span>
    </div>
    <!-- spearate window messaging -->
    <div v-if="$clicks === 3 && index === 1" class="absolute">
      <Arrow x1="250" y1="200" x2="330" y2="200" :twoWay="true" />
      <Arrow x1="540" y1="200" x2="620" y2="200" :twoWay="true" />
      <span
        class="absolute left-88 top-29 w-42 h-42 border-1 rounded-50% flex justify-center items-center">BroadcastChannel
        Web API</span>
      <span class="absolute left-20 top-55 text-green:500">(channel)</span>
      <span class="absolute left-178 top-55 text-green:500">(channel)</span>
    </div>

    <!-- electron messaging -->
    <div v-if="$clicks === 3 && index === 2" class="absolute">
      <Arrow x1="250" y1="200" x2="330" y2="200" :twoWay="true" />
      <Arrow x1="540" y1="200" x2="620" y2="200" :twoWay="true" />
      <span class="absolute left-88 top-29 w-42 h-42 border-1 rounded-50% flex justify-center items-center">Socket
        Server <br /> (Proxy)</span>
      <span class="absolute left-16 top-55 text-green:500">(socket.client)</span>
      <span class="absolute left-174 top-55 text-green:500">(socket.client)</span>
    </div>

    <!-- browser extension messaging -->
    <div v-if="$clicks === 3 && index === 3" class="absolute">
      <Arrow x1="250" y1="200" x2="330" y2="200" :twoWay="true" />
      <Arrow x1="540" y1="200" x2="620" y2="200" :twoWay="true" />
      <span class="absolute left-88 top-29 w-42 h-42 border-1 rounded-50% flex justify-center items-center">Content
        Script (Proxy)</span>
      <span class="absolute left-8 top-55 text-green:500">(chrome.runtime.port)</span>
      <span class="absolute left-178 top-55 text-green:500">(window)</span>
    </div>
  </div>
</template>
