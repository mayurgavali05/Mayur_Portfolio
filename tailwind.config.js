/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        navy: {
          900: '#0A1A3A',
          800: '#0F1B45',
        },
        neon: {
          blue: '#00D4FF',
          glow: 'rgba(0, 212, 255, 0.5)',
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.2)',
        'neon-hover': '0 0 30px rgba(0, 212, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
