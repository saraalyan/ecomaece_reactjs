import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cot from '../../../assests/images/smart1.png';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'جاهز يطبق على منزلك' },
    { feature: 'العمالة', included: 'قياسي' },
    { feature: 'احواض المغاسل', included: 'عادي - جاهز تصنيف (ه)' },
    { feature: 'الكراسي و المراوش', included: 'عادي - جاهز تصنيف (ه)' },
    { feature: 'بديل الرخام او احجار', included: 'خارج الميزانية' },
    { feature: 'سيراميك', included: 'يشمل للحد الاعلى' },
    { feature: 'بروسلان', included: 'خارج الميزانية' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تجويفات جدارية', included: 'خارج الميزانية' },
    { feature: 'ابواب', included: 'للحد الاعلى PVC' },
    { feature: 'شبابيك', included: 'خارج الميزانية' },
    { feature: 'الاسقف', included: 'خارج الميزانية' },
    { feature: 'دهان', included: 'جوتن جيوشيلد' },
    { feature: 'باركيه', included: 'باركيه الصناعي' },
    { feature: 'ديكورات جدارية', included: 'خارج الميزانية' },
    { feature: 'ورق حائط', included: 'خارج الميزانية' },
    { feature: 'اجهزة الكترونية', included: '(اضافة) / اقتصادي' },
    { feature: 'لوحات', included: 'جاهز' },
    { feature: 'السجاد', included: 'جاهز' },
    { feature: 'النجف و الاضاءات', included: 'مسطرة كشافات' },
    { feature: 'كنب ضيوف', included: 'جاهز تصنيف (ه)' },
    { feature: 'الخزائن', included: 'جاهز تصنيف (ه)' },
    { feature: 'غرفة نوم رئيسية', included: 'جاهز تصنيف (ه)' },
    { feature: 'غرفة نوم لشخصين منفصلة', included: 'جاهز تصنيف (ه)' },
    { feature: 'غرفة اطفال', included: 'جاهز تصنيف (ه)' },
    { feature: 'اكسسوارات و تحف', included: 'احجام صغيرة' },
    { feature: 'المطابخ', included: 'المونيوم' },
    { feature: 'البلكونه', included: 'طاولة صغيرة و تزيين شجر' },
    { feature: 'الحوش الخارجي', included: 'نجيله' },
    { feature: 'تنظيم المنزل', included: 'مثل تزيين ميك اب كورنر' },
    { feature: 'ذكاء البيت', included: 'خارج الميزانية' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Ready, applied to your home' },
    { feature: 'Labor', included: 'Standard' },
    { feature: 'Sink Basins', included: 'Ordinary - Ready Classification (E)' },
    { feature: 'Chairs and Showers', included: 'Ordinary - Ready Classification (E)' },
    { feature: 'Marble or Stone Substitute', included: 'Out of budget' },
    { feature: 'Ceramic', included: 'Included at maximum level' },
    { feature: 'Porcelain', included: 'Out of budget' },
    { feature: 'Marble', included: 'Not compliant' },
    { feature: 'Wall Niches', included: 'Out of budget' },
    { feature: 'Doors', included: 'Maximum PVC' },
    { feature: 'Windows', included: 'Out of budget' },
    { feature: 'Ceilings', included: 'Out of budget' },
    { feature: 'Paint', included: 'Jotun Jotashield' },
    { feature: 'Parquet', included: 'Industrial parquet' },
    { feature: 'Wall Decorations', included: 'Out of budget' },
    { feature: 'Wallpaper', included: 'Out of budget' },
    { feature: 'Electronic Devices', included: 'Additional / Economic' },
    { feature: 'Artworks', included: 'Ready' },
    { feature: 'Carpets', included: 'Ready' },
    { feature: 'Chandeliers and Lights', included: 'Track spotlights' },
    { feature: 'Guest Sofa', included: 'Ready Classification (E)' },
    { feature: 'Closets', included: 'Ready Classification (E)' },
    { feature: 'Master Bedroom', included: 'Ready Classification (E)' },
    { feature: 'Double Bedroom', included: 'Ready Classification (E)' },
    { feature: 'Children’s Room', included: 'Ready Classification (E)' },
    { feature: 'Accessories and Ornaments', included: 'Small sizes' },
    { feature: 'Kitchens', included: 'Aluminum' },
    { feature: 'Balcony', included: 'Small table and tree decoration' },
    { feature: 'Outdoor Patio', included: 'Artificial grass' },
    { feature: 'Home Organization', included: 'Like decorating a makeup corner' },
    { feature: 'Smart Home', included: 'Out of budget' },
  ],
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
      <Row style={{background:'#e4efec', marginLeft:'0.1rem', marginRight:'0.1rem', borderTopLeftRadius:'8px',
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
          <h3 className='text-center'style={{color:'black'}}> 
            {lang === 'ar' ? 'الباقة الذكية' : 'Smart Package'}
          </h3>
          <p className='text-center'>
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
          </p>
          <h6 className='text-center'style={{color:'black'}}>
            {lang === 'ar' ? ' اختيار ذكي واقتصادي بلمسات رائعة وتشطيب عالي الجودة' : 'Smart and budget-friendly choice with excellent touches and high-quality finishing.'}
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
