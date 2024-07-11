---
layout: cover
css: unocss
highlighter: shiki
colorSchema: dark
transition: fade-out
class: pl-25 relative
title: Vue DevTools 的下一个迭代
---

<div mt--5>
<h1 flex="~ col">
  <div flex="~ items-baseline"><b font-bold text-5xl>Vue DevTools</b><span text-2xl ml-2>的下一个迭代</span></div>
</h1>

<div tracking-widest ml-3 class="font-[Roboto] text-5">
Arlo
</div>
</div>

<div abs-br mx-13 my-8 flex="~ col" text-sm text-right class="font-[Roboto]">
  <div>Vue Conf ShenZhen</div>
  <div text-sm opacity-50>2024/07/06</div>
</div>



<img src="/logo.svg" absolute right-20 top-5 z-13 w-40 />
<div i-logos-vue text-35em absolute op10 right--35 top--5 />

<ShenZhen />


---
layout: intro
growX: 10
growY: 90
class: pl-25
---

# Arlo

<div class="[&>*]:important-leading-10 opacity-80 font-[Roboto]">

{Vue|https://github.com/vuejs/core} and {VueUse|https://github.com/vueuse/vueuse} 团队成员<br>
{Vue DevTools Next|https://github.com/vuejs/devtools-next} 作者<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div flex="~ gap-2" items-center mr3>
    <i i-ri-github-line op50 text-xl inline-block/>
    <a href="https://github.com/webfansplz" target="_blank" class="border-none! font-300">webfansplz</a>
  </div>
  <div flex="~ gap-2" items-center>
    <i i-ri-zhihu-line op50 ma text-xl inline-block/>
    <a href="https://www.zhihu.com/people/weber-23-9" target="_blank" class="border-none! font-300">webfansplz</a>
  </div>
</div>

<img src="/arlo.png" rounded-full w-35 abs-tr mt-32 mr-40 />

<div flex="~ gap2">

</div>


---
layout: center
class: text-center
growX: 50
growY: 50
growSize: 0.4
---

<!-- <p class="text-4xl!">为什么要做 <b font-bold>Vue DevTools Next</b> ？</p> -->
<p class="text-12!">灵感 & 启发</p>



---
layout: center
growX: -9999
growY: -9999
growSize: 0
---

<img src="/nuxt-devtools-talk.jpeg" w="80vw" />


---
layout: center
class: text-center
clicks: 4
growX: 50
growY: 50
growSize: 0.8
---

<div flex items-center justify-center>
  <p class="text-4xl! flex items-center justify-center"> 
    <NuxtDevTools h-8 v-if="$clicks <= 3" />
    <div class="flex items-center" v-if="$clicks > 3" v-click>
      <i class="i-logos-nuxt-icon text-5xl inline-block mr2" /> <span class="text-2xl px2">➕</span> <i class="i-logos-vitejs text-4xl inline-block mr2" /> <span class=" text-2xl px2">➕</span> <span class="text-8">Server</span>
    </div>
  </p>

  <div absolute w-full h-full>

  <DevToolsModule icon="i-ri-code-box-line" name="Editors" :theme="$clicks > 1? 'orange': 'default'" absolute left-35 top-60 />
  <DevToolsModule icon="i-ri-folder-image-line" name="Assets" :theme="$clicks > 1? 'orange': 'default'" absolute left-190 top-60/>

  <DevToolsModule icon="i-ri-box-3-line" name="Bundle Size" :theme="$clicks > 2 ? 'purple' :'default'" :logo="$clicks > 2 ? 'i-logos-vitejs':''" absolute left-155 top-90/>
  <DevToolsModule icon="i-ri-search-2-line" name="Vite Inspect" :theme="$clicks > 2 ? 'purple' :'default'" :logo="$clicks > 2 ? 'i-logos-vitejs':''" absolute left-70 top-90/>

  <DevToolsModule icon="i-carbon-3d-mpr-toggle" name="Modules" :theme="$clicks >= 1? 'teal': 'default'" :logo="$clicks > 0 ? 'i-logos-nuxt-icon':''" absolute left-70 top-30/>
  <DevToolsModule icon="i-carbon-function" name="Imports" :theme="$clicks >= 1? 'teal': 'default'" :logo="$clicks > 0 ? 'i-logos-nuxt-icon':''" absolute left-155 top-30/>
  </div>
</div>



---
layout: center
class: text-center
clicks: 1
growX: 50
growY: 50
growSize: 0.8
---

<div flex items-center justify-center>
  <p class="text-4xl! flex items-center justify-center"> 
    <div class="flex items-center">
      <i class="i-logos-vue text-4xl inline-block mr2" /> <span class="text-2xl px2">➕</span> <i class="i-logos-vitejs text-4xl inline-block mr2" /> <span class=" text-2xl px2">➕</span> <span class="text-8">Server</span>
    </div>
  </p>

  <div absolute w-full h-full>

  <DevToolsModule icon="i-ri-folder-image-line" name="Assets" :theme="$clicks === 1 ? 'purple' :'default'" :logo="$clicks === 1 ? 'i-logos-vitejs':''" absolute left-190 top-60/>
  <DevToolsModule icon="i-ri-box-3-line" name="Bundle Size" :theme="$clicks === 1 ? 'purple' :'default'" :logo="$clicks === 1 ? 'i-logos-vitejs':''" absolute left-155 top-90/>
  <DevToolsModule icon="i-ri-search-2-line" name="Vite Inspect" :theme="$clicks === 1 ? 'purple' :'default'" :logo="$clicks === 1 ? 'i-logos-vitejs':''" absolute left-70 top-90/>
  <DevToolsModule icon="i-carbon-assembly-cluster" name="Components" theme="green" absolute left-35 top-60 logo="i-logos-vue" />
  <DevToolsModule icon="i-ri-route-line" name="Router" theme="green" logo="i-logos-vue" absolute left-70 top-30/>
  <DevToolsModule icon="i-logos-pinia" name="Pinia" theme="green" logo="i-logos-vue" absolute left-155 top-30/>
  </div>
</div>



---
layout: center
class: text-center
growX: 50
growY: 0
growSize: 0.8
---

<div v-click transition-all duration-500 :class="$clicks === 0 ? 'op0' : $clicks > 1 ? 'op50 text-2xl translate-y--5' : 'translate-y-10 text-4xl'">Introducing</div>

<div v-click relative>
  <p text-5xl font-600>
    <i  class="w12 inline-block" />ite Plugin <i  class="w8 inline-block" />ue DevTools  
  </p>
  <div i-logos-vitejs text-3em absolute top--5 left-0/>
  <div i-logos-vue text-2em absolute class="left-66 top--1" />
</div>

<template v-if="$clicks > 1">
<div i-logos-vitejs text-10em absolute right-20 top-1 op20 class="left-50% translate-x--50%"/>
<div i-logos-vue text-35em absolute op10 top--5  class="left-50% translate-x--50%" />
</template>



---
clicks: 3
class: ml-5 mt-0 text-center
growX: 50
growY: 10
growSize: 1.2
---

<div relative>
  <p text-4xl font-600>
    <i  class="w12 inline-block" />ite Plugin <i  class="w8 inline-block" />ue DevTools  
  </p>
  <div i-logos-vitejs text-3em absolute top--5 left-50/>
  <div i-logos-vue text-2em absolute class="left-102 top--1" />
</div>

<div class="mt15 flex gap-5 flex-col items-center">
 <div flex="~ gap-3 items-center" :class="$clicks === 0 && 'text-yellow-500'" >
    <div i-subway:power text-5xl />
    <span>丰富功能特性</span>
    <!-- build time and runtime -->
  </div>
  <div flex="~ gap-3 items-center"  :class="$clicks === 1 && 'text-yellow-500'">
    <div i-tabler-books text-5xl />
    <span>项目工程分析</span>
  </div>
  <div flex="~ gap-3 items-center"  :class="$clicks === 2 && 'text-yellow-500'">
    <div i-tabler-brand-speedtest text-5xl />
    <span>性能改善优化</span>
  </div>
  <div flex="~ gap-3 items-center"  :class="$clicks === 3 && 'text-yellow-500'">
    <div i-carbon-api-1 text-5xl />
    <span>插件 API 支持</span>
  </div>
</div>



---
class: text-center mt-8 relative
growX: 50
growY: 50
growSize: 0.8
---

# 开箱即用

<div class="flex h-80 items-center justify-center">
<p class="text-left">

````md magic-move
```ts
// vite.config.ts

import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    vue()
  ]
})
```

```ts
// vite.config.ts

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ]
})
```
````
</p>
</div>



---
layout: center
class: text-center
growX: 50
growY: 0
growSize: 1
---

<div v-click transition-all duration-500 :class="$clicks === 0 ? 'op0' : $clicks > 1 ? 'op50 text-2xl translate-y--5 line-through' : 'translate-y-10 text-4xl'">Talk is cheap </div>

<div v-click relative>
  <p text-5xl font-600>
    Plays in PPT !
  </p>
</div>



---
class: text-center mt-8
growOpacity: 0.1
devtools: true
---

# 应用内嵌工具



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# 应用概览

<ul class="absolute left-50% top-25 translate-x--50% [&>li]:(ml-0! pl-0!) flex flex-row gap-5 op75">
  <li>Vue 版本</li>
  <li>页面 数量</li>
  <li>组件 数量</li>
</ul>


---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# 组件查看器

<div class="absolute left-50% top-25 translate-x--50%">
  <ul class="[&>li]:(ml-0! pl-0!) flex justify-center flex-row gap-5 op75">
    <li>节点树</li>
    <li>数据状态</li>
    <li>依赖视图</li>
  </ul>
  <Counter />
  <div class="h-12 overflow-auto absolute left-50% top-35 translate-x--50% no-scrollbar">
    <div class="h-100">
    </div>
    <Scroller />
  </div>

</div>



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# 路由导航器

<ul class="absolute left-50% top-25 translate-x--50% [&>li]:(ml-0! pl-0!) flex flex-row gap-5 op75">
  <li>路由列表</li>
  <li>导航能力</li>
</ul>



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# Vue Router 检查器

<div class="absolute left-50% top-25 translate-x--50%">
  <ul class="[&>li]:(ml-0! pl-0!) flex justify-center flex-row gap-5 op75">
    <li>Routes</li>
    <li>Timeline</li>
  </ul>
</div>



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# Pinia 检查器

<div class="absolute left-50% top-25 translate-x--50%">
  <ul class="[&>li]:(ml-0! pl-0!) flex justify-center flex-row gap-5 op75">
    <li>Store</li>
    <li>Timeline</li>
  </ul>
  <PiniaCounter />
</div>



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# I18n 检查器

<div class="absolute left-50% top-25 translate-x--50%">
  <!-- <ul class="[&>li]:(ml-0! pl-0!) flex justify-center flex-row gap-5 op75">
    <li>翻译列表</li>
    <li>翻译状态</li>
  </ul> -->
  <I18n />
</div>



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# 资源管理器

<ul class="absolute left-50% top-25 translate-x--50% [&>li]:(ml-0! pl-0!) flex flex-row gap-5 op75">
  <li>资源列表</li>
  <li>文件信息</li>
</ul>



---
class: text-center mt-8 relative
growOpacity: 0.1
devtools: true
---

# 模块依赖图

<ul class="absolute left-50% top-25 translate-x--50% [&>li]:(ml-0! pl-0!) flex flex-row gap-5 op75">
  <li>引用 & 依赖关系</li>
</ul>


---
class: text-center mt-8 relative
growOpacity: 0.1
---

# Vite Inspector

<ul class="absolute left-50% top-25 translate-x--50% [&>li]:(ml-0! pl-0!) flex flex-row gap-5 op75">
  <li>在编辑器中打开组件</li>
</ul>

<div class="flex justify-center mt-15">
  <img src="/vite-inspector.gif" class="block w-180" />
</div>



---
class: text-center relative
grow: full
clicks: 2
growX: 50
growY: 100
growSize: 1
---

<div class="absolute top-50% translate-y--50% left-20 text-12 op50 mt-8">实现</div>
<div class="absolute top-50% translate-y--50% right-20 text-12 op50 mt-8" >原理</div>

<div class="absolute top-50% left-50% translate--50% mt-8">
<img v-if="$clicks === 0" src="/devtools-vite-design-1.png" w="100vw" />
<img v-if="$clicks === 1" src="/devtools-vite-design-2.png" w="100vw" />
<img v-if="$clicks === 2" src="/devtools-vite-design-3.png" w="100vw" />
</div>



---
clicks: 4
growX: 0
growY: 0
class: relative mt-5
growOpacity: 0.1
---

## 目标用户 & 项目受众

<div
  class="left-50% translate-x--50% top-35 absolute w-70 h-70 bg-[#646cff] border-[#bcc0ff] text-[#bcc0ff] z-2"
  border="~ rounded-full"
  bg-blue:20 text-4xl flex="~ items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 2 ? 'scale-100' : 'scale-80'"
>
  <span class="absolute top-[45%] flex items-center">
    <i class="i-logos-vitejs h12 inline-flex mt--2" />ite
  </span>

</div>

<div
  v-click="1"
  absolute w-285 h-285 left--20 top--10 border="~ #42b883 rounded-full" bg-green:10 text-5xl
  flex="~ items-center justify-center"
  transition-all duration-500 scale-80
>
  <span class="absolute top-[45%] flex items-center">
    <i class="i-logos-vue w12 inline-flex mt--2" />
    ue 用户  
  </span>
</div>



<div
  v-click="3"
  class="left-17% top-45 absolute w-70 h-70 bg-gray-20 border-gray:30 text-white pr-5"
  :class="$clicks >= 3 ? 'scale-100' : 'scale-50'"
  border="~ rounded-full"
  bg-blue:20 text-4xl flex="~ items-center justify-center"
  transition-all duration-500
>
  设备
  <span class="text-5 absolute right-3 top-25">Browser</span>
  <span class="text-5 absolute right-28 top-10 op40">Mobile</span>
</div>

<div
  v-click="4"
  class="left-54% top-45 absolute w-70 h-70 bg-gray-20 border-gray:30 text-white"
  :class="$clicks >= 4 ? 'scale-100' : 'scale-50'"
  border="~ rounded-full"
  bg-blue:20 text-4xl flex="~ items-center justify-center"
  transition-all duration-500
>
  模式
  <span class="text-5 absolute left-13 top-10">Dev</span>
  <span class="text-5 absolute left-14 top-25">CSR</span>
  <span class="text-5 absolute left-6 top-40">SSR</span>
  <span class="text-5 absolute left-28 top-10 op40">Production</span>
</div>


---
clicks: 6
growX: 50
growY: 0
---

<DevToolsNextTravel />



---
class: text-center
preload: true
---

# 独立窗口

<VideoDemo src="/snapshots/spearate-window.mp4" />



---
class: text-center
preload: true
---

# 桌面端应用

<VideoDemo src="/snapshots/electron-app.mp4" />


---
class: text-center
preload: true
---

# 浏览器扩展

<VideoDemo src="/snapshots/browser-extension.mp4" />


---
class: text-center relative
preload: true
clicks: 1
devtools: true
growX: 50
growY: 0
growSize: 0.8
---

# 插件 API

<h4 class="op80">
 <span v-if="$clicks === 0">自定义</span>
 <span v-else>VueUse</span>
 Tab
</h4>

<VueUseTab />

<div class="absolute left-10 top-50">
<div class="w-100 text-left" v-if="$clicks === 1">

```ts
import { addCustomTab } from '@vue/devtools-api'

addCustomTab({
  name: 'vueuse',
  title: 'VueUse',
  icon: 'i-logos-vueuse',
  view: {
    type: 'iframe',
    src: 'https://vueuse.org/',
  },
  category: 'advanced',
})
```
</div>
</div>



---
class: text-center relative
preload: true
clicks: 5
growX: 50
growY: 0
growSize: 0.8
devtools: true
---

# 插件 API


<h4 class="op80">
 <span v-if="$clicks === 0">自定义</span>
 <span v-else>Vue Conf</span>
 Inspector
</h4>

<VueConfPlugin />

<div class="absolute left-10 top-50">
<div class="w-60 text-left" v-if="$clicks === 1">

```ts
api.addInspector({
  id: 'vue-conf',
  label: 'Vue Conf CN 2024'
})
```
</div>

<div class="w-80 text-left" v-if="$clicks === 2">

```ts
api.on.getInspectorTree((state) => {
  state.rootNodes = data.map((node) => ({
      id: node.id,
      label: node.label,
      name: node.name,
      tags: node.tags
  }))
})
```
</div>

<div class="w-85 text-left" v-if="$clicks === 3">

```ts
 api.on.getInspectorState(state => {
  state.state 
   = data.find((node) => node.id === state.id).state
})
```
</div>

<div class="w-85 text-left" v-if="$clicks === 4">

```ts
api.addTimelineLayer({
  id: TIMELINE_LAYER_ID,
  label: 'Vue Conf CN 2024',
})
```
</div>


<div class="w-85 text-left" v-if="$clicks === 5">

```ts
 api.addTimelineEvent({
  layerId: TIMELINE_LAYER_ID,
  event: {...}
})
```
</div>

</div>



---
clicks: 2
class: text-center
growX: 10
growY: 90
preload: true
---

# Vue DevTools Kit & Applet


<DevToolsApplet />


---
clicks: 3
class: text-center
growX: -999
growY: -999
growSize: 0
preload: true
---

# 更友好的框架支持

<div class="flex flex-col items-center" v-if="$clicks === 0">
  <div class="flex items-center justify-center">
    <i class="i-logos-laravel text-5xl inline-flex" />
    <span class="text-2xl op80 ml-3"> Laravel Vite</span>
  </div>
  <VideoDemo src="/snapshots/laravel.mp4" class="h-103!" />
</div>

<div class="flex flex-col" v-if="$clicks === 1">
  <div class="flex justify-center items-center">
    <i class="i-logos-nuxt-icon text-5xl inline-flex" />
    <span class="text-2xl op80 ml-3">Nuxt</span>
  </div>
  <VideoDemo src="/snapshots/nuxt-support.mp4" class="h-103!" />
</div>

<div class="flex flex-col" v-if="$clicks === 2">
  <div class="flex justify-center items-center">
    <i class="i-vscode-icons:file-type-wxt text-5xl inline-flex" />
    <span class="text-2xl op80 ml-3">WXT</span>
  </div>
  <VideoDemo src="/snapshots/wxt-vue.mp4" class="h-103!" />
</div>

<div class="flex flex-col" v-if="$clicks === 3">
  <div class="flex justify-center items-center">
    <i class="i-logos:tauri text-5xl inline-flex" />
    <span class="text-2xl op80 ml-3">Tauri</span>
  </div>
  <VideoDemo src="/snapshots/tauri.mp4" class="h-103!" />
</div>


---
layout: center
class: text-center
growX: 0
growY: 10
growSize: 1.8
---

<p class="text-5xl! font-700">DevTools Next 设计与实现</p>



---
clicks: 4
class: text-center
growX: 50
growY: 0
growSize: 0.8
---

# DevTools 客户端

<DevToolsClient />


---
clicks: 3
class: text-center
growX: 50
growY: 0
growSize: 0.8
---

# 消息通信

<DevToolsMessaging />



---
clicks: 7
class: text-center
growX: 50
growY: 0
growSize: 0.8
---

# 消息通信

<MessagingImpl />

<div class="absolute top-50 left-50% translate-x--50%" v-if="$clicks === 4">
  <p class="text-left">

  ```ts
  // 😫 => 💩⛰️

  if(isInIframe) {
    window.parent.postMessage({...})
  }
  else if (isInSpearateWindow) {
    channel.postMessage({...})
  }
  else if (isInElectronApp) { 
    socket.send({...})
  }
  else if (isInChromePanel) { 
    chrome.runtime.port.postMessage({...})
  }
  ```
  </p>
</div>

<div class="absolute top-50 left-50% translate-x--50%" v-if="$clicks === 5">
  <p class="text-left">

  ```ts
  // 😄

  devtools.emit({...})

  devtools.on('message',()=>{...})
  ```
  </p>
</div>

<div class="absolute top-50 left-50% translate-x--50%" v-if="$clicks === 6">
  <p class="text-left">

  ```ts
  // 😫 👿

  devtools.on('inspector-tree:response',()=>{...})

  devtools.emit('inspector-tree:request',{...})

  ```
  </p>
</div>


<div class="absolute top-50 left-50% translate-x--50%" v-if="$clicks === 7">
  <p class="text-left">

  ```ts
  // 😄

  const tree = await devtoolsRpc.getInspectTree(id)
  ```
  </p>
</div>


---
clicks: 3
class: text-center
growX: -999
growY: -999
growSize: 0
---

# 通信解决方案 - birpc

<div class="mt15 flex gap-5 flex-col items-center">
 <div flex="~ gap-3 items-center" :class="$clicks === 0 && 'text-yellow-500'" >
    <div i-icon-park-outline:one-to-many text-5xl />
    <span>一对多通信支持</span>
    <!-- build time and runtime -->
  </div>
  <div flex="~ gap-3 items-center"  :class="$clicks === 1 && 'text-yellow-500'">
    <div i-uil:setting text-5xl text-white />
    <span>自定义通信协议</span>
  </div>
  <div flex="~ gap-3 items-center"  :class="$clicks === 2 && 'text-yellow-500'">
    <div i-solar:call-chat-linear text-5xl />
    <span>远程过程调用&nbsp;&nbsp;&nbsp;</span>
  </div>
  <div flex="~ gap-3 items-center" class="ml-5" :class="$clicks === 3 && 'text-yellow-500'">
    <div i-material-symbols-light:high-res-outline text-5xl />
    <span>Promise 获取响应</span>
  </div>
</div>



---
clicks: 3
class: text-center
growX: -999
growY: -999
growSize: 0
---

# 通信解决方案 - birpc

<div class="flex gap-2 justify-center mt-15">
<div class="text-left">

<div class="text-left" v-if="$clicks === 0">

```ts
// 创建 RPC 客户端

const rpc = createBirpc(
  {
    hi: name => `Hi ${name}, I'm client`,
  },
  {
    post: data => ws.send(data),
    on: data => ws.on('message', data),
  },
)


await rpc.hi('Client') // Hi Client from server
```

</div>

<div class="text-left" v-if="$clicks === 1">

```ts {1,7-10}
// 创建 RPC 客户端

const rpc = createBirpc(
  {
    hi: name => `Hi ${name}, I'm client`,
  },
  {
    post: data => ws.send(data),
    on: data => ws.on('message', data),
  },
)


await rpc.hi('Client') // Hi Client from server
```

</div>

<div class="text-left" v-if="$clicks === 2">

```ts {1,4,8-11}
// 创建 RPC 客户端

const rpc1 = //...
const rpc2 = createBirpc(
  {
    hi: name => `Hi ${name}, I'm client`,
  },
  {
    post: data => channel.port1.postMessage(data),
    on: data => channel.port1.on('message', data),
  },
)


await rpc.hi('Client') // Hi Client from server
```

</div>

<div class="text-left" v-if="$clicks === 3">

```ts {1,4-6,14}
// 创建 RPC 客户端

const rpc2 = createBirpc(
  {
    hi: name => `Hi ${name}, I'm client`,
  },
  {
    post: data => channel.port1.postMessage(data),
    on: data => channel.port1.on('message', data),
  },
)


await rpc.hi('Client') // Hi Client from server
```

</div>

</div>


<div class="text-left" v-if="$clicks === 0">

```ts
// 创建 RPC 服务端

const server = createBirpcGroup(
{
  hi: name => `Hi ${name} from server`,
},
[
  {
    post: data => ws.send(data),
    on: data => ws.on('message', data),
  },
])

server.broadcast.hi('Server') // Hi Server, I'm client
```

</div>

<div class="text-left" v-if="$clicks === 1">

```ts {1,7-12}
// 创建 RPC 服务端

const server = createBirpcGroup(
{
  hi: name => `Hi ${name} from server`,
},
[
  {
    post: data => ws.send(data),
    on: data => ws.on('message', data),
  },
])

server.broadcast.hi('Server') // Hi Server, I'm client
```
</div>



<div class="text-left" v-if="$clicks === 2">


```ts {1,7,12-16}
// 创建 RPC 服务端

const server = createBirpcGroup(
{
  hi: name => `Hi ${name} from server`,
},
[
  {
    post: data => ws.send(data),
    on: data => ws.on('message', data),
  },
  {
    post: data => channel.port2.postMessage(data),
    on: data => channel.port2.on('message', data),
  },
])

server.broadcast.hi('Server') // Hi Server, I'm client
```

</div>


<div class="text-left" v-if="$clicks === 3">

```ts {1,4-6,14}
// 创建 RPC 服务端

const server = createBirpcGroup(
{
  hi: name => `Hi ${name} from server`,
},
[
 {
    post: data => channel.port2.postMessage(data),
    on: data => channel.port2.on('message', data),
  },
])

server.broadcast.hi('Server') // Hi Server, I'm client
```

</div>


</div>


---
class: text-center relative
grow: full
growX: 50
growY: 100
growSize: 1
---

<div class="flex justify-center items-center mt-5">
  <img src="/birpc.png" w="180" class="block" />
</div>



---
class: text-center relative
growX: 50
growY: 50
growSize: 0.8
---

<h1 class="text-12! font-700 absolute left-50% top-50% translate-x--50% translate-y--50%">
  DevTools Next 现状
</h1>


---
class: text-center relative
---

<GitHubRepo name="vuejs/devtools-next" />

<img src="/devtools-next-docs.png" class="h-100 rounded-1 flex mt-10 mx-auto" />



---
class: text-center relative
growX: 0
growY: 0
---

## Chrome 扩展 Beta版

<img src="/chrome-extension.png" class="h-100 rounded-1 flex mt-10 mx-auto" />



---
class: text-center relative
growX: 0
growY: 100
growSize: 1.2
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-right text-5xl font-bold color="[#BD3E53]">300K</div>
  <div text-left text-3xl>NPM 月下载量</div>
</div>
<div class="w100 absolute left-50% translate-x--50% top-50">
  <img src="/npm-downloads.png" />
</div>



---
class: text-center relative
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-right text-5xl font-bold color="[#A9BD3E]">10K+</div>
  <div text-left text-3xl>开源项目依赖</div>
</div>
<div class="w100 absolute left-50% translate-x--50% top-50">
  <img src="/used-by.png" />
</div>



---
class: text-center relative
growX: 0
growY: 0
growSize: 1.2
---

<div class="flex gap2 items-center justify-center mt-10">
  <i class="i-vscode-icons:file-type-astro text-5xl" />
  <div text-right text-4xl text-white>Astro Vue DevTools 集成</div>
</div>
<div class="w100 absolute left-50% translate-x--50% top-45">
  <img src="/astro-vue-devtools.png" />
</div>



---
class: text-center relative
---

<div class="flex gap2 items-center justify-center mt-10">
  <i class="i-logos-vue text-5xl" />
  <div text-right text-4xl text-white>Create Vue CLI</div>
</div>
<div class="w-135 absolute left-50% translate-x--50% top-40">
  <img src="/create-vue-cli.png" />
</div>


---
class: text-center relative
growX: 0
growY: 0
growSize: 1.2
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-right text-5xl font-bold color="[#54BD3E]">1K+</div>
  <div text-left text-3xl>GitHub Stars</div>
</div>
<div class="w-135 absolute left-50% translate-x--50% top-40">
  <img src="/stars.gif" />
</div>



---
class: text-center relative
growOpacity: 0.5
---

<div class="flex gap2 items-center justify-center mt-12">
  <div text-right text-5xl font-bold color="[#3EAABD]">30+</div>
  <div text-left text-3xl>项目贡献者</div>
</div>


<div class="mt-15">

<div class="contributors mt-5 flex flex-wrap gap-2 justify-center">
  <img src="/contributors/alex.png" class="rounded-full h-10 w-10">
  <img src="/contributors/azurewarth.png" class="rounded-full h-10 w-10">
  <img src="/contributors/lotwt.png" class="rounded-full h-10 w-10">
  <img src="/contributors/one-gll.png" class="rounded-full h-10 w-10">
  <img src="/contributors/jian-jroh.png" class="rounded-full h-10 w-10">
  <img src="/contributors/yordan.png" class="rounded-full h-10 w-10">
  <img src="/contributors/xuzuodong.png" class="rounded-full h-10 w-10">
  <img src="/contributors/soya-xy.png" class="rounded-full h-10 w-10">
  <img src="/contributors/coutinho-tts.png" class="rounded-full h-10 w-10">
</div>

<div class="contributors mt-5 flex flex-wrap gap-2 justify-center">
  <img src="/contributors/reslear.png" class="rounded-full h-10 w-10">
  <img src="/contributors/meitan-li.png" class="rounded-full h-10 w-10">
  <img src="/contributors/duowb.png" class="rounded-full h-10 w-10">
  <img src="/contributors/adamdehaven.png" class="rounded-full h-10 w-10">
  <img src="/contributors/robert-boes.png" class="rounded-full h-10 w-10">
  <img src="/contributors/posva.png" class="rounded-full h-10 w-10">
  <img src="/contributors/konata33.png" class="rounded-full h-10 w-10">
  <img src="/contributors/yueyanc.png" class="rounded-full h-10 w-10">
  <img src="/contributors/brc-dd.png" class="rounded-full h-10 w-10">
 
</div>

<div class="contributors mt-5 flex flex-wrap gap-2 justify-center">
  <img src="/contributors/simon-he.png" class="rounded-full h-10 w-10">
  <img src="/contributors/zhmushan.png" class="rounded-full h-10 w-10">
  <img src="/contributors/c0dedance.png" class="rounded-full h-10 w-10">
  <img src="/contributors/baiwusanyu-c.png" class="rounded-full h-10 w-10">
  <img src="/contributors/yunyoujun.png" class="rounded-full h-10 w-10">
  <img src="/contributors/gabs-edits.png" class="rounded-full h-10 w-10">
  <img src="/contributors/alkaidcc.png" class="rounded-full h-10 w-10">
  <img src="/contributors/evan.png" class="rounded-full h-10 w-10">
  <img src="/contributors/innei.png" class="rounded-full h-10 w-10">
</div>

<div class="contributors mt-5 flex flex-wrap gap-2 justify-center">
  <img src="/contributors/LukerSpringtree.png" class="rounded-full h-10 w-10">
  <img src="/contributors/tradiff.png" class="rounded-full h-10 w-10">
  <img src="/contributors/GuoJikun.png" class="rounded-full h-10 w-10">
  <img src="/contributors/Smef.png" class="rounded-full h-10 w-10">
  <img src="/contributors/hplar.png" class="rounded-full h-10 w-10">
  <img src="/contributors/thewmking.png" class="rounded-full h-10 w-10">
  <img src="/contributors/michaelandrewrm.png" class="rounded-full h-10 w-10">
  <img src="/contributors/jh-leong.png" class="rounded-full h-10 w-10">
  <img src="/antfu.png" class="rounded-full h-10 w-10">
</div>

<div class="contributors mt-5 flex flex-wrap gap-2 justify-center">

</div>

</div>


---
class: text-center relative
growX: 50
growY: 0
growSize: 1
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-right text-5xl font-bold color="[#3EAABD]">2</div>
  <div text-left text-3xl>核心维护者</div>
</div>

<Maintainers />


---
class: mt-5
growX: 50
growY: 50
growSize: 1
---

<h1 class="text-12! font-700 absolute left-50% top-50% translate-x--50% translate-y--50%">
  展望 DevTools Next
</h1>



---
class: mt-5
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-left text-3xl>发布并稳定浏览器扩展 v7.0</div>
</div>
<div class="w100 absolute left-50% translate-x--50% top-50 flex justify-center gap10 mt-10">
  <i class="i-logos-chrome text-20 inline-flex" />
  <i class="i-logos-firefox text-20 inline-flex" />
  <i class="i-logos-microsoft-edge text-20 inline-flex" />
</div>


---
class: mt-5
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-left text-3xl>浏览器扩展调整计划</div>
</div>
<div class="flex gap5 justify-center mt20">
  <div class="flex flex-col items-center rounded-1 p-8">
    <i class="i-logos-chrome text-20 inline-flex" />
    <p class="text-5 lh-1.2! mb0 font-[Roboto]">v6 <span op80 text-3.5>(Vue2 Only)</span></p>
  </div>
  <div class="flex flex-col items-center rounded-1 p-8">
    <i class="i-logos-chrome text-20 inline-flex" />
    <p class="text-5 lh-1.2! mb0 font-[Roboto]">v7 <span op80 text-3.5>(Vue3 Only)</span></p>
  </div>
</div>



---
growX: 0
growY: 0
class: mt-5
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-left text-4xl font-700>DevTools Kit</div>
</div>
  <div class="w100 absolute left-50% translate-x--50% top-50 flex justify-center gap10 mt-20">
  <img src="/devtools-kit.png" class="rounded-full h-24 w-24">
  <img src="/antfu.png" class="rounded-full h-16 w-16 absolute left-20% bottom--10">
  <img src="/akryum.png" class="rounded-full h-16 w-16 absolute left-50% translate-x--50% top--20">
  <img src="/arlo.png" class="rounded-full h-16 w-16 absolute left-64% bottom--10">
</div>



---
class: mt-5
---

<h2 class="text-4xl! font-700 absolute left-50% top-50% translate-x--50% translate-y--50%">
 增强插件 API
</h2>


---
growX: 0
growY: 0
class: mt-5
growSize: 0.7
---

<div class="flex gap2 items-center justify-center mt-10">
  <div text-left text-4xl font-700>支持 Vue Vapor</div>
</div>
<div class="w-135 absolute left-50% translate-x--50% top-40">
  <img src="/vapor-devtool.png">
</div>



---
growX: 0
growY: 0
class: mt-5
---

<h2 class="text-4xl! font-700 absolute left-50% top-50% translate-x--50% translate-y--50%">
 更多的功能与可能性
</h2>



---
class: mt-5
---

<h1 v-if="$clicks === 0" class="text-5xl font-700 absolute left-50% top-10 translate-x--50%">
  感谢支持 🙏
</h1>

<a href="https://github.com/sponsors/webfansplz" class="mt-10 flex justify-center">
  <img src="/sponsors.svg" class="w-200" />
</a>



---
layout: center
class: text-center
growX: 50
growY: 50
---

<p class="text-5xl! font-700">感谢聆听！</p>


<div text-sm ml--5>
<span op60 flex items-center justify-center>
幻灯片由
<i class="i-logos:slidev text-5 inline-flex mx-1" />
Slidev 
强力驱动！
</span>
</div>

