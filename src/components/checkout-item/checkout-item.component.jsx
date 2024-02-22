import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context";

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
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  // const removeItemHandler = (itemToRemove) => removeItemFromCart(itemToRemove);
  // const addItemHandler = (itemToAdd) => addItemToCart(itemToAdd);
  // const reduceItemHandler = (itemToReduce) => reduceItemFromCart(itemToReduce);

  const { title, quantity, imageUrl, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
      <Name>{title}</Name>
      <Quantity>
        <Arrow onClick={() => reduceItemFromCart(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{`$ ${price}`}</Price>
      <RemoveButton onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
