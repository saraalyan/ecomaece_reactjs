import React from 'react';
import { useSelector } from 'react-redux';

const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'جاهز يعدل على منزلك' },
    { feature: 'الحمالة', included: 'قياسي' },
    { feature: 'احواض المغاسل', included: 'بورسلان و دولاب' },
    { feature: 'الكراسي والمروشات وبديل الرخام او الجبس', included: 'متقدم' },
    { feature: 'بورسلان', included: 'يشمل' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تحويلات جباريه', included: 'يشمل للحد الاعلى' },
    { feature: 'الاسقف', included: 'لا' },
    { feature: 'الدهانات', included: 'مع اضاءة' },
    { feature: 'تكييف', included: 'إضافة WBC' },
    { feature: 'الاناره', included: 'اضافة' },
    { feature: 'ورق الجدران', included: 'جيبسيم بورد' },
    { feature: 'ديكورات جباريه', included: 'جوتن اكريليك و فينيل' },
    { feature: 'وحدات خشب', included: 'HDF Laminate Flooring' },
    { feature: 'اجهزه الكترونيه', included: 'بديل شيبورد' },
    { feature: 'اثاث', included: 'جزئي' },
    { feature: 'الستائر', included: 'اضافة / متوسط' },
    { feature: 'الستائر الخشبيه', included: 'طباعة 3D' },
    { feature: 'الثريات', included: 'كثيفة' },
    { feature: 'اضاءه ارضيه', included: 'نجف جاهز' },
    { feature: 'مطبخ', included: 'تفصيل' },
    { feature: 'ثلاجه', included: 'تفصيل' },
    { feature: 'مواقد و شفاطات', included: 'تفصيل' },
    { feature: 'غرفه نوم رئيسيه', included: 'تفصيل' },
    { feature: 'غرفه نوم لشخصين متصلة', included: 'تفصيل' },
    { feature: 'غرفه اطفال', included: 'فازات كبيرة' },
    { feature: 'ملحقات وتنجيد', included: 'الألوميتال' },
    { feature: 'طاولات وسائد', included: 'اضاءات و خداديات' },
    { feature: 'حدائق ورفوف', included: 'بلاط' },
    { feature: 'المطبخ', included: 'تزيين متقدم مثال طاولات الطعام' },
    { feature: 'ذكاء المنزل', included: 'يشمل للحد الاعلى اضاءة و ستائر' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Ready to apply to your home' },
    { feature: 'Carrier', included: 'Standard' },
    { feature: 'Sink Basins', included: 'Normal' },
    { feature: 'Chairs and Showers and Marble or Gypsum Alternative', included: 'Normal' },
    { feature: 'Porcelain', included: 'Not Included' },
    { feature: 'Marble', included: 'Included in Interior Package' },
    { feature: 'Compulsory Conversions', included: 'Not Included' },
    { feature: 'Ceilings', included: 'Normal Gypsum' },
    { feature: 'Paints', included: 'Normal' },
    { feature: 'Air Conditioning', included: 'Not Included' },
    { feature: 'Lighting', included: 'Not Included' },
    { feature: 'Wallpaper', included: 'Not Included' },
    { feature: 'Compulsory Decorations', included: 'PVC (Additional)' },
    { feature: 'Wood Units', included: 'Not Included' },
    { feature: 'Electronic Devices', included: 'Not Included' },
    { feature: 'Furniture', included: 'Chinese Walnut and Beech (Additional)' },
    { feature: 'Curtains', included: 'Not Included' },
    { feature: 'Wooden Curtains', included: 'Additional' },
    { feature: 'Chandeliers', included: 'Not Included' },
    { feature: 'Floor Lighting', included: 'Not Included' },
    { feature: 'Kitchen', included: 'Stainless Steel (Additional)' },
    { feature: 'Refrigerator', included: 'Additional (Economic Size)' },
    { feature: 'Ovens and Exhausts', included: 'Ready' },
    { feature: 'Master Bedroom', included: 'Ready' },
    { feature: 'Double Bedroom Connected', included: 'Ready' },
    { feature: 'Children\'s Room', included: 'Ready' },
    { feature: 'Accessories and Upholstery', included: 'Ready' },
    { feature: 'Tables and Cushions', included: 'Simple Sizes' },
    { feature: 'Gardens and Shelves', included: 'Simple Wooden or Glass Table with Sofa and Smoking (Additional)' },
    { feature: 'The Kitchen', included: 'Included' },
    { feature: 'Smart Home', included: 'Additional' },
  ],
};

const FeaturesTable = () => {
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

export default FeaturesTable;
