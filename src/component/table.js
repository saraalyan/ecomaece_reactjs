import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { remove,clear } from '../store/actions/wishlist_actions';
import { removeFromCart ,clearCart} from '../store/actions/cartActions';
function ShoppingList({ type }) {
  const list = useSelector((state) => type === 'wishlist' ? state.wishlist : state.cart);
  
  const dispatch = useDispatch();
  const handleClearList = () => {
    if (type === 'wishlist') {
      dispatch(clear());
    } else {
      dispatch(clearCart());
    }
  };

  const removeItem = (item) => {
    if (type === 'wishlist') {
      dispatch(remove(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };
  const totalPrice = list.reduce((total, item) => {
    if (type === 'cart') {
      total += item.price * item.quantity;
    }
    return total;
  }, 0);

  return (
    <div className="container">
      <h2>{type === 'wishlist' ? 'Wishlist' : 'Shopping Cart'}</h2>
      {list.length === 0 ? (
        <p>Your {type === 'wishlist' ? 'wishlist' : 'cart'} is empty</p>
      ) : (
        <>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                {type === 'cart' && <th>Quantity</th>}
                {type === 'cart' && <th>Total Price</th>}
                <td>Stock</td>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.images[0]} alt={`Image for ${item.name}`} style={{ height: '100px', width: 'auto' }} />
                  </td>
                  <td>{item.price}</td>
                  {type === 'cart' && <td>{item.quantity}</td>}
                  {type === 'cart' && <td>{item.price * item.quantity}</td>}
                  <td>{item.stock}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeItem(item)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {type === 'cart' && <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>}
          <Button variant="danger" onClick={handleClearList}>Clear {type === 'wishlist' ? 'Wishlist' : 'Cart'}</Button>
        </>
      )}
    </div>
  );
}

export default ShoppingList;
