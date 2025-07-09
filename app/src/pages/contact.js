import ContactForm from "../components/contactForm";
import * as React from 'react';
import Box from '@mui/material/Box';

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
      <Box textAlign="center" mb={2}>
        <h1 style={{ margin: 0 }}>Contact</h1>
      </Box>
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
