import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import cityProfileImage from '../../../assests/elite/1.png';
import cityProfileImage1 from '../../../assests/elite/2.png';
import cityProfileImage2 from '../../../assests/elite/3.png';
import cityProfileImage3 from '../../../assests/elite/4.png';
import cityProfileImage4 from '../../../assests/elite/5.png';
import cityProfileImage5 from '../../../assests/elite/6.png';


const photos = [
  { src: cityProfileImage, width: 4, height: 3 },
  { src: cityProfileImage1, width: 4, height: 3 },
  { src: cityProfileImage2, width: 4, height: 3 },
  { src: cityProfileImage3, width: 4, height: 3 } , 
  { src: cityProfileImage4, width: 4, height: 3 },
  { src: cityProfileImage5, width: 4, height: 3 }, 
  
 

];


function Sliderelit({ onImageSelect }) {
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

export default Sliderelit;






