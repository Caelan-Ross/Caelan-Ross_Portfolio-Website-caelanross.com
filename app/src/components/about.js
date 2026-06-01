import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        mx: 4,
        my: 2,
        backgroundColor: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          "&::after": {
            content: '""',
            display: "block",
            width: 56,
            height: 3,
            background: "linear-gradient(90deg, #58a6ff, #a78bfa)",
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(230, 237, 243, 0.85)" }}
      >
        I'm based in <strong>Sherwood Park, Alberta</strong>, with over{" "}
        <strong>4 years of professional experience</strong> in full-stack
        development and a <strong>2-year Diploma in Full-Stack Web Development</strong>{" "}
        from the <strong>University of Alberta</strong>.
        <br />
        <br />
        I'm open to both <strong>remote positions</strong> and potential{" "}
        <strong>relocation</strong> throughout <strong>Alberta</strong> and{" "}
        <strong>British Columbia</strong>. I'm looking to grow beyond web
        development into broader engineering challenges: backend systems,
        infrastructure, and anywhere that good software gets built with
        teams that care about craft.
      </Typography>
    </Box>
  );
};

export default About;
