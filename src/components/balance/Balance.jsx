import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";
import { useBalance } from "../../context/balance";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        sx={{ textDecoration: "none" }}
        color="inherit"
        href="https://makers.courses/houses/KvEVKzaW7mTDQ4bkAiaR"
      >
        C E R B E R
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Balance = () => {
  const { UpdateBalance } = useBalance();

  const [balance, setBalance] = useState("");

  function handleSave() {
    if (!balance.trim()) {
      alert("Заполните поля!");
      return;
    }
    // let formData = {email , password}
    // let formData = new FormData();
    // formData.append("email", email);
    // formData.append("balance", balance);

    UpdateBalance(balance);
    balance = "";
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "black", color: "white" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlinedIcon sx={{ color: "darkred" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            balance replenishment
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{ bgcolor: "white" }}
              margin="normal"
              required
              fullWidth
              id="balance"
              label="balance"
              name="balance"
              autoComplete="balance"
              autoFocus
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "darkred", color: "white" }}
              onClick={handleSave}
            >
              replenishment
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
      </Container>
    </ThemeProvider>
  );
};

export default Balance;
