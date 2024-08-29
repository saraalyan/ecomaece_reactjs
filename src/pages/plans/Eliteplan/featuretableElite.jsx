import React from 'react';
import { useSelector } from 'react-redux';

const features = {
  ar: [
    { feature: 'التصميم الداخلي', included: 'فاخر' },
    { feature: 'الحمالة', included: 'فنان تشكيلي' },
    { feature: 'احواض المغاسل', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'الكراسي والمروشات وبديل الرخام او الجبس', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'بورسلان', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'رخام', included: 'غير مطابق' },
    { feature: 'تحويلات جباريه', included: 'غير مطابق' },
    { feature: 'الاسقف', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'الدهانات', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'تكييف', included: 'ايطالي مصفح' },
    { feature: 'الاناره', included: 'الكترونية مصفحة' },
    { feature: 'ورق الجدران', included: 'سقف متحرك' },
    { feature: 'ديكورات جباريه', included: 'فن تشكيلي' },
    { feature: 'وحدات خشب', included: 'خشب الساج' },
    { feature: 'اجهزه الكترونيه', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'اثاث', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'الستائر', included: 'اضافة / مدمجة مع الديكور' },
    { feature: 'الستائر الخشبيه', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'الثريات', included: 'تفصيل نجف الكريستال' },
    { feature: 'اضاءه ارضيه', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'مطبخ', included: 'جناح يشمل صالون تجميل' },
    { feature: 'ثلاجه', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'مواقد و شفاطات', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'غرفه نوم رئيسيه', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'غرفه نوم لشخصين متصلة', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'غرفه اطفال', included: '(مثال)مايسون فالنتينا (مستورد)' },
    { feature: 'ملحقات وتنجيد', included: 'براند عالمي تفصيل' },
    { feature: 'طاولات وسائد', included: 'احتياج العميل' },
    { feature: 'حدائق ورفوف', included: 'احتياج العميل' },
    { feature: 'المطبخ', included: 'ابتكار أسلوب حياة جديد' },
    { feature: 'ذكاء المنزل', included: 'شركة Moorgen باقة متكاملة' },
  ],
  en: [
    { feature: 'Interior Design', included: 'Luxurious' },
    { feature: 'Carrier', included: 'Visual Artist' },
    { feature: 'Sink Basins', included: 'Mason Valentina (Imported)' },
    { feature: 'Chairs and Showers and Marble or Gypsum Alternative', included: 'Mason Valentina (Imported)' },
    { feature: 'Porcelain', included: 'Mason Valentina (Imported)' },
    { feature: 'Marble', included: 'Non-matching' },
    { feature: 'Mandatory Conversions', included: 'Non-matching' },
    { feature: 'Ceilings', included: 'Mason Valentina (Imported)' },
    { feature: 'Paints', included: 'Mason Valentina (Imported)' },
    { feature: 'Air Conditioning', included: 'Italian Laminated' },
    { feature: 'Lighting', included: 'Electrically Laminated' },
    { feature: 'Wallpaper', included: 'Movable Ceiling' },
    { feature: 'Compulsory Decorations', included: 'Visual Art' },
    { feature: 'Wood Units', included: 'Teak Wood' },
    { feature: 'Electronic Devices', included: 'Mason Valentina (Imported)' },
    { feature: 'Furniture', included: 'Mason Valentina (Imported)' },
    { feature: 'Curtains', included: 'Additional / Integrated with Decoration' },
    { feature: 'Wooden Curtains', included: 'Mason Valentina (Imported)' },
    { feature: 'Chandeliers', included: 'Crystal Chandelier Customization' },
    { feature: 'Floor Lighting', included: 'Mason Valentina (Imported)' },
    { feature: 'Kitchen', included: 'Beauty Salon Suite' },
    { feature: 'Refrigerator', included: 'Mason Valentina (Imported)' },
    { feature: 'Ovens and Extractors', included: 'Mason Valentina (Imported)' },
    { feature: 'Master Bedroom', included: 'Mason Valentina (Imported)' },
    { feature: 'Double Bedroom Connected', included: 'Mason Valentina (Imported)' },
    { feature: 'Children\'s Room', included: 'Mason Valentina (Imported)' },
    { feature: 'Accessories and Upholstery', included: 'Global Brand Customization' },
    { feature: 'Tables and Cushions', included: 'Client Needs' },
    { feature: 'Gardens and Shelves', included: 'Client Needs' },
    { feature: 'The Kitchen', included: 'Innovative New Lifestyle' },
    { feature: 'Smart Home', included: 'Moorgen Complete Package' },
  ],
};

const FeaturesElite = () => {
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
                textAlign: 'center',
                verticalAlign: 'middle',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#765f52',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: lang === 'ar' ? '0px 8px 8px 0px' : '8px 0px 0px 8px',
              }}
            >
              {lang === 'ar' ? 'المنتجات' : 'Products'}
            </th>
            <th
              style={{
                padding: '12px 15px',
                textAlign: 'center',
                verticalAlign: 'middle',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#765f52',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: lang === 'ar' ? '8px 0px 0px 8px' : '0px 8px 8px 0px',
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
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  borderRadius: lang === 'ar' ? '0px 8px 8px 0px' : '8px 0px 0px 8px',
                }}
              >
                {feature.feature}
              </td>
              <td
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  borderRadius: lang === 'ar' ? '8px 0px 0px 8px' : '0px 8px 8px 0px',
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

export default FeaturesElite;
