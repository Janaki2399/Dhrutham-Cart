import { useDataContext } from "../../data-context";

export function WishListButton({ productItem }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();
  return (
    <div className="card-icon-topRight">
      <button
        class="icon-btn"
        onClick={() => {
          !productItem.isWishListed
            ? addToListAndServer({
                url: "/api/wishLists/",
                list: "wishList",
                postItem: {
                  wishList: productItem
                },
                dispatchType: "APPEND_ITEM_TO_WISHLIST",
                toastItem: "wishlist"
              })
            : removeFromListAndServer({
                url: "/api/wishLists",
                item: productItem,
                dispatchType: "REMOVE_FROM_WISHLIST",
                toastMessage: "removed from wishlist"
              });
        }}
      >
        <span
          className={
            productItem.isWishListed
              ? "material-icons-outlined icon-color-primary icon-size-36"
              : "material-icons-outlined icon-color-gray icon-size-36"
          }
        >
          favorite
        </span>
      </button>
    </div>
  );
}
