/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A3E635",
          secondary: "#14462D",
          accent: "#37cdbe",
          neutral: "#EAE5D9",
          aboutBg: "#EAE5D9",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
    // ...
  ],
}
