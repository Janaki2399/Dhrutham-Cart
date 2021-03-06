import { QuantityButtons } from "./QuantityButtons";
import { RemoveButton } from "./RemoveButton";
import { AddToWishListButton } from "./AddToWishListButton";
import { useNavigate } from "react-router";

export function CartItem({ product, quantity }) {
  const navigate = useNavigate();

  return (
    <div className=" card card-shadow cart-item ">
      <div
        className="card-grid card-content-padding "
        onClick={() => navigate(`/products/${product._id}`)}
      >
        <div className="cart-item-image-size">
          <img
            className="card-img img-transformation-bottom"
            src={product.image}
            alt="card-img"
            height="100%"
          />
        </div>

        <div className="card-content-padding text-start flex-column flex-wrap ">
          <div
            className=" card-content-padding "
            style={{ fontSize: "1.1rem" }}
          >
            {product.name}
          </div>
          <div className="card-content-padding font-size-5 font-weight-500  font-bold-400">
            Rs {product.price * quantity}{" "}
            {product.offer > 0 && (
              <span className="text-color-primary font-size-6 font-bold-1">
                {product.offer}% OFF
              </span>
            )}
          </div>

          <QuantityButtons productId={product._id} quantity={quantity} />
        </div>
      </div>
      <div className="card-grid card-content-padding padding-top gray-border border-top">
        <RemoveButton productId={product._id} />
        <AddToWishListButton productId={product._id} />
      </div>
    </div>
  );
}
