import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
} from "./cart-item.styles.jsx";

const CartItem = function ({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">{`${quantity} x $${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
