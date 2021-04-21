import { useDataContext } from "../../data-context";

export function AddToWishListButton({ cartItem }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function RemoveAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: `https://restPractice.janaki23.repl.co/cart/${cartItem._id}`,
      item: cartItem,
      dispatchType: "REMOVE_FROM_CART",
      toastMessage: "removed from cart"
    });
 
    addToListAndServer({
      url: "https://restPractice.janaki23.repl.co/wishlist",
      list: "wishlistItem",
      postItem: {
        "product":{"_id":cartItem.product._id}
      },
      dispatchType: "",
      toastItem: "wishlist"
    })
  }

  return (
    <button
      class="btn btn-text font-size-6 
                     text-gray"
      onClick={RemoveAndAddItemToListAndServer}
    >
      ADD TO WISHLIST
    </button>
  );
}
