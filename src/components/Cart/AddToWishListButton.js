import { useDataContext } from "../../data-context";

export function AddToWishListButton({ cartItemId,productId }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function RemoveAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: `https://restPractice.janaki23.repl.co/cart/${cartItemId}`,
      itemId: cartItemId,
      dispatchType: "REMOVE_FROM_CART",
      toastMessage: "removed from cart"
    });
 
    addToListAndServer({
      url: "https://restPractice.janaki23.repl.co/wishlist",
      list: "wishlistItem",
      postItem: {
        "product":{"_id":productId}
      },
      dispatchType: "INCREMENT_WISHLIST_COUNT",
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
