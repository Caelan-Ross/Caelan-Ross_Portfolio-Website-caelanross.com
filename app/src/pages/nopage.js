import React from "react";
import { Link } from "react-router-dom"; // if you're using React Router
import { Box, Typography, Button } from "@mui/material";

const NoPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for doesn’t exist or has been moved.
      </Typography>
      <Button variant="outlined" color="primary" component={Link} to="/">
        Go Home
      </Button>
    </Box>
  );
};

export default NoPage;
