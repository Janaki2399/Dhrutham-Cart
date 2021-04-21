import { useParams } from "react-router"
import { useDataContext } from "../data-context";
import {WishListButton} from "./Products/WishListButton"
import { AddToCartButton } from "./Products/AddToCartButton";
import { useState,useEffect } from "react";
import axios from "axios";

export function ProductDetails(){
    const {productId}=useParams();
    const {state,dispatch}=useDataContext();
    const [product,setProductItem]=useState({});

    // function findSelectedProduct(productId,productData){
    //     return productData.find((item)=>item.id===productId)
    // }

    // const product=findSelectedProduct(productId,state.productList);

    useEffect(() => {
      ( async function(){ 
        const {data}=await axios.get(`https://restPractice.janaki23.repl.co/products/${productId}`);
        setProductItem(data.product);
        }
      )()
    }, []);
    console.log(product);
    return(
        <div className="center-align flex-column" style={{height:"35rem",justifyContent:"center"}} >
        <div
        className="card card-shadow card-horizontal card-content-padding"
        style={{ width: "90%" }}
        >
        <div style={{width:"25rem",position:"relative"}}>
            <img class="card-img" src={product.image} alt="card-img"  />
            <WishListButton productItem={product} />
            <AddToCartButton item={product}/>
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
    )
}