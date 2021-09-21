import { API_STATUS } from "../constants";

export function productListReducer(state, action) {
  switch (action.type) {
    case "PRODUCT_LIST_FETCH_INIT":
      return {
        ...state,
        status: API_STATUS.LOADING,
      };

    case "SET_PRODUCT_LIST":
      return {
        ...state,
        status: API_STATUS.SUCCESS,
        productList: action.payload.productList,
      };

    case "PRODUCT_LIST_FETCH_FAILED":
      return {
        ...state,
        status: API_STATUS.ERROR,
        errorMessage: action.payload.errorMessage,
      };

    default:
      throw new Error("Invalid action type");
  }
}
