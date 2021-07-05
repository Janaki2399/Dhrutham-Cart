import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useLoaderToast } from "./loader-toast-context";
import { API_STATUS } from "../constants";
import { API_URL } from "../constants";

export const WishlistContext = createContext();

export const initialState = {
  _id: "",
  list: [],
  userId: "",
  statuses: {
    fetchStatus: API_STATUS.IDLE,
    addToWishlistStatus: API_STATUS.IDLE,
    removeFromWishlistStatus: API_STATUS.IDLE,
  },
};
export const WishlistProvider = ({ children }) => {
  const { showToast } = useLoaderToast();
  const { token } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  const addToWishlist = async (productId) => {
    try {
      showToast("Adding to Wishlist");
      const {
        data: { wishlist },
        status,
      } = await axios.post(
        `${API_URL}/wishlist`,
        {
          product: { _id: productId },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200) {
        wishlistDispatch({
          type: "SET_WISHLIST",
          payload: {
            _id: wishlist._id,
            list: wishlist.list,
            userId: wishlist.userId,
          },
        });
        showToast("Added to Wishlist");
      }
    } catch (error) {
      if (error.response.status !== 409) {
        showToast("Something went wrong");
      }
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      showToast("Removing from Wishlist");
      const { data, status } = await axios.delete(
        `${API_URL}/wishlist/${productId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200) {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { _id: productId },
        });
        showToast("Removed from Wishlist");
      }
    } catch (error) {
      if (error.response.status !== 409) {
        showToast("Something went wrong");
      }
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
