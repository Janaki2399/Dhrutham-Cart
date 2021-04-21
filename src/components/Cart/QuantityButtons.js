import { useDataContext } from "../../data-context";

export function QuantityButtons({ cartItem }) {
  const { updateListAndServer } = useDataContext();

  return (
    <div>
      <div class="flex-horizontal margin-top">
        <button
          class="icon-btn"
          style={{ border: "1px solid gray" }}
          disabled={cartItem.quantity <= 1}
          onClick={() => {
            updateListAndServer({
              url: `https://restPractice.janaki23.repl.co/cart/${cartItem._id}`,
              postObject: {
                "quantity":cartItem.quantity-1,
              },
              dispatchType: "DECREASE_CART_ITEM_QUANTITY",
              item: cartItem
            });
          }}
        >
          <span
            class={
              cartItem.quantity !== 1
                ? "material-icons-outlined icon-size-18"
                : "material-icons-outlined icon-size-18 icon-color-gray"
            }
          >
            remove
          </span>
        </button>

        <div class="qty-div">{cartItem.quantity}</div>

        <button
          class="icon-btn"
          style={{ border: "1px solid gray" }}
          onClick={() => {
            updateListAndServer({
              url: `https://restPractice.janaki23.repl.co/cart/${cartItem._id}`,
              postObject: {
                  "quantity":cartItem.quantity+1,
              },
              dispatchType: "INCREASE_CART_ITEM_QUANTITY",
              item: cartItem
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
