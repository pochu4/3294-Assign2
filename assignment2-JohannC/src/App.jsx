import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Accomodations from "./components/pages/Accomodations";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="accomodations" element={<Accomodations /> }/>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>

  )
}

export default App
