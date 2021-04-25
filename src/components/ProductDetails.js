import { useParams } from "react-router";
import { useDataContext } from "../data-context";
import { WishListButton } from "./Products/WishListButton";
import { AddToCartButton } from "./Products/AddToCartButton";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductDetails() {
  const { productId } = useParams();
  const {dispatch}=useDataContext();
  const [product, setProductItem] = useState({});

  // function findSelectedProduct(productId,productData){
  //     return productData.find((item)=>item.id===productId)
  // }

  // const product=findSelectedProduct(productId,state.productList);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://restPractice.janaki23.repl.co/products/${productId}`
      );
      setProductItem(data.product);
    })();
  }, []);

  async function addToCart() {
    const {
      status,
    } = await axios.post("https://restPractice.janaki23.repl.co/cart", {
      product: { _id: productId },
      quantity: 1,
    });
    if (status === 200) {
      setProductItem((product) => ({ ...product, isAddedToCart: true }));
      dispatch({type:"INCREMENT_CART_COUNT"})
    }
  }
  async function addToWishlist() {
    const {
      status,
    } = await axios.post("https://restPractice.janaki23.repl.co/wishlist", {
      product: { _id: productId },
    });
    if (status === 200) {
      setProductItem((product) => ({ ...product, isWishListed: true }));
      dispatch({type:"INCREMENT_WISHLIST_COUNT"})
    }
  }
   
  async function removeFromWishlist(){
    const {
      status,
    } = await axios.delete(`https://restPractice.janaki23.repl.co/wishlist/${productId}`, {
      product: { _id: productId },
    });
    if (status === 200) {
      setProductItem((product) => ({ ...product, isWishListed: false }));
      dispatch({type:"DECREMENT_WISHLIST_COUNT"})
    }
  }
  return (
    <div className="center-align-ver-hor flex-column center-page-ver-hor">
      <div
        className="card card-shadow card-horizontal card-content-padding"
        style={{ width: "90%" }}
      >
        <div className="relative-position">
          <img class="card-img" src={product.image} alt="card-img" />
          <WishListButton isWishListed={product.isWishListed}  addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist}/>
          <AddToCartButton isAddedToCart={product.isAddedToCart} inStock={product.inStock} addToCart={addToCart} />
        </div>
        <div
          class="card-content-padding text-start card-vertical"
          style={{ width: "60%" }}
        >
          <div>
            <div className="card-title">{product.name}</div>
            <div className="font-size-3">Rs {product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
