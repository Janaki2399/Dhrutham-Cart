import { useCartContext } from "../../contexts/cart-context";
import { getTotalPrice } from "../../util";
export const CartSummary = () => {
  const { cartState } = useCartContext();
  return (
    <div
      className="flex flex-horizontal margin-auto space-between cart-item "
      style={{ marginTop: "5rem" }}
    >
      <div className="font-size-4 font-bold-1 ">
        My cart({cartState.list.length} items)
      </div>
      {getTotalPrice(cartState.list) > 0 && (
        <div className="font-size-4 font-bold-1">
          <span>Total Price :</span> Rs {getTotalPrice(cartState.list)}
        </div>
      )}
    </div>
  );
};
