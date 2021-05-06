import { useDataContext } from "../contexts/data-context";
import { ProductItem } from "../components/Products/ProductItem";
import { Filter } from "../components/Filter";
import {useState,useEffect} from "react";
import {useParams} from "react-router" ;

export const Products = () => {
  const { categoryId } = useParams();
  const {
    state: {
      productList,
      sortFilterStates: { includeOutOfStock, fastDelivery, sortBy }
    },
    dispatch,fetchAndAddToList
  } = useDataContext();

  useEffect(() => {
    fetchAndAddToList({
      url: `https://dhrutham-cart-backend.herokuapp.com/categories/${categoryId}`,
      dispatchType: "ADD_TO_PRODUCTS",
      list: "products"
    });
  }, []);
  const [filterMobile,setFilterMobile]=useState(false);

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
      .filter(({ isFastDelivery }) =>
        filterType.fastDelivery ? isFastDelivery : true
      );
  }

  const sortedData = getSortedData(productList, sortBy);

  const filteredData = getFilteredData(sortedData, {
    includeOutOfStock,
    fastDelivery
  });

  return (
    <div className="grid">
     <Filter filterMobile={filterMobile}/>
      {!filterMobile && (<div id="products-div"className="grid-col-3" style={{ margin: "2rem" }}>
        {filteredData.map((item) => {
          return  <ProductItem key={item._id} productItem={item} />;
        })}
      </div>)}
     {!filterMobile &&<div className="filter-mobile cursor-pointer border-top gray-border"
      onClick={()=>{setFilterMobile((prev)=>!prev)}}  >
        Filter
      </div>}
     
      {filterMobile && <div className="close-apply-filter cursor-pointer"
        style={{display:"flex"}}>
        <div className="border-right gray-border full-height align-center" style={{width:"50%"}}
        onClick={()=>{setFilterMobile((prev)=>!prev);
          dispatch({ type: "CLEAR_FILTER" });
        }}
        >Close</div>
        <div className="full-height align-center"style={{width:"50%"}}onClick={()=>{setFilterMobile((prev)=>!prev)}}>Apply</div>
      </div>}
    </div>
  );
}
