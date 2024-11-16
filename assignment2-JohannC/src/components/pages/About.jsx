import React from "react";

// Importing Hero Component
import Hero from "../sections/Hero";

import ContentCTA from "../sections/ContentCTA";

import Story from "../sections/Story";

// Import Transition Component
import transition from "../sections/Transitions";

function About() {
  return (

    <>
      {/* Hero content with content type prop */}
      <Hero content="about" />
      <Story />
      <ContentCTA content="about"/>

    </>
  )
}

export default transition(About);