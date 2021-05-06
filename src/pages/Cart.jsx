import { useDataContext } from "../contexts/data-context";
import { CartItem } from "../components/Cart/CartItem";
import {useEffect} from "react";

export const Cart = () => {
  const { state,fetchAndAddToList } = useDataContext();
  useEffect(() => {
    fetchAndAddToList({
      url: "https://dhrutham-cart-backend.herokuapp.com/cart",
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
      <div className="text-center" style={{ margin: "4rem"}}>
        {getTotalPrice() > 0 && (
          <div className="font-size-3 font-bold-1">
            <span>Total Price :</span> Rs {getTotalPrice()}
          </div>
        )}
      </div>
      <div style={{ margin: "2rem" }}>
        {state.cartList.map(({_id,product,quantity}) => {
          return <CartItem key={_id} cartItemId={_id} product={product} quantity={quantity} />;
        })}
      </div>
    </div>
  );
}
