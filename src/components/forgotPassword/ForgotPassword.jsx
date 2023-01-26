import React, { useState } from "react";
import Backs from "../storage/backs.jpg";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Alert, Avatar } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAccount } from "../../context/AccountContext";

const theme = createTheme();

const ForgotPassword = () => {
  const { ForgotPassword } = useAccount();

  const [email, setEmail] = useState("");

  function handleSave() {
    if (!email.trim()) {
      alert("Заполните поля!");
      return;
    }
    let formData = email
    // let formData = new FormData();
    // formData.append("email", email);

    ForgotPassword(formData);
  }
  return (
    <div>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Box>
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
                Forgot Password
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  sx={{ bgcolor: "white" }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "darkred", color: "white" }}
                  onClick={handleSave}
                >
                  Forgot Password
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
