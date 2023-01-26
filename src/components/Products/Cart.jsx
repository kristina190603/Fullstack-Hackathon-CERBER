import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useCart } from "../../context/cartContext";
import "../Products/Cart.css"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, cart, changeModalCount, deleteCartModel } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">info</StyledTableCell>
            <StyledTableCell align="right">type</StyledTableCell>
            <StyledTableCell align="right">SubPrice</StyledTableCell>
            <StyledTableCell align="right">-</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.models.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.image} width="70px" height="70px" alt="" />
              </StyledTableCell>
              <StyledTableCell sx={{fontWeight: 600}} align="right">{row.item.name}</StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell sx={{textAlign: 'center'}} align="right">
                {row.item.price}
              </StyledTableCell>
              <StyledTableCell  align="right">{row.item.info}</StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeModalCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>
              <StyledTableCell  sx={{fontWeight: 600}} align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => deleteCartModel(row.item.id)}>
                  DELETE
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={()=>cartCleaner()}>BUY PRODUCTS{cart?.totalPrice} $</Button>

    </TableContainer>
  );
}
