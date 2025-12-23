import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments'; // Appointment booking page
import Contact from './pages/Contact';

import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Faq from './pages/Faq';

import Locations from './pages/Locations';
import Specialities from './pages/Specialities';
import SpecialtyDetail from './pages/SpecialtyDetail';
import LoginPage from './pages/LoginPage';
import AccountRouter from './pages/AccountRouter';
import DoctorProfile from './pages/DoctorProfile';
import PatientDashboard from './pages/PatientDashboard';
import AccountPage from './pages/AccountPage';
import PatientReviewsPage from './pages/PatientReviewsPage';


function App() {
  const navigate = useNavigate();

  return (
    <AuthProvider>
      <div>
        <Navbar navigate={navigate} />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/specialties" element={<Specialities />} />
          <Route path="/specialties/:name" element={<SpecialtyDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* User Profile */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<AccountRouter/>} />
          <Route path="/" element={<LoginPage />} />
        <Route path="/doctor-dashboard" element={<DoctorProfile/>} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/account" element={<AccountPage/>} />
         

          {/* Appointment Booking */}
          <Route path="/book-appointment" element={<Appointments />} />
          <Route path="/patient" element={<PatientReviewsPage />} />
          {/* Legal */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
