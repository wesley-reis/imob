module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'black': '#000000',
      'sky':{
        500:'#0ea5e9',
        600:'#075985',
        700: '#0369a1',
        800: '#075985',
        900:'#0c4a6e',
      },
      'teal':{
        400:'#2dd4bf',
        500:'#14b8a6',
      },
      'green':{
        400:'#4ade80',
        500:'#22c55e',
      },
      'blue':{
        200:'#bfdbfe',
        400:'#60a5fa',
        600:'#2563eb',
      },
      'gray':{
        50:'#f8fafc',
        100:'#f1f5f9',
        200:'#e2e8f0',
        300:'#cbd5e1',
        400:'#94a3b8',
        500:'#64748b',
        600:'#475569',
        700:'#334155',
        800:'#1e293b',
        900:'#0f172a'
      },
      'red':{
        200:'#fecaca',
        400:'#f87171',
        600:'#dc2626',
        700:'#b91c1c',
      },
      'emerald':{
        200:'#a7f3d0',
        700:'#047857',
      },
      'amber':{
        200:'#fde68a',
        400:'#fbbf24',

      }
 
    },
    extend: {
      fontFamily:{
        'OpenSans':['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
