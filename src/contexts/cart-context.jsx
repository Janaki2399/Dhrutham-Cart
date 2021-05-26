import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "../reducerFunction";
import axios from "axios";
export const CartContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { showToast, hideToast } = useLoaderToast();
  const { token } = useAuth();
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: {},
  });
  return (
    <CartContext.Provider
      value={{
        cartDispatch,
        cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
