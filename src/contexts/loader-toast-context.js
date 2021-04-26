import { createContext, useContext, useState } from "react";

const LoaderToastContext = createContext();

export function LoaderToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  function hideToast() {
    const timerId = setTimeout(() => {
      setToast(null);
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

export function useLoaderToast() {
  return useContext(LoaderToastContext);
}
