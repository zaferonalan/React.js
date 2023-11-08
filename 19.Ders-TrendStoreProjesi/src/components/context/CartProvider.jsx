import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartContext = {
    items: [],
    totalAmout: 0,
    addItem: () => {
      console.log("Run");
    },
    removeItem: () => {},
    clearItem: () => {},
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
