import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, downQuantity, upQuantity } from "../../Redux/mydataSlice";

// @ts-ignore
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

const Cart = () => {
  // @ts-ignore
  const { Selectproducts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  let suptotal = 0;
  return (
    <Box>
      {Selectproducts.map((item) => {
        
    suptotal += Number(item.price) * Number(item.quantity)

        return (
          <Paper
            key={item.id}
            sx={{
              bgcolor: "rgb(255,255,255)",
              borderTop: "2px solid rgb(109, 176, 221)",
              direction: "rtl",
              mt: 5,
              width: { xs: "350px", md: "500px", lg: "700px" },
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={item.imageLink[0]} alt="" style={{ width: "70px", height: "70px" }} />
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontSize: "16px" }}
              >
                {item.productName}
              </Typography>
            </Box>

            <Box>
              <IconButton
                sx={{ color: "#1976d2", ml: "10px" }}
                onClick={() => {
                  dispatch(upQuantity(item));
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>

              <StyledBadge badgeContent={item.quantity} color="secondary" />

              <IconButton
                sx={{ color: "#1976d2", mr: "10px" }}
                onClick={() => {
                  dispatch(downQuantity(item));
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Box>

            <Typography variant="h6" color="initial" sx={{ fontSize: "16px" }}>
              ${Number(item.price) * Number(item.quantity)}
            </Typography>

            <Button
              onClick={() => {
                dispatch(DeleteCart(item));
              }}
              variant="text"
              sx={{ color: "red", display: { xs: "none", md: "block" } }}
            >
              Delete
            </Button>

            <IconButton
              sx={{ color: "red", display: { xs: "block", md: "none" } }}
              onClick={() => {
                dispatch(DeleteCart(item));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Paper>
        );
        
      })}

  

      <Paper sx={{ width: "230px", my: 10, mx: "auto", textAlign: "center" }}>
        <Typography variant="h4" p={2} fontSize="28px">
          Cart Summary
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
          <Typography variant="h6" fontSize="16px">
            Sub Total
          </Typography>
          <Typography variant="h6" fontSize="16px">
            ${suptotal}
          </Typography>
        </Box>
        <Button sx={{ width: "100%" }} color="primary" variant="contained">
          CHECKOUT
        </Button>
      </Paper>
    </Box>
  );
};

export default Cart;
