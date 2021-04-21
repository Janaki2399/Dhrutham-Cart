import { useDataContext } from "../../data-context";
import { useAuth } from "../../auth-context";
import { Navigate, useNavigate } from "react-router";

export function WishListButton({ productItem }) {
  const { removeFromListAndServer, addToListAndServer } = useDataContext();
  const {isUserLoggedIn}=useAuth();
  const navigate=useNavigate();
  return (
    <div className="card-icon-topRight">
      <button
        class="icon-btn"
        onClick={() => {
        if(isUserLoggedIn){
          !productItem.isWishListeds
            ? addToListAndServer({
                url: "https://restPractice.janaki23.repl.co/wishlist",
                list: "wishlistItem",
                postItem: {
                  "product":{"_id":productItem._id}
                },
                dispatchType: "CHANGE_WISHLIST_STATE",
                toastItem: "wishlist"
              })
            : removeFromListAndServer({
                url: "/api/wishLists",
                item: productItem,
                dispatchType: "REMOVE_FROM_WISHLIST",
                toastMessage: "removed from wishlist"
              });
        }else{
          navigate("/login");
        }}}
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
