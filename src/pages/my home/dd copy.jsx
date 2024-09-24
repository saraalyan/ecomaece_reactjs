import React from 'react';
import './metalWork.css'; // Ensure you have this CSS file created
import image0 from '../../assests/company/Untitled design.jpg';
import image1 from '../../assests/company/8.jpg';
import image2 from '../../assests/company/6.jpg';
import image3 from '../../assests/company/Untitled design (14).png';
import { useSelector } from 'react-redux';

const MetalWork1 = () => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux
  const isArabic = lang === 'ar'; // Check if the language is Arabic
  const isDarkMode = useSelector((state) => state.darkMode.darkMode); 

  return (
    <div
    
      className={`  text-center
        ${isDarkMode ? 'form-dark-mode' : 'form-light-mode'}
        ${isArabic ? 'text-center' : 'text-center'}`} 
      style={{ fontFamily: 'cairo' }}
    >
      {/* First row with description and the first image */}
      <div className="row align-items-center ">
      <div className="image-block col-12 col-lg-6 mb-2 text-center w-60">
          <img src={image0} alt="Metal Work 1" className="img-fluid" />
        </div> 
        {/* Description column */}
        <div className="col-12 col-lg-6  text-center " style={{ fontWeight: 'bold' }}>
          <h2>{isArabic ? 'خامات حجرية مميزة تستخدم في كافة ديكورات المطبخ' : 'Distinctive stone materials used in all kitchen decorations'}</h2>
        </div>
    
      </div>

      {/* Second row with the remaining three images */}
      <div className="row mb-1 justify-content-center align-items-end" style={{gap:'1rem'}}>
      <div className=" col-4 col-sm-4 col-lg-4 ">
          <img src={image3} alt="Metal Work 4" className="img-fluid" />
        </div>
      <div className="image-block col-3 col-sm-3 col-lg-3 ">
          <img src={image2} alt="Metal Work 3" className="img-fluid" />
        </div>
      <div className="image-block col-3 col-sm-3 col-lg-3  ">
          <img src={image1} alt="Metal Work 2" className="img-fluid" />
        </div>
     
        
      
       
      </div>
    </div>
  );
};

export default MetalWork1;
