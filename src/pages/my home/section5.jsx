import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './sev.css';
import im from '../../assests/images/Untitled design (51).png';

const CustomComponent1 = () => {
  const lang = useSelector((state) => state.lang.lang);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // استخدام نافذة العرض كجذر
      rootMargin: '0px',
      threshold: 0.1 // نسبة الظهور المطلوبة للتفعيل
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
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

  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const footerStyle = {
    backgroundColor: isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: isDarkMode ? 'var(--text-color-dark)' : 'var(--text-color-light)',
  };

  return (
    <div
      ref={containerRef}
      className="custom-container  fade-in"
      style={{
        ...footerStyle,
        padding: '20px',
        backgroundColor: 'var(--padding-color-light)' 
      }}
    >
      <div className="image-container d-flex justify-content-center">
        <img src={im} alt="Interior Design" className="main-image" />
      </div>
      <div className="text-container">
        <h3 className='pb-2 text-center'>
          {lang === 'en' ? 'Our main services include' : 'خدماتنا الرئيسيه تشمل'}
        </h3>
        <p className={lang === 'en' ? "english-text" : "arabic-text"}>
          {lang === 'en'
            ? 'Because we believed in our vision to be the first choice for customers in our field'
            : 'لأننا آمنا برؤيتنا بأن نكون الخيار الأول للعملاء في مجالنا'}
        </p>
        <p className={lang === 'en' ? "english-text" : "arabic-text"}>
          {lang === 'en'
            ? 'To provide everything related to design, interior implementation and satisfaction'
            : 'بأن نوفر كل ما يتعلق بالتصميم والتنفيذ الداخلي وارضاء كافة مطالب وتصورات العميل بأعلى جودة واسعار تنافسية'}
        </p>
        <p className={lang === 'en' ? "english-text" : "arabic-text"}>
          {lang === 'en'
            ? 'We meet all the customer\'s demands and perceptions with the highest quality and competitive prices'
            : 'تلبية كافة مطالب وتصورات العميل بأعلى جودة واسعار تنافسية'}
        </p>
      </div>
    </div>
  );
};

export default CustomComponent1;
