import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const balanceContext = createContext();
export const useBalance = () => useContext(balanceContext);

const API = "http://34.122.138.182/account/";

const BalanceContextProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"))
  const [error, setError] = useState("");
  const UpdateBalance = async (balance) => {
    try {
      const res = await axios.post(`${API}update_balance/`, {balance}, {headers:{Authorization:`Bearer ${token.access}`}});
      console.log(res);
      //   navigate("/login");
    } catch (error) {
      console.log(error);
      console.log(Object.values(error).flat(2));
      console.log(error);
      setError(Object.values(error).flat(2));
    }
  };

  let values = {
    UpdateBalance,
  };

  return (
    <balanceContext.Provider value={values}>{children}</balanceContext.Provider>
  );
};

export default BalanceContextProvider;
