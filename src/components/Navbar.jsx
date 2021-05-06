import { useDataContext } from "../contexts/data-context";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export function Navbar() {
  const { state, dispatch } = useDataContext();
  const { isUserLoggedIn,setUserLogIn } = useAuth();
  const navigate=useNavigate();

  const logout =()=>{
    setUserLogIn(false);
    navigate("/");
  }

  return (
    <div class="nav-main fixed-nav">
      <Link to="/" className="anchor-link">
      <div class="font-size-3 text-color-primary">Dhrutham</div>
      </Link>
      <div className="nav-list">
        
        {!isUserLoggedIn ?<Link to="/login" className="anchor-link">
          Login
        </Link>: <div className="cursor-pointer" onClick={logout}>Logout</div> }

        <Link to="/wishlist" className="nav-item font-size-6">
          <div class="icon-btn-with-padding">
            <span class=" material-icons-outlined icon-color-gray ">
              favorite_border
            </span>
            {isUserLoggedIn && state.wishlistLength > 0 && (
              <div class="badge badge-circle badge-anchorTopRight bg-primary">
                {state.wishlistLength}
              </div>
            )}
          </div>
          <span>Wishlist</span>
        </Link>

        <Link to="/cart" className="nav-item font-size-6">
          <div class="icon-btn-with-padding">
            <span class=" material-icons-outlined icon-color-gray ">
              shopping_cart
            </span>
            {isUserLoggedIn && state.cartLength > 0 && (
              <div class="badge badge-circle badge-anchorTopRight bg-primary">
                {state.cartLength}
              </div>
            )}
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}
