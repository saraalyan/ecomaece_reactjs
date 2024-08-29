import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../../store/reducers/lang_reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import logoExotic from '../../assests/images/exotic-logo.png';
import logoElite from '../../assests/images/elite-logo.png';
import logoSmart from '../../assests/images/smart-logo.png';
import logoCotton from '../../assests/images/cotton-logo.png';
import logoModernHome from '../../assests/images/modern-home-logo.png';
import logoVelvetHome from '../../assests/images/velvet-home-logo.png';
import logo from '../../assests/images/logo1.png';
import saudiFlag from '../../assests/images/soud.png';
import britishFlag from '../../assests/images/pngwing.com.png';
import { toggleDarkMode } from '../../store/actions/dark';

const Navbb = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const handleLanguageChange = (newLang) => {
    dispatch(changeLang(newLang));
  };

  const handleThemeChange = () => {
    dispatch(toggleDarkMode()); // Dispatch the correct action
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
    searchPlaceholder: lang === 'en' ? 'Search' : 'بحث',
  };

  return (
    <Navbar expand="lg" className={`navbar-custom fixed-top shadow-none ${isDarkMode ? 'navbar-dark-mode' : ''}`}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: '120px', height: '60px', marginRight: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">{navText.home}</Nav.Link>
            <Nav.Link href="/contact-us">{navText.contact}</Nav.Link>
            <NavDropdown title={navText.packages} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/packages/exotic">
                <img src={logoExotic} alt="Exotic" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.exotic}
              </NavDropdown.Item>
              <NavDropdown.Item href="/packages/elite">
                <img src={logoElite} alt="Elite" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.elite}
              </NavDropdown.Item>
              <NavDropdown.Item href="/packages/smart">
                <img src={logoSmart} alt="Smart" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.smart}
              </NavDropdown.Item>
              <NavDropdown.Item href="/packages/cotton">
                <img src={logoCotton} alt="Cotton" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.cotton}
              </NavDropdown.Item>
              <NavDropdown.Item href="/packages/modern-home">
                <img src={logoModernHome} alt="Modern Home" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.modernHome}
              </NavDropdown.Item>
              <NavDropdown.Item href="/packages/velvet-home">
                <img src={logoVelvetHome} alt="Velvet Home" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                {navText.packageNames.velvetHome}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={navText.searchPlaceholder}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">{navText.searchPlaceholder}</Button> {/* Adjust color for contrast */}
          </Form>
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
