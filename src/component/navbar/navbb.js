import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/Movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              {categories.map(category => (
                <NavDropdown.Item as={Link} key={category} to={`/category/${category}`}>{category}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbb;
