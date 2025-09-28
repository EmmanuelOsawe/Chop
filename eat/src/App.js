import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Home';
import Rooms from './rooms';
import Rest from './restlounges';
import About from './About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home.js" element={<Home />} />
        <Route path="rooms.js" element={<Rooms/>} />
        <Route path="restlounges.js" element={<Rest/>} />
        <Route path="About.js" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;