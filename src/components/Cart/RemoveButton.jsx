import { useCart } from "../../hooks/useCart";
export function RemoveButton({ productId }) {
  const { removeFromCart } = useCart();
  return (
    <div>
      <button
        className="btn btn-text font-size-6 text-gray 
                         margin-right"
        onClick={() => removeFromCart(productId)}
      >
        REMOVE
      </button>
    </div>
  );
}
