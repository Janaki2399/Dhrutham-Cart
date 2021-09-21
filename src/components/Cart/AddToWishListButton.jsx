import { useCartContext } from "../../contexts/cart-context";
import { useWishlistContext } from "../../contexts/wishlist-context";

export function AddToWishListButton({ productId }) {
  const { removeFromCart } = useCartContext();
  const { addToWishlist } = useWishlistContext();

  const moveItemFromCartToWishlist = async () => {
    await removeFromCart(productId);
    addToWishlist(productId);
  };

  return (
    <button
      className="btn btn-text font-size-6 
                     text-gray"
      onClick={moveItemFromCartToWishlist}
    >
      ADD TO WISHLIST
    </button>
  );
}
