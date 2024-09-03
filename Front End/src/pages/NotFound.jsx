

import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';


const NotFound = () => {
  const theme = useTheme()
  return (
    <Box>
    <Typography variant="h6" color={theme.palette.error.main}>this page not found</Typography>
    </Box>
  );
}

export default NotFound;
