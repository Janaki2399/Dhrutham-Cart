import { useCartContext } from "../../contexts/cart-context";

export function QuantityButtons({ productId, quantity }) {
  const { updateQuantity } = useCartContext();

  return (
    <div>
      <div class="flex-horizontal margin-top">
        <button
          class="icon-btn gray-border"
          disabled={quantity <= 1}
          onClick={() => updateQuantity(productId, quantity - 1)}
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
          onClick={() => updateQuantity(productId, quantity + 1)}
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
