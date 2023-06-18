/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}","./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui"),  require('flowbite/plugin')],

  daisyui: {
    themes: ["dark", "light",
      {
        normal: {
          "primary": "#FD0B1B",
          "secondary": "#FCE6E8",
          "accent": "#FFD500",
          "neutral": "#27303A",
          "base-100": "#1E232C",
          "info": "#2E9BF9",
          "success": "#4BD68F",
          "warning": "#FFA500",
          "error": "#F04349"
        },
      
        protanopia:{
          "primary": "#3627e1",    // Adjusted primary color
          "secondary": "#d926a9",
          "accent": "#1fa2b5",    // Adjusted accent color
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        deuteranopia:{
          "primary": "#3627e1",    // Adjusted primary color
          "secondary": "#d926a9",
          "accent": "#1fa2b5",    // Adjusted accent color
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        }
      }],
    logs: false
  }
};

module.exports = config;
