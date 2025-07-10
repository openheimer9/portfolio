import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import useScrollAnimation from '../utils/useScrollAnimation';

const Home = () => {
  // Use the custom hook
  useScrollAnimation();
  
  // Add this effect to handle fade-in animations
  useEffect(() => {
    // Force a repaint to trigger fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      el.style.animation = 'none';
      void el.offsetHeight; // Trigger reflow
      el.style.animation = null;
    });
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section fade-in">
        {/* <h1 className="hero-name">Bhagirath N. Devani</h1> */}
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="expanded-tagline">
        Bringing ideas to life, one line of code at a time.
        I build what you imagine — sleek, smart, and scalable.
        Let’s create something worth remembering.
        </p>
        <div className="brief-intro">
          <p>
            Passionate about creating technology that makes a difference. I combine technical expertise with marketing insights to build solutions that not only look great but also deliver results.
          </p>
        </div>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">
            Explore My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Let's Connect
          </Link>
        </div>
      </div>
      
      <div className="skills-section">
        <h2 className="section-header scroll-animation">Development Expertise</h2>
        <div className="skills-container">
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-react"></i>
            </a>
            <h3>React.js</h3>
            <p>Building interactive UIs with reusable components</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-node-js"></i>
            </a>
            <h3>Node.js</h3>
            <p>Server-side JavaScript for scalable applications</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-js"></i>
            </a>
            <h3>JavaScript</h3>
            <p>ES6+ features for modern web development</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-html5"></i>
            </a>
            <h3>HTML5/CSS3</h3>
            <p>Semantic markup and responsive styling</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Database" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-database"></i>
            </a>
            <h3>MongoDB/SQL</h3>
            <p>Database design and management</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-mobile-alt"></i>
            </a>
            <h3>Responsive Design</h3>
            <p>Mobile-first approach for all devices</p>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2 className="section-header scroll-animation">Digital Marketing Arsenal</h2>
        <div className="skills-container">
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Search_engine_optimization" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-search"></i>
            </a>
            <h3>SEO</h3>
            <p>On-page and technical optimization for better rankings</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Google_Ads" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-ad"></i>
            </a>
            <h3>Google Ads</h3>
            <p>PPC campaign management for maximum ROI</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Social_media_marketing" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <h3>Social Media</h3>
            <p>Strategic content and community management</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Web_analytics" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-chart-line"></i>
            </a>
            <h3>Analytics</h3>
            <p>Data-driven insights for continuous improvement</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Email_marketing" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <h3>Email Marketing</h3>
            <p>Targeted campaigns with high conversion rates</p>
          </div>
          <div className="skill-card scroll-animation">
            <a href="https://en.wikipedia.org/wiki/Content_marketing" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-bullhorn"></i>
            </a>
            <h3>Content Strategy</h3>
            <p>Engaging content that drives traffic and conversions</p>
          </div>
        </div>
      </div>
      
      <div className="about-section fade-in">
        <div className="about-content">
          <h2 className="section-header">Comprehensive Services & Expertise</h2>
          <div className="about-grid">
            <div className="about-item scroll-animation">
              <h3>React Development</h3>
              <p>
                Delivering modern, high-performance web applications using React.js. 
                My development expertise includes:
              </p>
              <ul>
                <li>Custom React application development</li>
                <li>Performance optimization</li>
                <li>Responsive design implementation</li>
                <li>State management with Redux</li>
                <li>RESTful API integration</li>
              </ul>
            </div>

            <div className="about-item scroll-animation">
              <h3>Digital Marketing</h3>
              <p>
                Creating comprehensive digital marketing strategies for enhanced online presence:
              </p>
              <ul>
                <li>Search Engine Optimization (SEO)</li>
                <li>Content Marketing Strategy</li>
                <li>Social Media Marketing</li>
                <li>Google Analytics Implementation</li>
                <li>Conversion Rate Optimization</li>
              </ul>
            </div>

            <div className="about-item scroll-animation">
              <h3>Stock Market Analysis</h3>
              <p>
                Offering expert market analysis and investment strategies:
              </p>
              <ul>
                <li>Technical Analysis</li>
                <li>Fundamental Research</li>
                <li>Market Trend Analysis</li>
                <li>Risk Management</li>
                <li>Portfolio Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-cta">
        <h2 className="section-header scroll-animation">Ready to Start Your Project?</h2>
        <p className="scroll-animation">Let's discuss how I can help bring your ideas to life with cutting-edge development and effective digital marketing strategies.</p>
        <Link to="/contact" className="btn btn-primary scroll-animation">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Home;
