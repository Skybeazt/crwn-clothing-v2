import createAction from "./../../utils/reducer/reducer.utils.js";
import { CART_ACTIONS_TYPES } from "./cart.types.js";

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

export const removeItemFromCart = function (cartItems, productToRemove) {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addItemToCart = function (cartItems, productToAdd) {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const reduceItemFromCart = function (cartItems, productToReduce) {
  const newCartItems = reduceCartItem(cartItems, productToReduce);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = function (bool) {
  return createAction(CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN, bool);
};
