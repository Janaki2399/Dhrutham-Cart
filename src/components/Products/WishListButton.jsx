import { useAuth } from "../../contexts/auth-context";
import { Navigate, useNavigate } from "react-router";
import { useProduct } from "../../hooks/useProduct";
import { useDataContext } from "../../contexts/data-context";
import { useLoaderToast } from "../../contexts/loader-toast-context";
import { useWishlistContext } from "../../contexts/wishlist-context";
import axios from "axios";

export function WishListButton({
  isWishListed,
  productId,
  // addToWishlist,
  // removeFromWishlist,
}) {
  const { isUserLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const { showToast, hideToast } = useLoaderToast();
  const { wishlistState, wishlistDispatch, addToWishlist, removeFromWishlist } =
    useWishlistContext();

  const isItemInWishlist = () => {
    return (
      wishlistState.list?.find((item) => item.product._id === productId) !==
      undefined
    );
  };

  // const addToWishlist = async () => {
  //   try {
  //     showToast("Adding to Wishlist");
  //     const { data, status } = await axios.post(
  //       "https://dhrutham-cart-backend.herokuapp.com/wishlist",
  //       {
  //         _id: productId,
  //       },
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     console.log({ data });
  //     if (status === 200) {
  //       dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlistItem });
  //       showToast("Added to Wishlist");
  //       hideToast();
  //     }
  //   } catch (error) {
  //     hideToast();
  //     // if (error.response.status !== 409) {
  //     //   alert(error);
  //     // }
  //     alert(error);
  //   }
  // };
  // const removeFromWishlist = async () => {
  //   try {
  //     showToast("Removing from Wishlist");
  //     const { data, status } = await axios.delete(
  //       `https://dhrutham-cart-backend.herokuapp.com/wishlist/${productId}`,
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     console.log({ data });
  //     if (status === 200) {
  //       dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  //       showToast("Removed from Wishlist");
  //       hideToast();
  //     }
  //   } catch (error) {
  //     hideToast();
  //     if (error.response.status !== 409) {
  //       alert(error);
  //     }
  //     // alert(error);
  //   }
  // };
  return (
    <div className="card-icon-topRight">
      <button
        className="icon-btn"
        onClick={() => {
          if (token) {
            !isItemInWishlist()
              ? addToWishlist(productId)
              : removeFromWishlist(productId);
          } else {
            navigate("/login");
          }
        }}
      >
        <span
          className={
            isItemInWishlist()
              ? "material-icons-outlined icon-color-primary icon-size-36"
              : "material-icons-outlined icon-color-gray icon-size-36"
          }
        >
          favorite
        </span>
      </button>
    </div>
  );
}
