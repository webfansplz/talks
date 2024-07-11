<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>

<template>
  <div class="flex gap-2 justify-between pt-5">
    <div class="flex-1 border-1 rounded-1 h-105 relative">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 px-5 bg-[#42b883] rounded-1 text-[#213547] font-600 border-#fff border-1">
        Vue
        DevTools
      </h5>
      <ul class="px2 pt8 flex justify-center gap-2 items-center h-full" v-if="$clicks < 2">
        <li>
          <DevToolsModule icon="i-carbon-assembly-cluster" name="Components" theme="green" logo="i-logos-vue"
            relative />
        </li>
        <li>
          <DevToolsModule icon="i-logos-pinia" name="Pinia" theme="green" logo="i-logos-vue" relative />
        </li>
      </ul>

      <ul class="h-40 flex flex-row gap-2 justify-center mt-30 mx-2 flex-wrap border-1 border-dashed rounded-2 pb-6"
        v-if="$clicks === 2">
        <li class="w-full op-80">@vue/devtools-applet</li>
        <li>
          <DevToolsModule icon="i-carbon-assembly-cluster" name="Components" theme="green" logo="i-logos-vue"
            relative />
        </li>
        <li>
          <DevToolsModule icon="i-logos-pinia" name="Pinia" theme="green" logo="i-logos-vue" relative />
        </li>
      </ul>

    </div>
    <!-- chat -->
    <div v-if="$clicks === 1" class="flex-1 h-105 relative pt5">
      <ul class="[&_li]:(mb-5)">
        <li class="flex flex-row justify-end">
          <p class="m0! text-3 w-50 text-left lh-4! bg-[#02C169] p2 rounded-2 mr-2!">嗨 👋，我们是否有可能将 Vue DevTools 的一些功能集成到
            Nuxt DevTools 呢？
          </p>
          <img src="/antfu.png" class="rounded-full w8 h8" />
        </li>
        <li class="flex flex-row justify-start">
          <img src="/arlo.png" class="rounded-full w8 h8" />
          <p class="m0! text-3 w-30 text-left lh-4! bg-[#42b883] text-[#213547] p2 rounded-2 ml-2!">嗯...我考虑一下...
          </p>
        </li>
        <li class="flex items-center justify-center gap-2">
          <i class="i-bi-github inline-flex text-2xl text-#fff mt--1" />
          Anthony Fu 赞助了你！
        </li>
        <li class="flex flex-row justify-end">
          <p class="m0! text-3 w-32 text-right lh-4! bg-[#02C169] p2 rounded-2 mr-2!">现在考虑好了吗？🤔
          </p>
          <img src="/antfu.png" class="rounded-full w8 h8" />
        </li>
        <li class="flex flex-row justify-start">
          <img src="/arlo.png" class="rounded-full w8 h8" />
          <p class="m0! text-3 w-40 text-left lh-4! bg-[#42b883] text-[#213547] p2 rounded-2 ml-2! flex items-center">
            <i class="i-vscode-icons:file-type-vscode inline-flex text-3.5 mr1" />VSCode 启动！！！
          </p>
        </li>
      </ul>
    </div>
    <div v-if="$clicks >= 2" class="flex-1 h-105 flex relative justify-between items-center flex-col">
      <div class="w-50 h-30 rounded-1 border-1 flex justify-center items-center relative">
        DevTools Kit
        <div class="absolute left--11 top-50% w-10 border-t-1 border-white">
          <span class="absolute left-0 top--14px">
            <pre><</pre>
          </span>
        </div>
        <div class="absolute right--11 top-50% w-10 border-t-1 border-white">
          <span class="absolute right-0 top--14px">
            <pre>></pre>
          </span>
        </div>
        <div class="absolute left-50% bottom--20 h-15 border-l-1 border-white">
          <span class="absolute left--5.5px top--11px">
            <pre class="rotate-90"><</pre>
          </span>
        </div>
        <div class="absolute left-50% bottom--20 h-15 border-l-1 border-white">
          <span class="absolute left--6px bottom--11px">
            <pre class="rotate-270"><</pre>
          </span>
        </div>
      </div>
      <div class="w-50 h-50 rounded-1 border-1 flex flex-col justify-center items-center relative">
        <span>
          DevTools Applet
        </span>
        <ul class="px2 pt8 flex justify-center gap-2 items-center">
          <li>
            <DevToolsModule icon="i-carbon-assembly-cluster" name="Components" theme="green" logo="i-logos-vue"
              relative />
          </li>
          <li>
            <DevToolsModule icon="i-logos-pinia" name="Pinia" theme="green" logo="i-logos-vue" relative />
          </li>
        </ul>
        <div class="absolute left--11 top-50% w-10 border-t-1 border-white">
          <span class="absolute left-0 top--14px">
            <pre><</pre>
          </span>
        </div>
        <div class="absolute right--11 top-50% w-10 border-t-1 border-white">
          <span class="absolute right-0 top--14px">
            <pre>></pre>
          </span>
        </div>
      </div>
    </div>
    <div class="flex-1 border-1 rounded-1 h-105 relative">
      <h5
        class="top--6 absolute left-50% translate-x--50% py-2 px-5 bg-[#02C169] rounded-1 text-[#fff] font-600 border-#fff border-1">
        Nuxt
        DevTools
      </h5>
      <ul class="px2 pt8 flex justify-center gap-2 items-center h-full flex-wrap relative">
        <li>
          <DevToolsModule icon="i-carbon-3d-mpr-toggle" name="Modules" theme="teal" logo="i-logos-nuxt-icon" relative />
        </li>
        <li>
          <DevToolsModule icon="i-carbon-function" name="Imports" theme="teal" logo="i-logos-nuxt-icon" relative />
        </li>
        <template v-if="$clicks === 2">
          <ul class="w-full flex flex-row gap-2 justify-center mt--30 flex-wrap border-1 border-dashed rounded-2 pb-6">
            <li class="w-full op-80">@vue/devtools-applet</li>
            <li>
              <DevToolsModule icon="i-carbon-assembly-cluster" name="Components" theme="green" logo="i-logos-vue"
                relative />
            </li>
            <li>
              <DevToolsModule icon="i-logos-pinia" name="Pinia" theme="green" logo="i-logos-vue" relative />
            </li>
          </ul>
        </template>
      </ul>
    </div>
  </div>
</template>
