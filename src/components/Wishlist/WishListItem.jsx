import { CardItemContent } from "../CardItemContent";
import { CardDismiss } from "./CardDismiss";
import { MoveToCartButton } from "./MoveToCartButton";
import { useNavigate } from "react-router-dom";
import { ProductImage } from "../Products/ProductImage";

export function WishListItem({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card card-shadow card-vertical wishlist-item-size">
      <div
        onClick={() => navigate(`/products/${product._id}`)}
        className="cursor-pointer "
      >
        <ProductImage image={product.image} inStock={product.inStock} />
        <CardItemContent item={product} isWishlist />
      </div>

      <CardDismiss productId={product._id} />
      <MoveToCartButton productId={product._id} />
    </div>
  );
}
