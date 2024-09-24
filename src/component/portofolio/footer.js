import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import log from '../../assests/images/logo1.png';
import slogan from '../../assests/company/1.png';
import slogan1 from '../../assests/images/dribaa.png';
import profilePDF from '../../assests/PROFILE - 30 PC.pdf'; // استيراد ملف البروفايل
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const lang = useSelector((state) => state.lang.lang);

  // دالة للنزول إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`footer ${isDarkMode ? 'footer-dark-mode' : 'footer-light-mode'} ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className='container'>
        {/* الجزء العلوي المميز */}
        <div className='footer-top'>
          <Link to="/" onClick={scrollToTop}>
            <img src={log} className="footer-logo" alt="main_logo" />
          </Link>
          <div className='footer-mission'>
            <p>
              {lang === 'en'
                ? 'Our mission is to be part of your journey in transforming your home into a modern home with beautiful and elegant spaces, modern design and contemporary atmosphere.'
                : 'مهمتنا أن نكون جزءاً من رحلتك في تحويل منزلك الى منزل مواكب بمساحات جميلة  وأنيقة بتصميم عصري وأجواء معاصرة.'}
            </p>
          </div>
          <div className='footer-social-icons'>
            <a href="https://www.instagram.com/modern_homes.sa?igsh=MXZoOTZmcHN4cHJlcA==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a href="https://www.tiktok.com/@modernhomes1?_t=8paqug0IKdL&_r=1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="2xl" />
            </a>
            <a href="https://x.com/Modernhomes_sa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2xl" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=966549400646" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='footer-help-support col-md-4 mb-4 d-flex justify-content-center'style={{flexDirection:'column',alignItems:'center'}}>
          <h6>{lang === 'en' ? 'Help & Support' : 'المساعدة والدعم'}</h6>
            <ul>
              <li><Link to="/contact-us" onClick={scrollToTop}>{lang === 'en' ? 'Contact Us' : 'اتصل بنا'}</Link></li>
              <li><Link to="/Company" onClick={scrollToTop}>{lang === 'en' ? 'Company' : 'الشركات'}</Link></li>
             
            </ul>
          </div>
          <div className='footer-help-support col-md-4 mb-4 d-flex justify-content-center'style={{flexDirection:'column',alignItems:'center'}}>
            <h6>{lang === 'en' ? 'Profile Pages' : 'الصفحات التعريفية'}</h6>
            <ul>
              <li><Link to="/About-Us" onClick={scrollToTop}>{lang === 'en' ? 'About Us' : 'من نحن'}</Link></li>
              <li>
                <a href={profilePDF} download >
                  {lang === 'en' ? 'Profile' : 'البروفايل'}
                </a>
              </li>
            </ul>
            
          </div>
          
          <div className='footer-help-support col-md-4 mb-4 d-flex justify-content-center'style={{flexDirection:'column',alignItems:'center'}}>
            <img src={slogan1} className="footer-slogan-footer" alt="slogan" />
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <img src={slogan} className="footer-slogan-footer" alt="slogan" />
        <p>
          {lang === 'en'
            ? 'All rights reserved © MODERN HOMES'
            : 'جميع الحقوق محفوظة © MODERN HOMES'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
