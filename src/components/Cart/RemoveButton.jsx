import { useCart } from "../../hooks/useCart";
export function RemoveButton({ cartItemId }) {
  const { removeFromCart } = useCart();
  return (
    <div>
      <button
        className="btn btn-text font-size-6 text-gray 
                         margin-right"
        onClick={() => removeFromCart(cartItemId)}
      >
        REMOVE
      </button>
    </div>
  );
}
