import React from "react";

// Importing Hero Component
import Hero from "../sections/Hero";

// Import Transition Component
import transition from "../sections/Transitions";

function About () {
  return (
    // Hero Component with type, 
    <Hero type="about" />
  )
}

export default transition(About);