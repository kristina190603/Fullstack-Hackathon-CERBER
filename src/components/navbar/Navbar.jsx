import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "../navbar/Navbar.css";
import Logo from "../storage/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { AccountCircle } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";


const pages = ["WARNING"];
const settings = [
  { name: "Profile", link: "/profile", id: 1 },
  { name: "Account", link: "/loginpage", id: 2 },
  { name: "Chats", link: "/chats", id: 3 },
];

function NavbarCustom() {

  const navigate = useNavigate()
  const {cart} = useCart()

  const { logout } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <AppBar
      position="static"
      sx={{
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "5rem",
              // mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className="logoName"
          >
            CERBER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              className="pagesadapt"
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Link to="/">
                    <Button sx={{ color: "black", display: "block" }}>
                      Register
                    </Button>
                  </Link>
                  <Link to="/dangerous">
                    <Button sx={{ color: "black", display: "block" }}>
                      DANGEROUS
                    </Button>
                  </Link>
                  <Link to="/homepage">
                    <Button sx={{ color: "black", display: "block" }}>
                      Main
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button sx={{ color: "black", display: "block" }}>
                      Product
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to="/dangerous">
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}

            <Link to="/homepage">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Main
              </Button>
            </Link>
            <Link to="/products">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Product
              </Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={cart?.models.length} color="error">
                <ShoppingCartCheckoutIcon />
              </Badge>
            </IconButton>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img className="logo" src={Logo} alt="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={setting.link}
                    onClick={settings.func}
                    textAlign="center"
                  >
                    {setting.name}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  onClick={logout}
                  textAlign="center"
                >
                  logout
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarCustom;
