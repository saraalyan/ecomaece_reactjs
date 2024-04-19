import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Pagination, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './product.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchTerm, category]);

  const fetchProducts = () => {
    let apiUrl = `https://dummyjson.com/products?limit=20&skip=${(currentPage - 1) * 20}`;

    if (category) {
      apiUrl += `&category=${category}`;
    }

    if (searchTerm) {
      apiUrl += `&q=${searchTerm}`;
    }

    axios.get(apiUrl)
      .then((res) => {
        const filteredProducts = res.data.products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
        setTotalProducts(filteredProducts.length);
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
      <Form className="mt-3">
        <Form.Group controlId="searchTerm">
          <Form.Control 
            type="text" 
            placeholder="Search products" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </Form.Group>
      </Form>
      <Row>
        {products.map(product => (
         
         <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="product-column">
         <Card className="product-card">
           <Link to={`/productdetails/${product.id}`}>
             <Card.Img className="product-image" variant="top" src={product.thumbnail} alt={product.title} />
           </Link>
           <Card.Body>
             <Card.Title>{product.title}</Card.Title>
             {/* Add additional product information here if needed */}
           </Card.Body>
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