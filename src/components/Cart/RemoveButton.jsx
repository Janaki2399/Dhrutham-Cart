import { useDataContext } from "../../contexts/data-context";

export function RemoveButton({ cartItemId }) {
  const { removeFromListAndServer } = useDataContext();

  return (
    <div>
      <button
        className="btn btn-text font-size-6 text-gray 
                         margin-right"
        onClick={() => {
          removeFromListAndServer({
            url: `https://dhrutham-cart-backend.herokuapp.com/cart/${cartItemId}`,
            itemId: cartItemId,
            dispatchType: "REMOVE_FROM_CART",
            list:"cart",
            toastMessage: "removed from cart"
          });
        }}
      >
        REMOVE
      </button>
    </div>
  );
}