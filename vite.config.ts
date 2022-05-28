import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  css: {
    modules: {
      // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix",
    },
    preprocessorOptions: {
      sass: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        additionalData: '@import "@/assets/scss/variables.scss";',
      },
    },
  },
  server: {
    port: 8080, // 端口
    open: false, // 启动打开浏览器
    cors: true, // 跨域
    proxy: {
      "/api": {
        target: loadEnv(mode, process.cwd()).VITE_SERVER_URL, // "http://newbill-web.k8s:8080", // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
      },
    },
  },
}))
