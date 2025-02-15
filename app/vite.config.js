import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

export default defineConfig({
  base: '/app',
  plugins: [vue(), Unocss()],
  build: {
    outDir: '../dist/app', // 讓 Vue 3 應用輸出到 `dist/app/`
  },
});
