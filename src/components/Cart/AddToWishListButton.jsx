import { useCartContext } from "../../contexts/cart-context";
import { useWishlistContext } from "../../contexts/wishlist-context";

export function AddToWishListButton({ cartItemId, productId }) {
  const { removeFromCart } = useCartContext();
  const { addToWishlist } = useWishlistContext();
  return (
    <button
      className="btn btn-text font-size-6 
                     text-gray"
      onClick={() => {
        removeFromCart(productId);
        addToWishlist(productId);
      }}
    >
      ADD TO WISHLIST
    </button>
  );
}
