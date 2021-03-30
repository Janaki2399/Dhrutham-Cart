import { useDataContext } from "../../data-context";

export function AddToWishListButton({ cartItem }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function RemoveAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: "/api/cartLists",
      item: cartItem,
      dispatchType: "REMOVE_FROM_CART",
      toastMessage: "Removed from Cart"
    });
    const { quantity, ...itemWithoutQuantity } = cartItem;

    addToListAndServer({
      url: "/api/wishLists/",
      list: "wishList",
      postItem: {
        wishList: itemWithoutQuantity
      },
      dispatchType: "APPEND_ITEM_TO_WISHLIST",
      toastItem: " wishlist"
    });
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
