# assignment2-johannc-ws2
 Assignment 2 for Web Scripting 2: React.js Website including 3 third party packages
 This website is for MDIA 3294 and is about a fictional resort. 

 

## Project Setup: 
```bash
npx create-vite@latest assignment2-JohannC --template react
cd assignment2-JohannC
npm run dev
```

## Third Party Packages
Tailwind CSS, React Router, Framer Motion, React Slick Slider




#### Tailwind CSS: 
```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest --save,
"./src/**/*.{js,ts,jsx,tsx}" #Into the tailwind config file
@tailwind base, @tailwind components, @tailwind utilities #Into index.css
```


#### React Router:
```bash
npm install react-router-dom --save
```


#### Framer Motion:
```bash
npm install framer-motion --save
```
##### Steps taken:
- Creating a Dedicated file for the transition containing Framer motion components of motion.div
- Styling the Transition Component in App.css
- Import New transition Component into each page and wrapping the entirety of it at the export stage 
- Import AnimatePresence from FM Library 
- Wrap the routing in animate presence and setting mode to wait, this makes it so that it waits for the first component to finish before the new component(in this case page) comes in
- Trigger the animation with location, setting routes 

#### React Slick Slider:
```bash
npm install react-slick --save
```

## References: 
Images Sourcing: Pexels, Freepik

## useEffect - Scroll to Top
As required by the project, I used the useEffect hook to update the scroll position of the page changes.
Unlike traditional navigation, React doesn't reload the page completely and maintains its scroll position even when the page changes. 