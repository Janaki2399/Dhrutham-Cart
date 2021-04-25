import { CardItemContent } from "../CardItemContent";
import { CardDismiss } from "./CardDismiss";
import { MoveToCartButton } from "./MoveToCartButton";

export function WishListItem({ wishListId,product }) {
  return (
    <div
      className="card card-shadow card-vertical"
      style={{ maxWidth: "15rem" }}
    >
      <div>
        <img className="card-img" src={product.image} alt="card-img" />
      </div>
      <CardItemContent item={product} isWishlist/>
      <CardDismiss productId={product._id} wishListId={wishListId}/>
      <MoveToCartButton wishListId={wishListId} productId={product._id} />
    </div>
  );
}
