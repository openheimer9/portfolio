import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>devanibhagirath162@gmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91 9537732108</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Surat, Gujarat (395006)</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/openheimer9" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://in.linkedin.com/in/bhagirath-devani-aab818250" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/bhagirathdevani" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/bhagirath_devani/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;