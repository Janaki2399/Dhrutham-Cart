import { useWishlistContext } from "../../contexts/wishlist-context";

export function CardDismiss({ productId }) {
  const { removeFromWishlist } = useWishlistContext();

  return (
    <div className="card-icon-topRight ">
      <button
        className="icon-btn cursor-pointer"
        onClick={() => {
          removeFromWishlist(productId);
        }}
      >
        <span class="material-icons-outlined icon-color-gray">cancel</span>
      </button>
    </div>
  );
}
