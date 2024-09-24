
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cot from '../../../assests/images/velvet-home-logo - Copy.png';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'يصمم من الاقتراحات من قبل الطرفين' },
    { feature: 'العمالة', included: 'نحاتين' },
    { feature: 'احواض المغاسل', included: 'رخام تفصيل - تصنيف (ب)' },
    { feature: 'الكراسي و المراوش', included: 'معلق - تصنيف (ب)' },
    { feature: 'بديل الرخام او احجار', included: 'شيبورد' },
    { feature: 'سيراميك', included: 'غير مطابق' },
    { feature: 'بروسلان', included: 'يشمل للحد الأدنى' },
    { feature: 'رخام', included: 'الواح رخام' },
    { feature: 'تجويفات جدارية', included: 'فسيفساء' },
    { feature: 'ابواب', included: 'خشب زان' },
    { feature: 'شبابيك', included: 'PVC و Shutter' },
    { feature: 'الاسقف', included: 'رسم الاسقف' },
    { feature: 'دهان', included: 'جوتن فيلفيت تاتش' },
    { feature: 'باركيه', included: 'الباركيه المهندَس' },
    { feature: 'ديكورات جدارية', included: 'رخام او خشب صلب' },
    { feature: 'ورق حائط', included: '3D' },
    { feature: 'اجهزة الكترونية', included: 'اضافة / نظام مفصل' },
    { feature: 'لوحات', included: 'رسم جاهز' },
    { feature: 'السجاد', included: 'ايراني' },
    { feature: 'النجف و الاضاءات', included: 'النجف الفيرفورجيه' },
    { feature: 'كنب ضيوف', included: 'تصنيف (ب)' },
    { feature: 'الخزائن', included: 'تصنيف (ب)' },
    { feature: 'غرفة نوم رئيسية', included: 'تصنيف (ب)' },
    { feature: 'غرفة نوم لشخصين منفصلة', included: 'تصنيف (ب)' },
    { feature: 'غرفة اطفال', included: 'تصنيف (ب)' },
    { feature: 'اكسسوارات و تحف', included: 'ايطالية' },
    { feature: 'المطابخ', included: 'رخام' },
    { feature: 'البلكونه', included: 'احتياج العميل' },
    { feature: 'الحوش الخارجي', included: 'جلسة خارجية' },
    { feature: 'تنظيم المنزل', included: 'تفصيل المواد اللازمة' },
    { feature: 'ذكاء البيت', included: 'شركة Moorgen' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Designed from both parties’ suggestions' },
    { feature: 'Labor', included: 'Sculptors' },
    { feature: 'Sink Basins', included: 'Custom marble - Classification (B)' },
    { feature: 'Chairs and Showers', included: 'Hanging - Classification (B)' },
    { feature: 'Marble or Stone Substitute', included: 'Chipboard' },
    { feature: 'Ceramic', included: 'Not compliant' },
    { feature: 'Porcelain', included: 'Included at minimum level' },
    { feature: 'Marble', included: 'Marble slabs' },
    { feature: 'Wall Niches', included: 'Mosaic' },
    { feature: 'Doors', included: 'Zan wood' },
    { feature: 'Windows', included: 'PVC and Shutter' },
    { feature: 'Ceilings', included: 'Ceiling painting' },
    { feature: 'Paint', included: 'Jotun Velvet Touch' },
    { feature: 'Parquet', included: 'Engineered parquet' },
    { feature: 'Wall Decorations', included: 'Marble or solid wood' },
    { feature: 'Wallpaper', included: '3D' },
    { feature: 'Electronic Devices', included: 'Additional / Custom system' },
    { feature: 'Artworks', included: 'Pre-drawn' },
    { feature: 'Carpets', included: 'Iranian' },
    { feature: 'Chandeliers and Lights', included: 'Wrought iron chandelier' },
    { feature: 'Guest Sofa', included: 'Classification (B)' },
    { feature: 'Closets', included: 'Classification (B)' },
    { feature: 'Master Bedroom', included: 'Classification (B)' },
    { feature: 'Double Bedroom', included: 'Classification (B)' },
    { feature: 'Children’s Room', included: 'Classification (B)' },
    { feature: 'Accessories and Ornaments', included: 'Italian' },
    { feature: 'Kitchens', included: 'Marble' },
    { feature: 'Balcony', included: 'Client’s requirements' },
    { feature: 'Outdoor Patio', included: 'Outdoor seating' },
    { feature: 'Home Organization', included: 'Custom material arrangement' },
    { feature: 'Smart Home', included: 'Moorgen company' },
  ],
};

const FeaturesTablevel = () => {
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
      <Row style={{background:'#5a2a44', marginLeft:'0.1rem', marginRight:'0.1rem', borderTopLeftRadius:'8px',
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
          <h3 className='text-center'style={{color:'white'}}> 
            {lang === 'ar' ? 'باقة البيت المخملي ' : 'Velvet Home Package'}
          </h3>
          <p className='text-center'>
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faStar} className="star" style={{color: '#FFD700', marginRight: '5px'}} />

          </p>
          <h6 className='text-center'style={{color:'white'}}>
          {lang === 'ar' ? 'تصميمات ومواد فاخرة لأسلوب حياة فخم، تتميز بأحدث صيحات الديكور، وترتقي بمنزلك بتشطيبات حرقية رائعة' : 'A luxurious Designs and materials for a lavish lifestyle, featuring top decoration trends, elevating your home with exquisite craftsmanship finishing.'}
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

export default FeaturesTablevel;
