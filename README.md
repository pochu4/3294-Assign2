# assignment2-johannc-ws2
 Assignment 2 for Web Scripting 2: React.js Website
 This website is for MDIA 3294 and is a fictional resort. 


Certain Content for the page is 
 

## Project Setup: 
```bash
npx create-vite@latest assignment2-JohannC --template react
cd assignment2-JohannC
npm run dev
```

### TAILWIND: 
npm install tailwindcss@latest postcss@latest autoprefixer@latest --save,
"./src/**/*.{js,ts,jsx,tsx}" => Into the tailwind config file,
@tailwind base, @tailwind components, @tailwind utilities => Into index.css,


### REACT ROUTER:
npm install react-router-dom --save


### FRAMER MOTION:
npm install framer-motion --save

- Creating a Dedicated file for the transition containing Framer motion components of motion.div
- Styling the Transition Component in App.css
- Import New transition Component into each page and wrapping the entirety of it at the export stage 
- Import AnimatePresence from FM Library 
- Wrap the routing in animate presence and setting mode to wait, this makes it so that it waits for the first component to finish before the new component(in this case page) comes in
- Trigger the animation with location, setting routes 

### REACT SLICK:
npm install react-slick --save

Image Sourcing: 
- Pexels, Freepik



