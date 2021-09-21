import { CartItem } from "../components/Cart/CartItem";
import { CartSummary } from "../components/Cart/CartSummary";
import { useCartContext } from "../contexts/cart-context";
import { API_STATUS } from "../constants";

export function Cart() {
  const { cartState } = useCartContext();

  const isCartEmpty = () => {
    return (
      cartState.list.length === 0 &&
      cartState.statuses.fetchStatus === API_STATUS.SUCCESS
    );
  };

  if (isCartEmpty()) {
    return (
      <div className="center-page-align text-color-primary">CART EMPTY</div>
    );
  }

  if (cartState.statuses.fetchStatus === API_STATUS.LOADING) {
    return (
      <div className="center-page-align">
        <div className="loader " />
      </div>
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
