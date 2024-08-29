import React from 'react';
import { useSelector } from 'react-redux';

const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'مميز' },
    { feature: 'الحمالة', included: 'حرفيون' },
    { feature: 'احواض المغاسل', included: 'مستورد' },
    { feature: 'الكراسي والمروشات وبديل الرخام او الجبس', included: 'دش مطري كبير' },
    { feature: 'بورسلان', included: 'طبيعي' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تحويلات جباريه', included: 'جزئي' },
    { feature: 'الاسقف', included: 'رخام مضيئ' },
    { feature: 'الدهانات', included: 'متحرك' },
    { feature: 'تكييف', included: 'ايطالي' },
    { feature: 'الاناره', included: 'كهربائية' },
    { feature: 'ورق الجدران', included: 'خشب' },
    { feature: 'ديكورات جباريه', included: 'جوتن الفينيسيان' },
    { feature: 'وحدات خشب', included: 'خشب الجوز' },
    { feature: 'اجهزه الكترونيه', included: 'اعمال فنية' },
    { feature: 'اثاث', included: 'تفصيل روسي' },
    { feature: 'الستائر', included: 'اضافة / اعلى مواصفات' },
    { feature: 'الستائر الخشبيه', included: 'رسم فنان تشكيلي' },
    { feature: 'الثريات', included: 'يدوي' },
    { feature: 'اضاءه ارضيه', included: 'نجف زجاجي' },
    { feature: 'مطبخ', included: 'B-Design' },
    { feature: 'ثلاجه', included: 'غرفة ملابس متحركة' },
    { feature: 'مواقد و شفاطات', included: 'B-Design' },
    { feature: 'غرفه نوم رئيسيه', included: 'B-Design' },
    { feature: 'غرفه نوم لشخصين متصلة', included: 'B-Design' },
    { feature: 'غرفه اطفال', included: 'فنان تشكيلي' },
    { feature: 'ملحقات وتنجيد', included: 'شركة ALMA حجري او شركة عضاضة' },
    { feature: 'طاولات وسائد', included: 'احتياج العميل' },
    { feature: 'حدائق ورفوف', included: 'جداريات حجرية' },
    { feature: 'المطبخ', included: 'رسم خطة مناسبة لإسلوب الحياة' },
    { feature: 'ذكاء المنزل', included: 'شركة Moorgen /نظام حماية' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Premium' },
    { feature: 'Carrier', included: 'Craftsmen' },
    { feature: 'Sink Basins', included: 'Imported' },
    { feature: 'Chairs and Showers and Marble or Gypsum Alternative', included: 'Large Rain Shower' },
    { feature: 'Porcelain', included: 'Natural' },
    { feature: 'Marble', included: 'Non-matching' },
    { feature: 'Compulsory Conversions', included: 'Partial' },
    { feature: 'Ceilings', included: 'Illuminated Marble' },
    { feature: 'Paints', included: 'Movable' },
    { feature: 'Air Conditioning', included: 'Italian' },
    { feature: 'Lighting', included: 'Electrical' },
    { feature: 'Wallpaper', included: 'Wood' },
    { feature: 'Compulsory Decorations', included: 'Jotun Venetian' },
    { feature: 'Wood Units', included: 'Walnut Wood' },
    { feature: 'Electronic Devices', included: 'Art Works' },
    { feature: 'Furniture', included: 'Russian Custom' },
    { feature: 'Curtains', included: 'Additional / High Specifications' },
    { feature: 'Wooden Curtains', included: 'Artist’s Painting' },
    { feature: 'Chandeliers', included: 'Handmade' },
    { feature: 'Floor Lighting', included: 'Glass Chandelier' },
    { feature: 'Kitchen', included: 'B-Design' },
    { feature: 'Refrigerator', included: 'Movable Closet' },
    { feature: 'Ovens and Exhausts', included: 'B-Design' },
    { feature: 'Master Bedroom', included: 'B-Design' },
    { feature: 'Double Bedroom Connected', included: 'B-Design' },
    { feature: 'Children\'s Room', included: 'Artist’ Paintings' },
    { feature: 'Accessories and Upholstery', included: 'ALMA Stone or Adhesive Company' },
    { feature: 'Tables and Cushions', included: 'Client Needs' },
    { feature: 'Gardens and Shelves', included: 'Stone Murals' },
    { feature: 'The Kitchen', included: 'Customized Plan for Lifestyle' },
    { feature: 'Smart Home', included: 'Moorgen Protection System' },
  ],
};

const FeaturesTableex = () => {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div className='container'
      style={{
        margin: '20px auto',
        padding: '20px',
        backgroundColor: 'rgb(227 223 220)',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        direction: lang === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '12px 15px',
                textAlign: 'center', // توسيط النص أفقيًا
                verticalAlign: 'middle', // توسيط النص عموديًا
                borderBottom: '1px solid #ddd',
                backgroundColor: '#765f52',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: lang === 'ar' ? '0px 8px 8px 0px' : '8px 0px 0px 8px', // تغيير border-radius بناءً على اللغة
              }}
            >
              {lang === 'ar' ? 'المنتجات' : 'Products'}
            </th>
            <th
              style={{
                padding: '12px 15px',
                textAlign: 'center', // توسيط النص أفقيًا
                verticalAlign: 'middle', // توسيط النص عموديًا
                borderBottom: '1px solid #ddd',
                backgroundColor: '#765f52',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: lang === 'ar' ? '8px 0px 0px 8px' : '0px 8px 8px 0px', // تغيير border-radius بناءً على اللغة
              }}
            >
              {lang === 'ar' ? 'يشمل' : 'Included'}
            </th>
          </tr>
        </thead>
        <tbody>
          {features[lang].map((feature, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'transparent',
                borderBottom: '1px solid #ddd',
                cursor: 'pointer',
              }}
            >
              <td
                style={{
                  textAlign: 'center', // توسيط النص أفقيًا
                  verticalAlign: 'middle', // توسيط النص عموديًا
                  borderRadius: lang === 'ar' ? '0px 8px 8px 0px' : '8px 0px 0px 8px', // تغيير border-radius بناءً على اللغة
                }}
              >
                {feature.feature}
              </td>
              <td
                style={{
                  textAlign: 'center', // توسيط النص أفقيًا
                  verticalAlign: 'middle', // توسيط النص عموديًا
                  borderRadius: lang === 'ar' ? '8px 0px 0px 8px' : '0px 8px 8px 0px', // تغيير border-radius بناءً على اللغة
                }}
              >
                {feature.included}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturesTableex;
