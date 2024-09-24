import React from 'react';
import './PartnersSection.css'; // Styles for animation
import partner2 from '../../assests/company/2.png';
import partner3 from '../../assests/company/3.png';
import partner4 from '../../assests/company/4.png';
import partner5 from '../../assests/company/5.png';
import partner6 from '../../assests/company/6.png';
import partner7 from '../../assests/company/7.png';
import partner8 from '../../assests/company/8.png';
import partner9 from '../../assests/company/9.png';
import partner10 from '../../assests/company/10.jpg';
import partner11 from '../../assests/company/11.png';
import partner12 from '../../assests/company/12.png';
import partner13 from '../../assests/company/13.png';
import partner14 from '../../assests/company/14.png';
import partner15 from '../../assests/company/15.png';
import { useSelector } from 'react-redux';

const PartnersSection = () => {
    const partners = [
        partner2, partner3, partner4, partner5,
        partner6, partner7, partner8, partner9, partner10,
        partner11, partner12, partner13, partner14, partner15,
    ];

    const firstRow = partners.slice(0, 7);
    const secondRow = partners.slice(7, 14); // تأكد من عدم تجاوز الفهرس إذا كان هناك 15 صورة
    const lang = useSelector((state) => state.lang.lang);

    return (
        <section className="partners-section ">
          <div className="header1-l1">
                        <p className='card-title between-borders1-l1'>      
                            {lang === 'en' ? 'Partners of Success' : 'شركاء النجاح '}

                        </p>
                    </div>
            <div className="partner-row partner-row-1 ">
                {firstRow.map((partner, index) => (
                    <img key={index} src={partner} alt={`Partner ${index + 1}`} className="partner-logo" />
                ))}
                {firstRow.map((partner, index) => (
                    <img key={`duplicate-${index}`} src={partner} alt={`Partner ${index + 1}`} className="partner-logo" />
                ))}
            </div>
            <div className="partner-row partner-row-2">
                {secondRow.map((partner, index) => (
                    <img key={index} src={partner} alt={`Partner ${index + 8}`} className="partner-logo" />
                ))}
                {secondRow.map((partner, index) => (
                    <img key={`duplicate-${index + 7}`} src={partner} alt={`Partner ${index + 8}`} className="partner-logo" />
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;