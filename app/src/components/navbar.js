import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-no-background.png";

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 400,
  color: "#8b949e",
  position: "relative",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#e6edf3",
  },
  "&.active": {
    color: "#58a6ff",
    fontWeight: 500,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -4,
      left: 0,
      width: "100%",
      height: 2,
      background: "linear-gradient(90deg, #58a6ff, #a78bfa)",
      borderRadius: 2,
    },
  },
}));

const StyledAnchor = styled(Link)(() => ({
  fontSize: 15,
  fontWeight: 400,
  color: "#8b949e",
  textDecoration: "none",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#e6edf3",
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#161b22",
        borderBottom: "1px solid #30363d",
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
          sx={{ maxHeight: 50, maxWidth: 200, mt: "-6px" }}
        />
        <Stack direction="row" spacing={4}>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/skills">Skills</StyledNavLink>
          <StyledNavLink to="/projects">Projects</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
          <StyledAnchor href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </StyledAnchor>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
