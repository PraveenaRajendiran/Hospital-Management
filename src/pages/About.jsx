// src/pages/About.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

const About = () => (
  <Container className="about-container my-5">
    <h2 className="mb-4 text-center text-pink about-heading">About HealthConnect</h2>
    <Row>
      <Col md={6}>
        <Card className="about-card shadow-sm">
          <Card.Body>
            <p className="about-text">
              <strong>HealthConnect</strong> is a next-generation digital healthcare platform inspired by leading hospital networks.
              Our mission is to bridge the gap between patients and quality healthcare through a seamless, tech-driven experience.
            </p>
            <p className="about-text">
              From booking appointments to accessing medical records, we make healthcare accessible, transparent, and personalized.
              At HealthConnect, we combine advanced medical expertise with a patient-first approach, ensuring you receive the
              attention and care you deserve — anytime, anywhere.
            </p>
            <p className="about-text">
              Backed by a team of experienced doctors, developers, and healthcare strategists, HealthConnect brings innovation to your fingertips.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="about-card shadow-sm">
          <Card.Body>
            <h5 className="text-center mb-4">Our Features</h5>
            <ul className="about-features-list">
              <li>💖 24/7 Appointment Scheduling & Virtual Consultations</li>
              <li>🩺 Verified and Experienced Doctors</li>
              <li>🔒 Secure Health Data Storage</li>
              <li>📍 Location-Based Doctor & Clinic Search</li>
              <li>🧠 AI-based Health Assistant (Coming Soon)</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;
