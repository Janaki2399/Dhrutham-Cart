import { useParams } from "react-router";
import { WishListButton } from "../components/Products/WishListButton";
import { AddToCartButton } from "../components/Products/AddToCartButton";
import { useState, useEffect } from "react";
import { useProductDetails } from "../hooks/useProductDetails";

export function ProductDetails() {
  const { productId } = useParams();
  const {
    getProduct,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    product,
  } = useProductDetails();

  useEffect(() => {
    getProduct(productId);
  }, []);

  return (
    <div className="center-align-ver-hor flex-column center-page-ver-hor">
      <div
        className="card card-shadow card-horizontal card-content-padding"
        style={{ width: "90%" }}
      >
        <div className="relative-position">
          <img class="card-img" src={product.image} alt="card-img" />
          <WishListButton
            isWishListed={product.isWishListed}
            productId={productId}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
          />
          <AddToCartButton
            isAddedToCart={product.isAddedToCart}
            inStock={product.inStock}
            productId={productId}
            addToCart={addToCart}
          />
        </div>
        <div
          class="card-content-padding text-start card-vertical"
          style={{ width: "60%" }}
        >
          <div>
            <div className="card-title">{product.name}</div>
            <div className="font-size-3">Rs {product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
