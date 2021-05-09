import { useWishlist } from "../../hooks/useWishlist";
export function MoveToCartButton({ wishListId,productId}) {
  const {removeAndAddItemToListAndServer}=useWishlist();
 
  return (
    <div>
      <button
        style={{  marginTop: "0.3rem" }}
        className="btn btn-primary-contained full-width"
        onClick={() => {
          removeAndAddItemToListAndServer(wishListId,productId);
        }}
      >
        Move to cart
      </button>
    </div>
  );
}
