import { useCart } from "../../hooks/useCart";

export function AddToWishListButton({ cartItemId, productId }) {
  const { removeAndAddItemToListAndServer } = useCart();
  return (
    <button
      className="btn btn-text font-size-6 
                     text-gray"
      onClick={() => removeAndAddItemToListAndServer(cartItemId, productId)}
    >
      ADD TO WISHLIST
    </button>
  );
}
