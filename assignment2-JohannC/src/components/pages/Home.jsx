import Hero from "../sections/Hero";
import Introduction from "../sections/Introduction";
// Import transition component
import transition from "../sections/Transitions";

function Home() {
  return (
    <>
      <Hero type="home" />
      <Introduction type="home" />

    </>

  );
}

// Wrapping the entire homepage in the transition component 
export default transition(Home);