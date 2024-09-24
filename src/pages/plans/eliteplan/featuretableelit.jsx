import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cot from '../../../assests/images/a/7.png';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: ' تصميم لا يتكرر' },
    { feature: 'العمالة', included: 'فنان تشكيلي' },
    { feature: 'احواض المغاسل', included: 'التصنيف الأعلى (S)' },
    { feature: 'الكراسي و المراوش', included: 'التصنيف الأعلى (S)' },
    { feature: 'بديل الرخام او احجار', included: 'التصنيف الأعلى (S)' },
    { feature: 'سيراميك', included: 'غير مطابق' },
    { feature: 'بروسلان', included: 'غير مطابق' },
    { feature: 'رخام', included: 'التصنيف الأعلى (S)' },
    { feature: 'تجويفات جدارية', included: 'احجار' },
    { feature: 'ابواب', included: 'ايطالي مصفح (مستورد)' },
    { feature: 'شبابيك', included: 'الكترونية مصفحة' },
    { feature: 'الاسقف', included: 'خشب البلوط' },
    { feature: 'دهان', included: 'جوتن برستيج جولد' },
    { feature: 'باركيه', included: 'الباركيه الصلب' },
    { feature: 'ديكورات جدارية', included: 'فنان تشكيلي' },
    { feature: 'ورق حائط', included: 'تفصيل مستورد من روسيا' },
    { feature: 'اجهزة الكترونية', included: 'اضافة / مدمجة مع الديكور' },
    { feature: 'لوحات', included: 'رسم فنان تشكيلي على طلب العميل' },
    { feature: 'السجاد', included: 'التصنيف الأعلى (S)' },
    { feature: 'النجف و الاضاءات', included: 'تفصيل نجف الكريستال' },
    { feature: 'كنب ضيوف', included: 'التصنيف الأعلى (S)' },
    { feature: 'الخزائن', included: 'جناح يشمل صالون تجميل' },
    { feature: 'غرفة نوم رئيسية', included: 'التصنيف الأعلى' },
    { feature: 'غرفة نوم لشخصين منفصلة', included: 'التصنيف الأعلى (S)' },
    { feature: 'غرفة اطفال', included: 'التصنيف الأعلى (S)' },
    { feature: 'اكسسوارات و تحف', included: 'التصنيف الأعلى (S)' },
    { feature: 'المطابخ', included: 'التصنيف الأعلى (S)' },
    { feature: 'البلكونه', included: 'احتياج العميل' },
    { feature: 'الحوش الخارجي', included: 'اشجار و تربة مستوردة' },
    { feature: 'تنظيم المنزل', included: 'رسم خطة مناسبة لإسلوب الحياة' },
    { feature: 'ذكاء البيت', included: 'شركة Moorgen باقة متكاملة' }
  ],
  en: [
    { feature: 'Interior Design', included: 'Unique, non-repetitive design' },
    { feature: 'Labor', included: 'Plastic artist' },
    { feature: 'Sink Basins', included: 'Top classification (S)' },
    { feature: 'Chairs and Showers', included: 'Top classification (S)' },
    { feature: 'Marble or Stone Substitute', included: 'Top classification (S)' },
    { feature: 'Ceramic', included: 'Not compliant' },
    { feature: 'Porcelain', included: 'Not compliant' },
    { feature: 'Marble', included: 'Top classification (S)' },
    { feature: 'Wall Niches', included: 'Stone' },
    { feature: 'Doors', included: 'Italian armored (imported)' },
    { feature: 'Windows', included: 'Electronic armored' },
    { feature: 'Ceilings', included: 'Oak wood' },
    { feature: 'Paint', included: 'Jotun Prestige Gold' },
    { feature: 'Parquet', included: 'Solid parquet' },
    { feature: 'Wall Decorations', included: 'Plastic artist' },
    { feature: 'Wallpaper', included: 'Custom imported from Russia' },
    { feature: 'Electronic Devices', included: 'Additional / Integrated with decor' },
    { feature: 'Artworks', included: 'Custom artist painting' },
    { feature: 'Carpets', included: 'Top classification (S)' },
    { feature: 'Chandeliers and Lights', included: 'Custom crystal chandelier' },
    { feature: 'Guest Sofa', included: 'Top classification (S)' },
    { feature: 'Closets', included: 'Suite with beauty salon' },
    { feature: 'Master Bedroom', included: 'Top classification' },
    { feature: 'Double Bedroom', included: 'Top classification (S)' },
    { feature: 'Children’s Room', included: 'Top classification (S)' },
    { feature: 'Accessories and Ornaments', included: 'Top classification (S)' },
    { feature: 'Kitchens', included: 'Top classification (S)' },
    { feature: 'Balcony', included: 'Client’s need' },
    { feature: 'Outdoor Patio', included: 'Imported trees and soil' },
    { feature: 'Home Organization', included: 'Lifestyle plan' },
    { feature: 'Smart Home', included: 'Moorgen company full package' }
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
      
      <Row style={{background:'#f1eee8', marginLeft:'0.1rem', marginRight:'0.1rem', borderTopLeftRadius:'8px',
            borderTopRightRadius:'8px'}}>
        <div className='col-11 col-md-4' style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            borderTopLeftRadius:'8px',
            borderTopRightRadius:'8px'
        }}>      
          <img src={cot} alt="Cotton Image" width={'60%'} style={{margin:'1rem',marginRight:'3rem'}} />
        </div>
        <div className='col-12 col-md-8' style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
          <h3 className='text-center'style={{color:'black'}}> 
            {lang === 'ar' ? 'الباقة النخبة' : 'Elite Package'}
          </h3>
          <p className='text-center'>
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />

          </p>
          <h6 className='text-center'style={{color:'black'}}>
            {lang === 'ar' ?'تصاميم و مواد فريدة تميزك عن غيرك. وأسلوب حياة يتماشي مع خيالك الفريد. و لتقديم أعمال فنية حصرية مخصصة الأسلوب حياتك، وكلها تكتمل بلمسة تشطيب فائقة الاستثنائية والتفصيل' : 'Signature Package: Unique designs and materials that set you apart, a lifestyle in harmony with your unique imagination, presenting exclusive artistic works tailored to your lifestyle, all completed with an exceptional and detailed finishing touch'}
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
