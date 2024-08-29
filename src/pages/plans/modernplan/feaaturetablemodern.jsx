
import React from 'react';
import { useSelector } from 'react-redux';

const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: '3D MAX & AutoCad' },
    { feature: 'الحمالة', included: 'متقدم' },
    { feature: 'احواض المغاسل', included: 'رخام جاهز' },
    { feature: 'الكراسي والمروشات وبديل الرخام او الجبس', included: 'مدفون' },
    { feature: 'بورسلان', included: 'اساسي' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تحويلات جباريه', included: 'اساسي' },
    { feature: 'الاسقف', included: 'يشمل للحد الاعلى' },
    { feature: 'الدهانات', included: 'فسيفساء' },
    { feature: 'تكييف', included: 'زجاج معتم' },
    { feature: 'الاناره', included: 'شتر' },
    { feature: 'ورق الجدران', included: 'سكاي لايت' },
    { feature: 'ديكورات جباريه', included: 'جوتن دهانات اللاكيه' },
    { feature: 'وحدات خشب', included: 'خشب البلوط الأبيض' },
    { feature: 'اجهزه الكترونيه', included: 'شيبورد' },
    { feature: 'اثاث', included: 'يشمل' },
    { feature: 'الستائر', included: 'اضافة / مميزات اكثر' },
    { feature: 'الستائر الخشبيه', included: 'كانفس' },
    { feature: 'الثريات', included: 'مودرن' },
    { feature: 'اضاءه ارضيه', included: 'اضاءة مغنطيسية و نجف ستريب' },
    { feature: 'مطبخ', included: 'تفصيل' },
    { feature: 'ثلاجه', included: 'جزيرة' },
    { feature: 'مواقد و شفاطات', included: 'تفصيل' },
    { feature: 'غرفه نوم رئيسيه', included: 'تفصيل' },
    { feature: 'غرفه نوم لشخصين متصلة', included: 'تفصيل' },
    { feature: 'غرفه اطفال', included: 'خشب' },
    { feature: 'ملحقات وتنجيد', included: 'ديكور شاشة او سينما' },
    { feature: 'طاولات وسائد', included: 'شلالات موديرن' },
    { feature: 'حدائق ورفوف', included: 'الايتيكيت و طاولات ذكية' },
    { feature: 'المطبخ', included: 'يشمل للحد الاعلى' },
    { feature: 'ذكاء المنزل', included: 'نظام ذكي مع اليكسيا' },
  ],
  en: [
    { feature: 'Interior Design', included: '3D MAX & AutoCad' },
    { feature: 'Carrier', included: 'Advanced' },
    { feature: 'Sink Basins', included: 'Ready Marble' },
    { feature: 'Chairs and Showers and Marble or Gypsum Alternative', included: 'Buried' },
    { feature: 'Porcelain', included: 'Basic' },
    { feature: 'Marble', included: 'Not Included' },
    { feature: 'Compulsory Conversions', included: 'Basic' },
    { feature: 'Ceilings', included: 'Includes Maximum Limit' },
    { feature: 'Paints', included: 'Mosaic' },
    { feature: 'Air Conditioning', included: 'Opaque Glass' },
    { feature: 'Lighting', included: 'Shutters' },
    { feature: 'Wallpaper', included: 'Skylight' },
    { feature: 'Compulsory Decorations', included: 'Jotun Lacquer Paint' },
    { feature: 'Wood Units', included: 'White Oak Wood' },
    { feature: 'Electronic Devices', included: 'Chipboard' },
    { feature: 'Furniture', included: 'Includes' },
    { feature: 'Curtains', included: 'Additional / More Features' },
    { feature: 'Wooden Curtains', included: 'Canvas' },
    { feature: 'Chandeliers', included: 'Modern' },
    { feature: 'Floor Lighting', included: 'Magnetic and Strip Lighting' },
    { feature: 'Kitchen', included: 'Custom' },
    { feature: 'Refrigerator', included: 'Island' },
    { feature: 'Ovens and Exhausts', included: 'Custom' },
    { feature: 'Master Bedroom', included: 'Custom' },
    { feature: 'Double Bedroom Connected', included: 'Custom' },
    { feature: 'Children\'s Room', included: 'Wood' },
    { feature: 'Accessories and Upholstery', included: 'Screen or Cinema Decor' },
    { feature: 'Tables and Cushions', included: 'Modern Waterfalls' },
    { feature: 'Gardens and Shelves', included: 'Etiquette and Smart Tables' },
    { feature: 'The Kitchen', included: 'Includes Maximum Limit' },
    { feature: 'Smart Home', included: 'Smart System with Alexa' },
  ],
};

const FeaturesTableModern = () => {
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

export default FeaturesTableModern;
