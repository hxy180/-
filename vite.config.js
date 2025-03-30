import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/CarbonWings/',  // 将 'your-repo-name' 替换为你的 GitHub 仓库名称
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})