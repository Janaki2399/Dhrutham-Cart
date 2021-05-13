import { useAuth } from "../../contexts/auth-context";
import { Navigate, useNavigate } from "react-router";
import { useProduct } from "../../hooks/useProduct";
import { useDataContext } from "../../contexts/data-context";

export function WishListButton({
  isWishListed,
  productId,
  addToWishlist,
  removeFromWishlist,
}) {
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const {state,dispatch}=useDataContext();

  const isItemInWishlist=()=>{
    return state.wishList.find((item)=>item.product._id===productId)!==undefined;
  }
  return (
    <div className="card-icon-topRight">
      <button
        className="icon-btn"
        onClick={() => {
          if (isUserLoggedIn) {
            !isItemInWishlist()
              ? addToWishlist(productId)
              : removeFromWishlist(productId);
          } else {
            navigate("/login");
          }
        }}
      >
        <span
          className={
            isItemInWishlist()
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
