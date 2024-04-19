import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
];

function Navbb() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Portfolio">Portfolio</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Movies">Movies</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <NavDropdown title="Categories" id="navbarScrollingDropdown">
            {categories.map(category => (
              <NavDropdown.Item as={Link} key={category} to={`/category/${category}`}>{category}</NavDropdown.Item>
            ))}
          </NavDropdown>
        </ul>
      </div>
    </nav>
  );
}

export default Navbb;
