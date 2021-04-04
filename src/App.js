
import './App.css';
import { useEffect } from "react";
import { useDataContext } from "./data-context";
import { Products } from "./components/Products/Products";
import { WishList } from "./components/Wishlist/WishList";
import { Cart } from "./components/Cart/Cart";
import { Toast } from "./components/Toast";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { useLoaderToast } from "./loader-toast-context";

export default function App() {
  const { fetchAndAddToList, state } = useDataContext();
  const { toast } = useLoaderToast();

  useEffect(() => {
    fetchAndAddToList({
      url: "/api/cartLists",
      dispatchType: "ADD_TO_CART",
      list: "cartLists"
    });
  }, []);

  useEffect(() => {
    fetchAndAddToList({
      url: "/api/wishLists",
      dispatchType: "ADD_TO_WISHLIST",
      list: "wishLists"
    });
  }, []);
  useEffect(() => {
    fetchAndAddToList({
      url: "/api/products",
      dispatchType: "ADD_TO_PRODUCTS",
      list: "products"
    });
  }, []);

  return (
    <div className="App">
      <div class="center-div">
        <Navbar />
        <div>
          {state.showComponent === "products" && <Products />}
          {state.showComponent === "wishlist" && <WishList />}
          {state.showComponent === "cart" && <Cart />}
          {state.showComponent === "filter" && <Filter />}
        </div>
        {toast && <Toast message={toast} />}
      </div>
    </div>
  );
}
