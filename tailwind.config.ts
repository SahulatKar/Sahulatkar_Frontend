import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SahulatKar Brand Colors
        primary: {
          50: '#fef3f0',
          100: '#fde8e0',
          200: '#fbcfc5',
          300: '#f7aa92',
          400: '#f07a54',
          500: '#e84c21', // Main Brand Orange
          600: '#d63f1d',
          700: '#b52e16',
          800: '#942815',
          900: '#7a2313',
        },
        // Neutral palette
        slate: {
          50: '#f8f8f9',
          100: '#f1f1f3',
          200: '#e3e3e6',
          300: '#c7c7cc',
          400: '#9a9aa3',
          500: '#6b6b75',
          600: '#525258',
          700: '#3d3d43',
          800: '#2d2d32',
          900: '#1a1a1e', // Dark Navy
        },
        // Accent Colors
        emerald: {
          500: '#10b981',
          600: '#059669',
        },
        rose: {
          50: '#fff5f7',
          500: '#f43f5e',
        },
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 76, 33, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(232, 76, 33, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(232, 76, 33, 0.2)',
        'glow-lg': '0 0 50px rgba(232, 76, 33, 0.3)',
        'elevation': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'elevation-lg': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

export default config
