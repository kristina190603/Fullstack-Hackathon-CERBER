import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register";
import Chat from "../components/Chat/Chat";
import Contact from "../components/contact/Contact";
import Error from "../components/Error/Error";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";
import Dangerous from "../components/OurRules/Dangerous";
import Cart from "../components/Products/Cart";
import OnlyDrugs from "../components/Products/OnlyDrugs";
import ProductDetails from "../components/Products/ProductDetails";
import Profile from "../components/Profile/Profile";
import BalancePage from "../pages/BalancePage";
import EditPage from "../pages/EditPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

const MainRoutes = () => {
  const username = localStorage.getItem("username");

  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/dangerous",
      element: <Dangerous />,
      id: 3,
    },
    {
      link: "/loginpage",
      element: <LoginPage />,
      id: 7,
    },
    {
      link: "*",
      element: <Error />,
      id: 11,
    },
    {
      link: "/forgot",
      element: <ForgotPassword />,
      id: 13,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/auth",
      element: <Register />,
      id: 4,
    },
    {
      link: "/contact",
      element: <Contact />,
      id: 5,
    },
    {
      link: "/homepage",
      element: <HomePage />,
      id: 6,
    },

    {
      link: "/products",
      element: <ProductPage />,
      id: 8,
    },
    {
      link: "/products/:id",
      element: <ProductDetails />,
      id: 9,
    },
    {
      link: "/profile",
      element: <Profile />,
      id: 10,
    },
    {
      link: "/drugs",
      element: <OnlyDrugs />,
      id: 12,
    },
    {
      link: "/Balance",
      element: <BalancePage />,
      id: 13,
    },
    {
      link: "/editproduct/:id",
      element: <EditPage />,
      id: 14,
    },
    {
      link: "/chats",
      element: <Chat />,
      id: 15,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 16,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {username !== null
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  username !== undefined ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
