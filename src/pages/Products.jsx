import { useDataContext } from "../contexts/data-context";
import { ProductItem } from "../components/Products/ProductItem";
import { Filter } from "../components/Filter/Filter";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSortedData, getFilteredData } from "../util";
import { FilterMobile } from "../components/Filter/FilterMobile";

export function Products() {
  const { categoryId } = useParams();
  const {
    state: {
      productList,
      sortFilterStates: { includeOutOfStock, fastDelivery, sortBy },
    },
    dispatch,
    fetchAndAddToList,
  } = useDataContext();

  useEffect(() => {
    fetchAndAddToList({
      url: `https://dhrutham-cart-backend.herokuapp.com/categories/${categoryId}`,
      dispatchType: "ADD_TO_PRODUCTS",
      list: "products",
    });
  }, []);
  const [filterMobile, setFilterMobile] = useState(false);

  const sortedData = getSortedData(productList, sortBy);

  const filteredData = getFilteredData(sortedData, {
    includeOutOfStock,
    fastDelivery,
  });

  return (
    <div className="grid">
      <Filter filterMobile={filterMobile} />
      {!filterMobile && (
        <div>
          <div
            id="products-div"
            className="grid-col-3"
            style={{ margin: "2rem" }}
          >
            {filteredData.map((item) => {
              return <ProductItem key={item._id} productItem={item} />;
            })}
          </div>
          <div
            className="filter-mobile cursor-pointer border-top gray-border"
            onClick={() => {
              setFilterMobile((prev) => !prev);
            }}
          >
            Filter
          </div>
        </div>
      )}
      {filterMobile && <FilterMobile setFilterMobile={setFilterMobile} />}
    </div>
  );
};
