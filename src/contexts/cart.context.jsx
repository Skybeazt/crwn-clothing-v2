import { createContext, useState, useEffect } from "react";

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

export const CartProvider = function ({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // const removeItemFromCart = function (productToRemove) {
  //   setRemoveCartItem(removeCartItem(cartItems, productToRemove));
  // };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (totalPrice, currentItem) =>
        totalPrice + currentItem.price * currentItem.quantity,
      0
    );

    setCartTotalPrice(newTotalPrice);
  }, [cartItems]);

  const removeItemFromCart = function (productToRemove) {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const addItemToCart = function (productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const reduceItemFromCart = function (productToReduce) {
    setCartItems(reduceCartItem(cartItems, productToReduce));
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
