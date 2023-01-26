import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import React, { useEffect, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/productContext";
import "../Products/SidebarProducts.css";
const SidebarProducts = () => {
  const { fetchByParams } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid sx={{ margin: "auto 40px" }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          padding: "10px",
        }}
      >
        <TextField
          style={{ backgroundColor: "white" }}
          fullWidth
          id="input-with-icon-textfield"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl>
          <FormLabel style={{ color: "white" }}>Categories</FormLabel>
          <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
            <FormControlLabel
              style={{ color: "white" }}
              value="all"
              control={<Radio style={{ color: "white" }} />}
              label="ALL"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value="DRUGS"
              control={<Radio style={{ color: "white" }} />}
              label="DRUGS"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value="CONTRACT KILLINGS"
              control={<Radio style={{ color: "white" }} />}
              label="CONTRACT KILLINGS"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value="GUNS"
              control={<Radio style={{ color: "white" }} />}
              label="GUNS"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value="HACK"
              control={<Radio style={{ color: "white" }} />}
              label="HACK"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel style={{ color: "white" }}>Price</FormLabel>
          <RadioGroup
            onChange={(e) => fetchByParams("price_lte", e.target.value)}
          >
            <FormControlLabel
              style={{ color: "white" }}
              value="all"
              control={<Radio style={{ color: "white" }} />}
              label="ALL"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value={100}
              control={<Radio style={{ color: "white" }} />}
              label="99 $"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value={200}
              control={<Radio style={{ color: "white" }} />}
              label="199 $"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value={300}
              control={<Radio style={{ color: "white" }} />}
              label="299 $"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value={500}
              control={<Radio style={{ color: "white" }} />}
              label="499 $"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value={1000}
              control={<Radio style={{ color: "white" }} />}
              label="999 $"
            />
            <FormControlLabel
              style={{ color: "white" }}
              value={2100}
              control={<Radio style={{ color: "white" }} />}
              label="2100 $"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SidebarProducts;
