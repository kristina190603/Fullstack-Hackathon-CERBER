import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        pages: Math.ceil(action.payload.count / 6),
        products: action.payload.results,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://34.122.138.182";

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NjM0NzQ2LCJpYXQiOjE2NzQ2MzExNDUsImp0aSI6ImVjMTcyNzVhYjk4YTQzNDQ5NDljZDQ2MGE3MGYwNWUzIiwidXNlcl9pZCI6MX0.RHiPIqva3ijVSDF0cpg4kP-MkaO7G5U8EmshwLuL7nc

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  const location = useLocation();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/v1/api/product/`, config);
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/v1/api/product/`,
        newProduct,
        config
      );
      console.log(res);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/v1/api/product/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function customEditProduct(EditProduct, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/v1/api/product/${id}/`,
        EditProduct,
        config
      );
      console.log(res);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLike(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/review/likes/${id}/`, config);
      console.log(res);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/v1/api/product/${id}/`, config);
      console.log(res);
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  let values = {
    categories: state.categories,
    addProduct,
    getProducts,
    products: state.products,
    pages: state.pages,
    deleteProduct,
    toggleLike,
    getOneProduct,
    oneProduct: state.oneProduct,
    fetchByParams,
    customEditProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
