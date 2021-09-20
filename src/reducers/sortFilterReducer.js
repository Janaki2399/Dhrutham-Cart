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

    case "OFFER_ONLY":
      return {
        ...state,
        offerOnly: !state.offerOnly,
      };

    case "SORT_BY_RATING":
      return {
        ...state,
        ratings:state.ratings.includes(action.payload.rating)?
                state.ratings.filter((rating)=>rating!==action.payload.rating):
                state.ratings.concat(action.payload.rating)
      }
   
    case "CLEAR_FILTER":
      return {
        includeOutOfStock: false,
        fastDelivery: false,
        sortBy: null,
        ratings:[],
        offerOnly: false,
      };

    default:
      throw new Error("Invalid action type");
  }
};
