import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isUserLoggedIn, setUserLogIn] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  console.log(token);

  // const validateLogin = (email, password, state) => {
  //   if (email === "admin@gmail.com" && password === "admin") {
  //     setUserLogIn(true);
  //     navigate(state?.from ? state.from : "/");
  //   }
  // };
  function setupAuthHeaderForServiceCalls(token) {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  }
  const login = async (email, password, state) => {
    // console.log("ddsdsd");
    try {
      const { data, status } = await axios.post(
        "https://dhrutham-cart-backend.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log(data);
      if (status === 200) {
        setToken(data.token);
        navigate(state?.from ? state.from : "/");
        // setupAuthHeaderForServiceCalls(data.token);
        // localStorage?.setItem("login", JSON.stringify({ token: data.token }));
      }
    } catch (error) {
      alert(error);
    }
  };

  const signUp = async ({ firstName, lastName, email, password }) => {
    try {
      const { status } = await axios.post(
        "https://dhrutham-cart-backend.herokuapp.com/user/signup",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      );
      if (status === 200) {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        // isUserLoggedIn,
        // setUserLogIn,
        setToken,
        login,
        token,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
