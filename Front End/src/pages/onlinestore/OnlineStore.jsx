import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useGetPokemonByNameQuery } from "../../Redux/productsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, downQuantity, upQuantity } from "../../Redux/mydataSlice";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

const OnlineStore = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const { SelectproductsID, Selectproducts } = useSelector(
    // @ts-ignore
    (state) => state.counter
  );
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery();

  const productquantity = (item) => {
    const myproduct = Selectproducts.find((itemUser) => {
      return itemUser.id === item.id;
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            className="cards"
            sx={{ maxWidth: { xs: 277, md: 230 }, mt: 3, mx: "auto" }}
          >
          
            <CardMedia
              component="img"
              sx={{ height: { xs: 270, md: 210 }, cursor: "pointer" }}
              image={item.imageLink[0]}
              onClick={() => {
                navigate(`/details-product/${item.id}`)
              }}
            />
        
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {!SelectproductsID.includes(item.id) ? (
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "12px",
                    p: 1,
                    lineHeight: "1.1",
                  }}
                  onClick={() => {
                    dispatch(AddCart(item));
                  }}
                  startIcon={<ShoppingCartIcon fontSize="small" />}
                >
                  Add To Cart
                </Button>
              ) : (
                <Box>
                  <IconButton
                    sx={{ color: "#1976d2", mr: "10px" }}
                    onClick={() => {
                      dispatch(downQuantity(item));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <StyledBadge
                    badgeContent={productquantity(item)}
                    color="secondary"
                  />
                  <IconButton
                    sx={{ color: "#1976d2", ml: "10px" }}
                    onClick={() => {
                      dispatch(upQuantity(item));
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <ExpandMore>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px" }}
                  color={red[300]}
                >
                  ${item.price}
                </Typography>
              </ExpandMore>
            </CardActions>
          </Card>
        ))}
      </Box>
    );
  }
};

export default OnlineStore;
