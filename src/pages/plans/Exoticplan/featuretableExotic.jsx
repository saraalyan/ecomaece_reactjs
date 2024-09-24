import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cot from '../../../assests/images/exotic-logo - Copy.png';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'الي يصمم من الاقتراحات من قبل فنانين تجريديين' },
    { feature: 'العمالة', included: 'فنان تشكيلي' },
    { feature: 'احواض المغاسل', included: 'رخام مضيئ - تصنيف (أ)' },
    { feature: 'الكراسي و المراوش', included: 'دش مطري كبير  تصنيف (أ)' },
    { feature: 'بديل الرخام او احجار', included: 'طبيعي' },
    { feature: 'سيراميك', included: 'غير مطابق' },
    { feature: 'بروسلان', included: 'غير مطابق' },
    { feature: 'رخام', included: 'الواح رخام' },
    { feature: 'تجويفات جدارية', included: 'احجار' },
    { feature: 'ابواب', included: 'خشب ايطالي' },
    { feature: 'شبابيك', included: 'كهربائية' },
    { feature: 'الاسقف', included: 'خشب' },
    { feature: 'دهان', included: 'جوتن ماجنيت' },
    { feature: 'باركيه', included: 'الباركيه المهندَس' },
    { feature: 'ديكورات جدارية', included: 'حجر او نحاس' },
    { feature: 'ورق حائط', included: 'KENZ' },
    { feature: 'اجهزة الكترونية', included: 'اضافة / اعلى مواصفات' },
    { feature: 'لوحات', included: 'رسم فنان تشكيلي' },
    { feature: 'السجاد', included: 'سجاد يدوي الصنع' },
    { feature: 'النجف و الاضاءات', included: 'نجف زجاجي' },
    { feature: 'كنب ضيوف', included: 'تصنيف (أ)' },
    { feature: 'الخزائن', included: 'تصنيف (أ)' },
    { feature: 'غرفة نوم رئيسية', included: 'تصنيف (أ)' },
    { feature: 'غرفة نوم لشخصين منفصلة', included: 'تصنيف (أ)' },
    { feature: 'غرفة اطفال', included: 'تصنيف (أ)' },
    { feature: 'اكسسوارات و تحف', included: 'فنان تشكيلي' },
    { feature: 'المطابخ', included: 'حجر' },
    { feature: 'البلكونه', included: 'احتياج العميل' },
    { feature: 'الحوش الخارجي', included: 'جداريات حجرية' },
    { feature: 'تنظيم المنزل', included: 'غرف خفية' },
    { feature: 'ذكاء البيت', included: 'شركة Moorgen /نظام حماية' }
  ],
  en: [
    { feature: 'Interior Design', included: 'Designed based on suggestions by abstract artists' },
    { feature: 'Labor', included: 'Plastic artist' },
    { feature: 'Sink Basins', included: 'Illuminated marble - Class (A)' },
    { feature: 'Chairs and Showers', included: 'Large rain shower Class (A)' },
    { feature: 'Marble or Stone Substitute', included: 'Natural' },
    { feature: 'Ceramic', included: 'Not compliant' },
    { feature: 'Porcelain', included: 'Not compliant' },
    { feature: 'Marble', included: 'Marble panels' },
    { feature: 'Wall Niches', included: 'Stone' },
    { feature: 'Doors', included: 'Italian wood' },
    { feature: 'Windows', included: 'Electric' },
    { feature: 'Ceilings', included: 'Wood' },
    { feature: 'Paint', included: 'Jotun Magnet' },
    { feature: 'Parquet', included: 'Engineered parquet' },
    { feature: 'Wall Decorations', included: 'Stone or copper' },
    { feature: 'Wallpaper', included: 'KENZ' },
    { feature: 'Electronic Devices', included: 'Additional / High-end specifications' },
    { feature: 'Artworks', included: 'Plastic artist drawing' },
    { feature: 'Carpets', included: 'Handmade carpet' },
    { feature: 'Chandeliers and Lights', included: 'Glass chandelier' },
    { feature: 'Guest Sofa', included: 'Class (A)' },
    { feature: 'Closets', included: 'Class (A)' },
    { feature: 'Master Bedroom', included: 'Class (A)' },
    { feature: 'Double Bedroom', included: 'Class (A)' },
    { feature: 'Children’s Room', included: 'Class (A)' },
    { feature: 'Accessories and Ornaments', included: 'Plastic artist' },
    { feature: 'Kitchens', included: 'Stone' },
    { feature: 'Balcony', included: 'Client’s need' },
    { feature: 'Outdoor Patio', included: 'Stone murals' },
    { feature: 'Home Organization', included: 'Hidden rooms' },
    { feature: 'Smart Home', included: 'Moorgen company / Security system' }
  ]
};


const FeaturesTableSmart = () => {
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
      <Row style={{background:'#661719', marginLeft:'0.1rem', marginRight:'0.1rem', borderTopLeftRadius:'8px',
            borderTopRightRadius:'8px'}}>
        <div className='col-11 col-md-4' style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            borderTopLeftRadius:'8px',
            borderTopRightRadius:'8px'
        }}>      
          <img src={cot} alt="Cotton Image" width={'60%'} style={{margin:'1rem'}} />
        </div>
        <div className='col-12 col-md-8' style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
          <h3 className='text-center'style={{color:'white'}}> 
            {lang === 'ar' ? 'الباقة الفريدة' : 'Exotic Package'}
          </h3>
          <p className='text-center'>
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />

          </p>
          <h6 className='text-center'style={{color:'white'}}>
            {lang === 'ar' ? 'تصاميم فريدة واستثنائية بمواد خاصة وغريبة لتشعر بالتميز، نمط حياة ينسجم مع لغزك مع أحدث صيحات الديكور. ويرقي مستوى حسك الفني، بلمسات' : 'Exotic, unique designs with special materials for a distinct sense of luxury, harmonizing with your enigma, following decoration trends, elevating your artistic sensibility, all with exquisite .craftsmanship finishing'}
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
                backgroundColor: '#e7e6e6',
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
                backgroundColor: '#e7e6e6',
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

export default FeaturesTableSmart;
