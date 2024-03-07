import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartItemsTotalCount,
} from "./../../store/cart/cart.selector.js";
import { setIsCartOpen } from "./../../store/cart/cart.action.js";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = function () {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemsTotalCount = useSelector(selectCartItemsTotalCount);

  const toggleIsCartOpen = function () {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemsTotalCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
