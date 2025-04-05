import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

// Location observer component to hide/show tagline based on route
const RouteObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    const taglineBanner = document.querySelector('.tagline-banner');
    if (taglineBanner) {
      // Only show on home page
      if (location.pathname === '/') {
        taglineBanner.style.display = 'block';
      } else {
        taglineBanner.style.display = 'none';
      }
    }
  }, [location]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <RouteObserver />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
