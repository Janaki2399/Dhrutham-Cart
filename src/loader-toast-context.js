import { createContext, useContext, useState } from "react";

const loaderToastContext = createContext();

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
    <loaderToastContext.Provider
      value={{
        toast: toast,
        showToast: showToast,
        hideToast: hideToast
      }}
    >
      {children}
    </loaderToastContext.Provider>
  );
}

export function useLoaderToast() {
  return useContext(loaderToastContext);
}
