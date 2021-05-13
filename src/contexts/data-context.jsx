import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "../reducerFunction";
import axios from "axios";
import { useLoaderToast } from "./loader-toast-context";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { showToast, hideToast } = useLoaderToast();
  const [state, dispatch] = useReducer(reducerFunction, {
    productList: [],
    wishList: [],
    cartList: [],
    sortFilterStates: {
      includeOutOfStock: true,
      fastDelivery: false,
      sortBy: null,
    },
  });

  const fetchAndAddToList = async ({ url, dispatchType, list }) => {
    try {
      const { data, status } = await axios.get(url);

      if (status === 200) {
        dispatch({ type: dispatchType, payload: data[list] });
      }
    } catch (error) {
      alert(error);
    }
  };
  const removeFromListAndServer = async ({
    url,
    itemId,
    dispatchType,
    list,
    toastMessage,
  }) => {
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

   const addToListAndServer = async ({
    url,
    list,
    postItem,
    dispatchType,
    toastItem,
  }) => {
    try {
      showToast(`Adding to ${toastItem}`);
      const { data, status } = await axios.post(`${url}`, postItem);
      console.log(data);
      if (status === 200) {
        dispatch({ type: dispatchType, payload: data[list] });
        showToast(`Added to ${toastItem}`);
        hideToast();
      }
    } catch (error) {
      hideToast();
      if (error.response.status !== 409) {
        alert(error);
      }
      // alert(error);
    }
  }

  const updateListAndServer = async ({
    url,
    postObject,
    dispatchType,
    itemId,
  }) => {
    try {
      const { status } = await axios.post(url, postObject);
      if (status === 200) {
        dispatch({
          type: dispatchType,
          payload: itemId,
        });
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <DataContext.Provider
      value={{
        dispatch,
        state,
        fetchAndAddToList,
        removeFromListAndServer,
        addToListAndServer,
        updateListAndServer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
}
