import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export const accountContext = createContext();
export const useAccount = () => useContext(accountContext);

const API = "http://34.122.138.182/account/";

// http://34.122.138.182/docs/

const INIT_STATE = {
  oneUser: null,
};



function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ONE_USER":
      return {
        ...state,
        oneUser: action.payload,
      };
    default:
      return state;
  }
}

const AccountContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const ForgotPassword = async (formData) => {
    try {
      const res = await axios.post(`${API}forgot_password/${formData}/`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const id = 1;
      const res = await axios.get(`${API}users/${id}/`, config);
      dispatch({ type: "GET_ONE_USER", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  
  const editProfile = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}users/${id}/`, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getCode = async () => {
    try {
      const res = await axios.post(`${API}/get_code/`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  

  const values = {
    ForgotPassword,
    getUser,
    user: state.oneUser,
  };

  return (
    <accountContext.Provider value={values}>{children}</accountContext.Provider>
  );
};

export default AccountContextProvider;
