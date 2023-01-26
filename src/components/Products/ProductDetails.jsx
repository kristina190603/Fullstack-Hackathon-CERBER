import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/productContext";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import Backs from "../storage/backs.jpg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ProductDetails = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct, deleteProduct, toggleLike } =
    useProducts();
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return oneProduct ? (
    <>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Box
        sx={{
          color: "white",
          bgcolor: "black",
          width: "60%",
          height: "100%",
          margin: "100px auto",
          padding: "5px",
        }}
        className="cardproduct"
      >
        <CardMedia
          sx={{ height: "320px" }}
          image={oneProduct.image}
          title={oneProduct.title}
        />
        <CardContent>
          <Typography
            style={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {oneProduct.title}
          </Typography>
          <Typography
            style={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {oneProduct.description}
          </Typography>
          <Typography
            style={{ color: "white" }}
            variant="caption"
            color="text.secondary"
          >
            {oneProduct.price}
          </Typography>
        </CardContent>
        <CardActions>
          <>
            <Button
              style={{ color: "black" }}
              onClick={() => deleteProduct(oneProduct.id)}
              size="small"
            >
              <DeleteIcon />
            </Button>
          </>
          {oneProduct.likes}
          {isLiked ? (
            <>
              <FavoriteIcon
                color="error"
                onClick={() => {
                  toggleLike(oneProduct.id);
                  setIsLiked(false);
                }}
              />
            </>
          ) : (
            <FavoriteBorderIcon
              color="disabled"
              onClick={() => {
                toggleLike(oneProduct.id);
                setIsLiked(true);
              }}
            />
          )}
          <Button
            style={{ color: "black" }}
            onClick={() => navigate("/editproduct")}
            size="small"
          >
            <EditIcon />
          </Button>
        </CardActions>
      </Box>
      <Footer />
    </>
  ) : (
    <>
      <CircularProgress />
    </>
  );
};

export default ProductDetails;
