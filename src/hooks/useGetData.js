import axios from "axios";
import { API_STATUS } from "../constants";
import { useAuth } from "../contexts/auth-context";
import { useCategoriesContext } from "../contexts/category-context";
import { useWishlistContext } from "../contexts/wishlist-context";
import { useCartContext } from "../contexts/cart-context";
import { API_URL } from "../constants";

export const useGetData = () => {
  const { token } = useAuth();
  const { categoriesState, categoriesDispatch } = useCategoriesContext();
  const { wishlistDispatch } = useWishlistContext();
  const { cartDispatch } = useCartContext();

  const fetchCategories = async () => {
    if (categoriesState.status === API_STATUS.IDLE) {
      try {
        categoriesDispatch({ type: "CATEGORIES_FETCH_INIT" });
        const { data, status } = await axios.get(`${API_URL}/categories`);

        if (status === 200) {
          categoriesDispatch({
            type: "CATEGORIES_FETCH_SUCCESS",
            payload: { categories: data.categories },
          });
        }
      } catch (error) {
        categoriesDispatch({
          type: "CATEGORIES_FETCH_ERROR",
        });
        alert(error);
      }
    }
  };

  const fetchProductList = async (categoryId, productListDispatch) => {
    try {
      productListDispatch({ type: "PRODUCT_LIST_FETCH_INIT" });
      const { data, status } = await axios.get(
        `${API_URL}/categories/${categoryId}`
      );

      if (status === 200) {
        productListDispatch({
          type: "SET_PRODUCT_LIST",
          payload: { productList: data.products },
        });
      }
    } catch (error) {
      productListDispatch({ type: "PRODUCT_LIST_FETCH_FAILED" });
    }
  };

  const fetchWishlist = async () => {
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
    } catch (error) {
      alert(error);
    }
  };

  const fetchCart = async () => {
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
    } catch (error) {
      alert(error);
    }
  };

  return { fetchCategories, fetchWishlist, fetchProductList, fetchCart };
};
