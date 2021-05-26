import { CardItemContent } from "../CardItemContent";
import { WishListButton } from "./WishListButton";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

export function ProductItem({ productItem }) {
  const { addToCart } = useProduct();

  return (
    <div className="card card-shadow card-vertical ">
      <Link to={`/products/${productItem._id}`} className="anchor-link">
        <div>
          <ProductImage
            image={productItem.image}
            inStock={productItem.inStock}
          />
          <CardItemContent item={productItem} />
        </div>
      </Link>
      <AddToCartButton
        isAddedToCart={productItem.isAddedToCart}
        inStock={productItem.inStock}
        productId={productItem._id}
        addToCart={addToCart}
      />
      {productItem.inStock && (
        <WishListButton
          isWishListed={productItem.isWishListed}
          productId={productItem._id}
          // addToWishlist={addToWishlist}
          // removeFromWishlist={removeFromWishlist}
        />
      )}
    </div>
  );
}
