/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', // slate-200
          input: 'var(--color-input)', // white
          ring: 'var(--color-ring)', // blue-600
          background: 'var(--color-background)', // gray-50
          foreground: 'var(--color-foreground)', // slate-800
          primary: {
            DEFAULT: 'var(--color-primary)', // blue-600
            foreground: 'var(--color-primary-foreground)', // white
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', // slate-500
            foreground: 'var(--color-secondary-foreground)', // white
          },
          accent: {
            DEFAULT: 'var(--color-accent)', // amber-500
            foreground: 'var(--color-accent-foreground)', // slate-800
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', // red-500
            foreground: 'var(--color-destructive-foreground)', // white
          },
          success: {
            DEFAULT: 'var(--color-success)', // emerald-500
            foreground: 'var(--color-success-foreground)', // white
          },
          warning: {
            DEFAULT: 'var(--color-warning)', // amber-500
            foreground: 'var(--color-warning-foreground)', // slate-800
          },
          error: {
            DEFAULT: 'var(--color-error)', // red-500
            foreground: 'var(--color-error-foreground)', // white
          },
          muted: {
            DEFAULT: 'var(--color-muted)', // slate-100
            foreground: 'var(--color-muted-foreground)', // slate-500
          },
          card: {
            DEFAULT: 'var(--color-card)', // white
            foreground: 'var(--color-card-foreground)', // slate-800
          },
          popover: {
            DEFAULT: 'var(--color-popover)', // white
            foreground: 'var(--color-popover-foreground)', // slate-800
          },
          surface: 'var(--color-surface)', // white
          'text-primary': 'var(--color-text-primary)', // slate-800
          'text-secondary': 'var(--color-text-secondary)', // slate-500
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        boxShadow: {
          'sm': 'var(--shadow-sm)',
          'DEFAULT': 'var(--shadow-default)',
          'md': 'var(--shadow-md)',
          'lg': 'var(--shadow-lg)',
          'elevation-1': '0 1px 3px rgba(0,0,0,0.1)',
          'elevation-2': '0 4px 6px rgba(0,0,0,0.1)',
          'elevation-3': '0 10px 15px rgba(0,0,0,0.1)',
        },
        animation: {
          'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          'slide-up': 'slideUp 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          'slide-down': 'slideDown 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          'scale-in': 'scaleIn 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        transitionTimingFunction: {
          'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        zIndex: {
          '100': '100',
          '150': '150',
          '200': '200',
          '300': '300',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('tailwindcss-animate'),
    ],
  }