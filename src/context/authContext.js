import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.122.138.182/account/";

// http://34.122.138.182/docs/

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (formData , code) => {
    try {
      const res = await axios.post(`${API}register/${code}/`, formData);
      console.log(res);
    //   navigate("/login");
    } catch (error) {
      console.log(error);
      console.log(Object.values(error.response.data).flat(2));
      console.log(error);
      setError(Object.values(error.response.data).flat(2));
    }
  };

  const login = async (formData, email) => {
    try {
      // const res = await axios.post(`${API}token/`, JSON.stringify(formData));
      console.log(formData);
      const res = await axios.post(`${API}token/`, formData);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    try {
      const Authorization = `Bearer ${token.access}`;
      let res = await axios.post(
        `${API}token/refresh/`,
        { refresh: token.refresh },
        { headers: { Authorization } }
      );
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let username = localStorage.getItem("username")
      setUser(username)
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    let token = JSON.parse(localStorage.removeItem("token"));
    let username = JSON.parse(localStorage.removeItem("username"));
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    console.log(token , username);
    setUser("");
    navigate("/login");
  }

  let values = {
    checkAuth,
    register,
    error,
    setError,
    login,
    user,
    logout,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
