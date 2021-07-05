import { API_STATUS } from "../constants";

export function categoryReducer(state, action) {
  switch (action.type) {
    case "CATEGORIES_FETCH_INIT":
      return {
        ...state,
        status: API_STATUS.LOADING,
      };

    case "CATEGORIES_FETCH_SUCCESS":
      return {
        ...state,
        status: API_STATUS.SUCCESS,
        categories: action.payload.categories,
      };

    case "CATEGORIES_FETCH_FAILED":
      return {
        ...state,
        status: API_STATUS.ERROR,
        errorMessage: action.payload.errorMessage,
      };

    default:
      throw new Error("Invalid action type");
  }
}
