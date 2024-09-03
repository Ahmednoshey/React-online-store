import { Badge, Box, Button, CircularProgress, IconButton, styled, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useGetoneproductQuery } from '../../Redux/productsApi';
import { useParams } from 'react-router-dom';
import DetailsThumb from './DetailsThumb';
import "./product-details.css";
import { AddCart, downQuantity, upQuantity } from '../../Redux/mydataSlice';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));


const Detailsproduct = () => {
  // @ts-ignore
  const { SelectproductsID, Selectproducts } = useSelector(
    // @ts-ignore
    (state) => state.counter
  );
  const dispatch = useDispatch();

  let {id} = useParams();
  const { data, error, isLoading } = useGetoneproductQuery(id);
  
  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    // this.setState({index: index})
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };


  const productquantity = (data) => {
    const myproduct = Selectproducts.find((itemUser) => {
      return itemUser.id === data.id;
    });
    return myproduct.quantity;
  };


  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h2" color="error">
          Error............
        </Typography>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (data) {
  
  

    return (
      <div className="app details-page">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>{data.description}</p>

            <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            />


{!SelectproductsID.includes(data.id) ? (
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "12px",
                    p: 1,
                    lineHeight: "1.1",
                    mt: 2,
                  }}
                  onClick={() => {
                    dispatch(AddCart(data));
                  }}
                  startIcon={<ShoppingCartIcon fontSize="small" />}
                >
                  Add To Cart
                </Button>
              ) : (
                <Box sx={{mt: 2}}>
                  <IconButton
                    sx={{ color: "#1976d2", mr: "10px" }}
                    onClick={() => {
                      dispatch(downQuantity(data));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <StyledBadge
                    badgeContent={productquantity(data)}
                    color="secondary"
                  />
                  <IconButton
                    sx={{ color: "#1976d2", ml: "10px" }}
                    onClick={() => {
                      dispatch(upQuantity(data));
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}


          </div>
        </div>
      </div>

    );

  }

}

export default Detailsproduct;
