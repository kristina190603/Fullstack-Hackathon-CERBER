import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import "../MainPage/MainPage.css";
import Backs from "../storage/backs.jpg";
import {
  Avatar,
  Button,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { Link, useSearchParams } from "react-router-dom";
import "./Profile.css";
import { useProducts } from "../../context/productContext";
import ProductCard from "../Products/ProductCard";
import { useAccount } from "../../context/AccountContext";

const Profile = ({ item }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products, pages } = useProducts();

  const { user, getUser } = useAccount();

  useEffect(() => {
    getProducts();
    getUser();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  console.log(user);

  return (
    <Box>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Box
        sx={{
          color: "white",
          height: "100%",
          display: "flex",
          margin: "0",
          flexWrap: "wrap",
        }}
      >
        <Box className="profile-info" sx={{ margin: "80px 40px" }}>
          <Box sx={{ width: "320px", height: "320px", margin: "40px" }}>
            <Avatar
              sx={{ width: "100%", height: "100%" }}
              className="avatar"
              alt="Remy Sharp"
              src="https://cdn.mos.cms.futurecdn.net/eVyt9jnUrLBSvSwW6pScj9.jpg"
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "100%",
              height: "50%",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              padding: "0 40px",
            }}
          >
            <Box>
              <Typography variant="h3">Username</Typography>
              <Typography textAlign="start" variant="h5">
                Dragoverlord
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography variant="h3">Email</Typography>
              <Typography textAlign="start" variant="h5">
                nursultan.dzhetybaev.04@mail.ru
              </Typography>
            </Box>
            <br />
            <Box>
              <ReactCountryFlag
                countryCode="JP"
                svg
                style={{
                  width: "6em",
                  height: "6em",
                  margin: "0 20px",
                }}
                title="JP"
              />
              <ReactCountryFlag
                className="emojiFlag"
                countryCode="JP"
                style={{
                  fontSize: "6em",
                  lineHeight: "2em",
                  margin: "0 20px",
                }}
                aria-label="United States"
              />
            </Box>

            <br />
            <Box>
              <Typography variant="h3">Balance</Typography>
              <Typography textAlign="start" variant="h5">
                1000.00 $
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }} />
            <Link to="/Balance">
              <Button
                sx={{
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                replenishment balance
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          className="profile-info"
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "54%",
            height: "100%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "40px 40px",
          }}
        >
          <Box
            sx={{
              width: "40vw",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <Typography style={{ color: "white", margin: "50px auto" }}>
              Profile Option
            </Typography>
            <input
              type="file"
              name="Avatar"
              style={{
                color: "white",
                margin: "20px auto",
                fontFamily: "sans-serif",
              }}
            />
            <TextField
              label="Username"
              fullWidth
              variant="filled"
              sx={{
                m: 1,
                bgcolor: "white",
                color: "black",
                margin: "20px auto",
                borderRadius: "10px",
              }}
              name="username"
            />
            <TextField
              label="Contry (max-length 2 Symbol)"
              fullWidth
              variant="filled"
              sx={{
                m: 1,
                bgcolor: "white",
                color: "black",
                margin: "20px auto",
                borderRadius: "10px",
              }}
              name="Contry"
            />
            <Button
              sx={{
                m: 1,
                bgcolor: "darkred",
                color: "white",
                margin: "20px auto",
                borderRadius: "10px",
              }}
              variant="outlined"
              fullWidth
              size="large"
            >
              Save option
            </Button>
          </Box>
          <Box
            sx={{
              width: "40vw",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <Typography style={{ color: "white", margin: "150px auto" }}>
              Favorite Products
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {products.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </Box>
            <Box>
              <Pagination
                variant="outlined"
                color="primary"
                count={pages}
                page={currentPage}
                sx={{ bgcolor: "white", width: "100%", margin: "auto" }}
                onChange={(page) => setCurrentPage(page)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Profile;
