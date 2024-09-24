import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import { Row } from 'react-bootstrap';
import im from '../../../assests/images/Dark Moody Aesthetic Vision Board Photo Gallery Instagram Post (5).png'
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  min-height: 100px; /* Adjust the height as needed */
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

const translate = (key, lang) => {
  const translations = {
    en: {
      serviceRequired: "Service Required for Company",
      location: "Location",
      email: "Email",
      phone: "Phone",
      name: "Name",
      projectType: "Project Type",
      submit: "Submit",
      "Company Name": "Company Name"
    },
    ar: {
      serviceRequired: "  الخدمة المطلوبة للشركات",
      location: "الموقع",
      email: "الايميل",
      phone: "رقم الهاتف",
      name: "الاسم",
      projectType: "نوع المشروع", 
      submit: "إرسال",
      "Company Name": "اسم الشركة"
    }
  };
  return translations[lang][key] || key;
};

const ComForm = () => {
  const { control, handleSubmit } = useForm();
  const lang = useSelector((state) => state.lang.lang); 

  const onSubmit = (data) => {
    emailjs.send('service_ohph28v', 'template_itrvnp6', data, '5DZ2_4pdhVUZ7seMb')
      .then((response) => {
        console.log('Success:', response);
        alert('تم إرسال البريد الإلكتروني بنجاح!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء إرسال البريد الإلكتروني.');
      });
  };

  return (
    <div 
    className="container-fluid" 
    style={{ 
      paddingTop: '5rem', 
     
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    }}
  >
    <Row className='' style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'

    }}>
          <div className="col-12 col-md-6 image-container d-flex justify-content-center">
        <img src={im} alt="Interior Design" className="main-image " />
      </div>

      <FormContainer className='col-12 col-md-6' style={{ fontSize: '.75em', fontWeight: 'bold', fontFamily: 'Cairo' }}>
        <FormTitle>{translate('serviceRequired', lang)}</FormTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* Project Type Text Area */}
          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>{translate('projectType', lang)}</Label>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                <TextArea {...field} placeholder={lang === 'ar' ? 'أدخل تفاصيل نوع المشروع' : 'Enter project type details'} />
              )}
            />
          </FormField>

          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>{translate('name', lang)}</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input type="text" {...field} />
              )}
            />
          </FormField>

          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>{translate('Company Name', lang)}</Label>
            <Controller
              name="Company Name"
              control={control}
              render={({ field }) => (
                <Input type="text" {...field} />
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
            <Label>{translate('email', lang)}</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input type="email" {...field} />
              )}
            />
          </FormField>

          <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Label>{translate('phone', lang)}</Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input type="tel" {...field} />
              )}
            />
          </FormField>

          <Button type="submit">{translate('submit', lang)}</Button>
        </form>
      </FormContainer>
    </Row>
    </div>
  );
};

export default ComForm;
