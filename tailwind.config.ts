import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['var(--font-open-sans)'],
        dancingScript: ['var(--font-dancing-script)'],
        crimsonText: ['var(--font-crimson-text)'],
      },
      colors: {
        black: {
          100: '#0C1C0A',
          75: '#495547',
          50: '#868E85',
          25: '#C2C6C2',
          10: '#E6E8E6',
          5: '#F3F3F3',
        },
        primary: '#B89754',
      },
    },
  },
  plugins: [],
}
export default config
