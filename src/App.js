import "./App.css";
import { useEffect } from "react";
import { useDataContext } from "./contexts/data-context";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";
import { Toast } from "./components/Toast";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { useLoaderToast } from "./contexts/loader-toast-context";
import { Login } from "./pages/Login";
import { useAuth } from "./contexts/auth-context";

export default function App() {
  const { fetchAndAddToList, state } = useDataContext();

  const { toast } = useLoaderToast();

  useEffect(() => {
    fetchAndAddToList({
      url: "https://restPractice.janaki23.repl.co/cart/summary",
      dispatchType: "SET_CART_COUNT",
      list: "cartLength",
    });
  }, []);
  useEffect(() => {
    fetchAndAddToList({
      url: "https://restPractice.janaki23.repl.co/wishlist/summary",
      dispatchType: "SET_WISHLIST_COUNT",
      list: "wishlistLength",
    });
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <PrivateRoute path={"/wishlist"} element={<WishList />} />
        <PrivateRoute path={"/cart"} element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>

      {toast && <Toast message={toast} />}
    </div>
  );
}
