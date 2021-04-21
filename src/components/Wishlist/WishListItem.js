import { CardItemContent } from "../CardItemContent";
import { CardDismiss } from "./CardDismiss";
import { MoveToCartButton } from "./MoveToCartButton";

export function WishListItem({ wishListItem }) {
  return (
    <div
      className="card card-shadow card-vertical"
      style={{ maxWidth: "15rem" }}
    >
      <div>
        <img className="card-img" src={wishListItem.product.image} alt="card-img" />
      </div>
      <CardItemContent item={wishListItem} isWishlist/>
      <CardDismiss item={wishListItem} />
      <MoveToCartButton item={wishListItem} />
    </div>
  );
}
