import { WishListItem } from "../components/Wishlist/WishListItem";
import { API_STATUS } from "../constants";
import { useWishlistContext } from "../contexts/wishlist-context";

export function WishList() {
  const { wishlistState } = useWishlistContext();

  const isWishlistEmpty = () => {
    return (
      wishlistState.list.length === 0 &&
      wishlistState.statuses.fetchStatus === API_STATUS.SUCCESS
    );
  };

  if (isWishlistEmpty()) {
    return (
      <div className="center-page-align text-color-primary">WISHLIST EMPTY</div>
    );
  }

  if (wishlistState.statuses.fetchStatus === API_STATUS.LOADING) {
    return (
      <div className="center-page-align">
        <div className="loader " />
      </div>
    );
  }

  return (
    <div className="grid-col-3 margin-5">
      {wishlistState.list?.map(({ _id, product }) => {
        return <WishListItem key={_id} product={product} />;
      })}
    </div>
  );
}
