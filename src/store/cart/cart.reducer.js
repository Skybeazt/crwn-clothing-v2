import { CART_ACTIONS_TYPES } from "./cart.types.js";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = function (
  state = CART_INITIAL_STATE,
  action = () => {}
) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
