import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import im1 from '../../assests/images/Untitled design (53).png';
import im2 from '../../assests/images/Untitled design (54).png';

const DesignComponent = () => {
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
        } else {
          entry.target.classList.remove('visible');
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

  // Set data-theme attribute based on dark mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div
      ref={containerRef}
      className="design-container fade-in"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "var(--background-color-light)",
        flexWrap: "wrap",
        paddingTop: '7rem',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <img
          src={im2}
          alt="Elegant Bathroom"
          style={{
            width: "40%",
            height: "auto",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        />
        <img
          src={im1}
          alt="Modern Living Room"
          style={{
            width: "50%",
            height: "auto",
            borderRadius: "10px",
            marginTop: "-20%",
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>
      <div className="text-container" style={{ color: "var(--text-color-light)" }}>
        <p className={lang === 'en' ? "english-text" : "arabic-text"} style={{ color: "var(--text-color-light)" }}>
          {lang === 'en'
            ? (
              <>
                In your home or office, we aim to create beauty and sophistication wherever you are,<br />
                and we design your home or office for you to be in the latest modern and elegant
                architectural style.
              </>
            )
            : (
              <>
                في منزلك أو مكتبك نهدف لخلق الجمال والرقي أينما تواجدت<br />
                و نصمم لك منزلك او مكتبك لكي تكون<br />
                على احدث طراز معماري حديث وانيق
              </>
            )
          }
        </p>
      </div>
    </div>
  );
};

export default DesignComponent;
