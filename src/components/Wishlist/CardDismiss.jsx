import { useWishlist } from "../../hooks/useWishlist";
export function CardDismiss({ productId ,wishListId}) {

  const {removeFromWishlist}=useWishlist();
  return (
    <div className="card-icon-topRight ">
      <button
        className="icon-btn cursor-pointer"
        onClick={() => {
         removeFromWishlist(wishListId,productId)
        }}
      >
        <span class="material-icons-outlined icon-color-gray">cancel</span>
      </button>
    </div>
  );
}
