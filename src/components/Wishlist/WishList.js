import { useDataContext } from "../../data-context";
import { WishListItem } from "./WishListItem";
import {useEffect} from "react";
export function WishList() {
  const { state,fetchAndAddToList } = useDataContext();
  useEffect(() => {
      fetchAndAddToList({
        url: "https://restPractice.janaki23.repl.co/wishlist",
        dispatchType: "ADD_TO_WISHLIST",
        list: "wishlist"
      });
    }, []);
  return (
    <div className="grid-col-3" style={{ margin: "4rem" }}>
      {state.wishList.map((item) => {
        return <WishListItem key={item.id} wishListItem={item} />;
      })}
    </div>
  );
}