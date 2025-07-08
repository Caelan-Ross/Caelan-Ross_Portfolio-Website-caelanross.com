import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Project = ({
  title,
  subtitle,
  overview,
  tools,
  techniques,
  techOverview,
  link,
  projectDate,
}) => (
  <Box sx={{ mb: 6 }}>
    {/* Project Title */}
    <Typography variant="h4" align="center" gutterBottom>
      {title}
    </Typography>
    <Box sx={{ textAlign: "center", mb: 2 }}>
      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        paddingBottom={link ? 1 : 0}
      >
        {projectDate}
      </Typography>
      {link ? (
        <>
          <Link href={link} target="_blank" rel="noreferrer" underline="none">
            <Button variant="outlined" size="small">
              View Repo
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            Internal
          </Typography>
        </>
      )}
    </Box>

    {/* Main Content */}
    <Box sx={{ px: 4 }}>
      <Typography variant="h6" gutterBottom>
        Overview
      </Typography>
      <Typography paragraph>{overview}</Typography>

      <Typography variant="h6" gutterBottom>
        Tools & Techniques
      </Typography>
      <Typography>
        <b>Tools:</b> {tools}
      </Typography>
      <Typography>
        <b>Techniques:</b> {techniques}
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Technical Operation Overview
      </Typography>
      <Typography paragraph>{techOverview}</Typography>
    </Box>
  </Box>
);

const Projects = () => {
  return (
    <>
      <Typography variant="h2" sx={{ pl: 4, pb: 4 }} paddingTop={4}>
        Projects:
      </Typography>

      <Project
        title="Protection Product Cost Sheets"
        projectDate="June 2024 - January 2025"
        subtitle="First Canadian Insurance"
        overview="This project was of a larger scale for a singular developer, where I was to take wireframes of blank 'Cost Sheets' and convert them into a Next.TS-connected database webpage. The goal was to eliminate the need for separate PDFs and support flexible pricing updates across many cost sheet variants. This system saves the company significant time and money by centralizing pricing and simplifying adjustments."
        tools="TypeScript, Next.TS, ESLint, SQL, MUI, Visual Studio Code"
        techniques="Complex custom objects, Database connectivity, Reusable components, Complex styling"
        techOverview="The front end uses a query string to fetch and render dealer-specific data via SQL. The result set is mapped into structured objects and dispatched to different dynamic cost sheet components. Each component renders headers, footers, tables, and variants using reusable MUI-based components for maintainability."
      />

      <Project
        title="Monthly Report Generator"
        projectDate="September - December 2022"
        subtitle="CreativeMITE"
        overview="This project automated a time-consuming monthly process of generating SEO heatmap reports for 8 hotel clients. Previously taking 45 minutes per hotel, this solution now does all 8 in under 3 minutes, saving over $1500/month in labor alone."
        tools="C#, Windows Terminal, Visual Studio, Crazy Egg, VBA"
        techniques="Automated file extraction, Automated file tree generation, Data processing with macros"
        techOverview="The app consumes .zip exports from Crazy Egg, unpacks and processes the Excel files inside, then populates a master Excel sheet with macros. It finishes by outputting formatted tables into a Word template file. Manual entry is minimal, with the rest fully automated."
      />

      <Project
        title="Capstone Project"
        projectDate="July - August 2023"
        link="https://github.com/Caelan-Ross/FSWD-Capstone-Project"
        subtitle="University of Alberta - Full-Stack Web Development"
        overview="This was a group project built for a local business, 'The Battery Doctor', to create a full invoice and customer management system as a final capstone project for the Full-Stack Web Development course."
        tools="C#, ASP.NET Core, Next.JS, APIs, MariaDB, Entity Framework, Axios, MUI"
        techniques="C# back-end API, Next.JS front-end, Excel data exports, Styled component reuse"
        techOverview="Users can create and manage customers, inventory, and invoices. Each operation triggers CRUD calls to the C# API, which connects to the MariaDB database. The invoice system uses unique serials to link customers to hardware, and supports warranty tracking and data exports."
      />
    </>
  );
};

export default Projects;
