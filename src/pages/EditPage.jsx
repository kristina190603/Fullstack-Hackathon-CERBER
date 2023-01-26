import React from "react";
import Footer from "../components/footer/Footer";
import NavbarCustom from "../components/navbar/Navbar";
import EditProduct from "../components/Products/EditProduct";
import Backs from "../components/storage/backs.jpg";

const EditPage = () => {
  return (
    <div>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <EditProduct />
      <Footer />
    </div>
  );
};

export default EditPage;
