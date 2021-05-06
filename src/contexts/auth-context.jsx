import { createContext, useContext, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setUserLogIn] = useState(false);
 
  const navigate=useNavigate();

  const validateLogin =(email,password,state)=>{
    console.log(email,password);
    if(email==="admin@gmail.com" && password === "admin"){
     
      setUserLogIn(true);
      navigate(state?.from?state.from:"/");
    }
    else{
      console.log("helo");
    }
  }
  

  return (
    <AuthContext.Provider
      value={{
       isUserLoggedIn,
       setUserLogIn,
       validateLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}