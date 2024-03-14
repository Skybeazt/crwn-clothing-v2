import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartItemsTotalCount,
} from "./../../store/cart/cart.selector.js";
import { setIsCartOpen } from "./../../store/cart/cart.actions.js";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = function () {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartItemsTotalCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = function () {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
