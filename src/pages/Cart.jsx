import { CartItem } from "../components/Cart/CartItem";
import { CartSummary } from "../components/Cart/CartSummary";
import { useCartContext } from "../contexts/cart-context";

export function Cart() {
  const { cartState } = useCartContext();

  if (cartState.list.length === 0) {
    return (
      <div className="center-page-align text-color-primary">CART EMPTY</div>
    );
  }
  return (
    <div className="flex flex-column">
      <CartSummary />
      <div className="cart-list">
        {cartState.list.map(({ _id, product, quantity }) => {
          return <CartItem key={_id} product={product} quantity={quantity} />;
        })}
      </div>
    </div>
  );
}
