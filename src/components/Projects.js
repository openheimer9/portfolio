import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {/* Stock Review Tool Project */}
        <div className="project-card">
          <div className="project-image">
            <img src="/images/stockproject.png" alt="StockXpert" />
          </div>
          <div className="project-content">
            <h3>StockXpert</h3>
            <p>
              StockXpert is an advanced stock analysis platform that provides real-time stock data and market analytics. The project follows a client-server architecture with a React-based frontend web application featuring a modern UI and a Node.js/Express backend server that interfaces with Yahoo Finance API. Key features include real-time stock data retrieval for specific symbols, market overview showing major indices (S&P 500, NASDAQ, DOW), detailed financial metrics for stocks (PE ratios, margins, dividends, etc.), and responsive design that works on both desktop and mobile. The application fetches data from Yahoo Finance API and presents it through an intuitive interface, designed for investors and traders who need comprehensive stock information and market analysis in one place.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Yahoo Finance API</span>
              <span>RESTful API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/openheimer9/stockxpert" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </a>
              <a href="https://stock-xpert-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;