module.exports = {
    darkMode: "media",
    content: [
      "./src/**/*.{html,ts}",
      "./node_modules/flowbite/**/*.js" // add this line
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
  }
