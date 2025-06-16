module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F", // deep navy
        secondary: "#4A90A4", // blue-gray
        accent: "#FF6B35", // warm orange
        background: "#FAFBFC", // soft off-white
        surface: "#FFFFFF", // pure white
        text: {
          primary: "#2D3748", // dark gray
          secondary: "#718096", // medium gray
        },
        success: "#38A169", // professional green
        warning: "#D69E2E", // sophisticated amber
        error: "#E53E3E", // clear red
        border: "#E2E8F0", // light gray
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0, 0, 0, 0.1)',
        card: '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        smooth: '200ms',
        content: '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}