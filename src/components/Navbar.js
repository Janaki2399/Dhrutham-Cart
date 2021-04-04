import { useDataContext } from "../data-context";
export function Navbar() {
  const { state, dispatch } = useDataContext();
  return (
    <div class="nav-main fixed-nav">
      <div class="font-size-3">Logo</div>
      <div className="nav-list">
        <button
          style={{ border: "0", outline: "0", backgroundColor: "white" }}
          class="nav-item"
          onClick={() => {
            dispatch({ type: "SHOW_COMPONENT", payload: "products" });
          }}
        >
          <span>Products</span>
        </button>

        <button
          onClick={() => {
            dispatch({ type: "SHOW_COMPONENT", payload: "wishlist" });
          }}
          class="nav-item"
          style={{ border: "0", outline: "0", backgroundColor: "white" }}
        >
          <div class="icon-btn-with-padding">
            <span class=" material-icons-outlined icon-color-gray ">
              favorite_border
            </span>
            {state.wishList.length > 0 && (
              <div class="badge badge-circle badge-anchorTopRight bg-primary">
                {state.wishList.length}
              </div>
            )}
          </div>
          <span>Wishlist</span>
        </button>

        <button
          onClick={() => {
            dispatch({ type: "SHOW_COMPONENT", payload: "cart" });
          }}
          class="nav-item"
          style={{ border: "0", outline: "0", backgroundColor: "white" }}
        >
          <div class="icon-btn-with-padding">
            <span class=" material-icons-outlined icon-color-gray ">
              shopping_cart
            </span>
            {state.cartList.length > 0 && (
              <div class="badge badge-circle badge-anchorTopRight bg-primary">
                {state.cartList.length}
              </div>
            )}
          </div>
          <span>Cart</span>
        </button>
      </div>
    </div>
  );
}
