import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
    </div>
  );
}
