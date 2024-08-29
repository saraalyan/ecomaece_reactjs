import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './sev.css';
import im from '../../assests/images/Untitled design (52).png';

const CustomComponent = () => {
  const lang = useSelector((state) => state.lang.lang);
  const containerRef = useRef(null);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const footerStyle = {
    backgroundColor: isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: isDarkMode ? 'var(--text-color-dark)' : 'var(--text-color-light)',
  };

  return (
    <div
      ref={containerRef}
      className="custom-container "
      style={footerStyle}
    >
      <div className="image-container">
        <img
          src={im}
          alt="Interior Design"
          className="main-image hidden"
        />
      </div>
      <div className="text-container">
        {lang === 'en' ? (
          <>
            <p className="english-text">
              Because we believed in our vision to be the first choice for customers in our field<br />
              To provide everything related to design, interior
            </p>
            <p className="english-text">
              And to meet all the client's requirements and visions with the highest quality and competitive prices
            </p>
          </>
        ) : (
          <>
            <p className="arabic-text">
              لأننا آمنا برؤيتنا بأن نكون الخيار الأول للعملاء في مجالنا
            </p>
            <p className="arabic-text">
              بأن نوفر كل ما يتعلق بالتصميم والتنفيذ الداخلي
            </p>
            <p className="arabic-text">
              وإرضاء كافة مطالب وتصورات العميل بأعلى جودة وأسعار تنافسية
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomComponent;
