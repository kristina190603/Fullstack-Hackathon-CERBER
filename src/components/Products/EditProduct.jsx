import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useProducts } from "../../context/productContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useParams } from "react-router-dom";
import "../Products/ProductCard.css";
import backsimg from "../storage/narko2.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function EditProduct() {
  const { id } = useParams();

  
  const { getOneProduct, oneProduct, customEditProduct } = useProducts();
  const [isLiked, setIsLiked] = useState(false);
  
  const [editProduct, setEditProduct] = useState("");
  
  const navigate = useNavigate();
  console.log(oneProduct);
  
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(()=>{
    setEditProduct(oneProduct)
  }, [oneProduct])

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setEditProduct({
        ...editProduct,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setEditProduct({
        ...editProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handelSave() {
    let EditProduct = new FormData();
    EditProduct.append("title", editProduct.title);
    EditProduct.append("description", editProduct.description);
    EditProduct.append("price", editProduct.price);
    EditProduct.append("category", editProduct.category.slug);
    EditProduct.append("image", editProduct.image);
    EditProduct.append("quantity", editProduct.quantity);
    EditProduct.append("warning", editProduct.warning);

    customEditProduct(EditProduct , id);
  }

  if (!editProduct) return <></>

  return (
    <Card
      className="cardproduct"
      sx={{
        width: "60%",
        margin: "20px auto",
        padding: "5px",
        background: `url(${backsimg})`,
      }}
    >
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
        <Typography style={{ color: "white" }}>Edit Product</Typography>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="title"
          value={editProduct.title}
          onChange={handleInp}
        />
        <TextField
          label="Description"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="description"
          value={editProduct.description}
          onChange={handleInp}
        />
        <TextField
          label="Price"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="price"
          value={editProduct.price}
          onChange={handleInp}
        />
        <TextField
          label="quantity"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="quantity"
          value={editProduct.quantity}
          onChange={handleInp}
        />
        <TextField
          label="warning"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="warning"
          value={editProduct.warning}
          onChange={handleInp}
        />
        <TextField
          label="category"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="category"
          value={editProduct.category.slug}
          onChange={handleInp}
        ></TextField>
        <input
          type="file"
          name="image"
          onChange={handleInp}
          style={{ color: "white", margin: "20px 0" }}
        />
        <Button
          sx={{ m: 1, bgcolor: "darkred", color: "black" }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={handelSave}
        >
          Edit product
        </Button>
      </Box>
    </Card>
  );
}
