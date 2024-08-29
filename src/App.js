import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbb from './component/navbar/navbb';

import Home from './pages/my home/home.jsx';
import NotFound from './pages/NotFound.js';
import COTTON from './pages/plans/cotonplan/plancotton.jsx';

import './index.css'
function App() {
   
  return (
    <>
      <BrowserRouter>
        <Navbb />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={COTTON} path="/plans/cotton Package" exact />
          <Route component={COTTON} path="/plans/Smart Package" exact />
          <Route component={COTTON} path="/plans/modern Package" exact />
          <Route component={COTTON} path="/plans/The Velvet Home Package" exact />
          <Route component={COTTON} path="/plans/Exotic Package" exact />
          <Route component={COTTON} path="/plans/Elite Package" exact />

          <Route component={NotFound} path="*" exact /> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
