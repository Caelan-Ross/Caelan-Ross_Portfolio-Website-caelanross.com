import * as React from 'react';
import Box from '@mui/material/Box';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from "../components/about";

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
      <Box textAlign="center" mb={2}>
        <h1 style={{ margin: 0 }}>Portfolio</h1>
      </Box>
      <Box
        sx={{
          borderBottom: "5px solid black",
          mx: "auto",
          my: 3,
          width: "100%",
        }}
      />
      <Box textAlign="center" mb={2}>
        <h2 style={{ margin: 0 }}>Caelan Ross - Web Developer</h2>
      </Box>
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
