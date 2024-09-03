
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../Mui-Componants/Appbar";
import Draweer from "../Mui-Componants/Draweer";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import getDesignTokens from "Mui-Componants/theme";


const drawerWidth = 240;

const Root = () => {
  const [temporary, permanent] = useState("permanent");
  const [noneORblock, setnoneORblock] = useState("none");
  const [MyTitle, setMyTitle] = useState("My expenses");
  const [mode, setmood] = useState(
    localStorage.getItem("moodthem") === null
      ? "light"
      : localStorage.getItem("moodthem") === "light"
      ? "light"
      : "dark"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Box component="header">
          <Appbar  {...{MyTitle,drawerWidth,setnoneORblock,permanent}} />
        </Box>

        <Box component="aside">
          {/* sprend opreator */}
          <Draweer {...{drawerWidth,setmood,noneORblock,temporary,setnoneORblock,permanent,setMyTitle}} />
        </Box>

        <Box
          component="main"
          sx={{
            ml:{xs:"0px", sm:`${drawerWidth}px`},
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </>
    </ThemeProvider>
  );
};

export default Root;
