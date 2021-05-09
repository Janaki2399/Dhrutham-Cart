import { createContext, useContext, useState } from "react";

const LoaderToastContext = createContext();

export const LoaderToastProvider = ({ children }) => {
  const [toast, setToast] = useState("");

  const hideToast = () => {
    const timerId = setTimeout(() => {
      setToast("");
      clearInterval(timerId);
    }, 2000);
  }
  function showToast(message) {
    setToast(message);
  }

  return (
    <LoaderToastContext.Provider
      value={{
        toast: toast,
        showToast: showToast,
        hideToast: hideToast
      }}
    >
      {children}
    </LoaderToastContext.Provider>
  );
}

export const useLoaderToast = () => {
  return useContext(LoaderToastContext);
}
