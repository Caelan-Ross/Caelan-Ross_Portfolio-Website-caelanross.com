import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Project = ({
  title,
  subtitle,
  overview,
  techStack,
  techOverview,
  link,
  projectDate,
}) => {
  const [expanded, setExpanded] = useState(false);
  const techItems = techStack.split(",").map((t) => t.trim());

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 2,
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(88, 166, 255, 0.1)",
          borderColor: "rgba(88, 166, 255, 0.3)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 1,
            mb: 0.5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: { xs: "1rem", sm: "1.15rem" },
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
          <Chip
            label={link ? "Public" : "Internal"}
            size="small"
            sx={{
              backgroundColor: link
                ? "rgba(88, 166, 255, 0.12)"
                : "rgba(139, 148, 158, 0.12)",
              color: link ? "#58a6ff" : "#8b949e",
              border: `1px solid ${link ? "rgba(88,166,255,0.3)" : "#30363d"}`,
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.62rem",
              height: 22,
            }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontSize: "0.82rem" }}
        >
          {subtitle}
          {projectDate ? ` · ${projectDate}` : ""}
        </Typography>

        <Typography
          variant="body2"
          sx={{ mb: 2.5, lineHeight: 1.75, color: "rgba(230, 237, 243, 0.8)" }}
        >
          {overview}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {techItems.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#30363d",
                color: "#8b949e",
                fontSize: "0.7rem",
                height: 22,
                transition: "border-color 0.15s ease, color 0.15s ease",
                "&:hover": { borderColor: "#58a6ff", color: "#58a6ff" },
              }}
            />
          ))}
        </Box>
      </CardContent>

      {techOverview && (
        <>
          <Divider sx={{ borderColor: "#30363d" }} />
          <Box sx={{ px: 2, py: 0.5 }}>
            <Button
              size="small"
              onClick={() => setExpanded(!expanded)}
              endIcon={
                expanded ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )
              }
              sx={{
                color: "text.secondary",
                textTransform: "none",
                fontSize: "0.75rem",
              }}
            >
              Technical Details
            </Button>
            <Collapse in={expanded}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ pb: 1.5, lineHeight: 1.75 }}
              >
                {techOverview}
              </Typography>
            </Collapse>
          </Box>
        </>
      )}

      {link && (
        <>
          <Divider sx={{ borderColor: "#30363d" }} />
          <CardActions sx={{ px: 2, py: 1 }}>
            <Link href={link} target="_blank" rel="noreferrer" underline="none">
              <Button
                size="small"
                startIcon={<OpenInNewIcon fontSize="small" />}
                sx={{ textTransform: "none", fontSize: "0.78rem" }}
              >
                View Repo
              </Button>
            </Link>
          </CardActions>
        </>
      )}
    </Card>
  );
};

const sectionHeadingSx = {
  pl: 4,
  pb: 1,
  pt: 4,
  "&::after": {
    content: '""',
    display: "block",
    width: 56,
    height: 3,
    background: "linear-gradient(90deg, #58a6ff, #a78bfa)",
    borderRadius: 2,
    mt: 1,
  },
};

const Projects = () => {
  return (
    <>
      <Typography variant="h2" sx={sectionHeadingSx}>
        Projects:
      </Typography>

      <Box
        sx={{
          px: 4,
          pb: 4,
          pt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 3,
        }}
      >
        <Project
          title="Self-Hosted Homelab Infrastructure"
          link="https://github.com/Caelan-Ross/gcal-embed"
          projectDate="August 2025 – Present"
          subtitle="Personal Project"
          overview="A self-hosted infrastructure project running media, document management, and file storage services. Built on Proxmox for virtualization, TrueNAS for storage, and Docker for service deployment — all on consumer hardware at home."
          techStack="Proxmox, TrueNAS SCALE, ZFS, Docker Compose, Ubuntu Server, Linux, Rclone, SMB/CIFS"
          techOverview="Runs on a three-node Proxmox cluster with dedicated LXC containers and VMs per service. Storage is handled by TrueNAS SCALE over SMB, with ZFS RAIDZ1 providing redundancy across ~16TB. Docker Compose manages multi-container service stacks with NAS-backed volumes. Resolved a hardware-level NIC instability bug (Intel I219-LM) by disabling offloading via bridge config to eliminate persistent drops."
        />

        <Project
          title="Platinum Appearance Service Plan"
          projectDate="May – July 2025"
          subtitle="First Canadian Insurance"
          overview="Compliance-driven project combining two existing sub-products into a new PASP to meet insurance regulator requirements for Alberta sales — requiring significantly more complex business logic than the two sub-products individually."
          techStack="TypeScript, Next.js, ESLint, SQL, JavaScript, Perl, Visual Studio Code"
          techOverview="The front end uses the typical entry form to collect dealer and customer information, which is then processed by a complex set of business rules to determine PASP eligibility. Data is sent to the backend for processing into the database for later use in remittances."
        />

        <Project
          title="Protection Product Cost Sheets"
          projectDate="June 2024 – January 2025"
          subtitle="First Canadian Insurance"
          overview="Converted wire-frames of blank Cost Sheets into a Next.js-connected database webpage, eliminating separate PDFs and enabling flexible pricing updates across many cost sheet variants — saving the company significant time and money."
          techStack="TypeScript, Next.js, ESLint, SQL, MUI, Visual Studio Code"
          techOverview="The front end uses a query string to fetch and render dealer-specific data via SQL. The result set is mapped into structured objects dispatched to different dynamic cost sheet components. Each component renders headers, footers, tables, and variants using reusable MUI-based components for maintainability."
        />

        <Project
          title="Pre-Authorized Credit Modernization"
          projectDate="January 2026 – June 2026"
          subtitle="First Canadian Insurance"
          overview="Overhauled a legacy pre-authorized credit system, expanding its data model and adding secure cross-origin API access for the legacy frontend — preserving full backward compatibility while doubling the core table's column capacity."
          techStack="Next.js (TS), DB2, SQL, ESLint, MUI, Visual Studio Code"
          techOverview="Extended the database layer with 6 new DB2 value-definition tables (avg. 6 columns each) to support a schema expansion from 10 to 20 columns. Built a dynamically generated popup in vanilla JavaScript for the legacy system consuming internal APIs with no framework dependency. Developed a new API endpoint using HMAC-based secret key pairs and request timestamps for secure cross-origin content delivery."
        />

        <Project
          title="Monthly Report Generator"
          projectDate="September – December 2022"
          subtitle="CreativeMITE"
          overview="Automated a time-consuming monthly SEO heatmap reporting process across 8 hotel clients. Reduced per-cycle time from 6 hours to under 5 minutes, saving over $1,500/month in labor."
          techStack="C#, Windows Terminal, Visual Studio, Crazy Egg, VBA"
          techOverview="Consumes .zip exports from Crazy Egg, unpacks and processes the Excel files inside, then populates a master Excel sheet with macros. Outputs formatted tables into a Word template file with minimal manual entry."
        />

        <Project
          title="Capstone Project"
          projectDate="July – August 2023"
          link="https://github.com/Caelan-Ross/FSWD-Capstone-Project"
          subtitle="University of Alberta – Full-Stack Web Development"
          overview="Group project for local business 'The Battery Doctor' — a full invoice and customer management system built as the final capstone for the Full-Stack Web Development program."
          techStack="C#, ASP.NET Core, Next.js, MariaDB, Entity Framework, Axios, MUI"
          techOverview="Users can create and manage customers, inventory, and invoices. Each operation triggers CRUD calls to the C# API connected to MariaDB. The invoice system uses unique serials to link customers to hardware, and supports warranty tracking and data exports."
        />
      </Box>
    </>
  );
};

export default Projects;
