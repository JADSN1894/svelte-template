import type { Config } from 'tailwindcss'
import daisyUiThemes from 'daisyui/src/theming/themes'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ["class", '[data-theme="coffee"]'],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    typography,
    daisyui
  ],
  daisyui: {
    themes: [
      { light: { ...daisyUiThemes.light } },
      { dark: { ...daisyUiThemes.coffee } },
    ],
  },
} satisfies Config

