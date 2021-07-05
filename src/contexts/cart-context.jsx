import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useLoaderToast } from "./loader-toast-context";
import { API_STATUS } from "../constants";
import { API_URL } from "../constants";

export const CartContext = createContext();

export const initialState = {
  _id: "",
  list: [],
  userId: "",
  statuses: {
    fetchStatus: API_STATUS.IDLE,
    addToCartStatus: API_STATUS.IDLE,
    removeFromCartStatus: API_STATUS.IDLE,
  },
};

export const CartProvider = ({ children }) => {
  const { showToast } = useLoaderToast();
  const { token } = useAuth();
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const addToCart = async (productId) => {
    try {
      showToast("Adding to Cart");
      const {
        data: { cart },
        status,
      } = await axios.post(
        `${API_URL}/cart`,
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
      }
    } catch (error) {
      if (error.response.status !== 409) {
        showToast("Something went wrong");
      }
    }
  };

  const removeFromCart = async (productId) => {
    try {
      showToast("Removing from cart");
      const { status } = await axios.delete(`${API_URL}/cart/${productId}`, {
        headers: {
          authorization: token,
        },
      });

      if (status === 200) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: { _id: productId },
        });
        showToast("Removed from cart");
      }
    } catch (error) {
      if (error.response.status !== 409) {
        showToast("Something went wrong");
      }
    }
  };
  const updateQuantity = async (productId, quantity) => {
    try {
      const { status } = await axios.post(
        `${API_URL}/cart/${productId}`,
        {
          quantity,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 200) {
        cartDispatch({
          type: "UPDATE_CART_ITEM_QUANTITY",
          payload: { _id: productId, quantity },
        });
      }
    } catch (error) {
      showToast("Something went wrong");
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartDispatch,
        cartState,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
