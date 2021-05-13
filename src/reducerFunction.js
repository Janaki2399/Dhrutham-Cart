export function reducerFunction(state, action) {
  switch (action.type) {

    case "SET_CART_COUNT":
      return {
        ...state,
        cartLength:action.payload
      }
    
    case "SET_WISHLIST_COUNT":
      return {
        ...state,
        wishlistLength:action.payload
      }

    case "ADD_TO_PRODUCTS":
      return { ...state, 
        productList: action.payload }
     
    case "ADD_TO_WISHLIST":
      return { ...state, wishList: action.payload}
       
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.product._id !== action.payload
        ),
      };

    case "APPEND_ITEM_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat(action.payload)
        
      };

    case "CHANGE_WISHLIST_STATE":
      return {
        ...state,
        productList: state.productList.map((item) =>
        item._id === action.payload ? { ...item, isWishListed: !item.isWishListed } : item
      ),
      // wishlistLength:state.wishlistLength+1
      }

    case "INCREMENT_WISHLIST_COUNT":
      return {
        ...state,
        wishlistLength:state.wishlistLength+1
      }
    
    case "DECREMENT_WISHLIST_COUNT":
      return {
        ...state,
        wishlistLength:state.wishlistLength-1
      }
    
  
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
      return { ...state, cartList: action.payload}
    
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.product._id !== action.payload
        ),
      };

    case "INCREASE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "APPEND_ITEM_TO_CART":
      return {
        ...state,
        cartList: state.cartList.concat(action.payload)
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
    
    case "CHANGE_CART_STATE":
      return {
        ...state,
        productList: state.productList.map((item) =>
        item._id === action.payload ? { ...item, isAddedToCart: !item.isAddedToCart } : item,
      ),
      }
    
    case "INCREMENT_CART_COUNT":
      return {
      ...state,
      cartLength:state.cartLength+1
      }
    
    case "DECREMENT_CART_COUNT":
      return {
        ...state,
        cartLength:state.cartLength-1
      }


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

