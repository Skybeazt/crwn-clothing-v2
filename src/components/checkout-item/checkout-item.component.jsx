import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  addItemToCart,
  removeItemFromCart,
  reduceItemFromCart,
} from "./../../store/cart/cart.actions.js";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = function ({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow
          onClick={() => dispatch(reduceItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{`$ ${price}`}</Price>
      <RemoveButton
        onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
