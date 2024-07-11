<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()

</script>

<template>
  <div class="flex gap-2 justify-between pt-5 relative">

    <div class="w-60 h-100 flex justify-center items-center transition-all duration-500 relative">
      <div class="border-1 border-solid w-50 rounded-1 h-105 flex justify-center items-center relative">
        <h5
          class="top--4 absolute left-50% translate-x--50% py-1 w-30 bg-[#02C169] rounded-1 text-white font-600 border-white border-1">
          Vue.js 应用
        </h5>
        DevTools Kit
      </div>
    </div>

    <div class="w-60 flex flex-col items-center transition-all duration-500 relative gap-8">
      <div
        class="border-1 border-solid w-50 rounded-1 flex justify-center items-center absolute left-5 transition-all duration-500"
        :class="$clicks === 0 ? 'h-105' : 'h-20'">
        <h5
          class="top--4 absolute left-50% translate-x--50% py-1 w-30 bg-[#213547] rounded-1 text-white font-600 border-white border-1">
          Vite 插件
        </h5>
        DevTools Client
      </div>
      <div
        class="border-1 border-solid w-50 rounded-1 h-20 flex justify-center items-center absolute transition-all duration-500"
        :class="$clicks === 0 ? 'left-5 top-200' : 'top-28'">
        <h5
          class="top--4 absolute left-50% translate-x--50% py-1 w-30 bg-[#213547] rounded-1 text-white font-600 border-white border-1">
          独立窗口
        </h5>
        DevTools Client
      </div>
      <div
        class="border-1 border-solid w-50 rounded-1 h-20 flex justify-center items-center absolute transition-all duration-500"
        :class="$clicks === 0 ? 'left-5 top-400' : 'top-56'">
        <h5
          class="top--4 absolute left-50% translate-x--50% py-1 w-30 bg-[#213547] rounded-1 text-white font-600 border-white border-1">
          Electron 应用
        </h5>
        DevTools Client
      </div>
      <div
        class="border-1 border-solid w-50 rounded-1 h-20 flex justify-center items-center absolute transition-all duration-500"
        :class="$clicks === 0 ? 'left-5 top-600' : 'top-84'">
        <h5
          class="top--4 absolute left-50% translate-x--50% py-1 w-30 bg-[#213547] rounded-1 text-white font-600 border-white border-1">
          浏览器扩展
        </h5>
        DevTools Client
      </div>

    </div>

    <div class="absolute" v-if="$clicks < 2">

      <Arrow x2="230" y2="200" x1="372" y1="200" />

      <Arrow x1="430" y1="200" x2="640" y2="200" v-if="$clicks === 0" />

      <template v-else>
        <Arrow x2="630" y2="40" x1="430" y1="200" />
        <Arrow x2="630" y2="150" x1="430" y1="200" />
        <Arrow x2="630" y2="265" x1="430" y1="200" />
        <Arrow x2="630" y2="375" x1="430" y1="200" />
      </template>
      <span
        class="absolute left-93 top-35 h-30 rounded-50% text-white font-600 border-white border-1  bg-[#213547] w-30 flex justify-center items-center">{{
          $clicks === 0 ? '一对一通信' : '一对多通信' }}</span>
    </div>

    <div class="absolute left-50% translate-x--50% op90 w-75" v-if="$clicks > 1 && $clicks < 4">
      <h3>消息管道设计</h3>
      <h4 v-if="$clicks === 2" class="text-4!">(消息广播 📢)</h4>
      <h4 v-if="$clicks === 3" class="text-4!">(消息隔离 🌟)</h4>
      <ul class="[&_li]:(mb-5) border-1 px5 py2 rounded-2 mt-5" v-if="$clicks === 2">
        <li class="border-b-1 border-dashed">
          Vue DevTools 通信小组（5）
        </li>
        <li class="flex flex-row justify-start gap2">
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-logos-vue w8 h8 inline-flex" />
          </span>
          <p class="m0! text-3 w-30 text-left lh-4! bg-[#02C169] p2 rounded-2 mr-2!">
            我有组件更新了！
          </p>
        </li>
        <li class="flex flex-row justify-end gap2">
          <p class="m0! text-3 w13 text-left lh-4! bg-gray-7 text-white p2 rounded-2 ml-2!">收到！</p>
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-logos-vitejs w8 h8 inline-flex" />
          </span>
        </li>
        <li class="flex flex-row justify-end gap2">
          <p class="m0! text-3 w13 text-left lh-4! bg-gray-7 text-white p2 rounded-2 ml-2!">收到！</p>
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-ph-browsers-light w8 h8 inline-flex" />
          </span>
        </li>
        <li class="flex flex-row justify-end gap2">
          <p class="m0! text-3 w13 text-left lh-4! bg-gray-7 text-white p2 rounded-2 ml-2!">收到！</p>
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-logos-electron w8 h8 inline-flex" />
          </span>
        </li>
        <li class="flex flex-row justify-end gap2">
          <p class="m0! text-3 w13 text-left lh-4! bg-gray-7 text-white p2 rounded-2 ml-2!">收到！</p>
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-logos-chrome w8 h8 inline-flex" />
          </span>
        </li>
      </ul>

      <ul class="[&_li]:(mb-5) border-1 px5 py2 rounded-2 mt-5" v-if="$clicks === 3">
        <li class="border-b-1 border-dashed">
          Vue.js 应用
        </li>
        <li class="flex flex-row justify-end gap2">
          <p class="m0! text-3 w45 text-left lh-4! bg-gray-7 text-white p2 rounded-2 ml-2!">嗨 👋，我想要这个组件的状态</p>
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-logos-vitejs w8 h8 inline-flex" />
          </span>
        </li>
        <li class="flex flex-row justify-start gap2">
          <span class="rounded-full w8 h8 p1 flex justify-center items-center">
            <i class=" i-logos-vue w8 h8 inline-flex" />
          </span>
          <p class="m0! text-3 w-20 text-left lh-4! bg-[#02C169] p2 rounded-2 mr-2!">
            先 V 我 50!
          </p>
        </li>
      </ul>
    </div>

    <div class="absolute left-50% translate-x--50% op90 w-75" v-if="$clicks > 3">
      <h3>通信编码模式</h3>
      <h4 v-if="$clicks > 3 && $clicks < 6" class="text-4!">(一次编写，到处运行)</h4>
      <h4 v-if="$clicks >= 6" class="text-4!">(简单易用 👼)</h4>
    </div>

  </div>
</template>
