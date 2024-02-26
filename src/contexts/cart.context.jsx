import { createContext, useReducer } from "react";
import createAction from "./../utils/reducer/reducer.utils.js";

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

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotalPrice: 0,
};

const CART_ACTIONS_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
};

const cartReducer = function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} in contextReducer`);
  }
};

const addCartItem = function (cartItems, productToAdd) {
  // Find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  // If found, increment the quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const reduceCartItem = function (cartItems, productToReduce) {
  const existingProductToReduce = cartItems.find(
    (cartItem) => cartItem.id === productToReduce.id
  );
  if (existingProductToReduce.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== productToReduce.id);
  else
    return cartItems.map((cartItem) =>
      cartItem.id === productToReduce.id
        ? { ...productToReduce, quantity: productToReduce.quantity - 1 }
        : cartItem
    );
};

const removeCartItem = function (cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartProvider = function ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
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

  const removeItemFromCart = function (productToRemove) {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const addItemToCart = function (productToAdd) {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const reduceItemFromCart = function (productToReduce) {
    const newCartItems = reduceCartItem(cartItems, productToReduce);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = function (bool) {
    dispatch(createAction("CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN", bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotalPrice,
    reduceItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
