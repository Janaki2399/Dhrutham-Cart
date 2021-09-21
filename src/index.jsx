import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { LoaderToastProvider } from "./contexts/loader-toast-context";
import { AuthProvider } from "./contexts/auth-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { CartProvider } from "./contexts/cart-context";
import { CategoryProvider } from "./contexts/category-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoaderToastProvider>
          <CartProvider>
            <WishlistProvider>
              <CategoryProvider>
                <App />
              </CategoryProvider>
            </WishlistProvider>
          </CartProvider>
        </LoaderToastProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
