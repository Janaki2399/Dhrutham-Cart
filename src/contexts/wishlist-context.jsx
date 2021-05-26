import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../contexts/reducers/wishlistReducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useLoaderToast } from "./loader-toast-context";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { showToast, hideToast } = useLoaderToast();
  const { token } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    _id: "",
    list: [],
    userId: "",
  });

  const fetchFromWishlist = async () => {
    try {
      const {
        data: { wishlist },
        status,
      } = await axios.get(
        "https://dhrutham-cart-backend.herokuapp.com/wishlist",
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
      }
    } catch (error) {
      alert(error);
    }
  };

  const addToWishlist = async (productId) => {
    try {
      showToast("Adding to Wishlist");
      const {
        data: { wishlist },
        status,
      } = await axios.post(
        "https://dhrutham-cart-backend.herokuapp.com/wishlist",
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
        hideToast();
      }
    } catch (error) {
      hideToast();
      // if (error.response.status !== 409) {
      //   alert(error);
      // }
      console.log(error);
      alert(error);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      showToast("Removing from Wishlist");
      const { data, status } = await axios.delete(
        `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      //   console.log({ data });
      if (status === 200) {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { _id: productId },
        });
        showToast("Removed from Wishlist");
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
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        fetchFromWishlist,
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
