import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          150: 'color-mix(in oklch, oklch(96.7% 0.001 286.375), oklch(92% 0.004 286.32))',
          250: 'color-mix(in oklch, oklch(92% 0.004 286.32), oklch(87.1% 0.006 286.286))',
          350: 'color-mix(in oklch, oklch(87.1% 0.006 286.286), oklch(70.5% 0.015 286.067))',
          750: 'color-mix(in oklch, oklch(37% 0.013 285.805), oklch(27.4% 0.006 286.033))',
          850: 'color-mix(in oklch, oklch(27.4% 0.006 286.033), oklch(21% 0.006 285.885))',
          910: 'color-mix(in oklch, oklch(21% 0.006 285.885) 80%, oklch(14.1% 0.005 285.823) 20%)',
          925: 'color-mix(in oklch, oklch(21% 0.006 285.885), oklch(14.1% 0.005 285.823))'
        },
        accent: 'var(--accent-color)',
        danger: 'var(--danger-color)',
        warning: 'var(--warning-color)',
        success: 'var(--success-color)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mono: ['var(--mono-font)']
      }
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
