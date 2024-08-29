import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';

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
const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FieldContainer = styled.div`
  flex: 1;
  margin-right: 10px; /* Adjust the margin as needed */
`;

/* Optional: Style for the last FieldContainer to remove the right margin */
const LastFieldContainer = styled(FieldContainer)`
  margin-right: 0;
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
    },
    ar: {
      serviceRequired: "ادخال الخدمة المطلوبة",
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
      availableDate: "اختيار التاريخ المتاح",
      consultantVisitDate: "تحديد موعد زيارة استشاريين",
      contactMethod: "اختيار طريقة التواصل",
      emailOption: "ايميل",
      whatsappOption: "واتس اب",
      phoneOption: "اتصال",
      submit: "إرسال",
    }
  };

  return translations[lang][key] || key;
};


const HomeForm = () => {
    const { control, handleSubmit } = useForm();
    const lang = useSelector((state) => state.lang.lang); // Get language from Redux state
  
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
        <FormContainer className='container'>
          <FormTitle>{translate('serviceRequired', lang)}</FormTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <Label>{translate('serviceRequired', lang)}</Label>
              <Controller
                name="service"
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <option value="completeHouse">{translate('serviceRequired', lang)}</option>
                    <option value="interiorDesign">{translate('interiorDesign', lang)}</option>
                    <option value="renovation">{translate('renovation', lang)}</option>
                    <option value="bathrooms">{translate('bathrooms', lang)}</option>
                    <option value="kitchens">{translate('kitchens', lang)}</option>
                    <option value="hotelFurnishing">{translate('hotelFurnishing', lang)}</option>
                    <option value="decorations">{translate('decorations', lang)}</option>
                    <option value="decluttering">{translate('decluttering', lang)}</option>
                    <option value="other">{translate('other', lang)}</option>
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
                  <Select {...field}>
                    <option value="palace">{translate('palace', lang)}</option>
                    <option value="villa">{translate('villa', lang)}</option>
                    <option value="recreationArea">{translate('recreationArea', lang)}</option>
                    <option value="apartment">{translate('apartment', lang)}</option>
                    <option value="studio">{translate('studio', lang)}</option>
                  </Select>
                )}
              />
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
              <Label>{translate('contactMethod', lang)}</Label>
              <Controller
                name="contactMethod"
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <option value="email">{translate('emailOption', lang)}</option>
                    <option value="whatsapp">{translate('whatsappOption', lang)}</option>
                    <option value="phone">{translate('phoneOption', lang)}</option>
                  </Select>
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
              <Label>{translate('city', lang)}</Label>
              <Controller
                name="city"
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
                <TimeField>
                  <Label>{translate('consultantVisitDate', lang)}</Label>
                  <Controller
                    name="consultantVisitDate"
                    control={control}
                    render={({ field }) => (
                      <Input type="date" {...field} />
                    )}
                  />
                </TimeField>
              </TimeFieldsContainer>
            </FormField>
            
            <Button type="submit">{translate('submit', lang)}</Button>
          </form>
        </FormContainer>
      );
      
    };
    
  
  export default HomeForm;
