import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 

import Bottum from './bottum';

class Footer extends Component {
  render() {
    return ( 
      <div className='container-fluid'>
        <div className='row' style={{ background: 'black', color: 'white', padding: '2rem 0' }}>
          <div className="col-md-4">
            <div className="mb-3">
              <FontAwesomeIcon icon={faEnvelope} size="lg" /> 
              <p style={{ color: 'white' }}>alyansara817@gmail.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <p style={{ color: 'white' }}>+20 01025159322</p>
            </div>
          </div>
          <div className="col-md-4">
            <Bottum buttonText="Contact Me" buttonLink="https://www.lipsum.com/" />
          </div>
          <div className="col-md-4">
            <ul className="list-inline text-center">
              <li className="list-inline-item"><a style={{color:"white"}} href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="lg" /></a></li>
              <li className="list-inline-item"><a style={{color:"white"}} href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
              <li className="list-inline-item"><a style={{color:"white"}}href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
              <li className="list-inline-item"><a style={{color:"white"}}href="https://github.com"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
