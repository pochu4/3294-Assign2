import Hero from "../sections/Hero";

// Page Components
import Introduction from "../sections/Introduction";
import ContentCTA from "../sections/ContentCTA";

// Import transition component
import transition from "../sections/Transitions";

function Home() {
  return (
    <>
      <Hero content="home" />
      <Introduction content="home" />
      <ContentCTA content="home"/>


    </>

  );
}

// Wrapping the entire homepage in the transition component 
export default transition(Home);