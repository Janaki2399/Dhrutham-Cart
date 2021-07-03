import { useCartContext } from "../../contexts/cart-context";

export function QuantityButtons({ productId, quantity }) {
  const { updateQuantity } = useCartContext();

  return (
    <div>
      <div className="flex-horizontal margin-top">
        <button
          className="icon-btn gray-border"
          disabled={quantity <= 1}
          onClick={() => updateQuantity(productId, quantity - 1)}
        >
          <span
            className={
              quantity !== 1
                ? "material-icons-outlined icon-size-18"
                : "material-icons-outlined icon-size-18 icon-color-gray"
            }
          >
            remove
          </span>
        </button>

        <div className="qty-div ">{quantity}</div>

        <button
          className="icon-btn cursor-pointer "
          onClick={() => updateQuantity(productId, quantity + 1)}
        >
          <span
            className="material-icons-outlined 
                             icon-size-18"
          >
            add
          </span>
        </button>
      </div>
    </div>
  );
}
