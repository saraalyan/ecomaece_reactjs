import React from 'react';
import { useSelector } from 'react-redux';

const NotFound = () => {
  // تحديد ما إذا كان الوضع هو dark mode أم لا من Redux
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  // أنماط CSS لكلا الوضعين
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f0f0f0', // تغيير خلفية الحاوية بناءً على الوضع
  };

  const contentStyle = {
    textAlign: 'center',
    background: isDarkMode ? '#2c2c2c' : '#ffffff', // تغيير خلفية المحتوى بناءً على الوضع
    padding: '40px',
    borderRadius: '10px',
    boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.1)', // تغيير الظل بناءً على الوضع
  };

  const titleStyle = {
    fontSize: '100px',
    margin: 0,
    color: isDarkMode ? '#ff5722' : '#ff5722', // يمكنك تخصيص الألوان وفقًا للوضع
  };

  const messageStyle = {
    fontSize: '24px',
    color: isDarkMode ? '#cccccc' : '#555555', // تغيير لون النص بناءً على الوضع
    margin: '10px 0 20px',
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: isDarkMode ? '#007bff' : '#007bff', // يمكنك تخصيص الألوان وفقًا للوضع
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: isDarkMode ? '#0056b3' : '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>404</h1>
        <p style={messageStyle}>Page Not Found</p>
        <a href="/" style={{ ...linkStyle, ':hover': linkHoverStyle }}>Go to Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
