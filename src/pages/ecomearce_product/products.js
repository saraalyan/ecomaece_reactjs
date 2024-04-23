import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Pagination, Row, Form } from 'react-bootstrap';
import './product.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { add, remove } from '../../store/actions/wishlist_actions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const wishlist = useSelector(state => state.wishlist); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, [currentPage, category, searchTerm]); 

  const fetchProducts = () => {
    let apiUrl = '';
    if (category) {
      apiUrl = `https://dummyjson.com/products/category/${category}?skip=${(currentPage - 1) * 20}&limit=20`;
    } else {
      apiUrl = `https://dummyjson.com/product?skip=${(currentPage - 1) * 20}&limit=20`;
    }

    axios.get(apiUrl)
      .then((res) => {
        let filteredProducts = res.data.products;
        if (searchTerm) {
          filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        setProducts(filteredProducts);
        setTotalProducts(res.data.total);
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addToWishlistHandler = (product) => {
    dispatch(add(product));
  };

  const removeFromWishlistHandler = (product) => {
    dispatch(remove(product));
  };

  const isProductInWishlist = (productId) => {
    return wishlist.some(product => product.id === productId);
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
                <Card.Img style={{height:'300px'}}  className="product-image" variant="top" src={product.thumbnail} alt={product.title} />
                <div>{product.stock}</div>
              </Link>
              <span>
                <button onClick={() =>  { dispatch(addToCart(product)); } }>add to cart</button>
                <button 
  onClick={() => {
    if (!isProductInWishlist(product.id)) {
      addToWishlistHandler(product);
    } else {
      removeFromWishlistHandler(product);
    }
  }}
  disabled={isProductInWishlist(product.id)} 
>
  {isProductInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
</button>

              </span>
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
