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
      dispatchType: "CHANGE_CART_STATE",
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
      dispatchType: "CHANGE_WISHLIST_STATE",
      toastItem: "wishlist",
    });
  };

  const removeFromWishlist = (productId) => {
    removeFromListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
      itemId: productId,
      dispatchType: "CHANGE_WISHLIST_STATE",
      list: "wishlist",
      toastMessage: "removed from wishlist",
    });
  };
  return { addToCart, addToWishlist, removeFromWishlist };
}
