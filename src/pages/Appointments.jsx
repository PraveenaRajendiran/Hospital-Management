import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import specialtiesData from './specialtiesData'; // Your doctors + specialties

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', date: '', doctor: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const loggedInPatient = JSON.parse(localStorage.getItem('patient')) || null;
    if (!loggedInPatient) {
      alert('No patient logged in. Please login first.');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      date: formData.date,
      doctor: formData.doctor,
      status: 'Pending',
      review: ''
    };

    const updatedAppointments = [...(loggedInPatient.appointments || []), newAppointment];
    const updatedPatient = { ...loggedInPatient, appointments: updatedAppointments };

    localStorage.setItem('patient', JSON.stringify(updatedPatient));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    // Clear form
    setFormData({ name: '', email: '', date: '', doctor: '' });
  };

  // Get doctors from specialtiesData
  const doctorsList = specialtiesData.flatMap(specialty =>
    specialty.doctors.map(doctor => ({
      name: doctor.name,
      specialty: specialty.title,
    }))
  );

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book an Appointment</h2>

      {submitted && (
        <Alert variant="success">
          Appointment booked for {formData.name} with {formData.doctor} on {formData.date}!
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label>Full Name</label><br />
          <input type="text" name="name" required onChange={handleChange} value={formData.name} style={inputStyle} />
        </div>

        <div style={formGroupStyle}>
          <label>Email Address</label><br />
          <input type="email" name="email" required onChange={handleChange} value={formData.email} style={inputStyle} />
        </div>

        <div style={formGroupStyle}>
          <label>Preferred Date</label><br />
          <input type="date" name="date" required onChange={handleChange} value={formData.date} style={inputStyle} />
        </div>

        <div style={formGroupStyle}>
          <label>Select Doctor</label><br />
          <select name="doctor" required onChange={handleChange} value={formData.doctor} style={inputStyle}>
            <option value="">Choose...</option>
            {doctorsList.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" style={buttonStyle}>Book Appointment</button>
      </form>
    </div>
  );
};

// --- Styles ---
const containerStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px'
};

const formGroupStyle = { marginBottom: '15px' };

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginTop: '5px',
  fontSize: '16px'
};

const buttonStyle = {
  backgroundColor: '#d5006d',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Appointments;
