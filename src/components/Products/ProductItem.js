import { CardItemContent } from "../CardItemContent";
import { WishListButton } from "./WishListButton";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import { useDataContext } from "../../data-context";
export function ProductItem({ productItem }) {
  const navigate=useNavigate();
  const {addToListAndServer}=useDataContext();
  function addToCart(){
    addToListAndServer({
      url: "https://restPractice.janaki23.repl.co/cart",
      list: "cartItem",
      postItem: {
        "product":{"_id":productItem._id},
        "quantity":1
      },
      dispatchType: "CHANGE_CART_STATE",
      toastItem: "cart"
    })
  }

  return (
    <div className="card card-shadow card-vertical "
    >
       <Link to={`/products/${productItem._id}`} className="anchor-link" >
          <div>
          <ProductImage item={productItem} />
          <CardItemContent item={productItem} />
          </div>
      </Link>
      <AddToCartButton item={productItem} addToCart={addToCart}/>
      {productItem.inStock && <WishListButton productItem={productItem} />}
    
    </div>
  );
}
