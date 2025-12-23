import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const locations = [
  {
    city: "Chennai",
    address: "123 Health Street, Chennai, Tamil Nadu",
    contact: "+91 98765 43210",
    email: "chennai@healthconnect.com"
  },
  {
    city: "Trichy",
    address: "456 Wellness Road, Trichy, Tamil Nadu",
    contact: "+91 87654 32109",
    email: "trichy@healthconnect.com"
  },
  {
    city: "Hosur",
    address: "789 Care Avenue, Hosur, Tamil Nadu",
    contact: "+91 76543 21098",
    email: "hosur@healthconnect.com"
  }
];

const Locations = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Locations</h2>
      <Row>
        {locations.map((loc, idx) => (
          <Col md={4} sm={6} xs={12} key={idx}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success">{loc.city}</Card.Title>
                <Card.Text>
                  📍 <strong>Address:</strong> {loc.address} <br />
                  ☎️ <strong>Contact:</strong> {loc.contact} <br />
                  📧 <strong>Email:</strong> {loc.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Locations;
