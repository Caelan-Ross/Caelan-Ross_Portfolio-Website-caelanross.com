import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-no-background.png";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontSize: 16,
  fontWeight: 400,
  color: "#ccc9d3",
  position: "relative",
  "&.active": {
    color: "#d0bbbb",
    fontWeight: 500,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -4,
      left: 0,
      width: "100%",
      height: 2,
      backgroundColor: "#d0bbbb",
    },
  },
}));

const StyledAnchor = styled(Link)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: "#ccc9d3",
  textDecoration: "none",
  "&:hover": {
    color: "#d0bbbb",
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#303039",
        height: "60px",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="logo with words Caelan Ross."
          sx={{
            maxHeight: 50,
            maxWidth: 200,
            mt: "-6px",
          }}
        />
        <Stack direction="row" spacing={6}>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
          <StyledAnchor
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </StyledAnchor>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
