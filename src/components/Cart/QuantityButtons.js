import { useDataContext } from "../../contexts/data-context";

export function QuantityButtons({ cartItemId,quantity }) {
  const { updateListAndServer } = useDataContext();

  return (
    <div>
      <div class="flex-horizontal margin-top">
        <button
          class="icon-btn gray-border"
          disabled={quantity <= 1}
          onClick={() => {
            updateListAndServer({
              url: `https://restPractice.janaki23.repl.co/cart/${cartItemId}`,
              postObject: {
                quantity: quantity - 1,
              },
              dispatchType: "DECREASE_CART_ITEM_QUANTITY",
              itemId: cartItemId,
            });
          }}
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
          onClick={() => {
            updateListAndServer({
              url: `https://restPractice.janaki23.repl.co/cart/${cartItemId}`,
              postObject: {
                quantity: quantity + 1,
              },
              dispatchType: "INCREASE_CART_ITEM_QUANTITY",
              itemId: cartItemId,
            });
          }}
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
