import { API_STATUS } from "../constants";
import { initialState } from "../contexts/cart-context";

export function cartReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_FETCH_STATUS":
      return {
        ...state,
        statuses: { ...state.statuses, fetchStatus: API_STATUS.LOADING },
      };

    case "SET_CART":
      return {
        _id: action.payload._id,
        list: action.payload.list,
        userId: action.payload.userId,
        statuses: { ...state.statuses, fetchStatus: API_STATUS.SUCCESS },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        list: state.list?.filter(
          (item) => item.product._id !== action.payload._id
        ),
      };

    case "UPDATE_CART_ITEM_QUANTITY":
      return {
        ...state,
        list: state.list?.map((item) =>
          item.product._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "RESET":
      return initialState;

    default:
      throw new Error("Invalid action type");
  }
}
