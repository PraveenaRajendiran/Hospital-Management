import React from 'react';
import { Navigate } from 'react-router-dom';
import DoctorProfile from './DoctorProfile';
import PatientDashboard from './PatientDashboard';

const AccountRouter = () => {
  const userType = localStorage.getItem('userType');  // Store the userType in localStorage

  if (!userType) {
    return <Navigate to="/login" />;
  }

  if (userType === 'doctor') {
    return <DoctorProfile />;
  } else if (userType === 'patient') {
    return <PatientDashboard />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AccountRouter;
