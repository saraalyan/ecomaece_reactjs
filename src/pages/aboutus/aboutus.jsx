import React from 'react';
import { useSelector } from 'react-redux';
import './AddressDetails.scss'; 

const AddressDetails = () => {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <>
      <div style={{marginTop:'4.5rem',fontFamily:'cairo', padding: '20px', lineHeight: '1.6', textAlign: lang === 'ar' ? 'right' : 'left', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        <h2 className='text-center'>{lang === 'ar' ? 'عن الشركة' : 'About Our Company'}</h2>
        <h3>{lang === 'ar' ? 'خدماتنا الرئيسية تشمل:' : 'Our main services include:'}</h3>

        <p>
          {lang === 'ar' 
            ? 'خدمات المقاولة من البداية إلى التسليم: من المفاهيم الأولية إلى تسليم المفتاح، نقدم خدمات المقاولة شاملة لضمان سير العملية بسلاسة.' 
            : 'Contracting services from start to delivery: From initial concepts to turnkey, we provide comprehensive contracting services to ensure the process runs smoothly.'}
        </p>
        <p>
          {lang === 'ar' 
            ? 'إعادة تصميم الحمامات والمطابخ: نحرص على تجديد ورفع مساحات المعيشة باحترافية للحمامات والمطابخ، مما يضمن مزيجاً متناغماً بين الجمال والعملية.' 
            : 'Redesigning bathrooms and kitchens: We are keen to professionally renovate and upgrade living spaces for bathrooms and kitchens, ensuring a harmonious blend of beauty and practicality.'}
        </p>
        
        <p>
          {lang === 'ar' 
            ? 'التصميم الداخلي: يتميز فريقنا الخبير بقدرته على خلق فضاءات داخلية جمالية وفعالة من الناحية الوظيفية.' 
            : 'Interior Design: Our expert team is distinguished by its ability to create aesthetic and functionally efficient interior spaces.'}
        </p>
        
        <p>
          {lang === 'ar' 
            ? 'الأثاث: نقدم مجموعة من خيارات الأثاث المختارة بعناية تكمل وتعزز التصميم العام للمساحة والجمال.' 
            : 'Furniture: We offer a range of carefully selected furniture options to complement and enhance the overall design and beauty of the space.'}
        </p>
        
        <p>
          {lang === 'ar' 
            ? 'الإضاءة: يتضمن نهجنا في التصميم دمج حلول الإضاءة بعناية لخلق الجو المطلوب والتوازن مع السطوع.' 
            : 'Lighting: Our design approach includes carefully integrating lighting solutions to create the desired atmosphere and balance with brightness.'}
        </p>
        
        <p>
          {lang === 'ar' 
            ? 'الاكسسوارات: نقدم مجموعة من الاكسسوارات لتضيف اللمسات النهائية وترفع المستوى العام للتصميم.' 
            : 'Accessories: We offer a range of accessories to add the final touches and raise the overall level of the design.'}
        </p>
        
   
      </div>

      <div className={`address-details ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
        <h2>{lang === 'ar' ? 'تفاصيل العنوان' : 'Address Details'}</h2>
        
        <div className="address-row">
          <div className="address-label">{lang === 'ar' ? 'العنوان المختصر' : 'Short Address'}</div>
          <div className="address-value">J D B A 1 3 8 3</div>
        </div>

        <div className="address-row">
          <div className="address-label">{lang === 'ar' ? 'رقم المبنى' : 'Building No.'}</div>
          <div className="address-value">3183</div>
          <div className="address-label">{lang === 'ar' ? 'الشارع' : 'Street'}</div>
          <div className="address-value">{lang === 'ar' ? 'الحارث ابن بدل السعدي' : 'Al Harith Ibn Badal Al Saadi'}</div>
        </div>

        <div className="address-row">
          <div className="address-label">{lang === 'ar' ? 'الرقم الفرعي' : 'Secondary No.'}</div>
          <div className="address-value">7021</div>
          <div className="address-label">{lang === 'ar' ? 'الحي' : 'District'}</div>
          <div className="address-value">{lang === 'ar' ? 'حي البوادي' : 'Al Bawadi Dist.'}</div>
        </div>

        <div className="address-row">
          <div className="address-label">{lang === 'ar' ? 'الرمز البريدي' : 'Postal Code'}</div>
          <div className="address-value">23531</div>
          <div className="address-label">{lang === 'ar' ? 'المدينة' : 'City'}</div>
          <div className="address-value">{lang === 'ar' ? 'جدة' : 'Jeddah'}</div>
        </div>

        <div className="address-row">
          <div className="address-value">{lang === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}</div>
        </div>
      </div>
    </>
  );
};

export default AddressDetails;
