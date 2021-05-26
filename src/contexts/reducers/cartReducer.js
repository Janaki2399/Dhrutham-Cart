export function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return { cart: action.payload.cart };
    case "REMOVE_FROM_CART":
      return {
        cart: {
          ...state.cart,
          list: state.cart.list?.filter(
            (item) => item.product._id !== action.payload._id
          ),
        },
      };
    case "UPDATE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        ),
      };
    case "RESET":
      return {
        wishlist: {},
      };
  }
}
