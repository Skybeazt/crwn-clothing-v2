import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";

import Button from "./../button/button.component.jsx";
import CartItem from "./../cart-item/cart-item.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = function () {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const checkoutNavigator = function () {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutNavigator}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
