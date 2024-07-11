import { defineAppSetup } from '@slidev/types'
import { createPinia } from 'pinia'
import { createI18nPlugin } from './i18n'
import { createDevToolsPlugin } from './devtools-plugin'


export default defineAppSetup(({ app, router }) => {
  // Vue App
  const pinia = createPinia()
  app.use(pinia)
  app.use(createI18nPlugin())
  app.use(createDevToolsPlugin())
})
