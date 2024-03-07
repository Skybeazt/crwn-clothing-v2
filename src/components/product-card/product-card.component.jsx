import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./../../store/cart/cart.action.js";
import { selectCartItems } from "./../../store/cart/cart.selector.js";
import Button, { BUTTON_TYPE_CLASSES } from "./../button/button.component.jsx";

import {
  ProductCardContainer,
  Footer,
  Img,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = function ({ product }) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = function () {
    dispatch(addItemToCart(cartItems, product));
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
