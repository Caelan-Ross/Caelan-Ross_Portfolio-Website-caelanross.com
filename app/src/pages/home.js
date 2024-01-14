import * as React from 'react';
import Box from '@mui/material/Box';
import Projects from '../components/projects';
import Skills from '../components/skills';

const Home = () => {
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
          <h1>Portfolio</h1>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        ><h2>Caelan Ross - Full-Stack Web Developer</h2>
        </Box>
        <Box
          display="flex"
          justifyContent="Left"
          alignItems="center"
          paddingLeft={10}
          minHeight="10vh"
        >
          <article>
            <Skills/>
            <Projects/>

          </article>
        </Box>
      </div>
    </>
  );
};

export default Home;
