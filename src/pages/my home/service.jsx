import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fade, Zoom } from 'react-reveal';
import phoneIcon from '../../assests/images/cotton-logo.png';
import moneyIcon from '../../assests/images/smart-logo.png';
import roadIcon from '../../assests/images/velvet-home-logo.png';
import umbrellaIcon from '../../assests/images/elite-logo.png';
import buildingIcon from '../../assests/images/exotic-logo.png';
import carIcon from '../../assests/images/modern-home-logo.png';

import cottonImage from '../../assests/images/Dark Home Décor Ideas Instagram Post (5).png';
import smartImage from '../../assests/images/Dark Home Décor Ideas Instagram Post (6).png';
import velvetImage from '../../assests/images/Dark Home Décor Ideas Instagram Post (2).png';
import eliteImage from '../../assests/images/Dark Home Décor Ideas Instagram Post (7).png';
import exoticImage from '../../assests/images/Dark Home Décor Ideas Instagram Post (4).png';
import modernImage from '../../assests/images/Dark Home Décor Ideas Instagram Post (1).png';

import './sev.css';

const services = [
  {
    id: 6,
    title: 'modern Package',
    title2: 'الباقة المواكبة',
    description: 'الترقية لنمط حياة مواكب بتصاميم ومواد متطورة تتبع أحدث الصيحات في الديكور العصري و تعزز أسلوب حياتك مع تشطيب رائع',
    icon: carIcon,
    image: modernImage
  },
  {
    id: 1,
    title: 'cotton Package',
    title2: 'باقة قطن',
    description: 'تصاميم مريحة ومواد دافئة مع حيل حياتية لإسهام في جو منزلي مع التركيز على التشطيب الرائع',
    icon: phoneIcon,
    image: cottonImage
  },
  {
    id: 2,
    title: 'Smart Package',
    title2: 'الباقة الذكية',
    description: 'اختيار ذكي واقتصادي بلمسات رائعة وتشطيب عالي الجودة',
    icon: moneyIcon,
    image: smartImage
  },
  {
    id: 4,
    title: 'Elite Package',
    title2: 'باقة النخبة',
    description: 'تصاميم ومواد فريدة تميزك عن غيرك. وأسلوب حياة يتماشي مع خيالك الفريد. و لتقديم أعمال فنية حصرية مخصصة لأسلوب حياتك، وكلها تكتمل بلمسة تشطيب فائقة الاستثنائية والتفصيل',
    icon: umbrellaIcon,
    image: eliteImage
  },
  {
    id: 5,
    title: 'Exotic Package',
    title2: 'باقة اكزوتيك',
    description: 'تصاميم فريدة واستثنائية بمواد خاصة وغريبة لتشعر بالتميز، نمط حياة ينسجم مع لغزك مع أحدث صيحات الديكور. ويرقي مستوى حسك الفني، بلمسات',
    icon: buildingIcon,
    image: exoticImage
  },
  {
    id: 3,
    title: 'The Velvet Home Package',
    title2: 'باقة البيت المخملي',
    description: 'تصميمات ومواد فاخرة لأسلوب حياة فخم، تتميز بأحدث صيحات الديكور، وترتقي بمنزلك بتشطيبات حرقية رائعة',
    icon: roadIcon,
    image: velvetImage
  }
];

const ServicesSection = () => {
  const history = useHistory();
  const lang = useSelector((state) => state.lang.lang);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const handleNavigate = (title) => {
    history.push(`/plans/${title}`);
  };

  return (
    <div className='container-fluid service'style={{ backgroundColor: isDarkMode ? '#1e2120' : '#f5f5f5' }}>
      <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="text-center mx-auto pb-5 mb-3" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">
            {lang === 'en' ? 'Plans' : 'الباقات'}
          </h1>
          <p className="mb-0">
            {lang === 'en'
              ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,'
              : 'هذا النص مثال على ما يمكن أن يتم كتابته وتعديله ليعكس النصوص العربية المختلفة التي قد تكون جزءًا من مشروعك، سواء كانت نصوصاً تعريفية أو إرشادية أو ترويجية.'}
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <Zoom delay={index * 100} duration={1000} reset>
                <div className="service-item text-center">
                  <Fade bottom duration={1000} delay={500} reset>
                    <img src={service.image} alt={`${service.title} image`} className="service-image" />
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                  </Fade>
                  <h5 className="mt-4">{lang === 'en' ? service.title : service.title2}</h5>
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
