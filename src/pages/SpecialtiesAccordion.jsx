import React, { useState } from 'react';
import '../styles/SpecialtiesAccordion.css';
import specialtiesData from './specialtiesData';

const SpecialtiesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);  // Toggle open/close
  };

  return (
    <div className="specialties-container">
      <h2 className="specialties-title">Our Specialties</h2>
      
      {specialtiesData.map((specialty, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h4>{specialty.title}</h4>
          </div>
          {activeIndex === index && (
            <div className="accordion-body">
              <img src={specialty.image} alt={specialty.title} className="specialty-image" />
              <p className="specialty-desc">{specialty.shortDesc}</p>
              <p className="specialty-detail">{specialty.moreDetail}</p>
              <div className="services-list">
                <h5>Services</h5>
                <ul>
                  {specialty.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="conditions-list">
                <h5>Conditions Treated</h5>
                <ul>
                  {specialty.conditions.map((condition, idx) => (
                    <li key={idx}>{condition}</li>
                  ))}
                </ul>
              </div>
              <div className="doctors-list">
                <h5>Meet Our Doctors</h5>
                {specialty.doctors.map((doctor, idx) => (
                  <div key={idx} className="doctor">
                    <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                    <p>{doctor.name}</p>
                    <p>{doctor.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SpecialtiesAccordion;
