import { useDataContext } from "../../data-context";
import { CartItem } from "./CartItem";
import {useEffect} from "react";

export function Cart() {
  const { state,fetchAndAddToList } = useDataContext();
  useEffect(() => {
    fetchAndAddToList({
      url: "https://restPractice.janaki23.repl.co/cart",
      dispatchType: "ADD_TO_CART",
      list: "cart"
    });
  }, []);
  function getTotalPrice() {
    return state.cartList.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.product.price * cartItem.quantity,
      0
    );
  }
  return (
    <div>
      <div style={{ margin: "4rem", textAlign: "center" }}>
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
