<script setup lang="ts">
import { watchEffect, computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()

const animationClass = `transition-all duration-500`
const wrapperInitialClass = `relative ${animationClass}`
const smTitlesClass = `text-3xl font-600 ${animationClass}`
const lgTitlesClass = `text-5xl font-600 ${animationClass}`

// vite plugin
const vitePluginWrapperClass = computed(() => {
  if ($clicks.value >= 6) {
    return `hidden ${animationClass}`
  }
  else if ($clicks.value === 0) {
    return wrapperInitialClass
  } else if ($clicks.value >= 1) {
    return `absolute left-0 top-0 ${animationClass}`
  }
})

const vitePluginTitleClass = computed(() => {
  if ($clicks.value >= 5) {
    return `hidden ${animationClass}`
  }
  else if ($clicks.value === 0) {
    return lgTitlesClass
  } else if ($clicks.value >= 1) {
    return smTitlesClass
  }
})

// electron app
const electronAppWrapperClass = computed(() => {
  if ($clicks.value >= 6) {
    return `hidden ${animationClass}`
  }
  else if ($clicks.value === 0) {
    return `hidden ${wrapperInitialClass}`
  }
  else if ($clicks.value === 1) {
    return wrapperInitialClass
  } else if ($clicks.value >= 2) {
    return `absolute right-0 top-0 ${animationClass}`
  }
})

const electronAppTitleClass = computed(() => {
  if ($clicks.value >= 5) {
    return `${lgTitlesClass} absolute top-13 right-63`
  }
  else if ($clicks.value === 1) {
    return lgTitlesClass
  } else if ($clicks.value >= 2) {
    return smTitlesClass
  }
})

// browser extension
const spearateWrapperClass = computed(() => {
  if ($clicks.value >= 6) {
    return `hidden ${animationClass}`
  }
  else if ($clicks.value < 2) {
    return `hidden ${wrapperInitialClass}`
  }
  else if ($clicks.value === 2) {
    return wrapperInitialClass
  } else if ($clicks.value >= 2) {
    return `absolute left-0 bottom-0 ${animationClass}`
  }
})

const spearateTitleClass = computed(() => {
  if ($clicks.value >= 5) {
    return `${lgTitlesClass} absolute bottom-0 left-63 [&_i]:(text-4em!)`
  }
  else if ($clicks.value === 2) {
    return lgTitlesClass
  } else if ($clicks.value >= 2) {
    return smTitlesClass
  }
})



// browser extension
const browserExtensionWrapperClass = computed(() => {
  if ($clicks.value >= 6) {
    return `hidden ${animationClass}`
  }
  else if ($clicks.value < 3) {
    return `hidden ${wrapperInitialClass}`
  }
  else if ($clicks.value === 3) {
    return wrapperInitialClass
  } else if ($clicks.value >= 3) {
    return `absolute right-0 bottom-0 ${animationClass}`
  }
})

const browserExtensionTitleClass = computed(() => {
  if ($clicks.value >= 5) {
    return `${lgTitlesClass} absolute bottom-0 right-63 [&_i]:(text-4em!)`
  }
  else if ($clicks.value === 3) {
    return lgTitlesClass
  } else if ($clicks.value >= 3) {
    return smTitlesClass
  }
})


</script>

<template>
  <div class="w-full h-full flex justify-center items-center relative transition-all duration-500">
    <!-- vite plugin -->
    <div :class="vitePluginWrapperClass">
      <p :class="vitePluginTitleClass">
        <i class="w12 inline-block" />ite {{ $clicks === 0 ? 'plugin' : '插件' }} <template v-if="$clicks === 0"><i
            class="w8 inline-block" />ue
          DevTools</template>
      </p>
      <div i-logos-vitejs absolute transition-all duration-500
        :class="$clicks >= 5 ? 'left-65 top-15 text-4em' : 'left-0 top--2 text-3em'" />
      <div i-logos-vue text-2em absolute class="top-3" :class="$clicks >= 1 ? 'left-46' : 'left-66'"
        v-if="$clicks === 0" />
    </div>

    <!-- electron app -->
    <div :class="electronAppWrapperClass">
      <p :class="electronAppTitleClass" flex justify-center items-center class="m0!" transition-all duration-500>
        <i i-logos-electron inline-block w-18 :class="$clicks >= 2 ? 'text-2em' : 'text-3em'" /> <template
          v-if="$clicks < 5">Electron 应用</template>
      </p>
    </div>

    <!-- spearate window -->
    <div :class="spearateWrapperClass">
      <p :class="spearateTitleClass" flex justify-center items-center class="m0!" transition-all duration-500>
        <i i-ph-browsers-light inline-block w-18 :class="$clicks >= 2 ? 'text-2em' : 'text-3em'" /> <template
          v-if="$clicks < 5">独立窗口</template>
      </p>
    </div>

    <!-- browser extension -->
    <div :class="browserExtensionWrapperClass">
      <p :class="browserExtensionTitleClass" flex justify-center items-center class="m0!">
        <i i-logos-chrome inline-block w-18 :class="$clicks >= 3 ? 'text-2em' : 'text-3em'" /> <template
          v-if="$clicks < 5">浏览器扩展</template>
      </p>
    </div>


    <TransitionGroup name="fade">
      <div v-if="$clicks === 6"
        class="transition-all duration-500 absolute text-3xl top-45 left-50% translate-x--50% op80">
        Introducing</div>
      <div v-if="$clicks >= 4" class="relative text-5xl font-700 transition-all duration-500"
        :class="$clicks === 6 ? 'scale-130 translate-y-5' : 'scale-100'">
        DevTools Next
        <div
          class="absolute left-50% top-50% translate-x--50% translate-y--50% border-3 border-gray:100 w-130 h-130 rounded-full"
          v-if="$clicks === 5">
        </div>
      </div>
    </TransitionGroup>

    <div v-if="$clicks === 6" class="fixed top-0 left-0 bottom-0 w-full h-full">
      <img src="/logo.svg" absolute top-5 z-13 w-50 class="left-50% translate-x--50% op40" />
      <div i-logos-vue text-35em absolute op10 top--5 class="left-50% translate-x--50%" />
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}
</style>
