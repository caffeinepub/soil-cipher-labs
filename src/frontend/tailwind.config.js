import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['DM Serif Display', 'Playfair Display', 'serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                /* Soil Cipher Labs custom palette */
                forest: {
                    50:  'oklch(0.97 0.015 155)',
                    100: 'oklch(0.93 0.03 155)',
                    200: 'oklch(0.85 0.055 155)',
                    300: 'oklch(0.72 0.08 155)',
                    400: 'oklch(0.58 0.095 155)',
                    500: 'oklch(0.45 0.1 155)',
                    600: 'oklch(0.38 0.095 155)',
                    700: 'oklch(0.30 0.085 155)',
                    800: 'oklch(0.22 0.065 155)',
                    900: 'oklch(0.15 0.04 155)',
                },
                amber: {
                    50:  'oklch(0.98 0.015 75)',
                    100: 'oklch(0.95 0.04 75)',
                    200: 'oklch(0.90 0.07 70)',
                    300: 'oklch(0.83 0.1 65)',
                    400: 'oklch(0.75 0.12 62)',
                    500: 'oklch(0.68 0.13 58)',
                    600: 'oklch(0.60 0.13 55)',
                    700: 'oklch(0.50 0.11 52)',
                    800: 'oklch(0.38 0.09 50)',
                    900: 'oklch(0.28 0.07 48)',
                },
                cream: {
                    50:  'oklch(0.995 0.003 85)',
                    100: 'oklch(0.985 0.006 85)',
                    200: 'oklch(0.975 0.008 85)',
                    300: 'oklch(0.96 0.012 82)',
                    400: 'oklch(0.94 0.016 80)',
                    500: 'oklch(0.90 0.02 78)',
                },
                soil: {
                    light: 'oklch(0.72 0.06 55)',
                    mid:   'oklch(0.52 0.07 52)',
                    dark:  'oklch(0.32 0.06 50)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'soil': '0 4px 24px oklch(0.38 0.095 155 / 0.12)',
                'soil-lg': '0 12px 48px oklch(0.38 0.095 155 / 0.18)',
                'amber': '0 4px 24px oklch(0.68 0.13 58 / 0.2)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.6s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
