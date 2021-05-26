import { useCartContext } from "../../contexts/cart-context";

export function RemoveButton({ productId }) {
  const { removeFromCart } = useCartContext();
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
