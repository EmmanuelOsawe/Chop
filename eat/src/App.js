import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Home';
import Rooms from './rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home.js" element={<Home />} />
        <Route path="rooms.js" element={<Rooms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;