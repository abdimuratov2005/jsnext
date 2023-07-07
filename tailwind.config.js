/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        cursor: {
          'next-mapbiz': 'url(assets/images/home/next.svg), pointer',
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink_ffcoder: {
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'marquee-base-mapbiz': 'marquee 13.5s infinite linear',
        'blink-base-mapbiz': 'blink_ffcoder 1s infinite',
      },
      boxShadow: {
        'white-mapbiz': '3px 4px 3px 0 rgba(255, 255, 255, 0.12)',
        'neon-mapbiz': '0px 0px 6px #00FFE5',
        'interface-mapbiz': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'step-mapbiz': '0px -3px 6px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'crimson-mapbiz': '#E0124A',
        'darkgrey-mapbiz': '#1E1E1E',
        'redlight-mapbiz': '#47000087',
        'redbright-mapbiz': '#E0124A',
        'greywhite-mapbiz': '#FFFFFFB2',
        'white-text-new-mapbiz': '#ffffffe6', // rgba(255, 255, 255, 0.90)
        'whitetype-mapbiz': '#FFFFFF0D',
        'whiteline-mapbiz': '#FFFFFF4D',
        'whitetext-mapbiz': '#FFFFFFE5',
        'whitelink-mapbiz': '#FFFFFFCC', // rgba(255, 255, 255, 0.80)
        'whitefone-mapbiz': '#E8E8E8',
        'whitetext-more-mapbiz': '#FFFFFF99',
        'greytransparent-mapbiz': '#808080CC',
        'greywhite-interface-mapbiz': '#80808033',
        'grey-mapbiz': '#808080',
        'greyborder-mapbiz': '#606060',
        'neon-mapbiz': '#00FFE5',
        'darkfone-mapbiz': '#18181880',

      },
      screens: {
        '3xl': '1706px',
        '4xl': '1919px',
        '5xl': '2047px',
        '6xl': '2303px',
        '7xl': '3071px',
        '8xl': '4607px',
      },
      fontFamily: {
        'Grotesk': ['Grotesk'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
