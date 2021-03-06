import { CardItemContent } from "../CardItemContent";
import { WishListButton } from "./WishListButton";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";
import { useNavigate } from "react-router-dom";

export function ProductItem({ productItem }) {
  const navigate = useNavigate();

  return (
    <div className="card card-shadow card-vertical">
      <div
        onClick={() => navigate(`/products/${productItem._id}`)}
        className="cursor-pointer flex-column space-between"
      >
        <ProductImage image={productItem.image} inStock={productItem.inStock} />
        <CardItemContent item={productItem} />
      </div>

      <AddToCartButton
        isAddedToCart={productItem.isAddedToCart}
        inStock={productItem.inStock}
        productId={productItem._id}
      />
      {productItem.inStock && (
        <WishListButton
          isWishListed={productItem.isWishListed}
          productId={productItem._id}
        />
      )}
    </div>
  );
}
