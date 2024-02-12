import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = function ({ cartItem }) {
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  // const removeItemHandler = (itemToRemove) => removeItemFromCart(itemToRemove);
  // const addItemHandler = (itemToAdd) => addItemToCart(itemToAdd);
  // const reduceItemHandler = (itemToReduce) => reduceItemFromCart(itemToReduce);

  const { title, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{`$ ${price}`}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
