import { useWishlistContext } from "../../contexts/wishlist-context";
import { useCartContext } from "../../contexts/cart-context";

export function MoveToCartButton({ productId }) {
  const { removeFromWishlist } = useWishlistContext();
  const { addToCart } = useCartContext();

  const moveItemFromCartToWishlist = async () => {
    await removeFromWishlist(productId);
    addToCart(productId);
  };
  return (
    <div>
      <button
        className="btn btn-primary-contained full-width"
        onClick={moveItemFromCartToWishlist}
      >
        Move to cart
      </button>
    </div>
  );
}
