import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faYoutube, faDribbble } from '@fortawesome/free-brands-svg-icons';
import log from '../../assests/images/logo1.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const Footer = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const footerStyle = {
    background: isDarkMode ? '#1e2120' : '#7f7967',
    color: isDarkMode ? '#ffffff' : '#000000',
    padding: '2rem 0',
    borderRadius: '60px',
  };

  return (
    <div className='' style={{ borderRadius: '60px' }}>
      <div className='row' style={footerStyle}>
        <div className="col-md-3 mb-4 ms-auto">
          <div>
            <Link to="/" >
              <img src={log} className="mb footer-logo" alt="main_logo" style={{ width: '60%' }} />
            </Link>
          </div>
          <div>
            <ul className="d-flex flex-row ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://www.facebook.com/CreativeTim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="lg" color={isDarkMode ? 'white' : 'black'} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://twitter.com/creativetim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="lg" color={isDarkMode ? 'white' : 'black'} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://dribbble.com/creativetim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faDribbble} size="lg" color={isDarkMode ? 'white' : 'black'} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://github.com/creativetimofficial" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" color={isDarkMode ? 'white' : 'black'} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-1" href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="lg" color={isDarkMode ? 'white' : 'black'} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 className="text-sm">Company</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/presentation" target="_blank" rel="noopener noreferrer">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/templates/free" target="_blank" rel="noopener noreferrer">Freebies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/templates/premium" target="_blank" rel="noopener noreferrer">Premium Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/blog" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 className="text-sm">Resources</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="https://iradesign.io/" target="_blank" rel="noopener noreferrer">Illustrations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/bits" target="_blank" rel="noopener noreferrer">Bits & Snippets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/affiliates/new" target="_blank" rel="noopener noreferrer">Affiliate Program</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 className="text-sm">Help & Support</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/knowledge-center" target="_blank" rel="noopener noreferrer">Knowledge Center</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://services.creative-tim.com/?ref=ct-mk2-footer" target="_blank" rel="noopener noreferrer">Custom Development</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/sponsorships" target="_blank" rel="noopener noreferrer">Sponsorships</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
          <div>
            <h6 className="text-sm">Legal</h6>
            <ul className="flex-column ms-n3 nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/terms-of-service" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.creative-tim.com/license" target="_blank" rel="noopener noreferrer">Licenses (EULA)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12">
          <div className="text-center">
            <p className="text-dark text-sm font-weight-normal">
              All rights reserved. Copyright © <script>
                document.write(new Date().getFullYear())
                </script> MODERN HOMES BY <a href="https://khamsat.com/user/sara_alyan" target="_blank" rel="noopener noreferrer">sara alyan</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
