import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router";
import { useWishlistContext } from "../../contexts/wishlist-context";

export function WishListButton({ productId }) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useWishlistContext();

  const isItemInWishlist = () => {
    return (
      wishlistState.list?.find((item) => item.product._id === productId) !==
      undefined
    );
  };

  return (
    <div className="card-icon-topRight">
      <button
        className="icon-btn"
        onClick={() => {
          if (token) {
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
