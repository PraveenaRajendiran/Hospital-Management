import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext'; // ✅ Import Auth context

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, logout, user } = useAuth(); // ✅ Get user as well

  const handleMenuClick = (path) => {
    setShowMenu(false); // Close the menu on navigation
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="navbar-container">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src={logo} alt="HealthConnect Logo" className="logo-image" />
        </div>

        <div className="navbar-buttons">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="mybutton" onClick={() => navigate('/doctors')}>Find Doctor</button>
          <button className="mybutton" onClick={() => navigate('/book-appointment')}>Book Appointment</button>
          <button className="mybutton" onClick={() => navigate('/contact')}>Contact Us</button>

          <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle">📞 Emergency</button>
            <div className="dropdown-menu">
              <button className="dropdown-item">Call 108</button>
              <button className="dropdown-item">Nearest Branch</button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Menu button for small screens */}
      <div className="menu-toggle-container">
        <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>
      </div>

      {/* Bottom Navbar */}
      <div className={`bottom-navbar ${showMenu ? 'show' : ''}`}>
        <div className="bottom-links">
          <button onClick={() => handleMenuClick('/about')} className="bottom-link">About Us</button>
          <button onClick={() => handleMenuClick('/services')} className="bottom-link">Centre of Excellences</button>
          <button onClick={() => handleMenuClick('/locations')} className="bottom-link">Locations</button>
          <button onClick={() => handleMenuClick('/faq')} className="bottom-link">FAQ</button>

          {/* ✅ Auth-based content */}
          {isAuthenticated ? (
        <>
            <button onClick={() => handleMenuClick('/profile')} className="bottom-link">
                  Welcome, <span className="username">{user?.name || 'User'}</span>
            </button>
           <button onClick={handleLogout} className="bottom-link">Logout</button>
        </>
        ) : (
         <>
           <button onClick={() => handleMenuClick('/login')} className="bottom-link">Login</button>
           <button onClick={() => handleMenuClick('/signup')} className="bottom-link">Signup</button>
        </>
       )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
