import { useDataContext } from "../../data-context";

export function CardDismiss({ item }) {
  const { removeFromListAndServer } = useDataContext();

  return (
    <div className="card-icon-topRight">
      <button
        class="icon-btn"
        onClick={() => {
          removeFromListAndServer({
            url: "/api/wishLists",
            item: item,
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
