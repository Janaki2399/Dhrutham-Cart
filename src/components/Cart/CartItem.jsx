import { QuantityButtons } from "./QuantityButtons";
import { RemoveButton } from "./RemoveButton";
import { AddToWishListButton } from "./AddToWishListButton";

export function CartItem({ product, quantity }) {
  return (
    <div
      className="card card-shadow card-horizontal card-content-padding"
      style={{ width: "90%" }}
    >
      <div style={{ width: "25%" }}>
        <img className="card-img" src={product.image} alt="card-img" />
      </div>
      <div
        className="card-content-padding text-start card-vertical"
        style={{ width: "60%" }}
      >
        <div>
          <div className="card-title">{product.name}</div>
          <QuantityButtons productId={product._id} quantity={quantity} />
        </div>
        <div className="flex-horizontal">
          <RemoveButton productId={product._id} />
          <AddToWishListButton productId={product._id} />
        </div>
      </div>
      <div className="card-content-padding font-size-4 ">
        Rs {product.price * quantity}
      </div>
    </div>
  );
}
