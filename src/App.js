import React from 'react';
import { toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Contact from './contact';
import About from './about';
import Properties from './properties';
import PropertyDetails from './propertyDetails';
import Register from './Get-started/register';
import Buy from './Buy';
import Let from './Let';
import Admin from './admin';
import Adminmenus from './Adminmenus';
import Sold from './Sold';
import Analysis from './Analysis';
import Adminusers from './Adminusers';
import Try from './Try';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/get-started/register" element={<Register />} />
      <Route path="/properties/buy" element={<Buy />} />
      <Route path="/properties/let" element={<Let />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/adminmenus" element={<Adminmenus />} />
       <Route path="/adminusers" element={<Adminusers />} />
       <Route path="/sold" element={<Sold />} />
       <Route path="/analysis" element={<Analysis />} />
       <Route path="try" element={<Try />} />
    </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
