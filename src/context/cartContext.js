import React, { createContext, useContext, useReducer } from 'react';

export function getCountModelsInCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.models.length : 0;
  }
  
  export const calcSubPrice = (model) => +model.count * model.item.price;
  
  export const calcTotalPrice = (models) => {
    return models.reduce((acc, curr) => {
      return (acc += curr.subPrice);
    }, 0);
  };
  
  export const CART = {
    GET_CART: "GET_CART",
    GET_CART_LENGTH: "GET_CART_LENGTH",
}
const cartContext = createContext();

export const useCart = () => {
    return useContext(cartContext);
  };
  
  const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLength: getCountModelsInCart(),
  };
  
  function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case CART.GET_CART:
        return { ...state, cart: action.payload };
      default:
        return state;
    }
  }
  
  const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
  
    const getCart = () => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        localStorage.setItem(
          "cart",
          JSON.stringify({
            models: [],
            totalPrice: 0,
          })
        );
        cart = {
          models: [],
          totalPrice: 0,
        };
      }
  
      dispatch({
        type: CART.GET_CART,
        payload: cart,
      });
    };
  
    const addModelToCart = (model) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          models: [],
          totalPrice: 0,
        };
      }
      let newModel = {
        item: model,
        count: 1,
        subPrice: +model.price,
      };
  
      let modelToFind = cart.models.filter((elem) => elem.item.id === model.id);
  
      if (modelToFind.length == 0) {
        cart.models.push(newModel);
      } else {
        cart.models = cart.models.filter((elem) => elem.item.id !== model.id);
      }
  
      cart.totalPrice = calcTotalPrice(cart.models);
  console.log(cart.totalPrice)
      localStorage.setItem("cart", JSON.stringify(cart));
  
      dispatch({
        type: CART.GET_CART,
        payload: cart,
      });
    };
  
    const checkModelInCart = (id) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        let newCart = cart.models.filter((elem) => elem.item.id === id);
        return newCart.length > 0 ? true : false;
      } else {
        cart = {
          model: [],
          totalPrice: 0,
        };
      }
    };
    const changeModalCount = (count, id) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.models = cart.models.map((model) => {
        if (model.item.id == id) {
          model.count = count;
          model.subPrice = calcSubPrice(model);
        }
        return model;
      });
      cart.totalPrice = calcTotalPrice(cart.models);
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      dispatch({
        type: CART.GET_CART,
        payload: cart,
      });
    };
  
    function deleteCartModel(id) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.models = cart.models.filter((e) => e.item.id !== id);
  
      cart.totalPrice = calcTotalPrice(cart.models);
  
      localStorage.setItem("cart", JSON.stringify(cart));
      getCart();
      dispatch({
        type: CART.GET_CART_LENGTH,
        payload: cart,
      });
    }
  
    let values = {
      addModelToCart,
      deleteCartModel,
      checkModelInCart,
      changeModalCount,
      getCart,
      cart: state.cart,
    };
    return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
  };
  
  export default CartContextProvider;
  