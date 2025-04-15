import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="section-header">About Me</h1>
      
      <div className="about-content">
        <div className="about-image">
          <img 
            src="/images/bhagirathphoto.jpg" 
            alt="Bhagirath Devani" 
            className="profile-image"
          />
        </div>
        
        <div className="about-text">
          <p className="lead">
            I'm a passionate React Developer and Digital Marketing Specialist with a mission to create digital experiences that make a difference.
          </p>
          
          <p>
            Currently pursuing my B.Tech in Information Technology at Uka Tarsadia University, I balance my academic pursuits with hands-on project work and continuous learning in the ever-evolving fields of web development and digital marketing.
          </p>
          
          <p>
            My journey began with a curiosity about how websites work, which led me to explore HTML and CSS. As I delved deeper, I discovered my passion for creating interactive user experiences with JavaScript and React. Alongside my development skills, I've cultivated expertise in digital marketing, recognizing the powerful synergy between well-built applications and effective marketing strategies.
          </p>
          
          <p>
            What drives me is the opportunity to solve real-world problems through technology. Whether it's creating an intuitive user interface or developing a marketing strategy that connects businesses with their target audience, I approach each project with creativity, analytical thinking, and attention to detail.
          </p>
        </div>
      </div>
      
      <div className="expertise-section">
        <h2 className="section-header">My Expertise</h2>
        
        <div className="expertise-areas">
          <div className="expertise-area">
            <h3><i className="fas fa-laptop-code"></i> Web Development</h3>
            <p>
              I specialize in building responsive, user-friendly web applications using React.js and modern JavaScript. My development approach focuses on:
            </p>
            <ul>
              <li>Component-based architecture for maintainable code</li>
              <li>Performance optimization for fast-loading applications</li>
              <li>Responsive design that works flawlessly across all devices</li>
              <li>Clean, well-documented code that's easy to maintain</li>
              <li>Accessibility considerations for inclusive user experiences</li>
            </ul>
            <Link to="/blog/react-development-2024" className="read-more-link">
              Read my blog about React Development <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="expertise-area">
            <h3><i className="fas fa-bullhorn"></i> Digital Marketing</h3>
            <p>
              My digital marketing expertise helps businesses increase their online visibility and connect with their target audience through:
            </p>
            <ul>
              <li>Search Engine Optimization (SEO) for improved organic rankings</li>
              <li>Pay-Per-Click (PPC) campaign management for targeted traffic</li>
              <li>Social media strategy and content creation</li>
              <li>Email marketing campaigns with high open and conversion rates</li>
              <li>Analytics and data analysis for continuous improvement</li>
              <li>Content marketing that engages and converts</li>
            </ul>
            <Link to="/blog/digital-marketing-strategies-2024" className="read-more-link">
              Read my blog about SEO and Digital Marketing <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="education-section">
        <h2 className="section-header">Education & Certifications</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2022 - Present</div>
            <h3>B.Tech Information Technology</h3>
            <p>Uka Tarsadia University</p>
            <p>CGPA: 8.06</p>
            <p>Relevant coursework: Data Structures, Algorithms, Database Management, Web Development</p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <h3>HSC (Science Stream)</h3>
            <p>PP swami vidhyabhavan (Jirabaug)</p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2018</div>
            <h3>SSC</h3>
            <p>Gajera Vidhyabhavan (Utran)</p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <h3>Google Digital Marketing Certification</h3>
            <p>Comprehensive training in digital marketing fundamentals, search, display, and video advertising</p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <h3>Meta React Developer Certification</h3>
            <p>Advanced React concepts including hooks, context API, and performance optimization</p>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2 className="section-header">Technical Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js <Link to="/blog/react-development-2024" className="skill-link"><i className="fas fa-external-link-alt"></i></Link></li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Firebase</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Digital Marketing</h3>
            <ul>
              <li>SEO <Link to="/blog/digital-marketing-strategies-2024" className="skill-link"><i className="fas fa-external-link-alt"></i></Link></li>
              <li>Google Ads</li>
              <li>Social Media Marketing</li>
              <li>Content Strategy</li>
              <li>Email Marketing</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Google Analytics</li>
              <li>SEMrush</li>
              <li>Mailchimp</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="interests-section">
        <h2 className="section-header">Beyond Coding</h2>
        <p>When I'm not coding or strategizing marketing campaigns, you can find me:</p>
        <ul className="interests-list">
          <li><i className="fas fa-chess"></i> Playing chess to sharpen my strategic thinking skills</li>
          <li><i className="fas fa-chart-line"></i> Researching and analyzing stock market trends <Link to="/blog/stock-market-analysis-comparison" className="skill-link"><i className="fas fa-external-link-alt"></i></Link></li>
          <li><i className="fas fa-guitar"></i> Playing guitar and enjoying classical music</li>
          <li><i className="fas fa-plane"></i> Traveling and exploring new cultures and destinations</li>
          <li><i className="fas fa-book"></i> Reading tech blogs and books on digital innovation</li>
        </ul>
      </div>
      
      <div className="languages-section">
        <h2 className="section-header">Languages</h2>
        <ul className="languages-list">
          <li>English (Professional)</li>
          <li>Hindi (Native)</li>
          <li>Gujarati (Native)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;