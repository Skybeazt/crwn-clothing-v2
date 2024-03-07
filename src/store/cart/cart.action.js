import createAction from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.types";

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

export const setIsCartOpen = function (bool) {
  return createAction(CART_ACTIONS_TYPES.TOGGLE_IS_CART_OPEN, bool);
};

export const addItemToCart = function (cartItems, itemToAddToCart) {
  const newCartItems = addCartItem(cartItems, itemToAddToCart);

  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = function (cartItems, itemToRemoveFromCart) {
  const newCartItems = removeCartItem(cartItems, itemToRemoveFromCart);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const reduceItemFromCart = function (cartItems, itemToReduceFromCart) {
  const newCartItems = reduceCartItem(cartItems, itemToReduceFromCart);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
