import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0b0e14',
        'secondary-bg': '#0d1117',
        'tertiary-bg': '#161b22',
        'accent-green': '#00ff41',
        'text-primary': '#e0e0e0',
        'text-secondary': '#8b949e',
        'border-subtle': '#1a1f27',
      },
      fontFamily: {
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
