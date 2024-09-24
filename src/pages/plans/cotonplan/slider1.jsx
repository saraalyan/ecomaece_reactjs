import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import cityProfileImage from '../../../assests/cotton/IMG-20240823-WA0006.jpg';
import cityProfileImage1 from '../../../assests/cotton/IMG-20240823-WA0007.jpg';
import cityProfileImage2 from '../../../assests/cotton/IMG-20240823-WA0008.jpg';
import cityProfileImage3 from '../../../assests/cotton/IMG-20240823-WA0009.jpg';
import cityProfileImage4 from '../../../assests/cotton/IMG-20240823-WA0010.jpg';
import cityProfileImage5 from '../../../assests/cotton/IMG-20240823-WA0011.jpg';
import cityProfileImage6 from '../../../assests/cotton/IMG-20240823-WA0012.jpg';
import cityProfileImage7 from '../../../assests/cotton/IMG-20240823-WA0013.jpg';
import cityProfileImage8 from '../../../assests/cotton/IMG-20240823-WA0014.jpg';
import cityProfileImage9 from '../../../assests/cotton/IMG-20240823-WA0015.jpg';
import cityProfileImage10 from '../../../assests/cotton/IMG-20240823-WA0016.jpg';
import cityProfileImage11 from '../../../assests/cotton/IMG-20240823-WA0017.jpg';
import cityProfileImage12 from '../../../assests/cotton/IMG-20240823-WA0018.jpg';
import cityProfileImage13 from '../../../assests/cotton/IMG-20240823-WA0019.jpg';
import cityProfileImage14 from '../../../assests/cotton/IMG-20240823-WA0020.jpg';
import cityProfileImage15 from '../../../assests/cotton/IMG-20240823-WA0021.jpg';
import cityProfileImage16 from '../../../assests/cotton/IMG-20240823-WA0022.jpg';
import cityProfileImage17 from '../../../assests/cotton/IMG-20240823-WA0023.jpg';
import cityProfileImage18 from '../../../assests/cotton/IMG-20240823-WA0024.jpg';
import cityProfileImage19 from '../../../assests/cotton/IMG-20240823-WA0025.jpg';
import cityProfileImage20 from '../../../assests/cotton/IMG-20240823-WA0026.jpg';
import cityProfileImage22 from '../../../assests/cotton/IMG-20240823-WA0027.jpg';
import cityProfileImage23 from '../../../assests/cotton/IMG-20240823-WA0028.jpg';
import cityProfileImage24 from '../../../assests/cotton/CO1/1.jpg';
import cityProfileImage25 from '../../../assests/cotton/CO1/2.jpg';
import cityProfileImage26 from '../../../assests/cotton/CO1/3.jpg';
import cityProfileImage27 from '../../../assests/cotton/CO1/4.jpg';
import cityProfileImage28 from '../../../assests/cotton/CO1/5.jpg';
import cityProfileImage29 from '../../../assests/cotton/CO1/6.jpg';
import cityProfileImage30 from '../../../assests/cotton/CO1/7.jpg';

import './slider.css'
const photos = [
  { src: cityProfileImage, width: 4, height: 3 },
  { src: cityProfileImage1, width: 4, height: 3 },
  { src: cityProfileImage2, width: 4, height: 3 },
  { src: cityProfileImage3, width: 4, height: 3 } , 
  { src: cityProfileImage4, width: 4, height: 3 },
  { src: cityProfileImage5, width: 4, height: 3 }, 
   { src: cityProfileImage6, width: 4, height: 3 },
  { src: cityProfileImage7, width: 4, height: 3 }, 
   { src: cityProfileImage8, width: 4, height: 3 },
  { src: cityProfileImage9, width: 4, height: 3 }, 
   { src: cityProfileImage10, width: 4, height: 3 },
  { src: cityProfileImage11, width: 4, height: 3 }, 
   { src: cityProfileImage12, width: 4, height: 3 },
  { src: cityProfileImage13, width: 4, height: 3 },  
  { src: cityProfileImage14, width: 4, height: 3 },  
  { src: cityProfileImage15, width: 4, height: 3 },
  { src: cityProfileImage17, width: 4, height: 3 },
  { src: cityProfileImage18, width: 4, height: 3 },
  { src: cityProfileImage20, width: 4, height: 3 },
  { src: cityProfileImage22, width: 4, height: 3 },
  { src: cityProfileImage23, width: 4, height: 3 },
  { src: cityProfileImage19, width: 4, height: 3 },
  { src: cityProfileImage16, width: 4, height: 3 },
  { src: cityProfileImage24, width: 4, height: 3 },
  { src: cityProfileImage25, width: 4, height: 3 },
  { src: cityProfileImage26, width: 4, height: 3 },
  { src: cityProfileImage27, width: 4, height: 3 },
  { src: cityProfileImage28, width: 4, height: 3 },
  { src: cityProfileImage29, width: 4, height: 3 },
  { src: cityProfileImage30, width: 4, height: 3 },


];
function Slider({ onImageSelect }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [photoIndex]);

  
  const handleImageLoad = () => {
    setLoaded(true);
  };

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleThumbnailClick = (index) => {
    setPhotoIndex(index);
    onImageSelect(photos[index].src); // ارسال الصورة المختارة
  };

  return (
    <div className="photo-gallery  container">
      <div className="main-image d-flex justify-content-center">
        <img
          src={photos[photoIndex].src}
          alt="Main"
          onLoad={handleImageLoad}
          className={loaded ? 'loaded' : ''}
          onClick={openLightbox}
        />
      </div>

      <div className="thumbnail-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="thumbnail-item">
            <img
              src={photo.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className={photoIndex === index ? 'active-thumbnail' : ''}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].src}
          nextSrc={photos[(photoIndex + 1) % photos.length].src}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </div>
  );
}

export default Slider;
