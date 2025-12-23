import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'patient', // default type
    tasks: [],
    appointments: [],
    reviews: []
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setAlertMessage('Please fill in all fields');
      setAlertVariant('danger');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setAlertMessage('Please enter a valid email address');
      setAlertVariant('danger');
      return false;
    }

    if (formData.password.length < 6) {
      setAlertMessage('Password must be at least 6 characters');
      setAlertVariant('danger');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowAlert(true);
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email is already registered
    const alreadyExists = existingUsers.some(user => user.email === formData.email);
    if (alreadyExists) {
      setAlertMessage('This email is already registered!');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    // Simulate password hashing (not secure, for demo only)
    const hashedPassword = btoa(formData.password); // base64 encoding
    const newUser = { ...formData, password: hashedPassword };

    // Save updated user list
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setAlertMessage('You have registered successfully!');
    setAlertVariant('success');
    setShowAlert(true);

    // Redirect after success
    setTimeout(() => {
      setShowAlert(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="signup-container">
      {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}

      <h2 className="signup-title">Sign Up</h2>

      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>

        <button type="submit" className="signup-button">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
