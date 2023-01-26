import React from "react";
import Login from "../components/Auth/Login";
import Footer from "../components/footer/Footer";
import NavbarCustom from "../components/navbar/Navbar";
import Backs from "../components/storage/backs.jpg";

const LoginPage = () => {
  return (
    <div>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
