import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // استخدام Link للتنقل
import im1 from '../../assests/images/Untitled (720 x 500 px) (1).png';

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
      className="container design-container fade-in"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-center",
        padding: "20px",
        backgroundColor: "var(--background-color-light)",
        flexWrap: "wrap",
      }}
    >
      <div className="col-12 col-lg-6"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-center",
          position: "relative",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <img
          src={im1}
          alt="Modern Living Room"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="text-container d-flex align-items-center col-12 col-lg-6 " style={{ color: "var(--text-color-light)",flexDirection:'column',justifyContent:'center' }}>
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
        <Link to="/designs" style={{ textDecoration: 'none' }}>
        <button className="btn btn-primary" style={{ marginTop: "20px"  ,backgroundColor:'rgb(90, 89, 88)',border:'none'}}>
          {lang === 'en' ? "View Designs" : "عرض التصاميم"}
        </button>
      </Link>
      </div>
     
    </div>
  );
};

export default DesignComponent;
