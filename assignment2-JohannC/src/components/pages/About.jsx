import React from "react";

// Importing Hero Component
import Hero from "../sections/Hero";

import AboutCTA from "../sections/AboutCTA";

// Import Transition Component
import transition from "../sections/Transitions";

function About() {
  return (

    <>
      {/* Hero content with content type prop */}
      <Hero contentType="about" />

      <div className="w-10/12 mx-auto md:flex md:gap-20 my-24">
        <div className="mt-4 py-4 md:mt-0 md:py-0 md:w-1/2">
          <h1 className="text-3xl font-playfair">Our Story</h1>
          <p className="text-lg mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga odio aut vitae necessitatibus numquam enim repellat, quae ducimus nostrum ad, ab facere facilis animi repellendus? Deleniti distinctio nemo dolores excepturi?</p>
          <p className="text-lg mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga odio aut vitae necessitatibus numquam enim repellat, quae ducimus nostrum ad, ab facere facilis animi repellendus? Deleniti distinctio nemo dolores excepturi?</p>
          <p className="text-lg mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga odio aut vitae necessitatibus numquam enim repellat, quae ducimus nostrum ad, ab facere facilis animi repellendus? Deleniti distinctio nemo dolores excepturi?</p>
        </div>

        <div className="md:w-1/2">
          <img src="../src/assets/resort1.jpeg" alt="Cove Resort" className="w-full h-auto object-cover md:max-h-96" />
        </div>
      </div>

      <AboutCTA />

    </>
  )
}

export default transition(About);