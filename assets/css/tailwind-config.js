/**
 * Tailwind CSS Configuration
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Configuración personalizada de Tailwind con design tokens del proyecto.
 * Usar con CDN de Tailwind: https://cdn.tailwindcss.com
 */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        accent: '#c9a227',
        'accent-hover': '#b8912a',
        background: '#0d0d0d',
        surface: '#1e1e1e',
        'text-primary': '#ffffff',
        'text-secondary': '#a3a3a3',
        'text-muted': '#666666',
        border: '#333333',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'heading-1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }]
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px'
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1280px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-gold': 'pulseGold 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 162, 39, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(201, 162, 39, 0)' }
        }
      }
    }
  },
  plugins: []
}
