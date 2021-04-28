import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setUserLogIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
       isUserLoggedIn,
       setUserLogIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}