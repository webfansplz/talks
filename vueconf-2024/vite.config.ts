import { defineConfig } from 'vite'
import '@slidev/cli'
import MarkdownItMagicLink from 'markdown-it-magic-link'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    VueDevTools({
      appendTo: '/setup/main.ts',
    }),
  ],
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink)
      },
    },
  },
})
