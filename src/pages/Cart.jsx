import { useDataContext } from "../contexts/data-context";
import { CartItem } from "../components/Cart/CartItem";
import { useEffect } from "react";
import { getTotalPrice } from "../util";

export function Cart() {
  const { state, fetchAndAddToList } = useDataContext();
  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "https://dhrutham-cart-backend.herokuapp.com/cart",
  //     dispatchType: "ADD_TO_CART",
  //     list: "cart",
  //   });
  // }, []);

  return (
    <div>
      <div className="text-center" style={{ margin: "4rem" }}>
        {getTotalPrice(state.cartList) > 0 && (
          <div className="font-size-3 font-bold-1">
            <span>Total Price :</span> Rs {getTotalPrice(state.cartList)}
          </div>
        )}
      </div>
      <div style={{ margin: "2rem" }}>
        {state.cartList.map(({ _id, product, quantity }) => {
          return (
            <CartItem
              key={_id}
              cartItemId={_id}
              product={product}
              quantity={quantity}
            />
          );
        })}
      </div>
    </div>
  );
};
