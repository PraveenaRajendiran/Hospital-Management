import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-4">
      <h2>Contact Us</h2>
      <Row className="mt-4">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your message here..." />
            </Form.Group>

            <Button variant="danger" type="submit">Send Message</Button>
          </Form>
        </Col>

        <Col md={6}>
          <h5>Reach Us At:</h5>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@healthconnect.com</p>
          <p><strong>Address:</strong> 123, Wellness Street, New Delhi</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
