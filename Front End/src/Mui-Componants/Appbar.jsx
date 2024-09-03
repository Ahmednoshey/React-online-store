import React from 'react';
import {AppBar, Avatar, Link, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = ({drawerWidth, setnoneORblock, permanent,MyTitle }) => {
  return (

    <AppBar
        position="static"
        sx={{
          ml:{xs:"0px", sm:`${drawerWidth}px`},
          width:{xs:"100%", sm:`calc(100% - ${drawerWidth}px)`},
        }}
      >
        <Toolbar>
          <IconButton
          sx={{
            mr: "10px",
            display:{xs:"block", sm:"none"},  
          }}
           onClick={() => {
            setnoneORblock("block")
            permanent("temporary")
          }}>
            <MenuIcon/>
          </IconButton>
          <Link
            href="/"
            color="inherit"
            sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
            underline="none"
          >
            {MyTitle}
          </Link>
          <Typography variant="h6" color="inherit" mr="16px">
            Ahmed Shoaib
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="./images/18119222_1690557987651585_1044614154366282350_n.jpg"
          />
        </Toolbar>
      </AppBar>
    
  );
}

export default Appbar;
