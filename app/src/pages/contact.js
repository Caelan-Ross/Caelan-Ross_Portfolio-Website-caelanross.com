import ContactForm from "../components/contactForm";
import * as React from 'react';
import Box from '@mui/material/Box';
const Contact = () => {
  return (
    <>
    <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%)'
        }}
      >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="20vh"
      >
        <h1>Contact</h1>
      </Box>
      <ContactForm />
      </div>
    </>
  );
};

export default Contact;
