import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // UnoCSS 預設
    presetIcons(), // 支援圖標
    presetAttributify(), // 允許 HTML 屬性寫法
  ],
});
