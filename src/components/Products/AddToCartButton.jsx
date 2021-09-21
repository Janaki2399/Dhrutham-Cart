import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useCartContext } from "../../contexts/cart-context";

export function AddToCartButton({ inStock, productId }) {
  const { token } = useAuth();
  const { cartState, addToCart } = useCartContext();
  const navigate = useNavigate();
  const isItemInCart = () => {
    return (
      cartState.list?.find((item) => item.product._id === productId) !==
      undefined
    );
  };
  return (
    <div>
      <button
        disabled={!inStock}
        className={
          inStock
            ? "btn btn-primary-contained full-width"
            : " btn btn-primary-contained btn-disabled full-width"
        }
        onClick={() => {
          if (token) {
            !isItemInCart() ? addToCart(productId) : navigate("/cart");
          } else {
            navigate("/login");
          }
        }}
      >
        {!isItemInCart() ? "Add to cart" : "Go to cart"}
      </button>
    </div>
  );
}
