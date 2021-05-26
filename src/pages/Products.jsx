import { useDataContext } from "../contexts/data-context";
import { ProductItem } from "../components/Products/ProductItem";
import { Filter } from "../components/Filter/Filter";
import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { getSortedData, getFilteredData } from "../util";
import { FilterMobile } from "../components/Filter/FilterMobile";
import axios from "axios";
import { sortFilterReducer } from "../sortFilterReducer";

export function Products() {
  const { categoryId } = useParams();
  const [productList, setProductList] = useState([]);
  const [sortFilterState, sortFilterDispatch] = useReducer(sortFilterReducer, {
    includeOutOfStock: true,
    fastDelivery: false,
    sortBy: null,
  });

  useEffect(() => {
    (async function () {
      try {
        const { data, status } = await axios.get(
          `https://dhrutham-cart-backend.herokuapp.com/categories/${categoryId}`
        );

        if (status == 200) {
          setProductList(data.products);
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);
  const [filterMobile, setFilterMobile] = useState(false);

  const sortedData = getSortedData(productList, sortFilterState.sortBy);

  const filteredData = getFilteredData(sortedData, {
    includeOutOfStock: sortFilterState.includeOutOfStock,
    fastDelivery: sortFilterState.fastDelivery,
  });

  return (
    <div className="grid">
      <Filter
        filterMobile={filterMobile}
        sortFilterState={sortFilterState}
        sortFilterDispatch={sortFilterDispatch}
      />
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
      {filterMobile && (
        <FilterMobile
          setFilterMobile={setFilterMobile}
          sortFilterDispatch={sortFilterDispatch}
        />
      )}
    </div>
  );
}
