import { useDataContext } from "../../data-context";
import { WishListItem } from "./WishListItem";

export function WishList() {
  const { state } = useDataContext();

  return (
    <div className="grid-col-3" style={{ margin: "2rem" }}>
      {state.wishList.map((item) => {
        return <WishListItem key={item.id} wishListItem={item} />;
      })}
    </div>
  );
}
