/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#080809',
          900: '#0E0E11',
          850: '#141418',
          800: '#1C1C22',
          700: '#2B2B36'
        },
        accent: {
          muted: 'rgba(255, 255, 255, 0.08)',
          line: 'rgba(255, 255, 255, 0.12)'
        }
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        sans: ['Inter', '-apple-system', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 32s linear infinite',
        'spin-hover': 'spin 12s linear infinite'
      }
    }
  },
  plugins: []
};
