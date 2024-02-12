import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";

import CheckoutItem from "./../../components/checkout-item/checkout-item.component.jsx";

import "./checkout.styles.scss";

const Checkout = function () {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {!cartItems ? (
        <h3>Please add items to chart to be able checkout</h3>
      ) : (
        cartItems.map((checkoutItem) => (
          <CheckoutItem key={checkoutItem.id} cartItem={checkoutItem} />
        ))
      )}
      <span className="total">{`Total: $${cartTotalPrice}`}</span>
    </div>
  );
};

export default Checkout;
