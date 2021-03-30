import { useDataContext } from "../../data-context";

export function AddToCartButton({ item }) {
  const { addToListAndServer, dispatch } = useDataContext();

  return (
    <div>
      <button
        disabled={!item.inStock}
        style={{ width: "100%", marginTop: "0.3rem" }}
        className={
          item.inStock
            ? "btn btn-primary-contained"
            : " btn btn-primary-contained btn-disabled"
        }
        onClick={() => {
          if (!item.isAddedToCart) {
            addToListAndServer({
              url: "/api/cartLists/",
              list: "cartList",
              postItem: {
                cartList: { ...item, quantity: 1 }
              },
              dispatchType: "APPEND_ITEM_TO_CART",
              toastItem: "cart"
            });
          } else {
            dispatch({ type: "SHOW_COMPONENT", payload: "cart" });
          }
        }}
      >
        {!item.isAddedToCart ? "Add to cart" : "Go To Cart"}
      </button>
    </div>
  );
}
