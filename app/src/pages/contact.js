import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
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
        pb: 8,
      }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{
          mb: 1,
          background: "linear-gradient(135deg, #58a6ff 0%, #a78bfa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Contact Me
      </Typography>
      <Divider sx={{ mx: "auto", my: 3, borderColor: "#30363d" }} />
      <Typography variant="h4" align="center" sx={{ mb: 6, color: "text.secondary" }}>
        Let's connect
      </Typography>

      <ContactForm />
    </Box>
  );
};

export default Contact;
