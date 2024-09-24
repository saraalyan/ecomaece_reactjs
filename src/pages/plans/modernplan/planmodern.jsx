import React, { useEffect } from 'react';
import Radium from 'radium';
import { useSelector } from 'react-redux';
import FeaturesTable from './feaaturetablemodern';
import HomeForm from '../cotonplan/form';
import Slider from './slidermodern';

import { Helmet } from "react-helmet";

const Modern = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lang = useSelector ((state) => state.lang.lang); 


  return (
    <div 
      className="container-fluid" 
      style={{ 
        paddingTop: '3.5rem', 
        backgroundColor: isDarkMode ? '#1e2120' : '#f5f5f5', 
        color: isDarkMode ? '#ffffff' : '#000000', 
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
      }}
    >

<Helmet>
        <title>{lang === 'ar' ? 'ModernHomes باقة المواكبة' : 'ModernHomes Modern package'}</title>
        <meta name="description" content={lang === 'ar' ? 'مميزات باقه المواكبة احدث التصاميم الخاصه لباقه المواكبة  ارسال طلب خاص بباقة المواكبة' : 'Features of the Modern Package The latest special designs for the Modern Package Send a special request for the Modern Package'} />
        <meta name="keywords" content={lang === 'ar' ? 'اتصال, دعم, مبيعات, تجديد, تصليح, ترميم, تصميم داخلي, مقاول, تشطيب, مكتب تصاميم, ديزاين, تنظيم, تنفيذ, راحة, تنسيق, اثاث, كنب, غرفة نوم, غرفة العاب, زواج, فن, رسم, ابداع, اجهزة كهربائية, تعطير, باقه البيت المخملي, باقه النخبه, الباقه المواكبة, الباقات, باقة المواكبة, باقه اسمارت, الباقه الذكية, استشاره مجانيه, اعمالنا, خدمات نقدمها, تصميم اسلوب حياة, تنظيم المنزل, تنفيذ مشاريع, تسليم مفتاح, باقات مناسبة للكل, بيوت ذكية, حلول ذكية, ضمانات, توفير الراحة' 
: 'contact, support, sales, renovation, repair, restoration, interior design, contractor, finishing, design office, design, organization, implementation, comfort, coordination, furniture, sofa, bedroom, playroom, wedding, art, drawing, creativity, electrical appliances, scenting, velvet home package, Modern package, unique package, packages, Modern package, smart package, modern package, free consultation, our work, services we offer, life style design, home organization, project execution, turnkey delivery, packages suitable for everyone, smart homes, smart solutions, guarantees, providing comfort, clear pricing and static plan, bad module, no specific price (ask for more), client choose the service he needs, client choose the designs from the packages, client choose how many rooms, bathrooms, and kitchens he has in his house, client insert his house dimensions and how many floors by square meter, client insert his contact number or social media or emails, client choose the right time & date for calls or visits'} />
        </Helmet>
    
      <FeaturesTable />
      <HomeForm Slider={Slider} defaultPackage="modern Package" />

    </div>
);
};

export default Radium(Modern);
