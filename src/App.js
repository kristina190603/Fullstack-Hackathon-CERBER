import React from "react";
import "./App.css";
import AccountContextProvider from "./context/AccountContext";
import AuthContextProvider from "./context/authContext";
import BalanceContextProvider from "./context/balance";
import CartContextProvider from "./context/cartContext";
import ProductContextProvider from "./context/productContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BalanceContextProvider>
          <AccountContextProvider>
            <ProductContextProvider>
              <AuthContextProvider>
                <MainRoutes />
              </AuthContextProvider>
            </ProductContextProvider>
          </AccountContextProvider>
        </BalanceContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
