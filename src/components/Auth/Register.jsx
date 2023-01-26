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
import { useAuth } from "../../context/authContext";
import { Alert } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"WebSide © "}
      <Link sx={{textDecoration: "none"}} color="inherit" href="https://makers.courses/houses/KvEVKzaW7mTDQ4bkAiaR">
        C E R B E R
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { register, error, setError } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code , setCode] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);

    // console.log(email, password, passwordConfirm);
    console.log(formData , code , email ,password, passwordConfirm);
    register(formData , code);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "black", color: "white" }}
      >
        {error ? <Alert severity="error">{error}</Alert> : null}
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
            Register
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
            <TextField
              sx={{ bgcolor: "white" }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              sx={{ bgcolor: "white" }}
              margin="normal"
              required
              fullWidth
              name="password_confirm"
              label="Password confirm"
              type="password"
              id="password-confirm"
              autoComplete="current-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <TextField
              sx={{ bgcolor: "white" }}
              margin="normal"
              required
              fullWidth
              name="code"
              label="Code Infaite"
              type="code"
              id="code"
              autoComplete="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, bgcolor: "darkred", color: "white" }}
              onClick={handleSave}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="forgot" sx={{ color: "white" }} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/loginpage" sx={{ color: "white" }} variant="body2">
                  {"You have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4, color: "white" }} />
      </Container>
    </ThemeProvider>
  );
}
