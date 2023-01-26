import { Box } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar(HP)";
import Backs from "../storage/backs.jpg";
import NavbarCustom from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useProducts } from "../../context/productContext";
import { useAuth } from "../../context/authContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import "../Products/ProductCard.css";
import backsimg from "../storage/narko2.jpg";

const HomePage = (item) => {
  const { deleteProduct, toggleLike, getOneProduct } = useProducts();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  console.log(item);
  return (
    <Box sx={{ padding: "0px", margin: "0px" }}>
      <div>
        <img id="backs" src={Backs} alt="backs" />
      </div>
      <NavbarCustom />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          color: "white",
          justifyContent: "space-between",
          padding: "40px 80px",
          flexWrap: "wrap",
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            width: "60%",
            height: "1000px",
            backgroundColor: "black",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <Card
            className="cardproduct"
            sx={{
              width: "100%",
              margin: "20px",
              padding: "5px",
              background: `url(${backsimg})`,
            }}
          >
            <CardMedia
              sx={{ height: "75%" , width: "100%"}}
              image="https://wallpapercave.com/wp/wp5810767.jpg"
              title="Img Lot"
            />
            <CardContent sx={{display: 'flex' , flexDirection: 'column' , alignItems: "center"}}>
              <Typography
                style={{ color: "white" }}
                gutterBottom
                variant="h3"
                component="div"
              >
                Name
              </Typography>
              <Typography
                style={{ color: "white" }}
                variant="body1"
                color="text.secondary"
              >
                description
              </Typography>
              <Typography
                style={{ color: "white" }}
                variant="h4"
                color="text.secondary"
              >
                price
              </Typography>
            </CardContent>
            <CardActions>
                <>
                  <Button
                    style={{ color: "white" }}
                    onClick={() => deleteProduct(item.id)}
                    size="small"
                  >
                    Delete
                  </Button>
                </>
              {isLiked ? (
                <>
                  <FavoriteIcon
                    color="error"
                    onClick={() => {
                      toggleLike(item.id);
                      setIsLiked(false);
                    }}
                  />
                </>
              ) : (
                <FavoriteBorderIcon
                  color="disabled"
                  onClick={() => {
                    toggleLike(item.id);
                    setIsLiked(true);
                  }}
                />
              )}
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
