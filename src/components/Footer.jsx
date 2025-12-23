import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png'; // Use your logo here

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scrolling to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="custom-footer">
      <div className="footer-main">
        <div className="footer-column logo-column">
          <img src={logo} alt="HealthConnect Logo" className="footer-logo" />
          <p className="footer-desc">
            Your trusted partner in health and wellness.<br />
            Connecting you to quality care.
          </p>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Overview</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li onClick={() => handleNavigation('/contact')}>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Centers of Excellence</h4>
          <ul>
            <li onClick={() => handleNavigation('/specialties/Cardiac Sciences')}>Cardiology</li>
            <li onClick={() => handleNavigation('/specialties/Neurology')}>Neurology</li>
            <li onClick={() => handleNavigation('/specialties/Orthopedics')}>Orthopaedics</li>
            <li onClick={() => handleNavigation('/specialties/Psychotherapy')}>Psychotherapy</li>
            <li onClick={() => handleNavigation('/specialties/Gastroenterology')}>Gastroenterology</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Specialties</h4>
          <ul>
            <li onClick={() => handleNavigation('/specialties/Internal Medicine')}>Internal Medicine</li>
            <li onClick={() => handleNavigation('/specialties/Anesthesia')}>Anesthesia</li>
            <li onClick={() => handleNavigation('/specialties/Ophthalmology')}>Ophthalmology</li>
            <li onClick={() => handleNavigation('/specialties/Plastic Surgery')}>Plastic Surgery</li>
            <li onClick={() => handleNavigation('/specialties/Renal Sciences')}>Renal Sciences</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Patients & Visitors</h4>
          <ul>
            <li>Appointments</li>
            <li>Billing</li>
            <li onClick={() => handleNavigation('/patient')}>Patient Reviews</li>
            <li>Health Packages</li>
            <li>Ask Your Doctor</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider-line" />

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <span onClick={() => handleNavigation('/disclaimer')}>Disclaimer</span> |
          <span onClick={() => handleNavigation('/privacy-policy')}> Privacy Policy</span> |
          <span onClick={() => handleNavigation('/terms-and-conditions')}> T&C</span>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
