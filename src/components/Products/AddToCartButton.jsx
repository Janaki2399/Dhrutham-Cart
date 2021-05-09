import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

export function AddToCartButton({ isAddedToCart, inStock, productId ,addToCart}) {
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

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
          if (isUserLoggedIn) {
            !isAddedToCart ? addToCart(productId) : navigate("/cart");
          } else {
            navigate("/login");
          }
        }}
      >
        {!isAddedToCart ? "Add to cart" : "Go to cart"}
      </button>
    </div>
  );
}
