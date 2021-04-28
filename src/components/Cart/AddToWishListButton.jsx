import { useDataContext } from "../../contexts/data-context";

export function AddToWishListButton({ cartItemId,productId }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function RemoveAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/cart/${cartItemId}`,
      itemId: cartItemId,
      dispatchType: "REMOVE_FROM_CART",
      list:"cart",
      toastMessage: "removed from cart"
    });
 
    addToListAndServer({
      url: "https://dhrutham-cart-backend.herokuapp.com/wishlist",
      list: "wishlistItem",
      postItem: {
        "product":{"_id":productId}
      },
      dispatchType: "",
      toastItem: "wishlist"
    })
  }

  return (
    <button
      className="btn btn-text font-size-6 
                     text-gray"
      onClick={RemoveAndAddItemToListAndServer}
    >
      ADD TO WISHLIST
    </button>
  );
}
