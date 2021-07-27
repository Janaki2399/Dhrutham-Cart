import { API_STATUS } from "../constants";
import { initialState } from "../contexts/wishlist-context";

export function wishlistReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_FETCH_STATUS":
      return {
        ...state,
        statuses: { ...state.statuses, fetchStatus: API_STATUS.LOADING },
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        statuses: { ...state.statuses, fetchStatus: API_STATUS.SUCCESS },
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        statuses: { ...state.statuses, fetchStatus: API_STATUS.ERROR },
      };

    case "SET_WISHLIST":
      return {
        _id: action.payload._id,
        list: action.payload.list,
        userId: action.payload.userId,
        statuses: { ...state.statuses, fetchStatus: API_STATUS.SUCCESS },
      };

    case "INITIALIZE_REMOVE_STATUS":
      return {
        ...state,
        statuses: {
          ...state.statuses,
          removeFromWishlistStatus: API_STATUS.LOADING,
        },
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        list: state.list?.filter(
          (item) => item.product._id !== action.payload._id
        ),
        statuses: {
          ...state.statuses,
          removeFromWishlistStatus: API_STATUS.SUCCESS,
        },
      };
    case "RESET":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
}
