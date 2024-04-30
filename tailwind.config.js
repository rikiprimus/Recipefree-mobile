// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
    theme: {
      colors: {
        'yellow': '#EFC81A',
        'purple': '#6D61F2',
        'dark': '#18172B',
        'grey': '#8B8A8F',
        'text-grey': '#666666',
        'blue-grey': '#6E80B0',
        'title-grey': '#B6B6B6',
        'grey': '#C4C4C4',
        'afa': '#AFAFAF',
        'high-white': '#F8F8FA',
        'med-white': '#F5F5F5',
        'lit-white': '#EFEFEF',
        'white': '#fff'
      },
      extend: {},
    },
    plugins: [],
  }