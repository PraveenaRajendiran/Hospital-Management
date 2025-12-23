import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure you have an AuthContext set up
import '../styles/LoginPage.css'; // Your CSS file

const LoginPage = () => {
  const [userType, setUserType] = useState('doctor'); // 'doctor' or 'patient'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); // 🔁 Uses login() method from context

  const handleLogin = () => {
    if (!userType || !username || !password) {
      setError("Please fill all fields and select user type.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem(userType));

    if (!storedUser) {
      setError(`No ${userType} user found. Please register first.`);
      return;
    }

    if (storedUser.name === username && storedUser.password === password) {
      setError('');
      setShowAlert(true);

      // Save current session
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      login(storedUser); // ⬅️ Pass to context

      // Redirect after short delay
      setTimeout(() => {
        if (userType === 'doctor') {
          navigate('/doctor-profile');
        } else {
          navigate('/patient-dashboard');
        }
      }, 1500);
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        {showAlert && <div className="custom-alert">Login Successful!</div>}
        {error && <div className="error-message">{error}</div>}

        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="form-select"
        >
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form-input"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-input"
        />

        <div className="login-buttons">
          <span className="forgot-link" onClick={() => navigate('/forgot-password')}>
            Forgot Password?
          </span>
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
