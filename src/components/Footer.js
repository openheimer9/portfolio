import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">Bhagirath Devani</Link>
        </div>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Navigation</h2>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-link-items">
              <h2>Blog</h2>
              
              <Link to="/blog/stock-market-analysis-comparison">Stock Market Analysis</Link>
              <Link to="/blog/digital-marketing-strategies-2024">SEO Guide</Link>
              <Link to="/blog/react-development-2024">React Development</Link>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <a href="https://github.com/openheimer9" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://in.linkedin.com/in/bhagirath-devani-aab818250" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/bhagirathdevani" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://www.instagram.com/bhagirath_devani/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-wrap">
            <div className="social-icons">
              <a
                className="social-icon-link"
                href="https://github.com/bhagirathdevani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="social-icon-link"
                href="https://linkedin.com/in/bhagirathdevani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="social-icon-link"
                href="https://twitter.com/bhagirathdevani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="social-icon-link"
                href="https://instagram.com/bhagirathdevani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="website-rights">
          <p>© {new Date().getFullYear()} Bhagirath Devani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;