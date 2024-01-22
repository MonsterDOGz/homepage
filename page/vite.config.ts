import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '192.168.129.231',
    open: true,
    proxy: {
      // 字符串简写写法：http://localhost:5173/api -> http://localhost:8000/api
      '/api': 'http://localhost:8000',
    },
  },
})
