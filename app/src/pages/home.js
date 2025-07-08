import * as React from 'react';
import Box from '@mui/material/Box';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from "../components/about";

const Home = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop={10}
        >
          <h1>Portfolio</h1>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <h2>Caelan Ross - Web Developer</h2>
        </Box>
        {/* Horizontal divider line */}
        <Box
          sx={{
            borderBottom: "5px solid black",
            margin: "0 auto",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        />
        <Box
          display="flex"
          justifyContent="Left"
          alignItems="center"
          paddingLeft={10}
          minHeight="10vh"
        >
          <article>
            <About />
            <Skills />
            <Projects />
          </article>
        </Box>
      </div>
    </>
  );
};

export default Home;
