import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap';
import './product.css';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = () => {
    const apiUrl = `https://dummyjson.com/product?skip=${(currentPage - 1) * 20}&limit=30`;

    axios.get(apiUrl)
      .then((res) => {
        setProducts(res.data.products);
        setTotalProducts(res.data.total);
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalProducts / 20);
  const isLastPage = currentPage === totalPages;

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="product-column">
            <Card className="product-card">
            <Link to={`/productdetails/${product.id}`}>
              <Card.Img className="product-image" variant="top" src={product.thumbnail} alt={product.title} />
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev className="pagination-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage} />
      </Pagination>
    </Container>
  );
}

export default Products;
