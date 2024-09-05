// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Homepage/Homepage';
import Play from './Components/Play/Play';
import Learn from './Components/Learn/Learn';
import Practice from './Components/Practice/Practice';
import About from './Components/About/About';
import Sitemap from './Components/Sitemap/Sitemap';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Practice" element={<Practice />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sitemap" element={<Sitemap />} />
      </Routes>
    </Router>
  );
}

export default App;