import { defineConfig, presetUno, presetIcons, presetTypography, presetWebFonts, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,700',
        mono: 'JetBrains Mono:400,500',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      secondary: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
      },
      accent: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg font-medium transition-all duration-200',
    'btn-primary': 'btn bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700',
    'btn-outline': 'btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
    'card': 'bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6',
    'section': 'py-16',
    'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  safelist: [
    'i-mdi-home',
    'i-mdi-account',
    'i-mdi-briefcase',
    'i-mdi-code-tags',
    'i-mdi-email',
    'i-mdi-moon',
    'i-mdi-white-balance-sunny',
    'i-mdi-menu',
    'i-mdi-close',
    'i-mdi-github',
    'i-mdi-linkedin',
    'i-mdi-twitter',
    'i-mdi-monitor',
    'i-mdi-server',
    'i-mdi-palette',
  ],
})