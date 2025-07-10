import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        width: "100%",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        pt: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Typography variant="h1" align="center" sx={{ mb: 2 }}>
        Contact Me
      </Typography>
      <Box
        sx={{
          borderBottom: "5px solid black",
          mx: "auto",
          my: 3,
          width: "100%",
        }}
      />
      <ContactForm />
    </Box>
  );
};

export default Contact;
