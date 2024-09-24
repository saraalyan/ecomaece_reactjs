
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cot from '../../../assests/images/modern-home-logo - Copy.png';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'يصمم من الاقتراحات من قبل العميل' },
    { feature: 'العمالة', included: 'قياسي' },
    { feature: 'احواض المغاسل', included: 'رخام جاهز - تصنيف (ج)' },
    { feature: 'الكراسي و المراوش', included: 'معلق - تصنيف (ج)' },
    { feature: 'بديل الرخام او احجار', included: 'قياسي' },
    { feature: 'سيراميك', included: 'غير مطابق' },
    { feature: 'بروسلان', included: 'قياسي' },
    { feature: 'رخام', included: 'يشمل للحد الاعلى' },
    { feature: 'تجويفات جدارية', included: 'قياسي' },
    { feature: 'ابواب', included: 'زجاج معتم' },
    { feature: 'شبابيك', included: 'للحد الاعلى (Shutter)' },
    { feature: 'الاسقف', included: 'للحد الاعلى (اسمنتي)' },
    { feature: 'دهان', included: 'جوتن ديوروتان' },
    { feature: 'باركيه', included: 'باركيه المصفح (Laminate Parquet)' },
    { feature: 'ديكورات جدارية', included: 'بورسلان' },
    { feature: 'ورق حائط', included: 'يشمل' },
    { feature: 'اجهزة الكترونية', included: 'اضافة / مميزات اكثر' },
    { feature: 'لوحات', included: 'كانفس' },
    { feature: 'السجاد', included: 'مودرن' },
    { feature: 'النجف و الاضاءات', included: 'اضاءة مغنطيسية و نجف ستريب' },
    { feature: 'كنب ضيوف', included: 'تفصيل - تصنيف (ج)' },
    { feature: 'الخزائن', included: 'تفصيل يشمل الجزيرة - تصنيف (ج)' },
    { feature: 'غرفة نوم رئيسية', included: 'تفصيل - تصنيف (ج)' },
    { feature: 'غرفة نوم لشخصين منفصلة', included: 'تفصيل - تصنيف (ج)' },
    { feature: 'غرفة اطفال', included: 'تفصيل - تصنيف (ج)' },
    { feature: 'اكسسوارات و تحف', included: 'تفصيل' },
    { feature: 'المطابخ', included: 'خشب' },
    { feature: 'البلكونه', included: 'ديكور شاشة او سينما' },
    { feature: 'الحوش الخارجي', included: 'شلالات موديرن' },
    { feature: 'تنظيم المنزل', included: 'الايتيكيت و طاولات ذكية' },
    { feature: 'ذكاء البيت', included: '"يشمل للحد الاعلى نظام ذكي مع اليكسيا"' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Designed from client suggestions' },
    { feature: 'Labor', included: 'Standard' },
    { feature: 'Sink Basins', included: 'Ready marble - Classification (C)' },
    { feature: 'Chairs and Showers', included: 'Hanging - Classification (C)' },
    { feature: 'Marble or Stone Substitute', included: 'Standard' },
    { feature: 'Ceramic', included: 'Not compliant' },
    { feature: 'Porcelain', included: 'Standard' },
    { feature: 'Marble', included: 'Included at maximum level' },
    { feature: 'Wall Niches', included: 'Standard' },
    { feature: 'Doors', included: 'Opaque glass' },
    { feature: 'Windows', included: 'Maximum (Shutter)' },
    { feature: 'Ceilings', included: 'Maximum (Cement)' },
    { feature: 'Paint', included: 'Jotun Duratan' },
    { feature: 'Parquet', included: 'Laminate Parquet' },
    { feature: 'Wall Decorations', included: 'Porcelain' },
    { feature: 'Wallpaper', included: 'Included' },
    { feature: 'Electronic Devices', included: 'Additional/More features' },
    { feature: 'Artworks', included: 'Canvas' },
    { feature: 'Carpets', included: 'Modern' },
    { feature: 'Chandeliers and Lights', included: 'Magnetic lighting and strip chandeliers' },
    { feature: 'Guest Sofa', included: 'Custom - Classification (C)' },
    { feature: 'Closets', included: 'Custom includes island - Classification (C)' },
    { feature: 'Master Bedroom', included: 'Custom - Classification (C)' },
    { feature: 'Double Bedroom', included: 'Custom - Classification (C)' },
    { feature: 'Children’s Room', included: 'Custom - Classification (C)' },
    { feature: 'Accessories and Ornaments', included: 'Custom' },
    { feature: 'Kitchens', included: 'Wood' },
    { feature: 'Balcony', included: 'Screen or cinema decor' },
    { feature: 'Outdoor Patio', included: 'Modern waterfalls' },
    { feature: 'Home Organization', included: 'Etiquette and smart tables' },
    { feature: 'Smart Home', included: '"Included at maximum level, smart system with Alexa"' },
  ],
};


const FeaturesTableModern = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [visibleCount, setVisibleCount] = useState(4); // الحالة لتتبع عدد الصفوف المعروضة

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // زيادة عدد الصفوف عند النقر
  };

  return (
    <div className='container-fluid mt-3'
      style={{
        margin: '20px auto',
        padding: '10px',
        backgroundColor: ' #7f7967',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        direction: lang === 'ar' ? 'rtl' : 'ltr',
        width: '90%',
        fontSize: '1em',
        fontWeight: 'bold',
        fontFamily:'cairo'
      }}
    >
      <Row style={{background:'#FFECD5', marginLeft:'0.1rem', marginRight:'0.1rem', borderTopLeftRadius:'8px',
            borderTopRightRadius:'8px'}}>
        <div className='col-11 col-md-4' style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            
            flexDirection: 'column',
            borderTopLeftRadius:'8px',
            borderTopRightRadius:'8px'
        }}>      
          <img src={cot} alt="Cotton Image" width={'70%'} style={{margin:'1rem'}} />
        </div>
        <div className='col-12 col-md-8' style={{
            justifyContent: 'center',
            alignItems: 'center',
            
            display: 'flex',
            flexDirection: 'column'
        }}>
          <h3 className='text-center'style={{color:'BLACK'}}> 
            {lang === 'ar' ? 'الباقة المواكبة' : 'Modern Package'}
          </h3>
          <p className='text-center'>
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
          </p>
          <h6 className='text-center'style={{color:'BLACK'}}>
          {lang === 'ar' ? 'الترقية لنمط حياة مواكب بتصاميم ومواد متطورة تتبع أحدث الصيحات في الديكور العصري و تعزز أسلوب حياتك مع تشطيب رائع' : 'Upgrading to a contemporary lifestyle with sophisticated designs and materials, following the latest trends in modern decors, enhancing your lifestyle with superb finishing.'}
          </h6>
        </div>   
      </Row>

      <table
        style={{
          width: '100%',
          borderCollapse:"separate",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '12px 15px',
                textAlign: 'center',
                verticalAlign: 'middle',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#E3DFDC',
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              {lang === 'ar' ? 'العنصر' : 'Feature'}
            </th>
            <th
              style={{
                padding: '12px 15px',
                textAlign: 'center',
                verticalAlign: 'middle',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#E3DFDC',
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              {lang === 'ar' ? 'يشمل' : 'Included'}
            </th>
          </tr>
        </thead>
        <tbody>
          {features[lang].slice(0, visibleCount).map((feature, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F2F2F2',
                borderBottom: '1px solid #ddd',
                cursor: 'pointer',
              }}
            >
              <td
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  padding: '10px',
                  color: '#4A4A4A',
                }}
              >
                {feature.feature}
              </td>
              <td
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  padding: '10px',
                  color: '#4A4A4A',
                }}
              >
                {feature.included}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {visibleCount < features[lang].length && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button
            onClick={handleShowMore}
            style={{
              padding: '10px 20px',
              backgroundColor: '#E3DFDC',
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {lang === 'ar' ? 'المزيد' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturesTableModern;
