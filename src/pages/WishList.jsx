import { WishListItem } from "../components/Wishlist/WishListItem";
import { useWishlistContext } from "../contexts/wishlist-context";

export function WishList() {
  const { wishlistState } = useWishlistContext();

  return (
    <div className="grid-col-3" style={{ margin: "4rem" }}>
      {wishlistState.list?.map(({ _id, product }) => {
        return <WishListItem key={_id} product={product} />;
      })}
    </div>
  );
}
