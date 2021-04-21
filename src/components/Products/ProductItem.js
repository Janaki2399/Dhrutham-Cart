import { CardItemContent } from "../CardItemContent";
import { WishListButton } from "./WishListButton";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
export function ProductItem({ productItem }) {
  const navigate=useNavigate();
  return (
    <div className="card card-shadow card-vertical "
    >
       <Link to={`/products/${productItem._id}`} className="anchor-link" >
          <div>
          <ProductImage item={productItem} />
          <CardItemContent item={productItem} />
          </div>
      </Link>
      <AddToCartButton item={productItem} />
      {productItem.inStock && <WishListButton productItem={productItem} />}
    
    </div>
  );
}
