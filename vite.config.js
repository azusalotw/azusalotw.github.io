import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

export default defineConfig({
  base: '/', // 這裡要填你的 GitHub Repo 名稱
  plugins: [vue(), Unocss()],
});
