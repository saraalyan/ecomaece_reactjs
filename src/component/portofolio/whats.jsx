import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=966549400646"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.iconContainer}
    >
      <FaWhatsapp style={styles.icon} />
    </a>
  );
};

const styles = {
  iconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  icon: {
    color: 'white',
    fontSize: '30px',
  },
};

export default WhatsAppIcon;
