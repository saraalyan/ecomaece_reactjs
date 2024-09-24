import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../../store/reducers/lang_reducer';
import { toggleDarkMode } from '../../store/actions/dark';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faBox, faKitchenSet, faBuilding } from '@fortawesome/free-solid-svg-icons'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import logoExotic from '../../assests/images/a/5.png';
import logoElite from '../../assests/images/a/6.png';
import logoSmart from '../../assests/images/a/1.png';
import logoCotton from '../../assests/images/a/2.png';
import logoModernHome from '../../assests/images/a/3.png';
import logoVelvetHome from '../../assests/images/a/4.png';
import logo from '../../assests/images/logo1.png';
import saudiFlag from '../../assests/images/soud.png';
import britishFlag from '../../assests/images/pngwing.com.png';

const Navbb = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const lang = useSelector((state) => state.lang.lang);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const handleLanguageChange = (newLang) => {
    dispatch(changeLang(newLang));
  };

  const handleThemeChange = () => {
    dispatch(toggleDarkMode());
  };

  const handleNavigation = (path) => {
    history.push(path);
    window.scrollTo(0, 0);  // Scroll to top

    // Close the navbar on small screens (less than 992px width)
    if (window.innerWidth < 992) {
      document.querySelector('.navbar-toggler').click();
    }
  };

  const navText = {
    home: lang === 'en' ? 'Home' : 'الرئيسية',
    contact: lang === 'en' ? 'Contact Us' : 'اتصل بنا',
    packages: lang === 'en' ? 'Packages' : 'الباقات',
    packageNames: {
      exotic: lang === 'en' ? 'Exotic' : 'باقة اكزوتيك',
      elite: lang === 'en' ? 'Elite' : 'باقة النخبة',
      smart: lang === 'en' ? 'Smart' : 'باقة سمارت',
      cotton: lang === 'en' ? 'Cotton' : 'باقة قطن',
      modernHome: lang === 'en' ? 'Modern Home' : 'الباقة المواكبة',
      velvetHome: lang === 'en' ? 'Velvet Home' : 'باقة البيت المخملي',
    },
    Kitchens: lang === 'en' ? 'Kitchens' : 'المطابخ',
    searchPlaceholder: lang === 'en' ? 'Search' : 'بحث',
    Company: lang === 'en' ? 'Company' : 'الشركات',
  };

  return (
    <Navbar expand="lg" className={`navbar-custom fixed-top shadow-none ${isDarkMode ? 'navbar-dark-mode' : ''}`} style={{fontFamily:'cairo'}}>
      <Container fluid>
        <Navbar.Brand onClick={() => handleNavigation('/')}>
          <img src={logo} alt="Logo" style={{ width: '100px', height: '50px', marginRight: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link onClick={() => handleNavigation('/')}>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} /> {navText.home}
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/contact-us')}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} /> {navText.contact}
            </Nav.Link>
            <NavDropdown title={<><FontAwesomeIcon icon={faBox} style={{ marginRight: '8px' }} /> {navText.packages}</>} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleNavigation('/plans/smart Package')}>
                <img src={logoSmart} alt="Smart" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.smart}
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => handleNavigation('/plans/cotton Package')}>
                <img src={logoCotton} alt="Cotton" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.cotton}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/plans/modern Package')}>
                <img src={logoModernHome} alt="Modern Home" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.modernHome}
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => handleNavigation('/plans/the velvet home Package')}>
                <img src={logoVelvetHome} alt="Velvet Home" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.velvetHome}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/plans/Exotic Package')}>
                <img src={logoExotic} alt="Exotic" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.exotic}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/plans/elite Package')}>
                <img src={logoElite} alt="Elite" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.elite}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => handleNavigation('/Kitchens')}>
              <FontAwesomeIcon icon={faKitchenSet} style={{ marginRight: '8px' }} /> {navText.Kitchens}
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation('/Company')}>
              <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '8px' }} /> {navText.Company}
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <Button
              style={{ marginLeft: '4px', marginRight: '4px' }}
              variant="outline-light"
              onClick={() => handleLanguageChange(lang === 'en' ? 'ar' : 'en')}
            >
              <img
                src={lang === 'en' ? saudiFlag : britishFlag}
                alt={lang === 'en' ? 'Saudi Flag' : 'British Flag'}
                style={{ width: '24px', height: '24px' }}
              />
            </Button>
            <Button
              style={{ marginLeft: '4px' }}
              variant="outline-light"
              onClick={handleThemeChange}
            >
              {isDarkMode ? '🌙' : '☀️'}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbb;
