import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Categories } from "./pages/Categories";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";
import { Toast } from "./components/Toast";
import { Navbar } from "./components/Navbar";
import { useLoaderToast } from "./contexts/loader-toast-context";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useAuth } from "./contexts/auth-context";
import { useWishlistContext } from "./contexts/wishlist-context";
import { useCartContext } from "./contexts/cart-context";

export default function App() {
  const { fetchFromWishlist, wishlistState } = useWishlistContext();
  const { fetchFromCart } = useCartContext();
  const { token } = useAuth();
  const { toast } = useLoaderToast();

  useEffect(() => {
    if (token) {
      fetchFromWishlist();
      fetchFromCart();
    }
  }, [token]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories/:categoryId" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <PrivateRoute path={"/wishlist"} element={<WishList />} />
        <PrivateRoute path={"/cart"} element={<Cart />} />
      </Routes>

      {toast !== "" && <Toast message={toast} />}
    </div>
  );
}
