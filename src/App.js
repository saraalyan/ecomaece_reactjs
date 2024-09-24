import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbb from './component/navbar/navbb';

import Home from './pages/my home/home.jsx';
import NotFound from './pages/NotFound.js';
import COTTON from './pages/plans/cotonplan/plancotton.jsx';
import Smart from './pages/plans/smartplans/plansmart.jsx'
import Modern from './pages/plans/modernplan/planmodern.jsx'
import Vel  from './pages/plans/Velvetplan/plansvel.jsx'
import Exotic from './pages/plans/Exoticplan/planExotic.jsx'
import Elite from './pages/plans/eliteplan/planelit.jsx'

import Kitchens from './pages/Kitchens/Kitchens.jsx';
import Footer from './component/portofolio/footer.js';
import WhatsAppIcon from './component/portofolio/whats.jsx';
import ComForm from './pages/plans/cotonplan/com_form.jsx';
import ContactForm from './pages/conatctme/contact.jsx';
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import AddressDetails from './pages/aboutus/aboutus.jsx';

function App() {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <>
      <Helmet>
        <title>{lang === 'ar' ? 'modernhomes شركه الابيات المواكبة' : 'modernhomes main page'}</title>
        <meta name="description" content={lang === 'ar' ? 'صفحة الاتصال الخاصة بشركه الابيات المواكبة modernhomes...' : 'Our contact page for inquiries and support...'} />
      </Helmet>

      <BrowserRouter>
        <Navbb />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={COTTON} path="/plans/cotton Package" exact />
          <Route component={Smart} path="/plans/Smart Package" exact />
          <Route component={Modern} path="/plans/modern Package" exact />
          <Route component={Vel} path="/plans/The Velvet Home Package" exact />
          <Route component={Exotic} path="/plans/Exotic Package" exact />
          <Route component={Elite} path="/plans/Elite Package" exact />
          <Route component={Kitchens} path="/Kitchens" exact />
          <Route component={ComForm} path="/Company" exact />
          <Route component={ContactForm} path="/contact-us" exact />
          <Route component={AddressDetails} path="/About-Us" exact />
          <Route component={NotFound} path="*" />
          <Redirect from="*" to="/" />
        </Switch>
        <WhatsAppIcon />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

