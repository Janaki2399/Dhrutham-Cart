import { useDataContext } from "../../contexts/data-context";

export function MoveToCartButton({ wishListId,productId}) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function removeAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
      itemId: wishListId,
      dispatchType: "REMOVE_FROM_WISHLIST",
      list:"wishlist",
      toastMessage: "removed from wishlist"
    });
    addToListAndServer({
      url: "https://dhrutham-cart-backend.herokuapp.com/wishlist",
      list: "cartItem",
      postItem: {
        "product":{"_id":productId},
        "quantity":1
      },
      dispatchType: "",
      list:"cartItem",
      toastItem: "cart"
    })
  }
  return (
    <div>
      <button
        style={{  marginTop: "0.3rem" }}
        className="btn btn-primary-contained full-width"
        onClick={() => {
          removeAndAddItemToListAndServer();
        }}
      >
        Move to cart
      </button>
    </div>
  );
}
