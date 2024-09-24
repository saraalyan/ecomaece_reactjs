import React, { useEffect } from 'react';
import Radium from 'radium';
import { useSelector } from 'react-redux';
import FeaturesTable from './featuretableExotic';
import HomeForm from '../cotonplan/form';
import Slider from './sliderExotic';

import { Helmet } from "react-helmet";

const Exotic = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const lang = useSelector ((state) => state.lang.lang); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

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
        <title>{lang === 'ar' ? 'ModernHomes باقة الفريده' : 'ModernHomes Exotic package '}</title>
        <meta name="description" content={lang === 'ar' ? 'مميزات باقه الفريده احدث التصاميم الخاصه لباقه الفريده  ارسال طلب خاص بباقة الفريده' : 'Features of the Exotic Package The latest special designs for the Exotic Package Send a special request for the Exotic Package'} />
        <meta name="keywords" content={lang === 'ar' ? 'اتصال, دعم, مبيعات, تجديد, تصليح, ترميم, تصميم داخلي, مقاول, تشطيب, مكتب تصاميم, ديزاين, تنظيم, تنفيذ, راحة, تنسيق, اثاث, كنب, غرفة نوم, غرفة العاب, زواج, فن, رسم, ابداع, اجهزة كهربائية, تعطير, باقه البيت المخملي, باقه النخبه, الباقه الفريده, الباقات, باقة الفريده, باقه اسمارت, الباقه الذكية, استشاره مجانيه, اعمالنا, خدمات نقدمها, تصميم اسلوب حياة, تنظيم المنزل, تنفيذ مشاريع, تسليم مفتاح, باقات مناسبة للكل, بيوت ذكية, حلول ذكية, ضمانات, توفير الراحة' 
: 'contact, support, sales, renovation, repair, restoration, interior design, contractor, finishing, design office, design, organization, implementation, comfort, coordination, furniture, sofa, bedroom, playroom, wedding, art, drawing, creativity, electrical appliances, scenting, velvet home package, Exotic package, unique package, packages, Exotic package, smart package, modern package, free consultation, our work, services we offer, life style design, home organization, project execution, turnkey delivery, packages suitable for everyone, smart homes, smart solutions, guarantees, providing comfort, clear pricing and static plan, bad module, no specific price (ask for more), client choose the service he needs, client choose the designs from the packages, client choose how many rooms, bathrooms, and kitchens he has in his house, client insert his house dimensions and how many floors by square meter, client insert his contact number or social media or emails, client choose the right time & date for calls or visits'} />
        </Helmet>
      <FeaturesTable />
      <HomeForm Slider={Slider} defaultPackage="Exotic Package" />

    </div>
);
};

export default Radium(Exotic);
