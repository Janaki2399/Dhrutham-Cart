import { useCartContext } from "../../contexts/cart-context";

export function RemoveButton({ productId }) {
  const { removeFromCart } = useCartContext();
  return (
    <button
      className=" btn-text font-size-6 text-gray font-bold-1 gray-border align-center border-right
                 cursor-pointer "
      onClick={() => removeFromCart(productId)}
      style={{ width: "9rem", height: "100%" }}
    >
      REMOVE
    </button>
  );
}
