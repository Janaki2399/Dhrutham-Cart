import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";
import axios from "axios";
import { useLoaderToast } from "./loader-toast-context";
export const dataContext = createContext();

export function DataProvider({ children }) {
  const { showToast, hideToast } = useLoaderToast();
  const [state, dispatch] = useReducer(reducerFunction, {
    productList: [],
    wishList: [],
    cartList: [],
    wishlistLength:0,//To track changes in the badge
    cartLength:0,
    sortFilterStates: {
      includeOutOfStock: true,
      fastDelivery: false,
      sortBy: null
    }
  });

  async function fetchAndAddToList({ url, dispatchType, list }) {
    try {
      const { data, status } = await axios.get(url);

      if (status === 200) {
        dispatch({ type: dispatchType, payload: data });
      }
    } catch (error) {
      alert(error);
    }
  }
  async function removeFromListAndServer({
    url,
    itemId,
    dispatchType,
    toastMessage
  }) {
    try {
      const { status } = await axios.delete(url);
      if (status === 200) {
        dispatch({ type: dispatchType, payload: itemId });
        showToast(toastMessage);
        hideToast();
      }
    } catch (error) {
      alert(error);
      hideToast();
    }
  }

  async function addToListAndServer({
    url,
    list,
    postItem,
    dispatchType,
    toastItem
  }) {
    try {
      showToast(`Adding to ${toastItem}`);
      const { data, status } = await axios.post(`${url}`, postItem);
      
      if (status === 200) {
        dispatch({ type: dispatchType, payload: data[list].product });
        showToast(`Added to ${toastItem}`);
        hideToast();
      }
    } catch (error) {
      hideToast();
      alert(error);
    }
  }

  async function updateListAndServer({ url, postObject, dispatchType, itemId }) {
    try {
      const { status } = await axios.post(url, postObject);
      if (status === 200) {
        dispatch({
          type: dispatchType,
          payload: itemId
        });
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <dataContext.Provider
      value={{
        dispatch,
        state,
        fetchAndAddToList,
        removeFromListAndServer,
        addToListAndServer,
        updateListAndServer
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(dataContext);
}
