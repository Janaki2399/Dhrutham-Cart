import axios from "axios";
import { useDataContext } from "../contexts/data-context";
import {useState} from "react";
export function useProductDetails(){
  const { dispatch } = useDataContext();
  const [product, setProductItem] = useState({});

  const getProduct = async (productId) => {
    const { data } = await axios.get(
        `https://dhrutham-cart-backend.herokuapp.com/products/${productId}`
      );
      setProductItem(data.product);
  }
  const addToCart = async (productId) => {
    const { data,status } = await axios.post(
      "https://dhrutham-cart-backend.herokuapp.com/cart",
      {
        product: { _id: productId },
        quantity: 1,
      }
    );
    if (status === 200) {
      // setProductItem((product) => ({ ...product, isAddedToCart: true }));
      dispatch({type: "APPEND_ITEM_TO_CART",payload:data.cartItem  });
    }
  };
  const addToWishlist = async (productId) => {
    const {data, status } = await axios.post(
      "https://dhrutham-cart-backend.herokuapp.com/wishlist",
      {
        product: { _id: productId },
      }
    );
    if (status === 200) {
      dispatch({ type: "APPEND_ITEM_TO_WISHLIST",payload:data.wishlistItem });
    }
  };

 const removeFromWishlist = async (productId) => {
    const { status } = await axios.delete(
      `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
      {
        product: { _id: productId },
      }
    );
    if (status === 200) {
      // setProductItem((product) => ({ ...product, isWishListed: false }));
      dispatch({ type: "REMOVE_FROM_WISHLIST",payload:productId });
    }
  };

  return {getProduct,addToCart,addToWishlist,removeFromWishlist,product};
}