import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Interactive Decision-Making Story App',
      description: 'Created a single-page application using React to deliver a personalized, decision-driven narrative experience. Implemented a JSON graph structure to represent the branching storyline, allowing users to make choices that directly impact the narrative\'s progression. Designed a responsive and engaging user interface, utilizing React components and state management for seamless user interaction.',
      technologies: ['React.js', 'JSON', 'State Management', 'UI/UX Design'],
      image: 'https://via.placeholder.com/600x400?text=Story+App',
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {/* Stock Review Tool Project */}
        <div className="project-card">
          <div className="project-image">
            <img src="/images/stockproject.png" alt="Stock Review Tool" />
          </div>
          <div className="project-content">
            <h3>Stock Review Tool</h3>
            <p>
              Stock Screening Tool: A Python-based financial analysis application that provides real-time stock data and smart ratings for global markets, with specialized support for Indian stocks. Built with Flask and modern financial APIs, it offers comprehensive stock analysis including value metrics, growth potential, and financial health indicators through a RESTful API interface.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>Financial APIs</span>
              <span>RESTful API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/openheimer9/stock-review-tool" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </a>
              <a href="https://stock-xpert-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
        
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
