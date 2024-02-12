import { createContext, useState, useContext } from "react";

const addItemsToCheckout = function (checkoutItems, itemToAddToCheckout) {
  const itemExistsInCheckout = checkoutItems.find(
    (checkoutItem) => checkoutItem.id === itemToAddToCheckout.id
  );
  if (itemExistsInCheckout)
    checkoutItems.map((checkoutItem) => {
      if (checkoutItem.id === itemToAddToCheckout.id)
        return { ...checkoutItem, quantity: checkoutItem.quantity + 1 };
      else return checkoutItem;
    });
  else return [...checkoutItems, { ...itemToAddToCheckout, quantity: 1 }];
};

const sumCheckoutAmount = function (checkoutItems) {
  if (checkoutItems)
    checkoutItems.reduce((sum, checkoutItem) => {
      return sum + checkoutItem.price;
    }, 0);
};

export const CheckoutContext = createContext({
  checkoutItems: [],
  setCheckoutItems: () => {},
});

export const CheckoutProvider = function ({ children }) {
  console.log("Checkout context");
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [totalCheckoutAmount, setTotalCheckoutAmount] = useState(0);

  const addItemToCheckout = function (itemToAddToCheckout) {
    setCheckoutItems(addItemsToCheckout(checkoutItems, itemToAddToCheckout));
  };
  // setTotalCheckoutAmount(sumCheckoutAmount);

  const value = { checkoutItems, addItemToCheckout, totalCheckoutAmount };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
