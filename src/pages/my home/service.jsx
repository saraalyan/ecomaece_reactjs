import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fade, Zoom } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';  // استيراد أيقونة النجمة

import phoneIcon from '../../assests/Untitled design (5)/2.jpg';
import moneyIcon from '../../assests/Untitled design (5)/1.jpg';
import roadIcon from '../../assests/Untitled design (5)/4.jpg';
import umbrellaIcon from '../../assests/Untitled design (5)/6.jpg';
import buildingIcon from '../../assests/Untitled design (5)/5.jpg';
import carIcon from '../../assests/Untitled design (5)/3.jpg';

import cottonImage from '../../assests/images/5.jpg';
import smartImage from '../../assests/images/6.jpg';
import velvetImage from '../../assests/images/3.jpg';
import eliteImage from '../../assests/images/1.jpg';
import exoticImage from '../../assests/images/2.jpg';
import modernImage from '../../assests/images/4.jpg';

import './sev.css';

const services = [
  {
    id: 6,
  
    title: 'Smart Package',
    title2: 'الباقة الذكية',
    description: 'اختيار ذكي واقتصادي بلمسات رائعة...',
    icon: moneyIcon,
    image: smartImage,
    stars: 2
  },
  {
    id: 1,
   
    title: 'Cotton Package',
    title2: 'باقة قطن',
    description: 'تصاميم مريحة ومواد دافئة مع حيل حياتية...',
    icon: phoneIcon,
    image: cottonImage,
    stars: 3
  },
  {
    id: 2,


    title: 'Modern Package',
    title2: 'الباقة المواكبة',
    description: 'الترقية لنمط حياة مواكب بتصاميم ومواد متطورة...',
    icon: carIcon,
    image: modernImage,
    stars: 4

    
  },
  {
    id: 4,
    title: 'The Velvet Home Package',
    title2: 'باقة البيت المخملي',
    description: 'تصميمات ومواد فاخرة لأسلوب حياة فخم...',
    icon: roadIcon,
    image: velvetImage,
    stars: 5
  },
  {
    id: 5,
    title: 'Exotic Package',
    title2: 'باقة اكزوتيك',
    description: 'تصاميم فريدة واستثنائية بمواد خاصة...',
    icon: buildingIcon,
    image: exoticImage,
    stars: 6
  },
  {
    id: 3,
  
    title: 'Elite Package',
    title2: 'باقة النخبة',
    description: 'تصاميم ومواد فريدة تميزك عن غيرك...',
    icon: umbrellaIcon,
    image: eliteImage,
    stars: 7
  }
];

const ServicesSection = () => {
  const history = useHistory();
  const lang = useSelector((state) => state.lang.lang);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const handleNavigate = (title) => {
    history.push(`/plans/${title}`);
  };

  const renderStars = (count) => {
    return (
      <div className="star-rating">
        {[...Array(count)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="star" style={{ color: '#FFD700', marginRight: '5px' }} />
        ))}
      </div>
    );
  };

  return (
    <div className='container-fluid service' style={{ backgroundColor: isDarkMode ? '#1e2120' : '#f5f5f5' , fontSize: '1em',
      fontWeight: 'bold',
      fontFamily:'cairo'}}>
      <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="text-center mx-auto pb-5 mb-3" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">
            {lang === 'en' ? 'pakages' : 'الباقات'}
          </h1>
          <p className="mb-0"style={{fontWeight:'normal',fontSize:'18px'}}>
            {lang === 'en'
              ? 'We integrate home organizing with smart products and ideas in the interior design to enhance your daily life and comfort. We work with you to create a customized plan that meets your needs and fits your lifestyle, using innovative and intelligent solutions. Choose from our six packages, ranging from essentials to luxury, to transform your space into a stylish and functional home that makes your routine easier and more enjoyable'
              : 'ندمج تنظيم المنزل بإستخدام منتجات و افكار ذكية في التصميم الداخلي لتحسين حياتك اليومية وراحتك. نحن نعمل معك لوضع خطة مخصصة تلبي احتياجاتك وتناسب نمط حياتك، باستخدام حلول ذكية ومبتكرة. اختر من بين باقاتنا الستة، من الأساسيات إلى الفخامة، لنحول مساحتك إلى منزل أنيق وعملي يجعل روتينك أسهل وأكثر إمتاعًا'}
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <Zoom delay={index * 100} duration={1000} reset>
                <div className="service-item text-center">
                  <Fade bottom duration={1000} delay={500} reset>
                    <img src={service.image} alt={`${service.title} image`} className="service-image"  />
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} style={{borderRadius:'9999px'}}/>
                    </div>
                    {renderStars(service.stars)} 
                  </Fade>
                  <h5 className="mt-4"style={{color:'black'}}>{lang === 'en' ? service.title : service.title2}</h5>
                  <button
                    className="btn mt-3"
                    style={{ background: '#5a5958', color: 'white' }}
                    onClick={() => handleNavigate(service.title)}
                  >
                    {lang === 'en' ? 'View Plan' : 'عرض الخطة'}
                  </button>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
