// Products.js
import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './product.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productslice';
import { add_to_cart } from '../../store/cartslice';

function Products() {
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


 
  return (
    <Container>
      <Row>
        {Array.isArray(products) && products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="product-column">
            <Card className="product-card">
              <Link to={`/productdetails/${product.id}`}>
                <Card.Img style={{ height: '300px' }} className="product-image" variant="top" src={product.thumbnail} alt={product.title} />
              </Link>
              <span>
                <button onClick={() => dispatch(add_to_cart(product))}>add to cart</button>
                <button>add to wishlist</button>
              </span>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
