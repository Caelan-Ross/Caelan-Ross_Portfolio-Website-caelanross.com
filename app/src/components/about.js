import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box sx={{ px: 4, py: 4 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
        I’m based in <strong>Sherwood Park, Alberta</strong>, and I’m actively seeking opportunities to grow as a developer. <br /><br />
        I’m open to both <strong>remote positions</strong> and potential <strong>relocation</strong> to major tech hubs throughout 
        <strong> Alberta</strong> and <strong>British Columbia</strong>. My goal is to work with teams that value clean code,
        modern development practices, and continual learning.
      </Typography>
    </Box>
  );
};

export default About;