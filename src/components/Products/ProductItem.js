import { CardItemContent } from "../CardItemContent";
import { WishListButton } from "./WishListButton";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";

export function ProductItem({ productItem }) {
  return (
    <div
      className="card card-shadow card-vertical"
      style={{ maxWidth: "13rem" }}
    >
      <ProductImage item={productItem} />
      <CardItemContent item={productItem} />
      <AddToCartButton item={productItem} />
      {productItem.inStock && <WishListButton productItem={productItem} />}
    </div>
  );
}
