import React from 'react';
import { useSelector } from 'react-redux';
import './cart.css';

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <section className="container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="products">
          {cart.map((product, index) => (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="detail">
                  <div className="name">{product.title}</div>
                  <div className="price">{product.price}$</div>
                </div>
              </div>
              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    // onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <div className="remove">
                  <svg
                    // onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
