import React from "react";
import Hero from "../sections/Hero";
import Introduction from "../sections/Introduction";
import transition from "../sections/Transitions";

function Accomodations() {
  return (
    <>
      <Hero type="accomodation" />
      <Introduction type="accomodation" />
    </>
  )
}

export default transition(Accomodations)