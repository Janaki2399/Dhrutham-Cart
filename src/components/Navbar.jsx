// import { useDataContext } from "../contexts/data-context";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useWishlistContext } from "../contexts/wishlist-context";
import { useCartContext } from "../contexts/cart-context";

export function Navbar() {
  const { wishlistState } = useWishlistContext();
  const { cartState } = useCartContext();
  const { token, setToken } = useAuth();
  const { wishlistDispatch } = useWishlistContext();
  const { cartDispatch } = useCartContext();
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    localStorage?.removeItem("login");
    wishlistDispatch({ type: "RESET" });
    cartDispatch({ type: "RESET" });
    navigate("/");
  };

  return (
    <div class="nav fixed-nav">
      <Link to="/" className="anchor-link">
        <div class="font-size-3 text-color-primary">Dhrutham Cart</div>
      </Link>
      <div className="nav-list">
        {!token ? (
          <Link to="/login" className=" nav-item anchor-link">
            Login
          </Link>
        ) : (
          <div className="nav-item cursor-pointer" onClick={logout}>
            Logout
          </div>
        )}

        <Link to="/wishlist" className="nav-item font-size-6">
          <div class="icon-btn-with-padding">
            <span class=" material-icons-outlined icon-color-gray ">
              favorite_border
            </span>
            {token && wishlistState.list?.length > 0 && (
              <div class="badge badge-circle badge-anchorTopRight bg-primary">
                {wishlistState.list?.length}
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
            {token && cartState.list?.length > 0 && (
              <div class="badge badge-circle badge-anchorTopRight bg-primary">
                {cartState.list?.length}
              </div>
            )}
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}
