import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const site = (env.VITE_SITE_URL || '').replace(/\/$/, '')
  return {
    plugins: [
      vue(), tailwind(),
      { name: 'site-url', transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', site) },
    ],
  }
})
