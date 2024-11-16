import Hero from "../sections/Hero";

// Page Components
import Introduction from "../sections/Introduction";
import AboutCTA from "../sections/AboutCTA";

// Import transition component
import transition from "../sections/Transitions";

function Home() {
  return (
    <>
      <Hero contentType="home" />
      <Introduction type="home" />
      <AboutCTA />


    </>

  );
}

// Wrapping the entire homepage in the transition component 
export default transition(Home);