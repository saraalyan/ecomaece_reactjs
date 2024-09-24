import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import cityProfileImage from '../../assests/kit/elite.jpg';
import cityProfileImage1 from '../../assests/kit/elite.png';
import cityProfileImage2 from '../../assests/kit/elite (1).png';
import cityProfileImage3 from '../../assests/kit/1.jpg';
import cityProfileImage4 from '../../assests/kit/2.jpg';
import cityProfileImage5 from '../../assests/kit/3.jpg';
import cityProfileImage6 from '../../assests/kit/elite (1).jpg';
import cityProfileImage7 from '../../assests/kit/elite (2).png';

import video1 from '../../assests/kit/WhatsApp Video 2024-09-02 at 19.08.54_c3fa2a96.mp4';
import video2 from '../../assests/kit/WhatsApp Video 2024-09-02 at 19.09.08_70f4f8fb.mp4';
import video3 from '../../assests/kit/WhatsApp Video 2024-09-02 at 19.09.18_6a9d79c7.mp4';
import video4 from '../../assests/kit/WhatsApp Video 2024-09-02 at 19.09.35_42b238fd.mp4';
import './Kitchens.css'; // External CSS
import MetalWork1 from '../my home/dd copy';

const media = [
  { type: 'image', src: cityProfileImage3, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage4, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage5, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage1, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage2, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage6, width: 4, height: 3 },
  { type: 'image', src: cityProfileImage7, width: 4, height: 3 },

];
const media1 = [
  
  { type: 'video', src: video2, title: 'Video 2' },
  { type: 'video', src: video1, title: 'Video 1' },
  { type: 'video', src: video4, title: 'Video 4' },
  { type: 'video', src: video3, title: 'Video 3' },
];

const translate = (lang, key) => {
  const translations = {
    en: {
      homeDecoration: "Modern Homes",
      introduction: "Kitchens",
      introduction1:"Realistic designs",
      introductionText: "We provide high-quality aluminum and alumetal kitchen designs that combine elegance and practicality. We are keen to implement kitchens according to the highest standards, as we pay attention to the smallest details to ensure an integrated kitchen that meets your needs. Whether you need a kitchen that includes the installation of plumbing, electricity, and tiles, or you want to design a modern kitchen without the installations, we guarantee you a perfect implementation with the highest levels of professionalism. We are committed to providing innovative solutions and custom designs that reflect your personal taste, while using the best materials to ensure durability and beauty that will last for years.",
    },
    ar: {
      homeDecoration: "Modern Homes",
      introduction: "المطابخ",
      introduction1:'تصميمات واقعيه',
      introductionText: "نحن نقدم تصاميم مطابخ الألمنيوم و الألوميتال بجودة عالية تجمع بين الأناقة والعملية. نحرص على تنفيذ المطابخ وفق أعلى المعايير، حيث نهتم بأدق التفاصيل لضمان مطبخ متكامل يلبي احتياجاتك. سواء كنت بحاجة إلى مطبخ يشمل تأسيس السباكة والكهرباء والبلاط، أو ترغب في تصميم مطبخ عصري دون التأسيسات، نضمن لك تنفيذًا متقنًا بأعلى مستويات الاحترافية. نحن ملتزمون بتقديم حلول مبتكرة وتصاميم مخصصة تعكس ذوقك الشخصي، مع استخدام أفضل المواد لضمان متانة وجمال يدوم لسنوات.",
    },
  };

  return translations[lang][key] || key;
};

const Kitchens = () => {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const lang = useSelector((state) => state.lang.lang);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const handleMediaLoad = () => setLoaded(true);
  const openLightbox = (index) => {
    setMediaIndex(index);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  return (
    <div className={`video-section ${isDarkMode ? 'form-dark-mode' : 'form-light-mode'}`} style={{    marginTop: '4.5rem',paddingTop:'0rem'}}>

    <div className='container'
      style={{
        color: isDarkMode ? '#ffffff' : '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '.75em',
        fontFamily:'cairo'
      }}
    >
      <section style={{ textAlign: 'center', padding: '2rem 0', width: '100%' }}>
        <div>
          <span style={{ fontSize: '18px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {translate(lang, 'homeDecoration')}
          </span>
        </div>
        <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '1rem' }}>
          {translate(lang, 'introduction')}
        </div>
        <div style={{ fontSize: '.9em', marginLeft: '10%', marginRight:'10%' }}>
          {translate(lang, 'introductionText')}
        </div>
      </section>

      {/* Image Gallery Section */}
      <div className="image-gallery thumbnail-item p-0">
        {media
          .filter(item => item.type === 'image')
          .map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={`Gallery ${index}`}
              onLoad={handleMediaLoad}
              style={{
              
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
              onClick={() => openLightbox(index)}
            />
          ))
        }
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={media[mediaIndex].src}
          nextSrc={media[(mediaIndex + 1) % media.length].src}
          prevSrc={media[(mediaIndex + media.length - 1) % media.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setMediaIndex((mediaIndex + media.length - 1) % media.length)}
          onMoveNextRequest={() => setMediaIndex((mediaIndex + 1) % media.length)}
        />
      )}
      <MetalWork1/>

      {/* Divider */}
      
      
      {/* Video Section */}
      <div className={`video-section ${isDarkMode ? 'form-dark-mode' : 'form-light-mode'}`}>
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#a6a5a1',
            marginRight: '10px',
          }}></div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>
          {translate(lang, 'introduction1')}
        </div>
        
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#a6a5a1',
            marginLeft: '10px'
          }}></div>
        </div>
      </div>
      <div className="video-grid container align-items-end">
          {media1
            .filter(item => item.type === 'video')
            .map((video, index) => (
              <video key={index} controls className="video-item">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  );
}

export default Kitchens;
