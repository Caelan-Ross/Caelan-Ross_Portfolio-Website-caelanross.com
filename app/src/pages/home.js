import * as React from 'react';
import Box from '@mui/material/Box';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from "../components/about";
import Typography from "@mui/material/Typography";
const Home = () => {
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
        Caelan Ross
      </Typography>
      <Box
        sx={{
          borderBottom: "5px solid black",
          mx: "auto",
          my: 3,
          width: "100%",
        }}
      />
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Web Developer
      </Typography>
      <Box>
        <article>
          <About />
          <Skills />
          <Projects />
        </article>
      </Box>
    </Box>
  );
};

export default Home;
