module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        lightTheme: {
          primary: '#bbdd4b',

          secondary: '#D75050',

          accent: '#D59B6C',

          neutral: '#241E24',

          'base-100': '#F2F2F2',

          info: '#5596D8',

          success: '#196653',

          warning: '#EB8014',

          error: '#F62C3D',
        },
      },
      {
        darkTheme: {
          primary: '#d8bc31',

          secondary: '#f9aed5',

          accent: '#e1ef83',

          neutral: '#242942',

          'base-100': '#484149',

          info: '#96A4E9',

          success: '#218355',

          warning: '#AE5C04',

          error: '#E4585D',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
