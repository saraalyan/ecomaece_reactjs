import React from 'react';
import Radium, { StyleRoot, keyframes } from 'radium';
import { Carousel, Col, Container } from 'react-bootstrap';
import cityProfileImage from '../../assests/images/1.png';
import cityProfileImage1 from '../../assests/images/2.png';
import cityProfileImage2 from '../../assests/images/3.png';
import cityProfileImage3 from '../../assests/images/4.png'; // الشريحة الرابعة الجديدة

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  fadeIn: {
    animation: `${fadeInUp} 1s ease-out`
  }
}; 

function Slider() {
  return (
    <StyleRoot>
      <Carousel id="carouselId" interval={2000}>
        <Carousel.Item>
          <img src={cityProfileImage}  className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <div className="container py-4">
              <div className="row g-5">
                <Col lg={6} style={styles.fadeIn}>
            
                </Col>
                <Col lg={6} className="d-none d-lg-flex" style={styles.fadeIn}>
                 
                </Col>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cityProfileImage1}  className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <div className="container py-4">
              <div className="row g-5">
                <Col lg={6} style={styles.fadeIn}>
               
                </Col>
                <Col lg={6} className="d-none d-lg-flex" style={styles.fadeIn}>
                  
                </Col>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cityProfileImage2} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <div className="container py-4">
              <div className="row g-5">
                <Col lg={6} style={styles.fadeIn}>
                
                </Col>
                <Col lg={6} className="d-none d-lg-flex" style={styles.fadeIn}>
                
                </Col>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cityProfileImage3} className="d-block w-100" alt="Fourth slide" />
          <Carousel.Caption>
            <div className="container py-4">
              <div className="row g-5">
                <Col lg={6} style={styles.fadeIn}>
                  
                </Col>
                <Col lg={6} className="d-none d-lg-flex" style={styles.fadeIn}>
                
                </Col>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </StyleRoot>
  );
}

export default Radium(Slider);
