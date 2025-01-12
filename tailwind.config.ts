import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        'custom-shadow': '4px 4px 15px rgba(0, 0, 0, 0.25)', // سایه دلخواه شما
        'custom-soft': '2px 2px 8px rgba(0, 0, 0, 0.20)', // سایه ملایم

      },

      fontFamily : {
        
        
        xblack : ["x-black" , "sans-serif"],

        xbold : ["x-bold" , "sans-serif"],

        xdemibold : ["x-demibold" , "sans-serif"],

        xextrabold : ["x-extrabold" , "sans-serif"],

        xlightbold : ["x-lightbold" , "sans-serif"],

        xlight : ["x-light" , "sans-serif"],

        xmedium : ["x-medium" , "sans-serif"],

        xregular : ["x-regular" , "sans-serif"],

        xthin : ["x-thin" , "sans-serif"],
        
        xultralight : ["x-ultralight" , "sans-serif"],

        

      }
      
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

} satisfies Config;
