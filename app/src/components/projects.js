import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Project = ({
  title,
  subtitle,
  overview,
  techStack,
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
      <Typography>
        <b>Tech Stack:</b> {techStack}
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
        title="Self-Hosted Homelab Infrastructure"
        link="https://github.com/Caelan-Ross/gcal-embed"
        projectDate="August 2025 - Present"
        subtitle="Personal Project"
        overview="The homelab is a self-hosted infrastructure project running a range of services for media, document management, and file storage. It's built on Proxmox for virtualization, TrueNAS for storage, and Docker for service deployment — all running on consumer hardware at home."
        techStack="Proxmox, TrueNAS SCALE, ZFS, Docker Compose, Ubuntu Server, Linux, Rclone, SMB/CIFS"
        techOverview="The homelab runs on a three-node Proxmox cluster with dedicated LXC containers and VMs per service. Storage is handled by TrueNAS SCALE over SMB, with ZFS RAIDZ1 providing redundancy across ~16TB. Docker Compose manages multi-container service stacks with volumes mapped to NAS-backed storage. Network stability required a low-level fix to the Intel I219-LM NIC, disabling hardware offloading via bridge config to resolve persistent drops."
      />

      <Project
        title="Platinum Appearance Service Plan"
        projectDate="May - July 2025"
        subtitle="First Canadian Insurance"
        overview="This project was to meet compliance with the insurance regulator's new requirements to permit the sale of the sub-product within Alberta. It combined two existing products into the new PASP, requiring a much more complex logic than the two sub-products did individually. The goal was to create a single product that could be sold by dealers to customers, while still allowing for the same level of customization and flexibility as the previous sub-products."
        techStack="TypeScript, Next.TS, ESLint, SQL, JavaScript, Perl, Visual Studio Code"
        techOverview="The front end uses the typical entry form to collect dealer and customer information, which is then processed by the back end. The back end uses a complex set of business rules to determine if the product is PASP and rather than the two sub-products. The information iZs then sent to the backend for processing into the database for later use in remittances."
      />

      <Project
        title="Protection Product Cost Sheets"
        projectDate="June 2024 - January 2025"
        subtitle="First Canadian Insurance"
        overview="This project was of a larger scale for a singular developer, where I was to take wire-frames of blank 'Cost Sheets' and convert them into a Next.TS-connected database webpage. The goal was to eliminate the need for separate PDFs and support flexible pricing updates across many cost sheet variants. This system saves the company significant time and money by centralizing pricing and simplifying adjustments."
        techStack="TypeScript, Next.TS, ESLint, SQL, MUI, Visual Studio Code" 
        techOverview="The front end uses a query string to fetch and render dealer-specific data via SQL. The result set is mapped into structured objects and dispatched to different dynamic cost sheet components. Each component renders headers, footers, tables, and variants using reusable MUI-based components for maintainability."
      />

      <Project
        title="Monthly Report Generator"
        projectDate="September - December 2022"
        subtitle="CreativeMITE"
        overview="This project automated a time-consuming monthly process of generating SEO heatmap reports for 8 hotel clients. Previously taking 45 minutes per hotel, this solution now does all 8 in under 3 minutes, saving over $1500/month in labor alone."
        techStack="C#, Windows Terminal, Visual Studio, Crazy Egg, VBA"
        techOverview="The app consumes .zip exports from Crazy Egg, unpacks and processes the Excel files inside, then populates a master Excel sheet with macros. It finishes by outputting formatted tables into a Word template file. Manual entry is minimal, with the rest fully automated."
      />

      <Project
        title="Capstone Project"
        projectDate="July - August 2023"
        link="https://github.com/Caelan-Ross/FSWD-Capstone-Project"
        subtitle="University of Alberta - Full-Stack Web Development"
        overview="This was a group project built for a local business, 'The Battery Doctor', to create a full invoice and customer management system as a final capstone project for the Full-Stack Web Development course."
        techStack="C#, ASP.NET Core, Next.JS, APIs, MariaDB, Entity Framework, Axios, MUI"
        techOverview="Users can create and manage customers, inventory, and invoices. Each operation triggers CRUD calls to the C# API, which connects to the MariaDB database. The invoice system uses unique serials to link customers to hardware, and supports warranty tracking and data exports."
      />
    </>
  );
};

export default Projects;
