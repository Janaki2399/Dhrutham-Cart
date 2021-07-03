import { useParams } from "react-router";
import { WishListButton } from "../components/Products/WishListButton";
import { AddToCartButton } from "../components/Products/AddToCartButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_STATUS } from "../constants";

export function ProductDetails() {
  const { productId } = useParams();

  const [product, setProductItem] = useState({});

  const [status, setStatus] = useState(API_STATUS.IDLE);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        setStatus(API_STATUS.LOADING);
        const { data, status } = await axios.get(
          `https://dhrutham-cart-backend.herokuapp.com/products/${productId}`
        );

        if (status === 200) {
          setStatus(API_STATUS.SUCCESS);
          setProductItem(data.product);
        }
      } catch (error) {
        setStatus(API_STATUS.ERROR);
        alert(error.message);
      }
    })();
  }, [productId]);

  if ((status === API_STATUS.LOADING) | (status === API_STATUS.IDLE)) {
    return <div className="loader center-page-align" />;
  }
  return (
    <div className="details-grid center-page-align">
      <div className="product-image gray-border relative-position">
        <img
          src={product.image}
          alt="product"
          height="100%"
          style={{ height: "26rem", width: "20rem" }}
        />
        <WishListButton productId={productId} />
      </div>
      <div className="product-details">
        <div className="card-title">{product.name}</div>
        {product.subtitle && (
          <div className="padding-top text-gray">{product.subtitle} </div>
        )}
        <div className="font-size-3 padding-top">
          Rs {product.price}{" "}
          {product.offer && (
            <span className="text-color-primary font-size-4">
              ({product.offer}% OFF)
            </span>
          )}
        </div>
        <div className="font-size-4 flex-horizontal bg-primary text-center margin-top rating">
          {product.rating}
          <span class=" material-icons-outlined icon-size-18 ">star</span>
        </div>
        {product.color && (
          <div className="padding-top">Color : {product.color} </div>
        )}
        {product.brand && (
          <div className="padding-top text-gray">
            Sold by <span className="font-bold-1">{product.brand}</span>{" "}
          </div>
        )}
        <div className="padding-top">
          {product.inStock ? (
            <span className="text-green font-bold-1">In Stock</span>
          ) : (
            "OUT OF STOCK"
          )}
        </div>
        <div className="margin-top text-gray">
          {" "}
          Pay on Delivery might be available
        </div>
      </div>
      <AddToCartButton inStock={product.inStock} productId={productId} />
    </div>
    // <div className="center-align-ver-hor flex-column center-page-ver-hor">
    //   <div
    //     className="card card-shadow card-horizontal card-content-padding"
    //     style={{ width: "90%" }}
    //   >
    //     <div className="relative-position">
    //       <img class="card-img" src={product.image} alt="card-img" />
    //       <WishListButton productId={productId} />
    //       <AddToCartButton inStock={product.inStock} productId={productId} />
    //     </div>
    //     <div
    //       class="card-content-padding text-start card-vertical"
    //       style={{ width: "60%" }}
    //     >
    //       <div>
    //         <div className="card-title">{product.name}</div>
    //         <div className="font-size-3">Rs {product.price}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
