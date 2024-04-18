import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

function ProductDetails() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setProductDetails(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>{productDetails.title}</h1>
            <Row style={{ backgroundColor: '#eceff1' }}>
                <Col md={4}>
                    <Image src={productDetails.thumbnail} alt={productDetails.title} fluid />
                </Col>
                <Col md={8}>
                    <p>{productDetails.description}</p>
                    <p><strong>Price:</strong> ${productDetails.price}</p>
                    <p><strong>Rating:</strong> {productDetails.rating}</p>
                    <p><strong>Stock:</strong> {productDetails.stock}</p>
                    <p><strong>Brand:</strong> {productDetails.brand}</p>
                    <p><strong>Category:</strong> {productDetails.category}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
