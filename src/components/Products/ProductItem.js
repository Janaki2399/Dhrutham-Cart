import { CardItemContent } from "../CardItemContent";
import { WishListButton } from "./WishListButton";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImage } from "./ProductImage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDataContext } from "../../data-context";
export function ProductItem({ productItem }) {
  const navigate = useNavigate();
  const { addToListAndServer ,removeFromListAndServer} = useDataContext();
  function addToCart() {
    addToListAndServer({
      url: "https://restPractice.janaki23.repl.co/cart",
      list: "cartItem",
      postItem: {
        product: { _id: productItem._id },
        quantity: 1,
      },
      dispatchType: "CHANGE_CART_STATE",
       toastItem: "cart",
    });
  }

  function addToWishlist() {
    addToListAndServer({
      url: "https://restPractice.janaki23.repl.co/wishlist",
      list: "wishlistItem",
      postItem: {
        product: { _id: productItem._id },
      },
      dispatchType: "CHANGE_WISHLIST_STATE",
      toastItem: "wishlist",
    });
  }

  function removeFromWishlist(){
    removeFromListAndServer({
      url: `https://restPractice.janaki23.repl.co/wishlist/${productItem._id}`,
      itemId: productItem._id,
      dispatchType: "CHANGE_WISHLIST_STATE",
      list:"wishlist",
      toastMessage: "removed from wishlist"
      });
  }
  return (
    <div className="card card-shadow card-vertical ">
      <Link to={`/products/${productItem._id}`} className="anchor-link">
        <div>
          <ProductImage
            image={productItem.image}
            inStock={productItem.inStock}
          />
          <CardItemContent item={productItem} />
        </div>
      </Link>
      <AddToCartButton
        isAddedToCart={productItem.isAddedToCart}
        inStock={productItem.inStock}
        addToCart={addToCart}
      />
      {productItem.inStock && (
        <WishListButton
          isWishListed={productItem.isWishListed}
          addToWishlist={addToWishlist}
          removeFromWishlist={removeFromWishlist}
        />
      )}
    </div>
  );
}
