import type { Config } from 'tailwindcss'
import daisyUiThemes from 'daisyui/src/theming/themes'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      { light: { ...daisyUiThemes.light } },
      { dark: { ...daisyUiThemes.dark } },
    ],
  },
} satisfies Config

