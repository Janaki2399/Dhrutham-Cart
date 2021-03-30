import { useDataContext } from "../../data-context";

export function RemoveButton({ cartItem }) {
  const { removeFromListAndServer } = useDataContext();

  return (
    <div>
      <button
        class="btn btn-text font-size-6 text-gray 
                         margin-right"
        onClick={() => {
          removeFromListAndServer({
            url: "/api/cartLists",
            item: cartItem,
            dispatchType: "REMOVE_FROM_CART",
            toastMessage: "removed from cart"
          });
        }}
      >
        REMOVE
      </button>
    </div>
  );
}
