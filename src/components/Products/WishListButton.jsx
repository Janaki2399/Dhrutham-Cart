import { useAuth } from "../../contexts/auth-context";
import { Navigate, useNavigate } from "react-router";
import { useProduct } from "../../hooks/useProduct";

export function WishListButton({
  isWishListed,
  productId,
  addToWishlist,
  removeFromWishlist,
}) {
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="card-icon-topRight">
      <button
        class="icon-btn"
        onClick={() => {
          if (isUserLoggedIn) {
            !isWishListed
              ? addToWishlist(productId)
              : removeFromWishlist(productId);
          } else {
            navigate("/login");
          }
        }}
      >
        <span
          className={
            isWishListed
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
