import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          225: '#E0E0E0',
          250: '#dcdcdc',
          350: '#BEBEBE',
          725: '#3B3B3B',
          750: '#353535',
          850: '#1F1F1F',
          925: '#111111'
        },
        zinc: {
          250: '#DCDCE0',
          350: '#BDBDC3',
          850: '#202023',
          925: '#121214'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'xs': '380px',
      'mxs': '400px',
      '3xl': '2000px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
  darkMode: 'class'
}
export default config
