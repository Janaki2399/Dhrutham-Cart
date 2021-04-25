import "./App.css";
import { useEffect } from "react";
import { useDataContext } from "./data-context";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Products } from "./components/Products/Products";
import { ProductDetails } from "./components/ProductDetails";
import { WishList } from "./components/Wishlist/WishList";
import { Cart } from "./components/Cart/Cart";
import { Toast } from "./components/Toast";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { useLoaderToast } from "./loader-toast-context";
import { Login } from "./components/Login/Login";
import { useAuth } from "./auth-context";

export default function App() {
  const { fetchAndAddToList, state } = useDataContext();

  const { toast } = useLoaderToast();

  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "https://restPractice.janaki23.repl.co/cart",
  //     dispatchType: "ADD_TO_CART",
  //     list: "cart"
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "https://restPractice.janaki23.repl.co/wishlist",
  //     dispatchType: "ADD_TO_WISHLIST",
  //     list: "wishlist"
  //   });
  // }, []);
  // useEffect(() => {
  //   fetchAndAddToList({
  //     url: "/api/products",
  //     dispatchType: "ADD_TO_PRODUCTS",
  //     list: "products"
  //   });
  // }, []);
  // useEffect(()=>{
  //   console.log("app is loaded");
  // },[])
  useEffect(() => {
    fetchAndAddToList({
      url: "https://restPractice.janaki23.repl.co/cart/summary",
      dispatchType: "SET_CART_COUNT",
      list: "cartLength"
    });
  }, []);
  useEffect(() => {
    fetchAndAddToList({
      url: "https://restPractice.janaki23.repl.co/wishlist/summary",
      dispatchType: "SET_WISHLIST_COUNT",
      list: "wishlistLength"
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
