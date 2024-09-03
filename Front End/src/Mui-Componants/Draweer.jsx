import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
  Badge,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ShopIcon from "@mui/icons-material/Shop";
import CreateIcon from "@mui/icons-material/Create";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useSelector } from "react-redux";
const Draweer = ({
  drawerWidth,
  setmood,
  noneORblock,
  temporary,
  setnoneORblock,
  permanent,
  setMyTitle,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  // @ts-ignore
  const { Selectproducts } = useSelector((state) => state.counter);

  const mylist = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
      Title: "My Expenses",
    },
    {
      text: "Creat",
      icon: <CreateIcon />,
      path: "/Create",
      Title: "My Expenses",
    },
    {
      text: "Online Store",
      icon: <ShopIcon />,
      path: "/OnlineStore",
      Title: "Online Store",
    },
    {
      text: "Cart",
      icon: (
        <StyledBadge badgeContent={Selectproducts.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      ),
      path: "/Cart",
      Title: "Online Store",
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      path: "/Logout",
    },
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={temporary}
      anchor="left"
      open={true}
      onClose={() => {
        setnoneORblock("none");
        permanent("permanent");
      }}
    >
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "moodthem",
                // @ts-ignore
                theme.palette.mode === "light" ? "dark" : "light"
              );
              // @ts-ignore
              setmood(theme.palette.mode === "light" ? "dark" : "light");
            }}
          >
            {// @ts-ignore
            theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>
        <Divider />

        {mylist.map((item) => (
          <ListItem
            disablePadding
            key={item.text}
            sx={{
              bgcolor:
                // @ts-ignore
                location.pathname === item.path
                  ? theme.palette.ahmed.main
                  : null,
            }}
          >
            <ListItemButton
              onClick={() => {
                setMyTitle(item.Title);
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Draweer;
