// Dedicated Page Transitions File
// See CSS for each motion component (motion.div)

// import Framer Motion 
import {motion} from "framer-motion";

// Define the transition function taking component as a parameter
const transition = (OgComponent) => {
    return() => (
        <>
        {/* Make sure OG content is displayed */}
        <OgComponent />

        {/* Framer Motion Component 1 - For when component enters the page */}
        <motion.div 
        className="slide-in" 
        initial={{scaleY: 0}} 
        animate={{scaleY: 0}} 
        exit={{scaleY: 1}} 
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}  
        />

        {/* Framer Motion Component 2 - When component leaves */}
        <motion.div className="slide-out" 
        initial={{scaleY:1}} 
        animate={{scaleY:0}} 
        exit={{scaleY: 0}} 
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}  
        />
        </>
    )
}

export default transition;