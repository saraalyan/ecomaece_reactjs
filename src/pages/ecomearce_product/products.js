import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Pagination, Row, Form } from 'react-bootstrap';
import './product.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { add, remove } from '../../store/actions/wishlist_actions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; 
import Footer from '../../component/portofolio/footer';
import './product.css';

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const wishlist = useSelector(state => state.wishlist); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    setCategoryName(category);
  }, [currentPage, category, searchTerm, minPrice, maxPrice]);
  const fetchProducts = () => {
    let apiUrl = '';
    let params = {
      skip: (currentPage - 1) * 20,
      limit: 20
    };
  
    if (category) {
      apiUrl = `https://dummyjson.com/products/category/${category}`;
    } else {
      apiUrl = `https://dummyjson.com/products`;
    }
  
    if (searchTerm) {
      apiUrl += `?title=${searchTerm}`;
    } else {
      apiUrl += `?`;
    }
  
    if (minPrice) {
      apiUrl += `&min_price=${minPrice}`;
    }
  
    if (maxPrice) {
      apiUrl += `&max_price=${maxPrice}`;
    }
  
    axios.get(apiUrl, { params })
  .then((res) => {
    let filteredProducts = res.data.products;
    if (searchTerm || minPrice || maxPrice) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
        (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice))
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
       <div className='row'>
        <img src={require('../../assests/images/image2.png')} alt="Image Description" style={{width:'100%'}}/>
      </div>
      <Form className="mt-3">
        <Form.Group controlId="searchTerm">
          <Form.Control 
            type="text" 
            placeholder="Search products" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="minPrice">
          <Form.Control 
            type="number" 
            placeholder="Min Price" 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="maxPrice">
          <Form.Control 
            type="number" 
            placeholder="Max Price" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
          />
        </Form.Group>
      </Form>
     
      {categoryName && <h2 className="text-center">{categoryName}</h2>}

      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="product-column">
            <Card className="product-card">
              <div id='cart_wish'>
                <button className="cart-button" onClick={() =>  { dispatch(addToCart(product)); } }><FaShoppingCart /></button>
                <button className="wish-button"
                  onClick={() => {
                    if (!isProductInWishlist(product.id)) {
                      addToWishlistHandler(product);
                    } else {
                      removeFromWishlistHandler(product);
                    }
                  }}
                  disabled={isProductInWishlist(product.id)} 
                >
                  {isProductInWishlist(product.id) ? <FaHeart style={{color:'red'}}/> : <FaHeart/>}
                </button>
                <h5 className="text-center">Description : {product.description}</h5>
              </div>
              <Link to={`/productdetails/${product.id}`}>
                <Card.Img style={{height:'300px'}}  className="product-image" variant="top" src={product.thumbnail} alt={product.title} />
              </Link>
<div>
  <h4 className="text-center">{product.title}</h4>
  <p className="text-center">Price: ${product.price}</p>
  <div className="text-center">
    
  </div>
</div>

              
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev className="pagination-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage} />
      </Pagination>
      <Footer/>
    </Container>
  );
}

export default Products;
