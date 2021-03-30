import { useDataContext } from "../../data-context";
import { CartItem } from "./CartItem";

export function Cart() {
  const { state } = useDataContext();

  function getTotalPrice() {
    return state.cartList.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.price * cartItem.quantity,
      0
    );
  }
  return (
    <div>
      <div style={{ margin: "2rem", textAlign: "center" }}>
        {getTotalPrice() > 0 && (
          <div className="font-size-3 font-bold-1">
            <span>Total Price :</span> Rs {getTotalPrice()}
          </div>
        )}
      </div>
      <div style={{ margin: "2rem" }}>
        {state.cartList.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
    </div>
  );
}
