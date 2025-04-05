import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'StockXpert',
      description: 'A comprehensive financial analysis application that provides real-time stock data and smart ratings for global markets, with specialized support for Indian stocks. Built with Flask and modern financial APIs, it offers comprehensive stock analysis including value metrics, growth potential, and financial health indicators through a RESTful API interface.',
      technologies: ['Python', 'Flask', 'Financial APIs', 'RESTful API'],
      image: 'stockproject.jpg',
      link: 'https://stock-xpert-three.vercel.app/',
      github: 'https://github.com/openheimer9/stockxpert'
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src="/images/stockproject.png" alt={project.title} />
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
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fab fa-github"></i> View Code
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
