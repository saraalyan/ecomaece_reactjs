import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import { Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled components
const FormContainer = styled.div`
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #004494;
  }
`;

const TimeFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const TimeField = styled.div`
  flex: 1;
`;

// Translate function (for demonstration purposes)
const translate = (key, lang) => {
  const translations = {
    en: {
      serviceRequired: "Service Required",
      homeType: "Home Type",
      bedrooms: "Number of Bedrooms",
      councilRooms: "Number of Councils",
      livingRooms: "Number of Living Rooms",
      kitchens: "Number of Kitchens",
      bathrooms: "Number of Bathrooms",
      location: "Location",
      city: "City",
      email: "Email",
      phone: "Phone",
      name: "Name",
      availableTime: "Available Time",
      from: "From",
      to: "To",
      availableDate: "Available Date",
      consultantVisitDate: "Consultant Visit Date",
      contactMethod: "Contact Method",
      emailOption: "Email",
      whatsappOption: "WhatsApp",
      phoneOption: "Phone",
      submit: "Submit",
      homeType: "Home Type",
      palace: "Palace",
      villa: "Villa",
      recreationArea: "Recreation Area",
      apartment: "Apartment",
      studio: "Studio",
      small: "Small",
      medium: "Medium",
      large: "Large",
      sqm: "sqm",
      select:"select",
      size:"size"
    },
    ar: {
      select:"اختار",
      serviceRequired: " الخدمة المطلوبة",
      homeType: "نوع المنزل",
      bedrooms: "عدد غرف النوم",
      councilRooms: "عدد المجالس",
      livingRooms: "عدد غرف المعيشة",
      kitchens: "عدد المطابخ",
      bathrooms: "عدد دورات المياه",
      location: "الموقع",
      city: "المدينة",
      email: "الايميل",
      phone: "رقم الهاتف",
      name: "الاسم",
      availableTime: "اختيار التوقيت المتاح",
      from: "من",
      to: "إلى",
      all: "الجميع",
      availableDate: "اختيار التاريخ المتاح",
      consultantVisitDate: "تحديد موعد زيارة استشاريين",
      contactMethod: "اختيار طريقة التواصل",
      emailOption: "ايميل",
      whatsappOption: "واتس اب",
      phoneOption: "اتصال",
      submit: "إرسال",
      package:"الباقه",
      "select Package":"اختر الباقة",
      "Smart Package":"الباقة الذكية",
      "cotton Package":"باقه قطن",
      "modern Package":"الباقة المواكبة",
      "The Velvet Home Package":"باقه البيت المخملي",
      "Exotic Package":"باقة Exotic",
      "Elite Package":"باقة النخبة",
      "Interior design":"تصميم داخلي",
      "Finishing":"تشطيب",
      "Hotel furnishing":"تأثيث فندقي",
      "Kitchens":"مطابخ",
      "Bathrooms":"دورات مياه",
      homeType: "نوع المنزل",
      palace: "قصر",
      villa: "فيلا",
      recreationArea: "استراحة",
      apartment: "شقة",
      studio: "استوديو",
      small: "صغير",
      medium: "متوسط",
      large: "كبير",
      sqm: "متر مربع",
      size:'الحجم'
    }
  };

  return translations[lang][key] || key;
};

const HomeForm = ({ Slider, defaultPackage }) => { 
const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const lang = useSelector((state) => state.lang.lang); 

  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const contactMethod = watch("contactMethod");

  const onSubmit = (data) => {
    if (!contactMethod) {
      toast.error(lang === 'ar' ? 'يرجى اختيار طريقة التواصل.' : 'Please select a contact method.', { autoClose: 3000 });
      return;
    }
    if (!contactMethod) {
      toast.error(lang === 'ar' ? 'يرجى اختيار طريقة التواصل.' : 'Please select a contact method.', { autoClose: 3000 });
      return;
    }
    
    
    const translatedData = {
      ...data,
      serviceRequired: translate(data.serviceRequired, lang),
      homeType: translate(data.homeType, lang),
      contactMethod: translate(data.contactMethod, lang),
      selectedImage: imageUrl,
    };

    // إرسال البيانات باستخدام EmailJS
    emailjs.send('service_zz4dg2j', 'template_2fee41v', translatedData, 'U5uCxRtbYQmlRrDhk')
    .then((response) => {
      console.log('Success:', response);
      toast.success(lang === 'ar' ? 'تم إرسال البريد الإلكتروني بنجاح!' : 'Email sent successfully!', {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error(lang === 'ar' ? 'حدث خطأ أثناء إرسال البريد الإلكتروني.' : 'Error sending email.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

  // Base URL for the image
  const baseUrl = 'https://modernhomes-sa.com/';
  
  // Concatenate base URL with the selected image path
  const imageUrl = `${baseUrl}${selectedImageUrl}`;

  const handleImageSelect = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  const [homeType, setHomeType] = useState("");

  const handleHomeTypeChange = (e) => {
    setHomeType(e.target.value);
  };

  return (
    <Row className='container-fluid' style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
      <div className='col-12 col-md-6'>
        <Slider onImageSelect={handleImageSelect} />
      </div>
        <FormContainer className=' col-12 col-md-6 ' style={{ fontSize: '.75em',
    fontWeight: 'bold',
    fontFamily:'cairo'}}>
          <FormTitle>{translate('serviceRequired', lang)}</FormTitle>
          <ToastContainer />

          <form onSubmit={handleSubmit(onSubmit)}>
          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('serviceRequired', lang)}</Label>
              <Controller
                name="serviceRequired"
                defaultValue='all'
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <option value="interiorDesign">{translate('all', lang)}</option>

                    <option value="Interior design">{translate('Interior design', lang)}</option>
                    <option value="Finishing">{translate('Finishing', lang)}</option>
                    <option value="Hotel furnishing">{translate('Hotel furnishing', lang)}</option>
                    <option value="Kitchens">{translate('Kitchens', lang)}</option>
                    <option value="Bathrooms">{translate('Bathrooms', lang)}</option>
                    <option value="other">{translate('other', lang)}</option>
                  </Select>
                )}
              />
            </FormField>
          
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('select Package', lang)}</Label>
              <Controller
                name="Package"
                control={control}
                defaultValue={defaultPackage} 
                render={({ field }) => (
                  <Select {...field}>
                    <option value="Smart Package">{translate('Smart Package', lang)}</option>
                    <option value="cotton Package">{translate('cotton Package', lang)}</option>

                    <option value="modern Package">{translate('modern Package', lang)}</option>
                    <option value="The Velvet Home Package">{translate('The Velvet Home Package', lang)}</option>
                    <option value="Exotic Package">{translate('Exotic Package', lang)}</option>
                    <option value="Elite Package">{translate('Elite Package', lang)}</option>
                    
                  </Select>
                )}
              />
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Label>{translate('homeType', lang)}</Label>
      <Controller
        name="homeType"
        
        control={control}
        render={({ field }) => (
          <Select {...field} onChange={(e) => { field.onChange(e); handleHomeTypeChange(e); }}>
            <option value="not selected">{translate('select', lang)}</option>
            <option value="palace">{translate('palace', lang)}</option>
            <option value="villa">{translate('villa', lang)}</option>
            <option value="recreationArea">{translate('recreationArea', lang)}</option>
            <option value="apartment">{translate('apartment', lang)}</option>
            <option value="studio">{translate('studio', lang)}</option>
          </Select>
        )}
      />

      {/* Render size options based on the selected home type */}
      {homeType && (
        <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <Label>{translate('size', lang)}</Label>
          <Controller
            name="homeSize"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                {homeType === 'apartment' && (
                  <>
                     <option value="no">{translate('select', lang)}</option>
                    <option value="small">{translate('small', lang)} 60 - 140 {translate('sqm', lang)}</option>
                    <option value="medium">{translate('medium', lang)} 150 - 250 {translate('sqm', lang)}</option>
                    <option value="large">{translate('large', lang)} 250+ {translate('sqm', lang)}</option>
                  </>
                )}
                {homeType === 'villa' && (
                  <>
                                       <option value="no">{translate('select', lang)}</option>

                    <option value="small">{translate('small', lang)} 170 - 230 {translate('sqm', lang)}</option>
                    <option value="medium">{translate('medium', lang)} 230 - 450 {translate('sqm', lang)}</option>
                    <option value="large">{translate('large', lang)} 450+ {translate('sqm', lang)}</option>
                  </>
                )}
                {homeType === 'palace' && (
                  <>
                                       <option value="no">{translate('select', lang)}</option>

                    <option value="small">{translate('small', lang)} 700 - 900 {translate('sqm', lang)}</option>
                    <option value="medium">{translate('medium', lang)} 1000 - 1500 {translate('sqm', lang)}</option>
                    <option value="large">{translate('large', lang)} 2000+ {translate('sqm', lang)}</option>
                  </>
                )}
                {homeType === 'recreationArea' && (
                  <>
                                       <option value="no">{translate('select', lang)}</option>

                    <option value="small">{translate('small', lang)} 200 - 300 {translate('sqm', lang)}</option>
                    <option value="medium">{translate('medium', lang)} 300 - 500 {translate('sqm', lang)}</option>
                    <option value="large">{translate('large', lang)} 500+ {translate('sqm', lang)}</option>
                  </>
                )}
              </Select>
            )}
          />
        </FormField>
      )}
    </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('bathrooms', lang)}</Label>
              <Controller
                name="bathrooms"
                control={control}
                render={({ field }) => (
                  <Input type="number" {...field} />
                )}
              />
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('bedrooms', lang)}</Label>
              <Controller
                name="bedrooms"
                control={control}
                render={({ field }) => (
                  <Input type="number" {...field} />
                )}
              />
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('councilRooms', lang)}</Label>
              <Controller
                name="councilRooms"
                control={control}
                render={({ field }) => (
                  <Input type="number" {...field} />
                )}
              />
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('livingRooms', lang)}</Label>
              <Controller
                name="livingRooms"
                control={control}
                render={({ field }) => (
                  <Input type="number" {...field} />
                )}
              />
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('kitchens', lang)}</Label>
              <Controller
                name="kitchens"
                control={control}
                render={({ field }) => (
                  <Input type="number" {...field} />
                )}
              />
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label><span className='danger' style={{color:'red', paddingLeft:'5px', fontWeight:'bolder'}}>*</span>
              {translate('name', lang)}</Label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: lang === 'ar' ? 'يرجى ادخال الاسم.' : 'Please enter your name.'
                }}
                render={({ field }) => (
                  <Input type="text" {...field} />
                )}
              />
               {errors.name && (
            <p style={{ color: 'red', fontSize: '14px' }}>
              {errors.name.message}
            </p>
          )}
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <Label>
            <span className='danger' style={{color:'red', paddingLeft:'5px', fontWeight:'bolder'}}>*</span>
            {translate('contactMethod', lang)}
          </Label>
          <Controller
            name="contactMethod"
            control={control}
            rules={{ 
              required: lang === 'ar' ? 'يرجى اختيار طريقة التواصل.' : 'Please select a contact method.' 
            }}
            render={({ field }) => (
              <Select {...field}>
                <option value="">{translate('select', lang)}</option>
                <option value="email">{translate('emailOption', lang)}</option>
                <option value="whatsapp">{translate('whatsappOption', lang)}</option>
                <option value="phone">{translate('phoneOption', lang)}</option>
              </Select>
            )}
          />
          {errors.contactMethod && (
            <p style={{ color: 'red', fontSize: '14px' }}>
              {errors.contactMethod.message}
            </p>
          )}
        </FormField>

        {contactMethod === 'email' && (
          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>
              <span className='danger' style={{color:'red', paddingLeft:'5px', fontWeight:'bolder'}}>*</span>
              {translate('email', lang)}
            </Label>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: lang === 'ar' ? 'يرجى إدخال البريد الإلكتروني.' : 'Email is required.', 
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: lang === 'ar' ? 'البريد الإلكتروني غير صالح.' : 'Invalid email address.',
                }
              }}
              render={({ field }) => (
                <Input type="email" {...field} />
              )}
            />
            {errors.email && (
              <p style={{ color: 'red', fontSize: '14px' }}>
                {errors.email.message}
              </p>
            )}
          </FormField>
        )}

        {(contactMethod === 'phone' || contactMethod === 'whatsapp') && (
          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>
              <span className='danger' style={{color:'red', paddingLeft:'5px', fontWeight:'bolder'}}>*</span>
              {translate('phone', lang)}
            </Label>
            <Controller
              name="phone"
              control={control}
              rules={{ 
                required: lang === 'ar' ? 'يرجى إدخال رقم الهاتف.' : 'Phone number is required.', 
                pattern: {
                  value: /^[0-9]{10,}$/,
                  message: lang === 'ar' ? 'رقم الهاتف غير صالح.' : 'Invalid phone number.',
                }
              }}
              render={({ field }) => (
                <Input type="tel" {...field} />
              )}
            />
            {errors.phone && (
              <p style={{ color: 'red', fontSize: '14px' }}>
                {errors.phone.message}
              </p>
            )}
          </FormField>
        )}

<FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
  <Label>              <span className='danger' style={{color:'red', paddingLeft:'5px', fontWeight:'bolder'}}>*</span>
  {translate('city', lang)}</Label>
  <Controller
    name="city"
    control={control}
    rules={{
      required: lang === 'ar' ? 'يرجى ادخال المدينه.' : 'Please enter your city.'
    }}
    render={({ field }) => (
      <Input
        type="text"
        {...field}
        onBlur={() => {
          if (!field.value) {
            toast.error(lang === 'ar' ? 'يرجى ادخال المدينه.' : 'Please enter your city.');
          }
        }}
      />
    )}
  />
</FormField>


            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('location', lang)}</Label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Input type="text" {...field} />
                )}
              />
            </FormField>
      
           
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <TimeFieldsContainer>
                <TimeField>
                  <Label>{translate('availableDate', lang)}</Label>
                  <Controller
                    name="availableDate"
                    control={control}
                    render={({ field }) => (
                      <Input type="date" {...field} />
                    )}
                  />
                </TimeField>
                
              </TimeFieldsContainer>
            </FormField>
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('availableTime', lang)}</Label>
              <TimeFieldsContainer>
                <TimeField>
                  <Label>{translate('from', lang)}</Label>
                  <Controller
                    name="timeFrom"
                    control={control}
                    render={({ field }) => (
                      <Input type="time" {...field} />
                    )}
                  />
                </TimeField>
                <TimeField>
                  <Label>{translate('to', lang)}</Label>
                  <Controller
                    name="timeTo"
                    control={control}
                    render={({ field }) => (
                      <Input type="time" {...field} />
                    )}
                  />
                </TimeField>
              </TimeFieldsContainer>
            </FormField>
      
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>{lang === 'ar' ? 'الصورة المختارة' : 'Selected Image'}</Label>
            {imageUrl ? (
              <img src={imageUrl} alt="Selected" style={{ maxWidth: '30%', height: 'auto' }} />
            ) : (
              <p>{lang === 'ar' ? 'لم يتم اختيار صورة' : 'No image selected'}</p>
            )}
            <input type="hidden" name="selectedImage" value={imageUrl} /> {/* Hidden input to send selected image URL */}
          </FormField>
            
            <Button type="submit">{translate('submit', lang)}</Button>
          </form>
        </FormContainer>
        </Row>
      );
      
    };
    
  
  export default HomeForm;
