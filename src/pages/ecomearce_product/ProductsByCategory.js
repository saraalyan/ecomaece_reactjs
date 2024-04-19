import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ProductsByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = () => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
            <Link to={`/productdetails/${product.id}`}>

              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                {/* <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text> */}
              </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsByCategory;
