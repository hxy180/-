import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/',  //打包路径，与路由history保持一致，确保与GitHub Pages部署路径一致
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