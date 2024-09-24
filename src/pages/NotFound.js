import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f0f0f0',
  };

  const contentStyle = {
    textAlign: 'center',
    background: isDarkMode ? '#2c2c2c' : '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '100px',
    margin: 0,
    color: isDarkMode ? '#ff5722' : '#ff5722',
  };

  const messageStyle = {
    fontSize: '24px',
    color: isDarkMode ? '#cccccc' : '#555555',
    margin: '10px 0 20px',
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: isDarkMode ? '#007bff' : '#007bff',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>404</h1>
        <p style={messageStyle}>Page Not Found</p>
        <Link 
          to="/" 
          style={linkStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#0056b3' : '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#007bff' : '#007bff'}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
