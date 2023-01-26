import React from "react";
import Balance from "../components/balance/Balance";
import Footer from "../components/footer/Footer";
import NavbarCustom from "../components/navbar/Navbar";
import Backs from "../components/storage/backs.jpg";

const BalancePage = () => {
  return (
    <div>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Balance />
      <Footer />
    </div>
  );
};

export default BalancePage;
