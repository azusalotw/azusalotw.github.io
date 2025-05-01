import { defineConfig, presetUno, presetIcons, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
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
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0891B2',
        700: '#0E7490',
        800: '#155E75',
        900: '#164E63',
      },
      accent: {
        50: '#FFF7ED',
        100: '#FFEDD5',
        200: '#FED7AA',
        300: '#FDBA74',
        400: '#FB923C',
        500: '#F97316',
        600: '#EA580C',
        700: '#C2410C',
        800: '#9A3412',
        900: '#7C2D12',
      },
    },
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: [
    { 'btn': 'px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer' },
    { 'btn-primary': 'btn bg-primary-500 text-white hover:bg-primary-600' },
    { 'btn-secondary': 'btn bg-secondary-500 text-white hover:bg-secondary-600' },
    { 'card': 'bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden' },
    { 'section-title': 'text-2xl md:text-3xl font-bold mb-6' },
    { 'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography({
      cssExtend: {
        'h1': {
          'font-size': '2.25rem',
          'font-weight': '700',
          'margin-bottom': '1rem',
        },
        'h2': {
          'font-size': '1.875rem',
          'font-weight': '600',
          'margin-top': '2rem',
          'margin-bottom': '1rem',
        },
        'h3': {
          'font-size': '1.5rem',
          'font-weight': '600',
          'margin-top': '1.5rem',
          'margin-bottom': '0.75rem',
        },
        'p': {
          'margin-bottom': '1rem',
        },
        'code': {
          'background-color': 'var(--un-prose-pre-bg)',
          'padding': '0.2em 0.4em',
          'border-radius': '0.25rem',
          'font-size': '0.875em',
        },
        'pre': {
          'background-color': 'var(--un-prose-pre-bg)',
          'padding': '1rem',
          'border-radius': '0.5rem',
          'overflow-x': 'auto',
        },
        'pre code': {
          'background-color': 'transparent',
          'padding': '0',
          'border-radius': '0',
        },
        'ul': {
          'list-style-type': 'disc',
          'padding-left': '1.25rem',
          'margin-bottom': '1rem',
        },
        'ol': {
          'list-style-type': 'decimal',
          'padding-left': '1.25rem',
          'margin-bottom': '1rem',
        },
        'li': {
          'margin-bottom': '0.5rem',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600',
        mono: 'Fira Code:400,500',
      },
    }),
  ],
  safelist: [
    'i-carbon-menu',
    'i-carbon-close',
    'i-carbon-moon',
    'i-carbon-sun',
    'i-carbon-email',
    'i-carbon-logo-github',
    'i-carbon-logo-linkedin',
    'prose',
    'prose-lg',
    'prose-primary',
    'dark:prose-invert',
  ]
})