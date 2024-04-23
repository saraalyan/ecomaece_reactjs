import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbb from './component/navbar/navbb.js';
import Login from './pages/login_and_register/Login.js';
import Register from './pages/login_and_register/register.js';
import Movies from './pages/movies/Movies.js';
import Pro from './pages/portofolio/pro.js';
import Home from './pages/my home/home.js';
import NotFound from './pages/NotFound.js';
import moviesdetails from './pages/movies/moviesdetails.js';
import ProductDetails from'./pages/ecomearce_product/ProductDetails.js';
import Products from './pages/ecomearce_product/products.js';
import wishlist from './pages/ecomearce_product/wishllist/wishlist.js'
import cart from './pages/ecomearce_product/cart/cart.js'
// import Products from './pages/ecomearce_product/prod2.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbb />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Login} path="/login" exact />
          <Route component={Register} path="/register" exact /> 
          <Route component={Pro} path="/Portfolio" exact /> 
          <Route component={Products} path="/Products" exact /> 
          <Route component={cart} path="/cart" exact /> 
          <Route component={wishlist} path="/wishlist" exact /> 
          <Route path="/category/:category" component={Products} />
          <Route component={Movies} path="/Movies" exact /> 
          <Route component={ProductDetails} path="/ProductDetails/:id" exact /> 
          <Route component={moviesdetails} path="/moviesdetails/:id" exact /> 
          <Route component={NotFound} path="*" exact /> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
