import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"; // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [vue()],
  resolve: {
    alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
},
//全局引入
cssPreprocessOptions: {
  scss: {
     additionalData: '@import "@/assets/styles/element-variables.scss"' // 全局公共样式
  }
},
server: {
  port:'8111',
  proxy: {

    // 字符串简写写法
    '^/vue/login': 'http://www.baidu.com',
    // 选项写法
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    },
    // 正则表达式写法
    '^/fallback/.*': {
      target: 'http://localhost:833',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/fallback/, '')
    },
    // Proxying websockets or socket.io
    '/socket.io': {
      target: 'ws://localhost:3000',
      ws: true
    }
  }
}
})
