import React from 'react';
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 flex justify-center gap-6 z-50">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#publications">Publications</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
