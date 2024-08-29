import React from 'react';
import { useSelector } from 'react-redux';

const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'فاخر' },
    { feature: 'الحمالة', included: 'اعمال جدارية' },
    { feature: 'احواض المغاسل', included: 'رخام تفصيل' },
    { feature: 'الكراسي والمروشات وبديل الرخام او الجبس', included: 'مدفون كبير' },
    { feature: 'بورسلان', included: 'جزئي' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تحويلات جباريه', included: 'فاخر' },
    { feature: 'الاسقف', included: 'رخام قطع' },
    { feature: 'الدهانات', included: 'معدن بالداخل' },
    { feature: 'تكييف', included: 'خشب زان' },
    { feature: 'الاناره', included: 'نوع فاخر' },
    { feature: 'ورق الجدران', included: 'رسم الاسقف' },
    { feature: 'ديكورات جباريه', included: 'جوتن الجرافيتو' },
    { feature: 'وحدات خشب', included: 'خشب الكرز او الماهوجني' },
    { feature: 'اجهزه الكترونيه', included: 'خشب صلب' },
    { feature: 'اثاث', included: '3D' },
    { feature: 'الستائر', included: 'اضافة / نظام مفصل' },
    { feature: 'الستائر الخشبيه', included: 'رسم جاهز' },
    { feature: 'الثريات', included: 'ايراني' },
    { feature: 'اضاءه ارضيه', included: 'النجف الفيرفورجيه' },
    { feature: 'مطبخ', included: 'B-Design' },
    { feature: 'ثلاجه', included: 'غرفة ملابس' },
    { feature: 'مواقد و شفاطات', included: 'B-Design' },
    { feature: 'غرفه نوم رئيسيه', included: 'B-Design' },
    { feature: 'غرفه نوم لشخصين متصلة', included: 'B-Design' },
    { feature: 'غرفه اطفال', included: 'ايطالية' },
    { feature: 'ملحقات وتنجيد', included: 'Artex شركة' },
    { feature: 'طاولات وسائد', included: 'باربيكو' },
    { feature: 'حدائق ورفوف', included: 'ارضيات حجرية و اضاءة' },
    { feature: 'المطبخ', included: 'تفصيل المواد اللازمة و غرف خفية' },
    { feature: 'ذكاء المنزل', included: 'شركة Moorgen' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Premium' },
    { feature: 'Carrier', included: 'Wall Murals' },
    { feature: 'Sink Basins', included: 'Marble Detailing' },
    { feature: 'Chairs and Showers and Marble or Gypsum Alternative', included: 'Large Burial' },
    { feature: 'Porcelain', included: 'Partial' },
    { feature: 'Marble', included: 'Non-matching' },
    { feature: 'Compulsory Conversions', included: 'Premium' },
    { feature: 'Ceilings', included: 'Marble Pieces' },
    { feature: 'Paints', included: 'Metal Inside' },
    { feature: 'Air Conditioning', included: 'Beech Wood' },
    { feature: 'Lighting', included: 'Premium Type' },
    { feature: 'Wallpaper', included: 'Ceiling Art' },
    { feature: 'Compulsory Decorations', included: 'Jotun Graphite' },
    { feature: 'Wood Units', included: 'Cherry or Mahogany Wood' },
    { feature: 'Electronic Devices', included: 'Solid Wood' },
    { feature: 'Furniture', included: '3D' },
    { feature: 'Curtains', included: 'Additional / Detailed System' },
    { feature: 'Wooden Curtains', included: 'Ready Art' },
    { feature: 'Chandeliers', included: 'Iranian' },
    { feature: 'Floor Lighting', included: 'Forged Iron Chandelier' },
    { feature: 'Kitchen', included: 'B-Design' },
    { feature: 'Refrigerator', included: 'Walk-in Closet' },
    { feature: 'Ovens and Exhausts', included: 'B-Design' },
    { feature: 'Master Bedroom', included: 'B-Design' },
    { feature: 'Double Bedroom Connected', included: 'B-Design' },
    { feature: 'Children\'s Room', included: 'Italian' },
    { feature: 'Accessories and Upholstery', included: 'Artex Company' },
    { feature: 'Tables and Cushions', included: 'Barbico' },
    { feature: 'Gardens and Shelves', included: 'Stone Floors and Lighting' },
    { feature: 'The Kitchen', included: 'Material Detailing and Hidden Rooms' },
    { feature: 'Smart Home', included: 'Moorgen' },
  ],
};

const FeaturesTablevel = () => {
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

export default FeaturesTablevel;
