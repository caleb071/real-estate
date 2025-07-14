import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import About from './about';
import Properties from './properties';
import PropertyDetails from './propertyDetails';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Register from './get-started/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/get-started" element={<Register />} /> 
    </Routes>
  );
}

export default App;
