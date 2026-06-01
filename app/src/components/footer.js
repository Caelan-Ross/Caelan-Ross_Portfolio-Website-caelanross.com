import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const link =
    "https://github.com/Caelan-Ross/Caelan-Ross_Portfolio-Website-caelanross.com";

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#161b22",
        borderTop: "1px solid #30363d",
        color: "#8b949e",
        py: 2,
        mt: "auto",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          © {new Date().getFullYear()} Caelan Ross
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href={link} target="_blank" rel="noreferrer" underline="none">
            <Button variant="outlined" size="small" sx={{ fontSize: "0.75rem", textTransform: "none" }}>
              View Repo
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
