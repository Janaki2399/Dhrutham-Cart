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
    const { status } = await axios.post(
      "https://restPractice.janaki23.repl.co/cart",
      {
        product: { _id: productId },
        quantity: 1,
      }
    );
    if (status === 200) {
      setProductItem((product) => ({ ...product, isAddedToCart: true }));
      dispatch({ type: "INCREMENT_CART_COUNT" });
    }
  };
  const addToWishlist = async (productId) => {
    const { status } = await axios.post(
      "https://restPractice.janaki23.repl.co/wishlist",
      {
        product: { _id: productId },
      }
    );
    if (status === 200) {
      setProductItem((product) => ({ ...product, isWishListed: true }));
      dispatch({ type: "INCREMENT_WISHLIST_COUNT" });
    }
  };

 const removeFromWishlist = async (productId) => {
    const { status } = await axios.delete(
      `https://restPractice.janaki23.repl.co/wishlist/${productId}`,
      {
        product: { _id: productId },
      }
    );
    if (status === 200) {
      setProductItem((product) => ({ ...product, isWishListed: false }));
      dispatch({ type: "DECREMENT_WISHLIST_COUNT" });
    }
  };

  return {getProduct,addToCart,addToWishlist,removeFromWishlist,product};
}