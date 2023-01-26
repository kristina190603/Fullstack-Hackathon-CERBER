import React from "react";
import Footer from "../components/footer/Footer";
import NavbarCustom from "../components/navbar/Navbar";
import Backs from "../components/storage/backs.jpg";
import ProductsList from "../components/Products/ProductList";

const ProductPage = () => {
  return (
    <div>
      <>
        <div>
          <img id="backs" src={Backs} alt="" />
        </div>
        <NavbarCustom />
        <ProductsList />
        <Footer />
      </>
    </div>
  );
};

export default ProductPage;
