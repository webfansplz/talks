<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { getCurrentInstance } from 'vue'
const { $clicks } = useSlideContext()
const instance = getCurrentInstance()


function addInspector() {
  // @ts-expect-error skip type checking
  instance.proxy.$registerVueConfInspector()
}

function addTimelineEvent() {
  // @ts-expect-error skip type checking
  instance.proxy.$addTimelineEvent()
}

</script>

<template>
  <div class="absolute left-12 top-40">
    <button v-if="$clicks === 1"
      class="border-1 rounded-1 px2 text-4 cursor-pointer hover:(border-green:500 text-green:500)"
      @click="addInspector">
      注册检查器
    </button>
    <button v-if="$clicks === 2" class="px2 text-4 cursor-pointer" @click="addInspector">
      添加元素节点
    </button>
    <button v-if="$clicks === 3" class="px2 text-4 cursor-pointer">
      添加节点数据
    </button>
    <button v-if="$clicks === 4" class="px2 text-4 cursor-pointer">
      添加时间线面板
    </button>
    <button v-if="$clicks === 5"
      class="border-1 rounded-1 px2 text-4 cursor-pointer hover:(border-green:500 text-green:500)"
      @click="addTimelineEvent">
      添加时间线事件
    </button>
  </div>
</template>
