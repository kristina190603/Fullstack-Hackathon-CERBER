import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/productContext";
import ProductCard from "./ProductCard.jsx";
import SidebarProducts from "./SidebarProducts";
import "../Products/ProductList.css"
import AddProduct from "./AddProduct";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products, pages } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Box className="sidebar" sx={{ margin: "90px 0"}}>
          <SidebarProducts />
          <AddProduct/>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "20px auto",
            width: "60%",
            height: "100%"
          }}
        >
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Box>
      </Box>
      <Box>
        <Pagination
          variant="outlined"
          color="primary"
          count={pages}
          page={currentPage}
          sx={{ bgcolor: "white", width: "304px", margin: "auto" }}
          onChange={(e, page) => setCurrentPage(page)}
        />
      </Box>
    </div>
  );
};

export default ProductsList;
