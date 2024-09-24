import React from 'react';
import Radium, {  keyframes } from 'radium';
import Slider from './slider';
import ServicesSection from './service';
import CustomComponent from './section2';
import DesignComponent from './section3';
import ServicesComponent from './section4';
import CustomComponent1 from './section5';
import PartnersSection from './partener';
import MetalWork from './dd';
import { Helmet } from "react-helmet";
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

const Home = () => {
  const lang = useSelector ((state) => state.lang.lang); 

  return (
      <div className='' style={{ paddingTop: '4rem',  }}>

<Helmet>
    <title>{lang === 'ar' ? 'modernhomes شركه الابيات المواكبة' : 'modernhomes main page'}</title>
    <meta name="description" content={lang === 'ar' ? 'صفحة الاتصال الخاصة بشركه الابيات المواكبة modernhomes,شركة الأبيات المواكبة Modern Homes هي شريكك المثالي في تحويل منزلك إلى مساحة معيشية تعكس ذوقك الراقي. نحن متخصصون في الترميم والتشطيب الاحترافي لكامل منزلك، بما في ذلك دورات المياه والمطابخ والأثاث والديكورات. نقدم حلولاً متكاملة تضمن الراحة والسهولة للعميل، مع الالتزام بتقديم أسعار تنافسية تلبي احتياجاتك. دعنا نحقق لك رؤية المنزل الذي تحلم به، مع ضمان الجودة والراحة في كل خطوة.' : 'Our contact page for inquiries and support,Modern Homes is your ideal partner in transforming your house into a living space that reflects your refined taste. We specialize in the complete renovation and professional finishing of your entire home, including bathrooms, kitchens, furniture, and decor. We offer comprehensive solutions that ensure comfort and ease for our clients, while maintaining competitive prices to meet your needs. Let us bring your dream home vision to life, with a guarantee of quality and comfort every step of the way.'} />
    <meta name="keywords" content={lang === 'ar' ? 'اتصال, دعم, مبيعات, تجديد, تصليح, ترميم, تصميم داخلي, مقاول, تشطيب, مكتب تصاميم, ديزاين, تنظيم, تنفيذ, راحة, تنسيق, اثاث, كنب, غرفة نوم, غرفة العاب, زواج, فن, رسم, ابداع, اجهزة كهربائية, تعطير, باقه البيت المخملي, باقه النخبه, الباقه الفريده, الباقات, باقة قطن, باقه اسمارت, الباقه الذكية, استشاره مجانيه, اعمالنا, خدمات نقدمها, تصميم اسلوب حياة, تنظيم المنزل, تنفيذ مشاريع, تسليم مفتاح, باقات مناسبة للكل, بيوت ذكية, حلول ذكية, ضمانات, توفير الراحة' 
: 'contact, support, sales, renovation, repair, restoration, interior design, contractor, finishing, design office, design, organization, implementation, comfort, coordination, furniture, sofa, bedroom, playroom, wedding, art, drawing, creativity, electrical appliances, scenting, velvet home package, elite package, unique package, packages, cotton package, smart package, modern package, free consultation, our work, services we offer, life style design, home organization, project execution, turnkey delivery, packages suitable for everyone, smart homes, smart solutions, guarantees, providing comfort, clear pricing and static plan, bad module, no specific price (ask for more), client choose the service he needs, client choose the designs from the packages, client choose how many rooms, bathrooms, and kitchens he has in his house, client insert his house dimensions and how many floors by square meter, client insert his contact number or social media or emails, client choose the right time & date for calls or visits'} />
    </Helmet>
        <Slider />
        <CustomComponent/>
        <DesignComponent/>
    
        <ServicesSection/>
        <CustomComponent1/>
        <ServicesComponent/>
        <PartnersSection/>
      </div>

);
};

export default Radium(Home);
