import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
} from "./cart-item.styles.jsx";

const CartItem = function ({ cartItem }) {
  const { title, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={title} />
      <ItemDetails>
        <Name>{title}</Name>
        <span className="price">{`${quantity} x $${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
