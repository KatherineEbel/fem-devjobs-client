/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    styled: true,
    themes: [
      {
        'light': {
          'primary': "#5964E0",
          'primary-focus': "#939bf4",
          'accent': '#e4e5f4',
          'secondary': '#9DAEC2',
          'secondary-content': '#6E8098',
          // 'secondary': '#9DAEC2',
          // 'secondary-focus': '#9DAEC2',
          'base-200': '#FFFFFF',
          'base-100': '#F4F6F8',
          'base-content': '#19202D',
          'primary-content': '#FFFFFF',
        },
        'dark': {
          'primary': "#5964E0",
          'primary-content': '#FFFFFF',
          // 'secondary': '#9DAEC2',
          // 'accent': '#939BF4',
          'accent': '#2d3542',
          'secondary-content': '#9DAEC2',
          // 'secondary-focus': '#939bf4',
          'base-100': '#121721',
          'base-200': '#19202D',
          'base-content': '#FFFFFF',
          'base-500': '#9DAEC2',
          'base-600': '#6E8098',
          'neutral': '#FFFFFF',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'pattern-header': "url(../assets/mobile/bg-pattern-header.svg)",
        'pattern-header-tablet': "url(../assets/tablet/bg-pattern-header.svg)",
        'pattern-header-desktop': "url(../assets/desktop/bg-pattern-header.svg)",
        'pattern-footer': "url(../assets/mobile/bg-pattern-detail-footer.svg)",
        'pattern-footer-desktop': "url(../assets/desktop/bg-pattern-detail-footer.svg)",
      },
      backgroundColor: {
        'gray': '#9DAEC2',
        'dark-gray': '#6E8098',
        'btn-2-default': '#e4e5f4',
        'btn-2-active': '#bcc1ee',
      },
      screens: {
        tablet: '376px',
        desktop: '769px',
        md: '689px',
        lg: '1110px',
        xl: '1440px',
      },
    },
  },
  plugins: [require('daisyui')],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};

// button 2 default A09DC2
// Button 2 light #EEEFFC
// Button 2 light hover #C5C9F4
// Button 2 dark #303642
// Button 2 dark hover #6A6E77
