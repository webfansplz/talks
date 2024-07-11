<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>

<template>
  <div class="flex gap-2 justify-center pt-5 relative">
    <!-- vite plugin -->
    <div class="border-1 w-60 h-40 flex justify-center items-center absolute transition-all duration-500 border-solid"
      :class="$clicks === 0 ? 'left-50% translate-x--50% top-30' : 'left-0 top-0'">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-#fff border-1">
        Vite 插件
      </h5>
      <p class="border-1 border-dashed w-40 rounded-1 h-20 flex justify-center items-center">DevTools Client</p>
      <p class="border-1 border-solid w-40 rounded-1 h-20 flex justify-center items-center absolute left-50% translate-x--50% transition-all duration-500"
        :class="$clicks >= 2 ? 'op0 translate-x-40 translate-y-25' : 'op100'">
        DevTools
        Client</p>
    </div>
    <!-- electron app -->
    <div class="border-1 w-60 h-40 justify-center flex items-center absolute transition-all duration-500"
      :class="$clicks === 0 ? 'left-50% translate-x--50% op0 top-30' : 'right-0 top-0 op100'">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-#fff border-1">
        Electron 应用
      </h5>
      <p class="border-1 border-dashed w-40 rounded-1 h-20 flex justify-center items-center">DevTools Client</p>
      <p class="border-1 border-solid w-40 rounded-1 h-20 flex justify-center items-center absolute left-50% translate-x--50% transition-all duration-500"
        :class="$clicks >= 2 ? 'op0 translate-x--80! translate-y-25' : 'op100'">
        DevTools
        Client</p>
    </div>
    <!-- separate window -->
    <div class="border-1 w-60 h-40 justify-center flex items-center absolute transition-all duration-500"
      :class="$clicks === 0 ? 'left-50% translate-x--50% op0 top-30' : 'left-0 top-60 op100'">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-#fff border-1">
        独立窗口
      </h5>
      <p class="border-1 border-dashed w-40 rounded-1 h-20 flex justify-center items-center">DevTools Client</p>
      <p class="border-1 border-solid w-40 rounded-1 h-20 flex justify-center items-center absolute left-50% translate-x--50% transition-all duration-500"
        :class="$clicks >= 2 ? 'op0 translate-x-40! translate-y--25' : 'op100'">
        DevTools
        Client</p>
    </div>
    <!-- browser extension -->
    <div class="border-1 w-60 h-40 justify-center flex items-center absolute transition-all duration-500"
      :class="$clicks === 0 ? 'left-50% translate-x--50% op0 top-30' : 'right-0 top-60 op100'">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-#fff border-1">
        浏览器扩展
      </h5>
      <p class="border-1 border-dashed w-40 rounded-1 h-20 flex justify-center items-center">DevTools Client</p>
      <p class="border-1 border-solid w-40 rounded-1 h-20 flex justify-center items-center absolute left-50% translate-x--50% transition-all duration-500"
        :class="$clicks >= 2 ? 'op0 translate-x--80! translate-y--25' : 'op100'">
        DevTools
        Client</p>
    </div>
    <!-- client package -->
    <div
      class="border-1 w-66 h-40 flex flex-col justify-center items-center absolute transition-all duration-500 left-50% translate-x--50% top-30 rounded-2"
      :class="$clicks >= 2 ? 'op100' : 'op0'">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 w-48 bg-[#42b883] rounded-1 text-[#213547] font-600 border-#fff border-1">
        DevTools Client
      </h5>
      <p class="border-1 border-dashed w-40 rounded-1 h-20 flex justify-center items-center">
        <span v-if="$clicks >= 3" class="absolute left-5 border-dashed border-1 p1 rounded-1 bg-[#213547]">App</span>
        Bundle
        <span v-if="$clicks >= 4" class="absolute right-5 border-dashed border-1 py1 px2 rounded-1 bg-[#213547]">
          Lib
        </span>
      </p>
    </div>
  </div>

  <template v-if="$clicks >= 3">
    <Arrow x1="370" y1="290" x2="260" y2="175" />

    <Arrow x1="370" y1="295" x2="260" y2="415" />

  </template>

  <template v-if="$clicks >= 4">
    <Arrow x1="610" y1="295" x2="720" y2="415" />

    <Arrow x1="610" y1="290" x2="720" y2="175" />

  </template>
</template>
