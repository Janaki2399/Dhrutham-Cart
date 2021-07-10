import { Filter } from "../components/Filter/Filter";
import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { getSortedData, getFilteredData } from "../util";
import { FilterMobile } from "../components/Filter/FilterMobile";
import { sortFilterReducer } from "../reducers/sortFilterReducer";
import { productListReducer } from "../reducers/productListReducer";
import { ProductList } from "../components/Products/ProductList";
import { API_STATUS } from "../constants";
import axios from "axios";
import { API_URL } from "../constants";

export function Products() {
  const { categoryId } = useParams();

  const [productListState, productListDispatch] = useReducer(
    productListReducer,
    {
      productList: [],
      status: API_STATUS.IDLE,
      errorMessage: "",
    }
  );

  const [sortFilterState, sortFilterDispatch] = useReducer(sortFilterReducer, {
    includeOutOfStock: true,
    fastDelivery: false,
    ratings: {
      aboveFour: false,
      aboveThree: false,
      aboveTwo: false,
      aboveOne: false,
    },
    offerOnly: false,
    sortBy: null,
  });

  useEffect(() => {
    (async function () {
      try {
        productListDispatch({ type: "PRODUCT_LIST_FETCH_INIT" });
        const { data, status } = await axios.get(
          `${API_URL}/categories/${categoryId}`
        );

        if (status === 200) {
          productListDispatch({
            type: "SET_PRODUCT_LIST",
            payload: { productList: data.products },
          });
        }
      } catch (error) {
        productListDispatch({ type: "PRODUCT_LIST_FETCH_FAILED" });
      }
    })();
  }, [categoryId]);

  const [filterMobile, setFilterMobile] = useState(false);

  const sortedData = getSortedData(
    productListState.productList,
    sortFilterState.sortBy
  );

  const filteredData = getFilteredData(sortedData, {
    includeOutOfStock: sortFilterState.includeOutOfStock,
    fastDelivery: sortFilterState.fastDelivery,
    offerOnly: sortFilterState.offerOnly,
    ratingsAboveFour: sortFilterState.ratings.aboveFour,
    ratingsAboveThree: sortFilterState.ratings.aboveThree,
    ratingsAboveTwo: sortFilterState.ratings.aboveTwo,
    ratingsAboveOne: sortFilterState.ratings.aboveOne,
  });

  return (
    <div className="grid">
      <Filter
        filterMobile={filterMobile}
        sortFilterState={sortFilterState}
        sortFilterDispatch={sortFilterDispatch}
      />

      <div>
        <ProductList
          filteredData={filteredData}
          status={productListState.status}
        />
        {!filterMobile && (
          <div
            className="filter-mobile cursor-pointer border-top gray-border"
            onClick={() => {
              setFilterMobile((prev) => !prev);
            }}
          >
            Filter
          </div>
        )}
      </div>

      {filterMobile && (
        <FilterMobile
          setFilterMobile={setFilterMobile}
          sortFilterDispatch={sortFilterDispatch}
        />
      )}
    </div>
  );
}
