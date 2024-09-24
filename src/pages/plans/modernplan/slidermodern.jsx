import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import cityProfileImage from '../../../assests/modern/1.png';
import cityProfileImage1 from '../../../assests/modern/2.png';
import cityProfileImage2 from '../../../assests/modern/3.png';
import cityProfileImage3 from '../../../assests/modern/4.png';
import cityProfileImage4 from '../../../assests/modern/5.png';
import cityProfileImage5 from '../../../assests/modern/6.png';
import cityProfileImage6 from '../../../assests/modern/7.png';
import cityProfileImage7 from '../../../assests/modern/8.png';
import cityProfileImage8 from '../../../assests/modern/9.png';
import cityProfileImage9 from '../../../assests/modern/10.png';
import cityProfileImage10 from '../../../assests/modern/11.png';
import cityProfileImage11 from '../../../assests/modern/12.png';
import cityProfileImage12 from '../../../assests/modern/13.png';
import cityProfileImage13 from '../../../assests/modern/14.png';
import cityProfileImage14 from '../../../assests/modern/15.png';
import cityProfileImage15 from '../../../assests/modern/16.png';


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
