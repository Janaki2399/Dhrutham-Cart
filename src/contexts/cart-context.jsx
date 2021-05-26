import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../contexts/reducers/cartReducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useLoaderToast } from "./loader-toast-context";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { showToast, hideToast } = useLoaderToast();
  const { token } = useAuth();
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    _id: "",
    list: [],
    userId: "",
  });
  const fetchFromCart = async () => {
    try {
      const {
        data: { cart },
        status,
      } = await axios.get("https://dhrutham-cart-backend.herokuapp.com/cart", {
        headers: {
          authorization: token,
        },
      });

      if (status === 200) {
        cartDispatch({
          type: "SET_CART",
          payload: {
            _id: cart._id,
            list: cart.list,
            userId: cart.userId,
          },
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      showToast("Adding to Cart");
      const {
        data: { cart },
        status,
      } = await axios.post(
        "https://dhrutham-cart-backend.herokuapp.com/cart",
        {
          product: { _id: productId },
          quantity: 1,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200) {
        cartDispatch({
          type: "SET_CART",
          payload: { _id: cart._id, list: cart.list, userId: cart.userId },
        });
        showToast("Added to Cart");
        hideToast();
      }
    } catch (error) {
      hideToast();
      // if (error.response.status !== 409) {
      //   alert(error);
      // }
      alert(error);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      showToast("Removing from cart");
      const { data, status } = await axios.delete(
        `https://dhrutham-cart-backend.herokuapp.com/cart/${cartItemId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: { _id: cartItemId },
        });
        showToast("Removed from cart");
        hideToast();
      }
    } catch (error) {
      hideToast();
      if (error.response.status !== 409) {
        alert(error);
      }
      // alert(error);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartDispatch,
        cartState,
        fetchFromCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
