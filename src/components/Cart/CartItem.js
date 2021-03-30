import { QuantityButtons } from "./QuantityButtons";
import { RemoveButton } from "./RemoveButton";
import { AddToWishListButton } from "./AddToWishListButton";

export function CartItem({ cartItem }) {
  return (
    <div
      className="card card-shadow card-horizontal card-content-padding"
      style={{ width: "90%" }}
    >
      <div style={{ width: "30%" }}>
        <img class="card-img" src={cartItem.image} alt="card-img" />
      </div>
      <div
        class="card-content-padding text-start card-vertical"
        style={{ width: "60%" }}
      >
        <div>
          <div class="card-title">{cartItem.name}</div>
          <QuantityButtons cartItem={cartItem} />
        </div>
        <div class="flex-horizontal">
          <RemoveButton cartItem={cartItem} />
          <AddToWishListButton cartItem={cartItem} />
        </div>
      </div>
      <div class="card-content-padding font-size-4 ">
        Rs {cartItem.price * cartItem.quantity}
      </div>
    </div>
  );
}
