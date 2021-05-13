import { useDataContext } from "../contexts/data-context";
export function useProduct() {
  const { addToListAndServer, removeFromListAndServer } = useDataContext();
  const addToCart = (productId) => {
    addToListAndServer({
      url: "https://dhrutham-cart-backend.herokuapp.com/cart",
      list: "cartItem",
      postItem: {
        product: { _id: productId },
        quantity: 1,
      },
      dispatchType: "APPEND_ITEM_TO_CART",
      toastItem: "cart",
    });
  };

  const addToWishlist = (productId) => {
    addToListAndServer({
      url: "https://dhrutham-cart-backend.herokuapp.com/wishlist",
      list: "wishlistItem",
      postItem: {
        product: productId,
      },
      dispatchType: "APPEND_ITEM_TO_WISHLIST",
      toastItem: "wishlist",
    });
  };

  const removeFromWishlist = (productId) => {
    removeFromListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
      itemId: productId,
      dispatchType: "REMOVE_FROM_WISHLIST",
      list: "wishlist",
      toastMessage: "removed from wishlist",
    });
  };
  return { addToCart, addToWishlist, removeFromWishlist };
}
