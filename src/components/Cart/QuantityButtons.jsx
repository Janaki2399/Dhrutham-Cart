import { useCart } from "../../hooks/useCart";
export function QuantityButtons({ cartItemId, quantity }) {
  // const { increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div>
      <div class="flex-horizontal margin-top">
        <button
          class="icon-btn gray-border"
          disabled={quantity <= 1}
          // onClick={() => decreaseQuantity(cartItemId, quantity)}
        >
          <span
            class={
              quantity !== 1
                ? "material-icons-outlined icon-size-18"
                : "material-icons-outlined icon-size-18 icon-color-gray"
            }
          >
            remove
          </span>
        </button>

        <div class="qty-div">{quantity}</div>

        <button
          class="icon-btn gray-border"
          // onClick={() => increaseQuantity(cartItemId, quantity)}
        >
          <span
            class="material-icons-outlined 
                             icon-size-18"
          >
            add
          </span>
        </button>
      </div>
    </div>
  );
}
