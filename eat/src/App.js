import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Home';
import Rooms from './rooms';
import Rest from './restlounges';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home.js" element={<Home />} />
        <Route path="rooms.js" element={<Rooms/>} />
        <Route path="restlounges.js" element={<Rest/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;