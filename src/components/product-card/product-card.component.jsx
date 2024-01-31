import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";

import Button from "./../button/button.component.jsx";

import "./product-card.styles.scss";

const ProductCard = function ({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = function () {
    addItemToCart(product);
  };

  const { title, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={title} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">{title}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
