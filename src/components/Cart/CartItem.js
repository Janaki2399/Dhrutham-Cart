import { QuantityButtons } from "./QuantityButtons";
import { RemoveButton } from "./RemoveButton";
import { AddToWishListButton } from "./AddToWishListButton";

export function CartItem({ cartItem }) {
  return (
    <div
      className="card card-shadow card-horizontal card-content-padding"
      style={{ width: "90%" }}
    >
      <div style={{ width: "25%" }}>
        <img className="card-img" src={cartItem.product.image} alt="card-img" />
      </div>
      <div
        className="card-content-padding text-start card-vertical"
        style={{ width: "60%" }}
      >
        <div>
          <div className="card-title">{cartItem.product.name}</div>
          <QuantityButtons cartItem={cartItem} />
        </div>
        <div className="flex-horizontal">
          <RemoveButton cartItem={cartItem} />
          <AddToWishListButton cartItem={cartItem} />
        </div>
      </div>
      <div className="card-content-padding font-size-4 ">
        Rs {cartItem.product.price * cartItem.quantity}
      </div>
    </div>
  );
}
