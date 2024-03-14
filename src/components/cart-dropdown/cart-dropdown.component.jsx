import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "./../../store/cart/cart.selector.js";

import Button from "./../button/button.component.jsx";
import CartItem from "./../cart-item/cart-item.component.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = function () {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const checkoutNavigator = function () {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutNavigator}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
