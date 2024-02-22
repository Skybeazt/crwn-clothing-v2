import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";

import CheckoutItem from "./../../components/checkout-item/checkout-item.component.jsx";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  HeaderBlockLastChild,
  Total,
} from "./checkout.styles.jsx";

const Checkout = function () {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlockLastChild>
          <span>Remove</span>
        </HeaderBlockLastChild>
      </CheckoutHeader>
      {!cartItems ? (
        <h3>Please add items to chart to be able checkout</h3>
      ) : (
        cartItems.map((checkoutItem) => (
          <CheckoutItem key={checkoutItem.id} cartItem={checkoutItem} />
        ))
      )}
      <Total>{`Total: $${cartTotalPrice}`}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
