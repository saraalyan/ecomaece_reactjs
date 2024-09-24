// MapEmbed.js
import React from 'react';

const MapEmbed = ({ mapUrl }) => {
  return (
    <div>
      <h1>عرض الخريطة</h1>
      <iframe
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="خريطة الموقع"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
