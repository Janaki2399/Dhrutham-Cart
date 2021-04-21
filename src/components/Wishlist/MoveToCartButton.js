import { useDataContext } from "../../data-context";

export function MoveToCartButton({ item }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function removeAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: `https://restPractice.janaki23.repl.co/wishlist/${item._id}`,
      item: item,
      dispatchType: "REMOVE_FROM_WISHLIST",
      toastMessage: "removed from wishlist"
    });
    addToListAndServer({
      url: "https://restPractice.janaki23.repl.co/cart",
      list: "cartItem",
      postItem: {
        "product":{"_id":item.product._id},
        "quantity":1
      },
      dispatchType: "",
      toastItem: "cart"
    })
  }
  return (
    <div>
      <button
        style={{ width: "100%", marginTop: "0.3rem" }}
        class="btn btn-primary-contained"
        onClick={() => {
          removeAndAddItemToListAndServer();
        }}
      >
        Move to cart
      </button>
    </div>
  );
}
