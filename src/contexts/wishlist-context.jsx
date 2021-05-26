import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "../reducerFunction";
import axios from "axios";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { showToast, hideToast } = useLoaderToast();
  const { token } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: {},
  });

  const fetchFromWishlist = async (productId) => {
    try {
      const { data, status } = await axios.get(
        "https://dhrutham-cart-backend.herokuapp.com/wishlist",
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(data.wishlist);
      if (status === 200) {
        dispatch({
          type: "ADD_TO_WISHLIST",
          payload: data.wishlist,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const addToWishlist = async (productId) => {
    try {
      showToast("Adding to Wishlist");
      const { data, status } = await axios.post(
        "https://dhrutham-cart-backend.herokuapp.com/wishlist",
        {
          _id: productId,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      //   console.log({ data });
      if (status === 200) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlistItem });
        showToast("Added to Wishlist");
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
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
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
    <WishlistContext.Provider value={{ addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
