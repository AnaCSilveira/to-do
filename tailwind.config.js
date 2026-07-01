/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#000000",
        "bg-secondary": "#FFFFFF",
        "text-primary": "#000000",
        "text-secondary": "#8c8c8c",
      },
    },
  },
};
