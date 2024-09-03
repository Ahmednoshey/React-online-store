// import "./Create.css";
// import { Box, Button, InputAdornment, TextField } from "@mui/material";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const Create = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = ({ title, price }) => {
//     price = Number(price)
//     fetch("http://localhost:3100/mydata", {
//       method: "post",
//       headers: {
//         "content-type": "aplication/json",
//       },
//       body: JSON.stringify({ title, price }),
//     }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <Box
//       onSubmit={handleSubmit(onSubmit)}
//       component="form"
//       sx={{ width: "380px" }}
//     >
//       <TextField
//         {...register("title", {
//           required: { value: true, message: "This TextField is Required" },
//           minLength: {
//             value: 3,
//             message: "You Should Write 3 Letters Or More",
//           },
//         })}
//         fullWidth
//         label="Transection Title"
//         sx={{ display: "block", mt: "22px" }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">&#128073;</InputAdornment>
//           ),
//         }}
//         variant="filled"
//         error={Boolean(errors.title)}
//         helperText={
//           Boolean(errors.title) ? errors.title?.message.toString() : null
//         }
//       />

//       <TextField
//         {...register("price", {
//           required: { value: true, message: "This TextField is Required" },
//         })}
//         fullWidth
//         label="Amount"
//         sx={{ display: "block", mt: "22px" }}
//         InputProps={{
//           startAdornment: <InputAdornment position="start">$</InputAdornment>,
//         }}
//         variant="filled"
//         error={Boolean(errors.price)}
//         type="number"
//         helperText={
//           Boolean(errors.price) ? errors.price?.message.toString() : null
//         }
//       />

//       <Button type="submit" color="primary" variant="contained" sx={{ mt: "20px" }}>
//         Submit
//         <KeyboardArrowRightIcon />
//       </Button>
//     </Box>
//   );
// };

// export default Create;

import React from 'react';

const Create = () => {
  return (
    <div>
      
    </div>
  );
}

export default Create;
