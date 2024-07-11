import { setupDevtoolsPlugin } from '@vue/devtools-api'

const data = [
  {
    id: 'zjj',
    label: '勾三股四',
    name: '十年',
    tags: [{
      label: 'ZhaoJinJiang',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'ZhaoJinJiang',
          editable: false,
          raw: 'ZhaoJinJiang'
        },
        {
          key: 'startedAt',
          value: '09:30',
          editable: false,
          raw: '09:30',
        },
        {
          key: 'desc',
          value: '2014-2024 加入 Vue 核心团队十年心路历程',
          editable: false,
          raw: '2014-2024 加入 Vue 核心团队十年心路历程',
        },
      ]
    },
  },
  {
    id: 'posva',
    label: 'Eduardo',
    name: 'Vue Router 数据加载器',
    tags: [{
      label: 'Eduardo',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'Eduardo',
          editable: false,
          raw: 'Eduardo'
        },
        {
          key: 'startedAt',
          value: '10:30',
          editable: false,
          raw: '10:30',
        },
        {
          key: 'desc',
          value: '介绍 Vue Router 的新数据加载器 API',
          editable: false,
          raw: '介绍 Vue Router 的新数据加载器 API',
        },
      ]
    },
  },
  {
    id: 'arlo',
    label: 'Arlo',
    name: 'Vue DevTools 的下一个迭代',
    tags: [{
      label: 'Arlo',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'Arlo',
          editable: false,
          raw: 'Arlo'
        },
        {
          key: 'startedAt',
          value: '11:15',
          editable: false,
          raw: '11:15',
        },
        {
          key: 'desc',
          value: 'Vue DevTools 下一个迭代的探索与实践',
          editable: false,
          raw: 'Vue DevTools 下一个迭代的探索与实践',
        },
      ]
    },
  },
  {
    id: 'scq',
    label: 'ShenQingChuan',
    name: 'Vue Vine：全新 Vue 组件书写方式',
    tags: [{
      label: 'ShenQingChuan',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'ShenQingChuan',
          editable: false,
          raw: 'ShenQingChuan'
        },
        {
          key: 'startedAt',
          value: '13:30',
          editable: false,
          raw: '13:30',
        },
        {
          key: 'desc',
          value: '介绍全新 Vue 组件书写方式 Vue Vine',
          editable: false,
          raw: '介绍全新 Vue 组件书写方式 Vue Vine',
        },
      ]
    },
  },
  {
    id: 'sxzz',
    label: 'sxzz',
    name: 'Vue Vapor：重新发明',
    tags: [{
      label: 'Kevin',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'Kevin',
          editable: false,
          raw: 'Kevin'
        },
        {
          key: 'startedAt',
          value: '14:15',
          editable: false,
          raw: '14:15',
        },
        {
          key: 'desc',
          value: '介绍 Vue 的全新模式-Vue Vapor',
          editable: false,
          raw: '介绍 Vue 的全新模式-Vue Vapor',
        },
      ]
    },
  },
  {
    id: 'yms',
    label: 'yms',
    name: 'Vue Mini：不妥协的小程序框架',
    tags: [{
      label: '杨明山',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: '杨明山',
          editable: false,
          raw: '杨明山'
        },
        {
          key: 'startedAt',
          value: '15:00',
          editable: false,
          raw: '15:00',
        },
        {
          key: 'desc',
          value: '介绍一个拥有双一流体验的小程序框架-Vue Mini',
          editable: false,
          raw: '介绍一个拥有双一流体验的小程序框架-Vue Mini',
        },
      ]
    },
  },
  {
    id: 'otto',
    label: 'otto',
    name: '基于 Vue 开发纯原生 App',
    tags: [{
      label: '辛宝',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: '辛宝',
          editable: false,
          raw: '辛宝'
        },
        {
          key: 'startedAt',
          value: '16:20',
          editable: false,
          raw: '16:20',
        },
        {
          key: 'desc',
          value: '介绍基于 Vue 开发纯原生 App 的 uni-app x',
          editable: false,
          raw: '介绍基于 Vue 开发纯原生 App 的 uni-app x',
        },
      ]
    },
  },
  {
    id: 'antfu',
    label: 'antfu',
    name: 'Anthony 的开源之路：Yak Shaving「剪牛毛」',
    tags: [{
      label: 'Anthony Fu',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'Anthony Fu',
          editable: false,
          raw: 'Anthony Fu'
        },
        {
          key: 'startedAt',
          value: '17:00',
          editable: false,
          raw: '17:00',
        },
        {
          key: 'desc',
          value: 'Anthony 的开源发展心路历程',
          editable: false,
          raw: 'Anthony 的开源发展心路历程',
        },
      ]
    },
  },
  {
    id: 'evan',
    label: 'evan',
    name: 'Vue.js 的现状与未来',
    tags: [{
      label: 'Evan You',
      textColor: 0x57BF65,
      backgroundColor: 0xF0FCF3,
    }],
    state: {
      'detail': [
        {
          key: 'speaker',
          value: 'Evan You',
          editable: false,
          raw: 'Evan You'
        },
        {
          key: 'startedAt',
          value: '17:40',
          editable: false,
          raw: '17:40',
        },
        {
          key: 'desc',
          value: '介绍 Vue.js 的现状与未来',
          editable: false,
          raw: '介绍 Vue.js 的现状与未来',
        },
      ]
    },
  },
]
export function createDevToolsPlugin() {
  const INSPECTOR_ID = 'vueconf-2024.cn'
  const TIMELINE_LAYER_ID = 'vueconf-2024-timeline.layer'
  return {
    install(app) {
      setupDevtoolsPlugin({
        id: 'vueconf.cn.2024',
        label: 'My Devtools',
        packageName: 'vueconf-cn-2024',
        homepage: 'https://vueconf.cn/',
        logo: '/vue-conf-logo.png',
        app
      }, (api) => {

        app.config.globalProperties.$registerVueConfInspector = () => {
          api.addInspector({
            id: INSPECTOR_ID,
            label: 'Vue Conf CN 2024',
            treeFilterPlaceholder: '',
          })
        }

        app.config.globalProperties.$addTimelineEvent = () => {
          const events = data.map((event) => {
            const date = new Date()
            const [hour, minute] = event.state['detail'][1].value.split(':')
            date.setHours(Number(hour))
            date.setMinutes(Number(minute))
            date.setSeconds(0)
            const timestamp = date.getTime()
            return {
              layerId: TIMELINE_LAYER_ID,
              event: {
                title: event.name,
                subtitle: event.tags[0].label,
                time: timestamp,
                data: {
                  speaker: event.state['detail'][0].value,
                  desc: event.state['detail'][2].value,
                }
              },
              all: true
            }
          })
          events.forEach(event => {
            api.addTimelineEvent(event)
          })
        }




        api.addTimelineLayer({
          id: TIMELINE_LAYER_ID,
          label: 'Vue Conf CN 2024',
          color: 0x0000ff
        })

        api.on.getInspectorTree((state) => {
          if (state.inspectorId !== INSPECTOR_ID) { return }
          state.rootNodes = data.map((node) => ({
            id: node.id,
            label: node.label,
            name: node.name,
            tags: node.tags
          }))
        })
        api.on.getInspectorState(state => {
          if (state.inspectorId !== INSPECTOR_ID) { return }
          state.state = data.find((node) => node.id === state.nodeId).state
        })
      })
    }
  }
}
