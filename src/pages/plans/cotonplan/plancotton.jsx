import React from 'react';
import Radium, { keyframes } from 'radium';
import { useInView } from 'react-intersection-observer';
import Slider from './slider1';
import Footer from '../../../component/portofolio/footer';
import FeaturesTable from './tablefeature';
import HomeForm from './form';

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
    animation: `${fadeInUp} 1s ease-out`,
  },
  hidden: {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
};

// Custom Hook to create ref and inView state
const useCreateRefInView = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  return { ref, inView };
};

const COTTON = () => {
  const isRTL = true;

  const featureRef2 = useCreateRefInView();
  const featureRef6 = useCreateRefInView();
  // Repeat for other features...

  return (
    <div className="header-carousel" style={{ paddingTop: '4rem', height: '100vh' }}>
      <Slider />
      <FeaturesTable/>
    <HomeForm/>
      <Footer />
    </div>
  );
};

export default Radium(COTTON);
