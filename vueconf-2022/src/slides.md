---
layout: cover
highlighter: shiki
css: unocss
title: 使用Vue构建CLI应用
---

# 使用Vue构建CLI应用

<p text-xl>
将Vue渲染到命令行界面上的相关实践
</p>

<div uppercase text-sm tracking-widest>
蔡少辉
</div>

<div abs-bl mx-14 my-12 flex>
  <img src="/vue-conf.png" h-10 />
  <div ml-3 flex flex-col text-left>
    <div>VueConf</div>
    <div text-sm opacity-50>2022年12月10日</div>
  </div>
</div>

<div i-logos-vue text-35em absolute op10 right--35 top--5 />

---
layout: intro
---

# webfansplz

<div class="leading-8 opacity-80">
Vue.js & VueUse 团队成员<br>
Vue Challenges, Temir 等项目作者<br>
</div>

<div mt-5 w-min grid="~ cols-[auto_1fr] gap-2" items-center>
  <div i-ri-github-line op50 ma text-xl/>
  <div><a href="https://github.com/webfansplz" target="_blank">webfansplz</a></div>
  <div i-ri-twitter-line op50 ma text-xl/>
  <div><a href="https://twitter.com/webfansplz" target="_blank">webfansplz</a></div>
  <div i-ri-zhihu-line op50 ma text-xl/>
  <div><a href="https://www.zhihu.com/people/weber-23-9" target="_blank">webfansplz</a></div>
</div>

<img src="/avatar.png" rounded-full w-40 abs-tr mt-22 mr-22/>


---
layout: center
---

<img src="/vue-termui-conf-demo.gif" w-150/>

--- 

# Vue TermUI

一个基于Vue.js的终端UI框架，帮助你轻松构建终端应用。

<div mt-5 mb-5 grid="~ cols-[auto_1fr] gap-2" justify-center>
  <div i-ri-github-line op50 ma text-xl/>
  <div><a href="https://github.com/vue-terminal/vue-termui" target="_blank">https://github.com/vue-terminal/vue-termui</a></div>
</div>

<img src="/vue-termui-docs.png" w-120/>

<img src="/posva-avatar.png" rounded-full w-40 abs-tr mt-30 mr-42/>

<img src="/avatar.png" rounded-full w-40 abs-tr mt-85 mr-42/>

---

<div mt-20 grid="~ gap4">

### 使用Node.js构建终端应用的痛点

- ✖️ 上手成本

- ✖️ 开发者体验

- ✖️ 定制化布局


<v-click>
<img src="/posva-comment.png" h-102px/>
<img src="/cli-dx.png" h-80px/>
</v-click>

<v-click>
<img src="/posva-bubble.png" w-40 abs-tl mt-55 ml-108/>
</v-click>

<v-click>
<img src="/antfu-bubble.png" w-40 abs-tl mt-85 ml-133/>
</v-click>

</div>

--- 

## 

<Counter />

<div grid="~ cols-[1fr_min-content_1fr] gap4 mt4" items-center>

```ts {all|2,3|1,14|7-15|all} {at:0}
import chalk from 'chalk'
import { createLogUpdate } from 'log-update'
const log = createLogUpdate(process.stdout)
const createCounterRenderer = (max: number) => {
  let timer: NodeJS.Timer
  let count = 0
  function stop() {
    clearInterval(timer)
    log.clear()
  }
  function update() {
    count++
    if (count >= max) stop()
    log('Count: ' + chalk.yellow(count))
  }
  return {
    start() {
      timer = setInterval(update, 150)
    },
  }
}
const renderder = createCounterRenderer(100)
renderder.start()
```
<div i-carbon-arrow-right ma :at="1" v-if="$slidev.nav.clicks >= 5"></div>

<v-clicks :at="5">
```vue {all|10-15|1-8|all}
<script setup lang="ts">
import { ref } from '@vue/runtime-core'
const count = ref(0)
const timer = setInterval(()=>{
  count.value++
  if(count.value >=100) clearInterval(timer)
},150)
</script>

<template>
  <Text>
    Count: <Text color="yellow">{{count}}</Text>
  </Text>
</template>
```
</v-clicks>

</div>


---
layout: center
---

# Vue能渲染到命令行界面上吗?

---
layout: center
---

<div flex="~ col" items-center justify-center>

<img src="/vue-ssd1306.gif" h-120/>

</div>
---

# 自定义渲染器

<div grid="~ cols-[1fr_1fr] mt4" items-center h-100>

```ts
import { createRenderer } from '@vue/runtime-core'

const { render, createApp } = createRenderer({
  patchProp,
  insert,
  remove,
  createElement
  // ...
})

export { render, createApp }

```

<img src="/createRenderer.png" w-150 max-w-130 />
</div>

---
layout: center
---

# 如何在命令行界面上进行布局?

---

<div grid="~ cols-2" h-95>
<div flex="~ col" items-center justify-center>

<img src="/yoga.svg" h-40/>

# Yoga

基于Flexbox的跨平台布局引擎

</div>
<div flex="~ col" justify-center>

- 布局灵活
- 简单易用
- 功能强大

</div>
</div>


---
clicks: 5
---

# 核心实现

<div flex items-center>

```ts {all|5,9-22|2-4,8,24|0|0|all} {at:0}
// renderer.ts
import { 
  createRenderer 
} from '@vue/runtime-core'
import Yoga from 'yoga-layout-prebuilt'


export const renderer = createRenderer({
  createElement() { 
    Yoga.Node.create()
  },
  insert(childNode, node) {
    node.yogaNode?.insertChild(
      childNode.yogaNode,
      node.yogaNode?.getChildCount(),
    )
  },
  patchProp(el,key,_, { margin }) {
    if (key === 'margin') {
      el.yogaNode.setMargin(margin)
    }
  },
  // ...
})

```
<p w3></p>

```ts {all|0|0|1-6|8-24|all} {at:0}
// main.ts
import { 
  renderer 
} from './renderer.ts'
import App from './App.vue'
renderer.createApp(App)

// App.vue
<script setup lang="ts">
import { TuiBox, TuiText } from 'vue-termui'
</script>

<template>
  <TuiBox
    :width="30"
    :height="10"
    border-style="round"
    border-color="yellow"
    justify-content="center"
    align-items="center"
  >
    <TuiText>Hello VueConf 2022</TuiText>
  </TuiBox>
</template>

```
<p w3></p>

<img src="/hello-demo.png" h-28/>

</div>

---

<div mt-20 grid="~ gap4">

# 核心功能

- 内置组件 (Components)

- 组合式函数 (Composables)

</div>

--- 
clicks: 6
---
<div mt-20>

# 内置组件 (Components)

</div>

<div grid="~ cols-2">
<div grid="~">

<div :class="$slidev.nav.clicks === 1 ? 'text-yellow-600' : ''">

- Text
</div>

<div :class="$slidev.nav.clicks === 2 ? 'text-yellow-600' : ''">

- Box
</div>

<div :class="$slidev.nav.clicks === 3 ? 'text-yellow-600' : ''">

- Newline
</div>

<div :class="$slidev.nav.clicks === 4 ? 'text-yellow-600' : ''">

- Link 
</div>

<div :class="$slidev.nav.clicks === 5 ? 'text-yellow-600' : ''">

- ProgressBar
</div>

<div :class="$slidev.nav.clicks === 6 ? 'text-yellow-600' : ''">

- Input
</div>

- ...

</div>

<img src="/vtui-text.png" v-if="$slidev.nav.clicks === 1" ml-120 mt-8 w-80 absolute />
<img src="/vtui-box.png" v-if="$slidev.nav.clicks === 2" ml-120 mt--36 w-70 absolute/>
<img src="/vtui-br.png" v-if="$slidev.nav.clicks === 3" ml-120 mt-5 w-65 absolute />
<img src="/vtui-link.png" v-if="$slidev.nav.clicks === 4" ml-120 mt-10 w-90 absolute />
<img src="/vtui-bar.png" v-if="$slidev.nav.clicks === 5" ml-120 mt-10 w-90 absolute />
<img src="/vtui-input.png" v-if="$slidev.nav.clicks === 6" ml-105 w-110 absolute />
</div>


--- 
clicks: 4
---

<div mt-20>

# 组合式函数 (Composables) 

</div>

<div grid="~ cols-2">

<div grid="~">

<div :class="$slidev.nav.clicks === 1 ? 'text-yellow-600' : ''">

- onKeyData
</div>

<div :class="$slidev.nav.clicks === 2 ? 'text-yellow-600' : ''">

- onInputData
</div>

<div :class="$slidev.nav.clicks === 3 ? 'text-yellow-600' : ''">

- onMouseData
</div>

<div :class="$slidev.nav.clicks === 4 ? 'text-yellow-600' : ''">

- useFocus
</div>

- ...

</div>

<div v-if="$slidev.nav.clicks === 1" ml-120 mt--20 w-80 absolute >
<img src="/vtui-onKeyData.gif" />

```ts
const counter = ref(0)
onKeyData('+', () => {
  counter.value++
})
onKeyData('-', () => {
  counter.value--
})
```
</div>

<div v-if="$slidev.nav.clicks === 2" ml-120 mt--10 w-80 absolute >
<img src="/vtui-onInputData.gif" />

```ts
const content = ref('')
onInputData(({ event }) => {
  content.value += event.key
})
```
</div>

<div v-if="$slidev.nav.clicks === 3" ml-120 mt--10 w-80 absolute >
<img src="/vtui-onMouseData.gif" />

```ts
const position = reactive({
  x: 0,
  y: 0,
})
onMouseData(MouseEventType.move,(event)=> {
  position.x = event.clientX - 4
  position.y = event.clientY - 4
})
```
</div>

<div v-if="$slidev.nav.clicks === 4" ml-120 mt--10 w-70 absolute >
<img src="/vtui-useFocus.gif" />

```ts
const disabled = ref(false)
const { active } = useFocus({
  disabled,
})
```
</div>

</div>

---

<div mt-20 grid="~ gap4">

# 开发者体验

- Dev Server & HMR

- 开箱即用能力

- Vue Devtools

</div>

---

<div grid="~ cols-2" h-95>
<div flex="~ col" items-center justify-center>
<img src="/vite-node.svg" mb4 />


# Vite Node

Vite的Node.js运行时

</div>
<div flex="~ col" justify-center>

- 按需执行
- 复用Vite配置与插件
- 开箱即用的ESM与TypeScript支持
- HMR支持

</div>
</div>
<v-click>

<div flex="~ gap-6" py4 mt--10 justify-center items-center v-click>
  <div w-16 text-4em i-logos-nuxt-icon />
  <div w-16 text-4em i-logos-vitest />
  <img w-16 text-4em src="/histoire.svg" />
  <div op50>...</div>
</div>

</v-click>

--- 

# Dev Server & HMR

<div flex="~ col" items-center justify-center mt-10>
<img src="/vue-termui-dev-server.png" />
</div>

--- 

<div flex="~ col" items-center justify-center>
<img src="/vtui-hmr.gif" h-110/>
</div>

---

# 开箱即用能力

<div mt-20>

- 起手式模版
- CLI支持
- Vite插件
- "原子化Style"
</div>

---

# 起手式模板

<div grid="~ cols-[1fr_1fr] mt4" h-100>

<div mt-30>

- Quick Start
- npm create vue-termui
</div>
<img src="/quick-start-demo.png" mt-10/>
</div>

---

# CLI支持

<div grid="~ cols-[1fr_1fr] mt4" h-100>

<div mt-30>

- 启动开发服务

- 构建生产版本
</div>

<img src="/vtui-cli.gif" w-110 mt-10/>

</div>

---
clicks: 2
---

# Vite插件

<div grid="~ cols-[1fr_1fr] mt4" h-100>

<div mt-30>

- 基础配置集成
- 组件与API自动导入
- 组件别名
</div>

<div mt-10 v-if="$slidev.nav.clicks < 2">
```html{all|2,6,11-15} {at:0}
<script setup>
import { TuiBox, TuiText, TuiNewLine } from 'vue-termui'
</script>

<template>
  <TuiBox
    border-style="double"
    border-color="#213547"
    flex-direction="column"
    align-items="center"
   >
    <TuiText color="#aac8e4">Hello</TuiText>
    <TuiNewLine />
    <TuiText color="#42b883">VueConf 2022</TuiText>
  </TuiBox>
</template>
```
</div>

<div mt-15 v-if="$slidev.nav.clicks === 2">
```html{2,7-11} {at:2}
<template>
  <div
    border-style="double"
    border-color="#213547"
    flex-direction="column"
    align-items="center"
   >
    <span color="#aac8e4">Hello</span>
    <br />
    <span color="#42b883">VueConf 2022</span>
  </div>
</template>
```
</div>

</div>

---
clicks: 1
---

# "原子化Style"

<div grid="~ cols-[1fr_1fr] mt4">

<div :mr="3" mt-15>
```html {all|3-9} {at:0}
<template>
  <div
    :width="30"
    :height="10"
    border-style="double"
    border-color="green"
    flex-direction="column"
    align-items="center"
    justify-content="center"
  >
    <span color="cyan">Hello</span>
    <br />
    <span color="yellow">VueConf 2022</span>
  </div>
</template>
```
</div>
<div :ml="3" mt-15>
```html {all|3-9} {at:0}
<template>
  <div class="
    w-30
    h-10
    border-double
    border-green
    flex-col
    items-center
    justify-center
    ">
    <span text-cyan>Hello</span>
    <br />
    <span text-yellow>VueConf 2022</span>
  </div>
</template>
```
</div>
</div>

---

# Vue Devtools

调试体验

<div align-item-center justify-center flex h-100>
<img src="/vue-devtools-intro.svg" w-50/>
<img src="/vue-devtools.png" v-click :at="1" absolute w-140/>
<img src="/vue-termui-open-in-editor.gif" v-click :at="2" absolute w-140/>

</div>
---
layout: center
---

# 实践分享

--- 

# 交互式命令行工具

搜索和安装各种 JS 的 npm 模块 (https://github.com/webfansplz/vtui-npm)

<div flex="~ col" items-center justify-center mt-10>
<img src="/vtui-npm.gif" h-98/>
</div>

---

# Node.js交互式解释器

在命令行界面上写代码 (https://github.com/webfansplz/vtui-repl)

<div flex="~ col" items-center justify-center mt-10>
<img src="/vtui-repl.gif" h-95/>
</div>

---

# Vue TermUI交互式文档
(https://github.com/vue-terminal/docs)

<iframe src="https://stackblitz.com/edit/node-7efem6?embed=1&hideExplorer=1&hideNavigation=1&view=editor&terminalHeight=100" border-t border-gray:40 scale-75 origin-bottom-left absolute left-0 bottom-0 w="133%" h="105%" />

---

# 命令行贪吃蛇游戏 
(https://github.com/webfansplz/temir-snake-game)

<iframe src="https://stackblitz.com/edit/node-gevwcx?embed=1&file=package.json&&hideExplorer=1&view=editor&terminalHeight=100" border-t border-gray:40 scale-75 origin-bottom-left absolute left-0 bottom-0 w="133%" h="105%" />

---

# Thanks

<div flex="~" items-center justify-center>

<img src="/posva-avatar.png" rounded-full w-40 mr-12/>

<img src="/antfu-avatar.png" rounded-full w-40/>

<img src="/slidev.png" h-60 ml-5 mt-10/>

</div>
