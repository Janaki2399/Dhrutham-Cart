import { useDataContext } from "../contexts/data-context";
import { WishListItem } from "../components/Wishlist/WishListItem";
import { useEffect, useState } from "react";

export function WishList() {
  const { state, fetchAndAddToList } = useDataContext();
  console.log(state.wishList);
  // useEffect(() => {
  //     fetchAndAddToList({
  //       url: "https://dhrutham-cart-backend.herokuapp.com/wishlist",
  //       dispatchType: "ADD_TO_WISHLIST",
  //       list: "wishlist"
  //     });
  //   }, []);

  return (
    <div className="grid-col-3" style={{ margin: "4rem" }}>
      {state.wishList.map(({ _id, ...product }) => {
        return (
          <WishListItem key={_id} wishListId={_id} product={{ ...product }} />
        );
      })}
    </div>
  );
}
