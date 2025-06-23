import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import About from './about';
import Properties from './properties';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  );
}

export default App;
