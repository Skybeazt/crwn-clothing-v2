import { createSelector } from "reselect";

const selectCartReducer = function (state) {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartItemsTotalCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalPrice, currentItem) =>
        totalPrice + currentItem.price * currentItem.quantity,
      0
    )
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
