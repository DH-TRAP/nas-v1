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
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/nas-v1/" element={<Home />} />
        <Route path="/nas-v1/Play" element={<Play />} />
        <Route path="/nas-v1/Learn" element={<Learn />} />
        <Route path="/nas-v1/Practice" element={<Practice />} />
        <Route path="/nas-v1/About" element={<About />} />
        <Route path="/nas-v1/Sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;