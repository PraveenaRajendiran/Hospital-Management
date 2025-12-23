import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const specialties = [
    {
      title: 'Neuro Science',
      description: 'Expert care from top neurologists and neuro surgeons.',
      route: '/specialties/neurology',
    },
    {
      title: 'Orthopaedics',
      description: 'Joint and bone specialists offering modern treatment.',
      route: '/specialties/orthopedics',
    },
    {
      title: 'Gastroenterology',
      description: 'Comprehensive care for liver, pancreas and stomach.',
      route: '/specialties/gastroenterology',
    },
    {
      title: 'Psychotherapy',
      description: 'Holistic mental health support and therapy programs.',
      route: '/specialties/psychotherapy',
    },
  ];

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4" style={{ fontWeight: 'bold' }}>Centers of Excellence</h2>
      <Row className="justify-content-center">
        {specialties.map((specialty, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card
              style={{ borderRadius: '12px', height: '100%', cursor: 'pointer' }}
              onClick={() => navigate(specialty.route)}
            >
              <Card.Body>
                <Card.Title>{specialty.title}</Card.Title>
                <Card.Text>{specialty.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="primary" onClick={() => navigate('/specialties')}>
        See all Specialties
      </Button>
    </Container>
  );
};

export default Services;
