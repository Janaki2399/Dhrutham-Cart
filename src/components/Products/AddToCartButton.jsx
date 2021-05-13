import { Link, useNavigate, Navigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useDataContext } from "../../contexts/data-context";

export function AddToCartButton({ isAddedToCart, inStock, productId ,addToCart}) {
  const { isUserLoggedIn } = useAuth();
  const {state,dispatch}=useDataContext();
  const navigate = useNavigate();
  const isItemInCart=()=>{
    return state.cartList.find((item)=>item.product._id===productId)!==undefined;
  }
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
