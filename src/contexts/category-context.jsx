import { createContext, useContext, useReducer } from "react";
import { API_STATUS } from "../constants";
import { categoryReducer } from "../reducers/categoryReducer";
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoriesState, categoriesDispatch] = useReducer(categoryReducer, {
    categories: [],
    status: API_STATUS.IDLE,
    errorMessage: "",
  });

  return (
    <CategoryContext.Provider
      value={{
        categoriesState,
        categoriesDispatch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategoriesContext = () => {
  return useContext(CategoryContext);
};
