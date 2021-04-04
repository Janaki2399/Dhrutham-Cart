import { useDataContext } from "../../data-context";
import { ProductItem } from "./ProductItem";
import { Filter } from "../Filter";

export function Products() {
  const {
    state: {
      productList,
      sortFilterStates: { includeOutOfStock, fastDelivery, sortBy }
    },
    dispatch
  } = useDataContext();

  function getSortedData(productList, sortBy) {
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return [...productList].sort((a, b) => b.price - a.price);
    } else if (sortBy === "PRICE_LOW_TO_HIGH") {
      return [...productList].sort((a, b) => a.price - b.price);
    } else return productList;
  }

  function getFilteredData(productList, filterType) {
    return productList
      .filter(({ inStock }) => (filterType.includeOutOfStock ? true : inStock))
      .filter(({ fastDelivery }) =>
        filterType.fastDelivery ? fastDelivery : true
      );
  }

  const sortedData = getSortedData(productList, sortBy);

  const filteredData = getFilteredData(sortedData, {
    includeOutOfStock,
    fastDelivery
  });

  return (
    <div class="grid">
      <Filter />
      <div id="products-div"className="grid-col-3" style={{ margin: "2rem" }}>
        {filteredData.map((item) => {
          return <ProductItem key={item.id} productItem={item} />;
        })}
      </div>
      {/* <div class="filter-mobile show-sidebar" onClick={()=>{
        dispatch({type:"SHOW_COMPONENT",payload:"filter"})
      }}>
        FILTER
      </div> */}
    </div>
  );
}
