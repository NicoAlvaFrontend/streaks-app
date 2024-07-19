import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      common: {
        black: '#000000',
        white: '#FFFFFF'
      },
      grey: {
        200: '#181A20',
        150: '#232121',
        100: '#333333',
        90: '',
        85: '#6C757D',
        75: '#717171',
        70: '#BEBDBD',
        55: '#E9E9E9',
        40: '',
        25: '#F7F7F7',
        10: ''
      },
      text: {
        text1: '',
        text2: '',
        text3: '',
        text4: ''
      },
      primary: {
        salmon: '#EB6753',
        mustard: '#FFAC12'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
