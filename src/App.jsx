import "./App.css";
import { useEffect } from "react";
import { useDataContext } from "./contexts/data-context";
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
import axios from "axios";
import { useWishlistContext } from "./contexts/wishlist-context";
import { useCartContext } from "./contexts/cart-context";

export default function App() {
  const { fetchFromWishlist, wishlistState } = useWishlistContext();
  const { fetchFromCart } = useCartContext();
  const { token } = useAuth();
  const { toast } = useLoaderToast();
  // console.log({ wishlistState });

  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "https://dhrutham-cart-backend.herokuapp.com/cart/summary",
  //     dispatchType: "SET_CART_COUNT",
  //     list: "cartLength",
  //   });
  // }, []);
  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "https://dhrutham-cart-backend.herokuapp.com/wishlist/summary",
  //     dispatchType: "SET_WISHLIST_COUNT",
  //     list: "wishlistLength",
  //   });
  // }, []);
  useEffect(() => {
    if (token) {
      fetchFromWishlist();
      fetchFromCart();
    }
  }, [token]);
  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "https://dhrutham-cart-backend.herokuapp.com/cart",
  //     dispatchType: "ADD_TO_CART",
  //     list: "cart",
  //   });
  // }, [token]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories/:categoryId" element={<Products />} />
        <Route path="/" element={<Categories />} />
        <PrivateRoute path={"/wishlist"} element={<WishList />} />
        <PrivateRoute path={"/cart"} element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>

      {toast !== "" && <Toast message={toast} />}
    </div>
  );
}
