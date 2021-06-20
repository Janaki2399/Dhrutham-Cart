import { useParams } from "react-router";
import { WishListButton } from "../components/Products/WishListButton";
import { AddToCartButton } from "../components/Products/AddToCartButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { APIStatus } from "../constants";
export function ProductDetails() {
  const { productId } = useParams();

  const [product, setProductItem] = useState({});
  const [status, setStatus] = useState(APIStatus.IDLE);
  const [error, setError] = useState("");
  useEffect(() => {
    (async function () {
      try {
        setStatus(APIStatus.LOADING);
        const { data, status } = await axios.get(
          `https://dhrutham-cart-backend.herokuapp.com/products/${productId}`
        );

        if (status == 200) {
          setStatus(APIStatus.SUCCESS);
          setProductItem(data.product);
        }
      } catch (error) {
        setStatus(APIStatus.ERROR);
        alert(error.message);
      }
    })();
  }, []);
  if ((status === APIStatus.LOADING) | (status === APIStatus.IDLE)) {
    return <div className="loader center-page-align" />;
  }
  return (
    <div className="center-align-ver-hor flex-column center-page-ver-hor">
      <div
        className="card card-shadow card-horizontal card-content-padding"
        style={{ width: "90%" }}
      >
        <div className="relative-position">
          <img class="card-img" src={product.image} alt="card-img" />
          <WishListButton productId={productId} />
          <AddToCartButton inStock={product.inStock} productId={productId} />
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
