import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flex: "1 0 auto" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
