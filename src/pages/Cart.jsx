import { CartItem } from "../components/Cart/CartItem";
import { getTotalPrice } from "../util";
import { useCartContext } from "../contexts/cart-context";

export function Cart() {
  const { cartState } = useCartContext();

  return (
    <div>
      <div className="text-center" style={{ margin: "4rem" }}>
        {getTotalPrice(cartState.list) > 0 && (
          <div className="font-size-3 font-bold-1">
            <span>Total Price :</span> Rs {getTotalPrice(cartState.list)}
          </div>
        )}
      </div>
      <div style={{ margin: "2rem" }}>
        {cartState.list.map(({ _id, product, quantity }) => {
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
}
