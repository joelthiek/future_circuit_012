// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Home</li>
            <li>Resume Templates</li>
            <li>About Us</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4>Connect with Us</h4>
          
          <a href="#" style={{ marginRight: '10px' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" style={{ marginRight: '10px' }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        © 2024 ResumeCraft. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
