import React from "react";
import Hero from "../sections/Hero";
import Introduction from "../sections/Introduction";
import transition from "../sections/Transitions";
import Rooms from "../sections/Rooms";

function Accomodations() {



  return (
    <>
      <Hero contentType="accomodation"/>
      <Introduction content="accomodation"/>

      <Rooms content="reverse"/>
      <Rooms />
      <Rooms content="reverse"/>
    </>
  )
}

export default transition(Accomodations)