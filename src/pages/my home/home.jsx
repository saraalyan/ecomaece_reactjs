import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import logo from '../../assests/images/logo1.png';
import Radium, { StyleRoot, keyframes } from 'radium';
import { useInView } from 'react-intersection-observer';
import Slider from './slider';
import Footer from '../../component/portofolio/footer';
import ServicesSection from './service';
import CustomComponent from './section2';
import DesignComponent from './section3';
import ServicesComponent from './section4';
import CustomComponent1 from './section5';
import WhatsAppIcon from '../../component/portofolio/whats';
import { useSelector } from 'react-redux';

// Define keyframes for Radium
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  fadeIn: {
    animation: `${fadeInUp} 1s ease-out`
  },
  hidden: {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 1s ease-out, transform 1s ease-out'
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 1s ease-out, transform 1s ease-out'
  }
};

// Custom hook to handle useInView logic
const useFeatureInView = (threshold = 1) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold });
  return { ref, inView };
};

const Home = () => {
  const isRTL = true;

  const feature1 = useFeatureInView();
  const feature2 = useFeatureInView();
  const feature3 = useFeatureInView();
  const feature4 = useFeatureInView();
  const feature5 = useFeatureInView();
  const feature6 = useFeatureInView();
  const feature7 = useFeatureInView();
  const feature8 = useFeatureInView();
  const feature9 = useFeatureInView();
  const feature10 = useFeatureInView();
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const footerStyle = {
    background: isDarkMode ? '#1e2120' : '#7f7967',
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
      <div  style={{ paddingTop: '5rem', height: '100vh',...footerStyle }}>
        <Slider />
        <CustomComponent/>
        <DesignComponent/>
        <ServicesComponent/>
        <ServicesSection/>
        <CustomComponent1/>

       
        <Footer/>
        <WhatsAppIcon/>
      </div>
  );
};

export default Radium(Home);
