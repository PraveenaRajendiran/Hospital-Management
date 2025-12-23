import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import specialtiesData from './specialtiesData';

const SpecialtyDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate(); // ✅ Correct placement

  const specialty = specialtiesData.find(
    (item) => item.title.toLowerCase() === name.toLowerCase()
  );

  if (!specialty) {
    return <p className="text-center mt-5">Specialty not found.</p>;
  }

  return (
    <Container className="my-5">
      <Row>
        {/* Left Side: Image */}
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={specialty.image}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </Card>
        </Col>

        {/* Right Side: Details */}
        <Col md={6}>
          <h2>{specialty.title}</h2>
          <p>{specialty.moreDetail}</p>

          {/* Services */}
          <h4>Our Services</h4>
          <ListGroup className="mb-3">
            {specialty.services.map((service, idx) => (
              <ListGroup.Item key={idx}>{service}</ListGroup.Item>
            ))}
          </ListGroup>

          {/* Conditions */}
          <h4>Conditions Treated</h4>
          <ListGroup className="mb-3">
            {specialty.conditions.map((condition, idx) => (
              <ListGroup.Item key={idx}>{condition}</ListGroup.Item>
            ))}
          </ListGroup>

          {/* Doctors */}
          <h4>Meet Our Doctors</h4>
          <Row>
            {specialty.doctors.map((doctor, index) => (
              <Col key={index} md={4}>
                <Card className="mb-4">
                  <Card.Img
                    variant="top"
                    src={doctor.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>{doctor.specialty}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ✅ Correct Button Placement */}
          <Button variant="primary" onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SpecialtyDetail;
