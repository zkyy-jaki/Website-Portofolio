/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0B090C',
        surface: '#151318',
        elevated: '#1C1921',
        line: '#26232B',
        volt: '#F1FF26',
        muted: '#A1A1AA',
        ink: '#0B090C',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'volt-glow': '0 0 28px -6px rgba(241, 255, 38, 0.28)',
        'volt-glow-sm': '0 0 15px -4px rgba(241, 255, 38, 0.22)',
      },
    },
  },
  plugins: [],
};
