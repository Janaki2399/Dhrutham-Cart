import { useDataContext } from "../data-context";
import { Link } from "react-router-dom";
import { useAuth } from "../auth-context";

export function Navbar() {
  const { state, dispatch } = useDataContext();
  const { isUserLoggedIn } = useAuth();
  return (
    <div class="nav-main fixed-nav">
      <div class="font-size-3">Logo</div>
      <div className="nav-list">
        <Link to="/" className="nav-item font-size-6">
          <span>Products</span>
        </Link>

        <Link to="/login" className="anchor-link">
          Login
        </Link>

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
