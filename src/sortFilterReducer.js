export const sortFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock,
      };
    case "FAST_DELIVERY":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };

    case "CLEAR_FILTER":
      return {
        includeOutOfStock: false,
        fastDelivery: false,
        sortBy: null,
      };
  }
};
