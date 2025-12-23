import React from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import '../styles/ForgotPassword.css'; // Import the new CSS file

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="forgot-password-container">
      <h2 className="signup-title">Forgot Password</h2>

      {submitted ? (
        <Alert variant="success">
          Password reset link has been sent to your email!
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit} className="signup-form">
          <Form.Group className="mb-3">
            <Form.Label>Enter your registered email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
            />
          </Form.Group>
          <div className="form-actions">
            <Button type="submit" className="submit-button">Send Reset Link</Button>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default ForgotPassword;
