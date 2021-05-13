import { useDataContext } from "../contexts/data-context";

export function useWishlist() {
  const {
    removeFromListAndServer,
    addToListAndServer,
  } = useDataContext();

  const removeFromWishlist = (wishListId, productId) => {
    removeFromListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
      itemId: productId,
      dispatchType: "REMOVE_FROM_WISHLIST",
      list: "wishlist",
      toastMessage: "removed from wishlist",
    });
  }

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
  }

  const removeAndAddItemToListAndServer = (wishListId, productId) => {
    removeFromWishlist(wishListId, productId);
    addToCart(productId);
  }
  return { removeFromWishlist, addToCart, removeAndAddItemToListAndServer };
}
