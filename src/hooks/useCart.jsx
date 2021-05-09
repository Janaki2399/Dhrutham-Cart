import { useDataContext } from "../contexts/data-context";
export function useCart() {
  const {
    removeFromListAndServer,
    addToListAndServer,
    updateListAndServer,
  } = useDataContext();

  const removeFromCart = (cartItemId) => {
    removeFromListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/cart/${cartItemId}`,
      itemId: cartItemId,
      dispatchType: "REMOVE_FROM_CART",
      list: "cart",
      toastMessage: "removed from cart",
    });
  }
    const addToWishlist = (productId) => {
    addToListAndServer({
      url: "https://dhrutham-cart-backend.herokuapp.com/wishlist",
      list: "wishlistItem",
      postItem: {
        product: { _id: productId },
      },
      dispatchType: "",
      toastItem: "wishlist",
    });
  }

  const removeAndAddItemToListAndServer = (cartItemId, productId) => {
    removeFromCart(cartItemId);
    addToWishlist(productId);
  }

  const increaseQuantity = (cartItemId, quantity) => {
    updateListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/cart/${cartItemId}`,
      postObject: {
        quantity: quantity + 1,
      },
      dispatchType: "INCREASE_CART_ITEM_QUANTITY",
      itemId: cartItemId,
    });
  }
  const decreaseQuantity = (cartItemId, quantity) => {
    updateListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/cart/${cartItemId}`,
      postObject: {
        quantity: quantity - 1,
      },
      dispatchType: "DECREASE_CART_ITEM_QUANTITY",
      itemId: cartItemId,
    });
  }

  return {
    removeFromCart,
    addToWishlist,
    removeAndAddItemToListAndServer,
    increaseQuantity,
    decreaseQuantity,
  };
}
