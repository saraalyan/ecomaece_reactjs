import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import './cart.css';
import { removeFromCart, clearCart } from '../../../store/actions/cartActions'; 
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cart.reduce((total, item) => {
    total += item.price * item.quantity; 
    return total;
  }, 0);

  return (
    <div className="container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <td>stock</td>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td><img src={item.images[0]} alt={`Image for ${item.name}`} style={{ height: '100px', width: 'auto' }} /></td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>{item.stock}</td>
                  <td>

                    <Button variant="danger" onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
          <Button variant="danger" onClick={handleClearCart}>Clear Cart</Button>
        </>
      )}
    </div>
  );
}

export default Cart;
