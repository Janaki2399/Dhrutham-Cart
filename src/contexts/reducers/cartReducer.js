export function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return {
        _id: action.payload._id,
        list: action.payload.list,
        userId: action.payload.userId,
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
      return {
        _id: "",
        list: [],
        userId: "",
      };
  }
}
