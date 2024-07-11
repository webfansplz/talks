import { createI18n } from 'vue-i18n';



export function createI18nPlugin() {
  const i18n = createI18n({
    locale: 'zh-CN',
    fallbackLocale: 'en',
    legacy: false,
    messages: {
      en: {
        hi: 'Hi, Vue Conf',
        desc: 'The next iteration of Vue DevTools'
      },
      'zh-CN': {
        hi: '你好，Vue Conf',
        desc: 'Vue DevTools 的下一个迭代'
      },
    }
  })
  return i18n
}
