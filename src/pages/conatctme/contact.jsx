import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // لجلب الحالة من Redux
import emailjs from "emailjs-com";
import './cond.css';
import { Helmet } from "react-helmet";

const ContactForm = () => {
  const lang = useSelector((state) => state.lang.lang); 
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedEmail: ""
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.selectedEmail) {
      console.log("Please select an email address.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      to_name: "Recipient Name",
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      recipient_email: formData.selectedEmail
    };

    // إرسال الرسالة الأساسية
    emailjs.send(
      "service_okysahd",
      "template_9hi7h98",
      templateParams,
      "5DZ2_4pdhVUZ7seMb"
    )
    .then((response) => {
      const autoReplyParams = {
        to_name: formData.name, // إرسال إلى المرسل
        reply_to: formData.email, // بريد المرسل
      };

      emailjs.send(
        "service_okysahd", // نفس معرف الخدمة
        "template_itrvnp6", // معرف قالب الرد التلقائي
        autoReplyParams,
        "5DZ2_4pdhVUZ7seMb"
      );

      setSuccessMessage(lang === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        selectedEmail: ""
      });
    }, (error) => {
      console.log("FAILED...", error);
    });
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <>
      <Helmet>
        <title>{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</title>
        <meta name="description" content={lang === 'ar' ? 'صفحة الاتصال الخاصة بشركه الابيات المواكبة modernhomes' : 'Our contact page for inquiries and support'} />
        <meta name="keywords" content={lang === 'ar' ? 'اتصال, دعم, مبيعات,modern homes' : 'contact, support, sales modern homes ,modernhomes,الابيات المواكبه'} />
      </Helmet>
      
      <form
        onSubmit={handleSubmit}
        className={`${isDarkMode ? 'form-dark-mode' : 'form-light-mode'} ${lang === 'ar' ? 'form-rtl' : ''}`}
      style={{marginTop:'4.5rem'}}>
       <div className={`email-descriptions ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h3>{lang === 'ar' ? 'اختر البريد المناسب للقسم الذي تريد الاتصال به:' : 'Choose the appropriate email for the department you want to contact:'}</h3>
        <div className="email-cards-container">
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني العام للمعلومات' : 'General Information Email'}</h4>
            <p>info@modernhomes-sa.com</p>
          </div>
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني للمبيعات' : 'Sales Email'}</h4>
            <p>sales@modernhomes-sa.com</p>
          </div>
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني للمشاريع' : 'Projects Email'}</h4>
            <p>projects@modernhomes-sa.com</p>
          </div>
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني للفواتير' : 'Billing Email'}</h4>
            <p>billing@modernhomes-sa.com</p>
          </div>
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني للموارد البشرية' : 'HR Email'}</h4>
            <p>hr@modernhomes-sa.com</p>
          </div>
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني لسلسلة التوريد' : 'Supply Chain Email'}</h4>
            <p>supplychain@modernhomes-sa.com</p>
          </div>
          <div className="email-card">
            <h4>{lang === 'ar' ? 'البريد الإلكتروني للتصميم' : 'Architecture Email'}</h4>
            <p>arch@modernhomes-sa.com</p>
          </div>
        </div>
      </div>
      <div className={`email-descriptions ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

        <h2 className="form-title">{lang === 'ar' ? 'أسئلة  ؟ اتصل بنا!' : 'Questions? Contact Us!'}</h2>
        
        <div className="form-grid-row">
          <label className="form-label">
            {lang === 'ar' ? 'الاسم:' : 'Name:'}
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
    
          <label className="form-label">
            {lang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
    
          <label className="form-label">
            {lang === 'ar' ? 'الهاتف:' : 'Phone:'}
            <input
              type="text"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
    
        <label className="form-label form-full-width">
          {lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help?'}
          <textarea
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
    
        <label className="form-label form-full-width">
          {lang === 'ar' ? 'اختر بريد القسم:' : 'Select Department Email:'}
          <select
            name="selectedEmail"
            className="form-select"
            value={formData.selectedEmail}
            onChange={handleChange}
            required
          >
            <option value="">{lang === 'ar' ? 'اختر بريدًا' : 'Select an email'}</option>
            <option value="aalbaraiki@modernhomes-sa.com">aalbaraiki@modernhomes-sa.com</option>
            <option value="info@modernhomes-sa.com">info@modernhomes-sa.com</option>
            <option value="sales@modernhomes-sa.com">sales@modernhomes-sa.com</option>
            <option value="projects@modernhomes-sa.com">projects@modernhomes-sa.com</option>
            <option value="billing@modernhomes-sa.com">billing@modernhomes-sa.com</option>
            <option value="hr@modernhomes-sa.com">hr@modernhomes-sa.com</option>
            <option value="supplychain@modernhomes-sa.com">supplychain@modernhomes-sa.com</option>
            <option value="arch@modernhomes-sa.com">arch@modernhomes-sa.com</option>
          </select>
        </label>
    
        <button type="submit" className="form-button">
          {lang === 'ar' ? 'إرسال رسالة' : 'Send Message'}
        </button>

        {successMessage && (
          <p className={`form-success-message ${successMessage ? 'show' : 'hide'}`}>
            {successMessage}
          </p>
        )} </div>
      </form>
    </>
  );
};

export default ContactForm;
