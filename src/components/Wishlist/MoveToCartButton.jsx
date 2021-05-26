import { useWishlistContext } from "../../contexts/wishlist-context";
import { useCartContext } from "../../contexts/cart-context";

export function MoveToCartButton({ productId }) {
  const { removeFromWishlist } = useWishlistContext();
  const { addToCart } = useCartContext();

  return (
    <div>
      <button
        style={{ marginTop: "0.3rem" }}
        className="btn btn-primary-contained full-width"
        onClick={() => {
          removeFromWishlist(productId);
          addToCart(productId);
        }}
      >
        Move to cart
      </button>
    </div>
  );
}
