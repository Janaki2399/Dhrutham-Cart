export function wishlistReducer(state, action) {
  switch (action.type) {
    case "SET_WISHLIST":
      return {
        _id: action.payload._id,
        list: action.payload.list,
        userId: action.payload.userId,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        list: state.list?.filter(
          (item) => item.product._id !== action.payload._id
        ),

        // wishlist: {
        //   ...state.wishlist,
        //   list: state.wishlist.list?.filter(
        //     (item) => item.product._id !== action.payload._id
        //   ),
        // },
      };
    case "RESET":
      return {
        _id: "",
        list: [],
        userId: "",
      };
  }
}
