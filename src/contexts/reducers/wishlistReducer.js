export function wishlistReducer(state, action) {
  switch (action.type) {
    case "SET_WISHLIST":
      return { wishlist: action.payload.wishlist };
    case "REMOVE_FROM_WISHLIST":
      return {
        wishlist: {
          ...state.wishlist,
          list: state.wishlist.list?.filter(
            (item) => item.product._id !== action.payload._id
          ),
        },
      };
    case "RESET":
      return {
        wishlist: {},
      };
  }
}
