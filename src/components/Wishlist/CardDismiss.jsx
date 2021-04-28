import { useDataContext } from "../../contexts/data-context";

export function CardDismiss({ productId ,wishListId}) {
  const { removeFromListAndServer } = useDataContext();

  return (
    <div className="card-icon-topRight ">
      <button
        className="icon-btn cursor-pointer"
        onClick={() => {
          removeFromListAndServer({
            url: `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
            itemId: wishListId,
            dispatchType: "REMOVE_FROM_WISHLIST",
            list:"wishlist",
            toastMessage: "removed from wishlist"
          });
        }}
      >
        <span class="material-icons-outlined icon-color-gray">cancel</span>
      </button>
    </div>
  );
}
