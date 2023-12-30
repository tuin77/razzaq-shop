import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
// const pathResolve = (dir) => path.resolve(__dirname, dir);
// https://juejin.cn/post/7031414748721889294
// https://vitejs.dev/config/
export default defineConfig({
  "plugins": [
    vue(),
    eslintPlugin({
      include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
    }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
});
