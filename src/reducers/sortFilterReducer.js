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

    case "RATING_ABOVE_FOUR":
      return {
        ...state,
        ratings: { ...state.ratings, aboveFour: !state.ratings.aboveFour },
      };
    case "RATING_ABOVE_THREE":
      return {
        ...state,
        ratings: { ...state.ratings, aboveThree: !state.ratings.aboveThree },
      };
    case "RATING_ABOVE_TWO":
      return {
        ...state,
        ratings: { ...state.ratings, aboveTwo: !state.ratings.aboveTwo },
      };
    case "RATING_ABOVE_ONE":
      return {
        ...state,
        ratings: { ...state.ratings, aboveOne: !state.ratings.aboveOne },
      };
    case "CLEAR_FILTER":
      return {
        includeOutOfStock: false,
        fastDelivery: false,
        sortBy: null,
        ratings: {
          aboveFour: false,
          aboveThree: false,
          aboveTwo: false,
          aboveOne: false,
        },
        offerOnly: false,
      };

    default:
      throw new Error("Invalid action type");
  }
};
