import { useDataContext } from "../../data-context";

export function CardDismiss({ wishListId }) {
  const { removeFromListAndServer } = useDataContext();

  return (
    <div className="card-icon-topRight ">
      <button
        class="icon-btn cursor-pointer"
        onClick={() => {
          removeFromListAndServer({
            url: `https://restPractice.janaki23.repl.co/wishlist/${wishListId}`,
            itemId: wishListId,
            dispatchType: "REMOVE_FROM_WISHLIST",
            toastMessage: "removed from wishlist"
          });
        }}
      >
        <span class="material-icons-outlined icon-color-gray">cancel</span>
      </button>
    </div>
  );
}
