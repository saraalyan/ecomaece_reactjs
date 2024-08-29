import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import im1 from '../../assests/images/Untitled design (49).png';
import im2 from '../../assests/images/Untitled design (50).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './sev.css';

const ServicesComponent = () => {
  const lang = useSelector((state) => state.lang.lang);
  const imageRef = useRef(null);
  const serviceRefs = useRef([]);

  const services = [
    { en: "SUPPLY OF MATERIALS", ar: "توريد مواد" },
    { en: "INTERIOR DESIGN", ar: "تصميم داخلي" },
    { en: "FINISHING", ar: "تشطيب" },
    { en: "ELECTRICITY", ar: "كهرباء" },
    { en: "PLUMBING", ar: "سباكة" },
    { en: "PAINT", ar: "دهان" },
    { en: "GARDENS", ar: "حدائق" },
    { en: "CLEANLINESS", ar: "نظافة" },
    { en: "FURNITURE", ar: "أثاث" },
    { en: "LIGHTS", ar: "إضاءة" },
    { en: "KITCHENS", ar: "مطابخ" },
    { en: "ACCESSORIES", ar: "إكسسوارات" },
    { en: "DECORATION WORKS", ar: "أعمال الديكورات" },
    { en: "GYPSUM BOARD WORKS", ar: "أعمال جيبسوم بورد" },
    { en: "MAINTENANCE", ar: "صيانة" },
    { en: "SMART SOLUTIONS", ar: "حلول ذكية" },
    { en: "SMART HOMES", ar: "بيوت ذكية" },
    { en: "METAL WORKS", ar: "أعمال الحديد" },
    { en: "INTERIOR AND EXTERIOR DOORS", ar: "أبواب داخلية وخارجية" },
    { en: "ALUMINUM WORKS", ar: "أعمال الألومنيوم" },
    { en: "ELECTRONIC DEVICES", ar: "أجهزة إلكترونية" },
  ];

  const colors = ['#d5d0c7', '#c8b199', '#b1cbc2', '#9f8278'];

  const half = Math.ceil(services.length / 2);
  const firstColumnServices = services.slice(0, half);
  const secondColumnServices = services.slice(half);

  const flexDirection = lang === 'ar' ? 'row-reverse' : 'row';
  const textAlign = lang === 'ar' ? 'right' : 'left';

  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [lang]);

  return (
    <div style={{ ...styles.container, backgroundColor: isDarkMode ? '#1e2120' : '#f5f5f5' }}>
      <div className="col-12 col-lg-6" style={styles.leftColumn}>
        <div style={styles.imageContainer} ref={imageRef}>
          <img
            className='im1'
            src={im1}
            alt="Workers"
            style={styles.image}
          />
          <div className='d-flex'>
            <div style={styles.colorPalette}>
              <div style={{ ...styles.colorBox, backgroundColor: '#d5d0c7' }} />
              <div style={{ ...styles.colorBox, backgroundColor: '#5e4b4b' }} />
              <div style={{ ...styles.colorBox, backgroundColor: '#c8b199' }} />
              <div style={{ ...styles.colorBox, backgroundColor: '#b1cbc2' }} />
              <div style={{ ...styles.colorBox, backgroundColor: '#9f8278' }} />
            </div>
            <img
              className='im2'
              src={im2}
              alt="Staircase"
              style={styles.imageSmall}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6" style={styles.rightColumn}>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={{ ...styles.column, textAlign }}>
                {firstColumnServices.map((service, index) => (
                  <div
                    key={index}
                    ref={el => serviceRefs.current[index] = el}
                    style={{ ...styles.serviceRow, backgroundColor: colors[index % colors.length], textAlign, flexDirection }}
                  >
                    <FontAwesomeIcon icon={faCheck} style={styles.icon} />
                    <span>{lang === 'en' ? service.en : service.ar}</span>
                  </div>
                ))}
              </td>
              <td style={{ ...styles.column, textAlign }}>
                {secondColumnServices.map((service, index) => (
                  <div
                    key={index}
                    ref={el => serviceRefs.current[half + index] = el}
                    style={{ ...styles.serviceRow, backgroundColor: colors[index % colors.length], textAlign, flexDirection }}
                  >
                    <FontAwesomeIcon icon={faCheck} style={styles.icon} />
                    <span>{lang === 'en' ? service.en : service.ar}</span>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
  },
  leftColumn: {
    marginBottom: '20px',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '55%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '5px',
    transition: 'transform 0.3s ease',
  },
  imageSmall: {
    width: '50%',
    height: 'auto',
    marginLeft: '10px',
    borderRadius: '5px',
    transition: 'transform 0.3s ease',
  },
  colorPalette: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colorBox: {
    width: '30px',
    height: '30px',
    marginBottom: '5px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  column: {
    verticalAlign: 'top',
  },
  serviceRow: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  icon: {
    color: 'green',
    marginRight: '10px',
    marginLeft: '10px'
  },
};

export default ServicesComponent;
