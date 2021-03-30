import { useDataContext } from "../../data-context";

export function MoveToCartButton({ item }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();

  function removeAndAddItemToListAndServer() {
    removeFromListAndServer({
      url: "/api/wishLists",
      item: item,
      dispatchType: "REMOVE_FROM_WISHLIST",
      toastMessage: "removed from wishlist"
    });
    addToListAndServer({
      url: "/api/cartLists/",
      list: "cartList",
      postItem: {
        cartList: { ...item, quantity: 1 }
      },
      dispatchType: "APPEND_ITEM_TO_CART",
      toastItem: "cart"
    });
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
