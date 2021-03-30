export function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_TO_PRODUCTS":
      const productListWithUpdatedWishListState = updateProductListWithWishListState(
        state.wishList,
        action.payload
      );

      const productListWithUpdatedCartState = updateProductListWithCartState(
        state.cartList,
        productListWithUpdatedWishListState
      );
      return { ...state, productList: productListWithUpdatedCartState };

    case "ADD_TO_WISHLIST":
      return { ...state, wishList: action.payload };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.id !== action.payload.id
        ),
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isWishListed: false }
            : item
        )
      };

    case "APPEND_ITEM_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat(action.payload),
        productList: state.productList.map((item) =>
          item.id === action.payload.id ? { ...item, isWishListed: true } : item
        )
      };

    case "UPDATE_WISHLIST_STATE_OF_PRODUCT_ITEM":
      return {
        ...state,
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isWishListed: action.wishListState }
            : item
        )
      };

    case "ADD_TO_CART":
      return { ...state, cartList: action.payload };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.id !== action.payload.id
        ),
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isAddedToCart: false }
            : item
        )
      };

    case "INCREASE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "APPEND_ITEM_TO_CART":
      return {
        ...state,
        cartList: state.cartList.concat(action.payload),
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isAddedToCart: true }
            : item
        )
      };

    case "UPDATE_CART_STATE_OF_PRODUCT_ITEM":
      return {
        ...state,
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isAddedToCart: action.cartState }
            : item
        )
      };

    case "SORT_BY":
      return {
        ...state,
        sortFilterStates: { ...state.sortFilterStates, sortBy: action.payload }
      };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        sortFilterStates: {
          ...state.sortFilterStates,
          includeOutOfStock: !state.sortFilterStates.includeOutOfStock
        }
      };
    case "FAST_DELIVERY":
      return {
        ...state,
        sortFilterStates: {
          ...state.sortFilterStates,
          fastDelivery: !state.sortFilterStates.fastDelivery
        }
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        sortFilterStates: {
          includeOutOfStock: false,
          fastDelivery: false,
          sortBy: null
        }
      };

    case "SHOW_COMPONENT":
      return {
        ...state,
        showComponent: action.payload
      };
    default:
      return state;
  }
}
function checkIfItemExistsInList(list, productItem) {
  return list.find((item) => item.id === productItem.id) !== undefined;
}
function updateProductListWithWishListState(wishList, productList) {
  return productList.map((productItem) => {
    if (checkIfItemExistsInList(wishList, productItem)) {
      return { ...productItem, isWishListed: true };
    }
    return { ...productItem, isWishListed: false };
  });
}

function updateProductListWithCartState(cartList, productList) {
  return productList.map((productItem) => {
    if (checkIfItemExistsInList(cartList, productItem)) {
      return { ...productItem, isAddedToCart: true };
    }
    return { ...productItem, isAddedToCart: false };
  });
}
