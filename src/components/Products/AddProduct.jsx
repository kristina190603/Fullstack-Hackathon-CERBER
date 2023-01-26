import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useProducts } from "../../context/productContext";
import "../Products/AddProduct.css";
const AddProduct = () => {
  const { user } = useAuth();
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
    quantity: 0,
    warning: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handelSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    newProduct.append("quantity", product.quantity);
    newProduct.append("warning", product.warning);

    addProduct(newProduct);
  }
  console.log(product);

  return (
    <>
      {user !== null ? (
        <Box
          className="addproduct"
          sx={{
            width: "90%",
            height: "50%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "black",
            color: "white",
            padding: "20px",
          }}
        >
          <Typography style={{ color: "white" }}>Add new product</Typography>
          <TextField
            label="Title"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="title"
            value={product.title}
            onChange={handleInp}
          />
          <TextField
            label="Description"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="description"
            value={product.description}
            onChange={handleInp}
          />
          <TextField
            label="Price"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="price"
            value={product.price}
            onChange={handleInp}
          />
          <TextField
            label="quantity"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="quantity"
            value={product.quantity}
            onChange={handleInp}
          />
          <TextField
            label="warning"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="warning"
            value={product.warning}
            onChange={handleInp}
          />
          <TextField
            label="category"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="category"
            value={product.category}
            onChange={handleInp}
          >
            category
          </TextField>
          <input
            type="file"
            name="image"
            onChange={handleInp}

            style={{  color: "white" ,margin: "20px 0" }}
          />
          <Button
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            variant="outlined"
            fullWidth
            size="large"
            onClick={handelSave}
          >
            Add product
          </Button>
        </Box>
      ) : (
        <>You are not User</>
      )}
    </>
  );
};

export default AddProduct;
