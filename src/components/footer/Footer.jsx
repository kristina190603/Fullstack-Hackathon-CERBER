import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "../footer/Footer.css";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          bgcolor: "black",
          color: "white",
        }}
      >
        <div
          className="containerFooter"
          style={{backgroundColor: "black"}}
        >
          <a href="/dangerous">WARNING</a>
          <a href="/">MAIN</a>
          <a href="/products">PRODUCT</a>
          <a href="/drugs">DRUGS</a>
          <a href="#">GUNS</a>
          <a href="#">CONTRACT KILLINGS</a>
          <a href="#">HACK</a>
          <p>made with the support of hydra﹫</p>
        </div>
      </Box>
    </Box>
  );
}
