import React from 'react';
import './metalWork.css'; // Ensure you have this CSS file created
import image1 from '../../assests/company/1.jpg'; // Update paths if necessary
import image2 from '../../assests/company/2.jpg';
import image3 from '../../assests/company/3.jpg';
import image4 from '../../assests/company/4.jpg';
import image5 from '../../assests/company/5.jpg';
import { useSelector } from 'react-redux';

const MetalWork = () => {
  const lang = useSelector((state) => state.lang.lang); 

  return (
    <div className={`container text-center ${lang === 'ar' ? 'text-right' : 'text-left'}`} style={{ fontFamily: 'cairo' }}>
      <div className="row">
        <div className="col-12 mb-4 text-center " style={{fontWeight:'bold'}}>
          <h2 >{lang === 'ar' ? 'أعمال الحديد والألومنيوم' : 'Metal & aluminum work'}</h2>
          <p>{lang === 'ar' ? 'اعمال الحديد والألومنيوم من أبواب ونوافذ بتصاميم عصرية وجودة عالية' : 'Iron and aluminum works from doors and windows with modern and high-quality designs'}</p>
          <p>{lang === 'ar' ? 'تصاميم عصرية وجودة عالية' : 'Modern and high quality'}</p>
        </div>
      </div>

      {/* Display images in one row on large screens, and stacked in one column on small screens */}
      <div className="row mb-4 justify-content-center">
        {[image1, image2, image3, image4, image5].map((src, index) => (
          <div key={index} className="col-4 col-sm-4 col-lg-2 mb-4">
            <div className="image-block">
              <img src={src} alt={`Metal Work ${index + 1}`} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MetalWork;
