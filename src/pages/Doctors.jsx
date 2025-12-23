import React from 'react';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import specialtiesData from '../pages/specialtiesData';
import '../styles/Doctor.css';

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Doctors = () => {
  const allDoctors = specialtiesData.flatMap(specialty =>
    specialty.doctors.map(doctor => ({
      ...doctor,
      specialty: doctor.specialty || specialty.title,
      experience: doctor.experience || '5+ Years'
    }))
  );

  const doctorChunks = chunkArray(allDoctors, 3); // 3 doctors per carousel slide

  const handleCardClick = (doctor) => {
    alert(`You clicked on Dr. ${doctor.name}`);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Our Doctors</h2>
      <Carousel interval={null}>
        {doctorChunks.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map((doc, index) => (
                <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                  <Card className="doctor-card" onClick={() => handleCardClick(doc)}>
                    <div className="doctor-image-container">
                      <Card.Img variant="top" src={doc.image} alt={doc.name} className="doctor-image" />
                    </div>
                    <Card.Body>
                      <Card.Title>{doc.name}</Card.Title>
                      <Card.Text><strong>Specialty:</strong> {doc.specialty}</Card.Text>
                      <Card.Text><strong>Experience:</strong> {doc.experience}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Doctors;
