import "./cart-item.styles.scss";

const CartItem = function ({ cartItem }) {
  const { title, quantity, imageUrl } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={title} />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">{`${quantity} x $${title}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
