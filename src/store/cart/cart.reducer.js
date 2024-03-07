import { CART_ACTIONS_TYPES } from "./cart.types.js";
import { createContext, useReducer } from "react";
import createAction from "./../../utils/reducer/reducer.utils.js";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartTotalPrice: 0,
  setCartTotalPrice: () => {},
  reduceItemFromCart: () => {},
  removeItemFromCart: () => {},
});

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = function (state = CART_INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};

export const CartProvider = function ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const { cartCount, cartItems, cartTotalPrice, isCartOpen } = state;

  const updateCartItemReducer = function (newCartItems) {
    const newCartCount = newCartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );

    const newTotalPrice = newCartItems.reduce(
      (totalPrice, currentItem) =>
        totalPrice + currentItem.price * currentItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotalPrice: newTotalPrice,
      })
    );
  };

  // return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
