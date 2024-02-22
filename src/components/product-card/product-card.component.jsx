import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "./../button/button.component.jsx";

import {
  ProductCardContainer,
  Footer,
  Img,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = function ({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = function () {
    addItemToCart(product);
  };

  const { title, imageUrl, price } = product;
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={title} />
      <Footer>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
