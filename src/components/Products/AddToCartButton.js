import { useDataContext } from "../../data-context";
import {Link, useNavigate,Navigate} from "react-router-dom";  
import { useAuth } from "../../auth-context";

export function AddToCartButton({ item,addToCart }) {
  const { addToListAndServer, dispatch } = useDataContext();
  const {isUserLoggedIn}=useAuth();
  const navigate=useNavigate();
  return (
    <div>
      <button
        disabled={!item.inStock}
        style={{ width: "100%", marginTop: "0.3rem" }}
        className={
          item.inStock
            ? "btn btn-primary-contained"
            : " btn btn-primary-contained btn-disabled"
        }
        onClick={() => {
          if(isUserLoggedIn){
            !item.isAddedToCart ?
              addToCart() :navigate("/cart");
            }else{
            
              navigate("/login");
            }

          
          
        }}
      >
       {!item.isAddedToCart ? "Add to cart":"Go to cart"  }
       </button>
    </div>
  );
}
