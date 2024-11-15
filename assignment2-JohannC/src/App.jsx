import React from "react";
import "./App.css";

// Import Routing, Routes as the container for all route 
import { Routes, Route, useLocation } from "react-router-dom";

// Import component which enables animations from library
import { AnimatePresence } from "framer-motion";

// Import Layout File
import Layout from "./components/Layout";

// Importing Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Accomodations from "./components/pages/Accomodations";



function App() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accomodations" element={<Accomodations />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>

  )
}

export default App
