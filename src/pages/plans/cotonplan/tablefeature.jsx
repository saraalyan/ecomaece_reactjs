import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cot from '../../../assests/images/cotton-logo1.png';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'يصمم من الاقتراحات من الكتالوج' },
    { feature: 'العمالة', included: 'قياسي' },
    { feature: 'احواض المغاسل', included: 'جاهز بورسلان و دولاب - تصنيف (د)' },
    { feature: 'الكراسي و المراوش', included: 'ملون - تصنيف (د)' },
    { feature: 'بديل الرخام او احجار', included: 'خارج الميزانية' },
    { feature: 'سيراميك', included: 'غير مطابق' },
    { feature: 'بروسلان', included: 'يشمل للحد الاعلى' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تجويفات جدارية', included: 'قياسي' },
    { feature: 'ابواب', included: 'للحد الاعلى WBC' },
    { feature: 'شبابيك', included: 'للحد الاعلى' },
    { feature: 'الاسقف', included: 'جيبسيم بورد' },
    { feature: 'دهان', included: 'فينوماستيك مذهل راقي من جوتن' },
    { feature: 'باركيه', included: 'باركيه الفينيل (Vinyl Parquet)' },
    { feature: 'ديكورات جدارية', included: 'بديل شيبورد' },
    { feature: 'ورق حائط', included: 'قياسي' },
    { feature: 'اجهزة الكترونية', included: 'اضافة / متوسط' },
    { feature: 'لوحات', included: 'طباعة 3D' },
    { feature: 'السجاد', included: 'كثيف' },
    { feature: 'النجف و الاضاءات', included: 'نجف جاهز' },
    { feature: 'كنب ضيوف', included: 'تفصيل - تصنيف (د)' },
    { feature: 'الخزائن', included: 'تفصيل - تصنيف (د)' },
    { feature: 'غرفة نوم رئيسية', included: 'تفصيل - تصنيف (د)' },
    { feature: 'غرفة نوم لشخصين منفصلة', included: 'تفصيل - تصنيف (د)' },
    { feature: 'غرفة اطفال', included: 'تفصيل - تصنيف (د)' },
    { feature: 'اكسسوارات و تحف', included: 'فازات كبيرة' },
    { feature: 'المطابخ', included: 'الألوميتال' },
    { feature: 'البلكونه', included: 'اضاءات و خداديات' },
    { feature: 'الحوش الخارجي', included: 'بلاط' },
    { feature: 'تنظيم المنزل', included: 'مثل تزيين طاولات الطعام مع الاواني' },
    { feature: 'ذكاء البيت', included: 'يشمل للحد الاعلى اضاءة و ستائر' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Designed from catalog suggestions' },
    { feature: 'Labor', included: 'Standard' },
    { feature: 'Sink Basins', included: 'Ready porcelain and cabinet - Classification (D)' },
    { feature: 'Chairs and Showers', included: 'Colored - Classification (D)' },
    { feature: 'Marble or Stone Substitute', included: 'Out of budget' },
    { feature: 'Ceramic', included: 'Not compliant' },
    { feature: 'Porcelain', included: 'Included at maximum level' },
    { feature: 'Marble', included: 'Not compliant' },
    { feature: 'Wall Niches', included: 'Standard' },
    { feature: 'Doors', included: 'Maximum WBC' },
    { feature: 'Windows', included: 'Maximum' },
    { feature: 'Ceilings', included: 'Gypsum board' },
    { feature: 'Paint', included: 'Jotun Fenomastic, amazing and elegant' },
    { feature: 'Parquet', included: 'Vinyl parquet' },
    { feature: 'Wall Decorations', included: 'Chipboard substitute' },
    { feature: 'Wallpaper', included: 'Standard' },
    { feature: 'Electronic Devices', included: 'Additional/Medium' },
    { feature: 'Artworks', included: '3D printing' },
    { feature: 'Carpets', included: 'Dense' },
    { feature: 'Chandeliers and Lights', included: 'Ready chandelier' },
    { feature: 'Guest Sofa', included: 'Custom - Classification (D)' },
    { feature: 'Closets', included: 'Custom - Classification (D)' },
    { feature: 'Master Bedroom', included: 'Custom - Classification (D)' },
    { feature: 'Double Bedroom', included: 'Custom - Classification (D)' },
    { feature: 'Children’s Room', included: 'Custom - Classification (D)' },
    { feature: 'Accessories and Ornaments', included: 'Large vases' },
    { feature: 'Kitchens', included: 'Aluminum' },
    { feature: 'Balcony', included: 'Lighting and cushions' },
    { feature: 'Outdoor Patio', included: 'Tiles' },
    { feature: 'Home Organization', included: 'Like decorating dining tables with utensils' },
    { feature: 'Smart Home', included: 'Included at maximum level: lighting and curtains' },
  ],
};


const FeaturesTable = () => {
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
      <Row style={{background:'#fff0f5', marginLeft:'0.1rem', marginRight:'0.1rem', borderTopLeftRadius:'8px',
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
          <h3 className='text-center'style={{color:'black'}}> 
            {lang === 'ar' ? 'باقة قطن' : 'Cotton Package'}
          </h3>
          <p className='text-center'>
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
          </p>
          <h6 className='text-center'style={{color:'black'}}>
            {lang === 'ar' ? 'تصاميم مريحة ومواد دافئة مع حيل حياتية لإسهام في جو منزلي مع التركيز على التشطيب الرائع' : 'Thoughtful designs, cozy materials, and life hacks for a homely feel, all with impeccable finishing'}
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

export default FeaturesTable;
