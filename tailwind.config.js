/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
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
          // Basic animations
          'fade-in': 'fadeIn 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          'fade-in-up': 'fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          'fade-in-down': 'fadeInDown 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          'fade-in-left': 'fadeInLeft 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          'fade-in-right': 'fadeInRight 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          
          // Scale animations
          'scale-in': 'scaleIn 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          'scale-up': 'scaleUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          
          // Slide animations
          'slide-up': 'slideUp 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          'slide-down': 'slideDown 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          'slide-left': 'slideLeft 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          'slide-right': 'slideRight 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          
          // Bounce animations
          'bounce-in': 'bounceIn 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
          
          // Rotation animations
          'rotate-in': 'rotateIn 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          'spin-slow': 'spin 3s linear infinite',
          
          // Pulse animations
          'pulse-slow': 'pulse 3s ease-in-out infinite',
          'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
          
          // Floating animations
          'float': 'float 6s ease-in-out infinite',
          'float-delayed': 'float 6s ease-in-out infinite 2s',
          
          // Typing animation
          'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
          
          // Gradient animations
          'gradient-x': 'gradientX 15s ease infinite',
          'gradient-y': 'gradientY 15s ease infinite',
          'gradient-xy': 'gradientXY 15s ease infinite',
          
          // Stagger animations
          'stagger-1': 'fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) 100ms',
          'stagger-2': 'fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms',
          'stagger-3': 'fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
          'stagger-4': 'fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) 400ms',
        },
        keyframes: {
          // Fade animations
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          fadeInRight: {
            '0%': { opacity: '0', transform: 'translateX(30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          
          // Scale animations
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          scaleUp: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.05)' },
          },
          
          // Slide animations
          slideUp: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideLeft: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideRight: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          
          // Bounce animations
          bounceIn: {
            '0%': { opacity: '0', transform: 'scale(0.3)' },
            '50%': { opacity: '1', transform: 'scale(1.05)' },
            '70%': { transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          
          // Rotation animations
          rotateIn: {
            '0%': { opacity: '0', transform: 'rotate(-200deg)' },
            '100%': { opacity: '1', transform: 'rotate(0deg)' },
          },
          
          // Pulse animations
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
            '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
          },
          
          // Float animation
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          
          // Typing animation
          typing: {
            '0%': { width: '0' },
            '100%': { width: '100%' },
          },
          'blink-caret': {
            '0%, 50%': { borderColor: 'transparent' },
            '51%, 100%': { borderColor: 'currentColor' },
          },
          
          // Gradient animations
          gradientX: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          gradientY: {
            '0%, 100%': { backgroundPosition: '50% 0%' },
            '50%': { backgroundPosition: '50% 100%' },
          },
          gradientXY: {
            '0%, 100%': { backgroundPosition: '0% 0%' },
            '25%': { backgroundPosition: '100% 0%' },
            '50%': { backgroundPosition: '100% 100%' },
            '75%': { backgroundPosition: '0% 100%' },
          },
        },
        transitionTimingFunction: {
          'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
        transitionDelay: {
          '75': '75ms',
          '100': '100ms',
          '150': '150ms',
          '200': '200ms',
          '300': '300ms',
          '400': '400ms',
          '500': '500ms',
        },
        backdropBlur: {
          'xs': '2px',
          '3xl': '64px',
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