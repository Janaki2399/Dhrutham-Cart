import { API_STATUS } from "../../constants";
import { ProductItem } from "./ProductItem";
export const ProductList = ({ filteredData, status }) => {
  if (status === API_STATUS.LOADING) {
    return (
      <div className="center-page-align">
        <div className="loader" />
      </div>
    );
  }
  return (
    <div id="products-div" className="grid-col-3 margin-3 product-list-margin">
      {filteredData.map((item) => {
        return <ProductItem key={item._id} productItem={item} />;
      })}
    </div>
  );
};
