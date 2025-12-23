import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import specialtiesData from './specialtiesData'; // Import your specialties data

const Specialities = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Specialties</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {specialtiesData.map((item, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.shortDesc}</Card.Text>
              </Card.Body>

              <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    navigate(`/specialties/${item.title.toLowerCase()}`)
                  }
                >
                  Read More
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Specialities;
