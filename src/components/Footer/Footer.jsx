
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Resume Templates</li>
          <li>About Us</li>
          <li>Contact Support</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>FAQs</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect with Us</h4>
        <div className="social-icons">
          <span className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ResumeCraft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
