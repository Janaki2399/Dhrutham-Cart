import { useAuth } from "../contexts/auth-context";
import axios from "axios";
import { useCartContext } from "../contexts/cart-context";
import { useWishlistContext } from "../contexts/wishlist-context";
import { API_URL } from "../constants";
import { useEffect } from "react";

export const useLoadData = () => {
  const { token } = useAuth();

  const { wishlistDispatch } = useWishlistContext();
  const { cartDispatch } = useCartContext();

  useEffect(() => {
    (async function () {
      if (token) {
        try {
          wishlistDispatch({ type: "INITIALIZE_FETCH_STATUS" });
          const {
            data: { wishlist },
            status,
          } = await axios.get(`${API_URL}/wishlist`, {
            headers: {
              authorization: token,
            },
          });

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
          if (status === 204) {
            wishlistDispatch({
              type: "FETCH_SUCCESS",
            });
          }
        } catch (error) {
          wishlistDispatch({ type: "FETCH_FAILURE" });
          alert(error);
        }
      }
    })();
  }, [token, wishlistDispatch]);

  useEffect(() => {
    (async function () {
      if (token) {
        cartDispatch({ type: "INITIALIZE_FETCH_STATUS" });
        try {
          const {
            data: { cart },
            status,
          } = await axios.get(`${API_URL}/cart`, {
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
          if (status === 204) {
            cartDispatch({
              type: "FETCH_SUCCESS",
            });
          }
        } catch (error) {
          cartDispatch({ type: "FETCH_FAILURE" });
          alert(error);
        }
      }
    })();
  }, [token, cartDispatch]);
};
