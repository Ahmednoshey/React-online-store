// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { Box, Paper, Typography, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// const Home = () => {

//   const [mydata, setmydata] = useState([]);
//   // useEffect(() => {
//   // fetch("http://localhost:3100/mydata")
//   // .then((response) => response.json())
//   // .then((data) => setmydata(data));
//   // }, []);

// let totalprice = 0;

//   return (
//     <Box>
  
//         {mydata.map((item) => {

// totalprice += item.price

// return (

// <Paper
// key={item.title}
// sx={{
//   width: "366px",
//   display: "flex",
//   justifyContent: "space-between",
//   pt: "27px",
//   pb: "7px",
//   mt: "22px",
//   position: "relative",
// }}
// >
            
//           <Typography sx={{ ml: "16px" }} variant="h6">
//           {item.title}
//         </Typography>
//         <Typography
//           sx={{
//             mr: "33px",
//             fontWeight: "500",
//             fontSize: "1.2em",
//             opacity: "0.8",
//           }}
//           variant="h6"
//         >
//           ${item.price}
//         </Typography>

//         <IconButton
//           sx={{
//             position: "absolute",
//             right: "0",
//             top: "0",
//           }}
//           onClick={() => {
//             fetch(`http://localhost:3100/mydata/${item.id}`,{
//               method: "DELETE"
//             })
//             const newdata = mydata.filter((object) => {
//               return object.id !== item.id
//             })
//             setmydata(newdata)
//           }}>
//           <CloseIcon sx={{ fontSize: "20px" }} />
//         </IconButton>
//       </Paper>
// );

// })}

      
//       <Typography textAlign="center" mt="50px" variant="h6">&#128073; You Spend ${totalprice}</Typography>

      
    
//     </Box>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <div>
      
    </div>
  );
}

export default Home;

