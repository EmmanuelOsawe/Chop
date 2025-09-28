import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Home';
import Rooms from './rooms';
import Rest from './restlounges';
import About from './About';
import Contact from './contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rooms.js" element={<Rooms/>} />
        <Route path="restlounges.js" element={<Rest/>} />
        <Route path="About.js" element={<About/>} />
        <Route path="contact.js" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;