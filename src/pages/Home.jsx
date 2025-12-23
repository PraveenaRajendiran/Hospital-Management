import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="text-center mt-5">
        <Card className="shadow mx-auto" style={{ maxWidth: '600px', border: 'none' }}>
          <Card.Body>
            <Card.Title as="h2" className="text-success">Welcome to HealthConnect</Card.Title>
            <Card.Text>Your health, our priority. Book appointments, consult experts, and stay healthy!</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Container className="my-5">
        <h3 className="text-center text-primary my-4">Why Choose HealthConnect?</h3>
        <Row className="text-center">
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Verified Experts</Card.Title>
                <Card.Text>All doctors are certified and experienced in their fields.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Seamless Experience</Card.Title>
                <Card.Text>User-friendly platform for quick and secure access.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>24/7 Access</Card.Title>
                <Card.Text>Book anytime, anywhere—your health doesn't wait!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h3 className="text-center text-primary my-4">Health Tips</h3>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Stay Hydrated</Card.Title>
                <Card.Text>Drink at least 8 glasses of water daily to keep your body functioning properly.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Regular Exercise</Card.Title>
                <Card.Text>Engage in at least 30 minutes of moderate physical activity 5 times a week.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
