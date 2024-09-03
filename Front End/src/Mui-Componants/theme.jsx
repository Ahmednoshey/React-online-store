const { grey, teal, cyan } = require("@mui/material/colors");


const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ahmed: {
            main: grey[300],
          },
          favColor: {
            main: teal[500],
          },
          error: {
            main: "#ef5350",
          },
        }
      : {
          // palette values for dark mode
          ahmed: {
            main: grey[800],
          },
          favColor: {
            main: cyan[500],
          },
          error: {
            main: "#c62828",
          },
        }),
  },
});
export default getDesignTokens;