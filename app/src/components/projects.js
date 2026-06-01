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
          overview="Runs production-grade self-hosted services across multiple Proxmox hypervisors with 5+ VMs and LXC containers. Manages ~16TB of NAS-backed storage and multi-service Docker stacks including Jellyfin, Paperless-ngx, and Immich."
          techStack="Proxmox, TrueNAS SCALE, ZFS, Docker Compose, Ubuntu Server, Linux, Rclone, SMB/CIFS"
          techOverview="TrueNAS SCALE handles storage via ZFS RAIDZ1 and SMB shares, with automated cloud backup via Rclone. Docker Compose stacks map persistent volumes to NAS storage. Diagnosed a hardware-level NIC instability bug (Intel I219-LM) by disabling offloading via bridge config to eliminate recurring network drops."
        />

        <Project
          title="Platinum Appearance Service Plan"
          projectDate="May – July 2025"
          subtitle="First Canadian Insurance"
          overview="Compliance-driven project combining two existing sub-products into a new PASP to meet insurance regulator requirements for Alberta sales, requiring significantly more complex business logic than the two sub-products individually."
          techStack="TypeScript, Next.js, ESLint, SQL, JavaScript, Perl, Visual Studio Code"
          techOverview="The front end uses the standard entry form to collect dealer and customer information, processed by a complex set of business rules to determine PASP eligibility. Data is passed to the backend for processing into the database for later use in remittances."
        />

        <Project
          title="Protection Product Cost Sheets"
          projectDate="June 2024 – January 2025"
          subtitle="First Canadian Insurance"
          overview="Eliminated manual PDF updates by converting static cost sheets into a Next.js-connected database system supporting 10+ product variants. Enabled real-time dealer pricing lookup without touching a file."
          techStack="Next.js (TS), SQL, ESLint, MUI, VS Code"
          techOverview="Built reusable Next.js components for each cost sheet variant. Dealer-specific data is fetched at render time via URL-based query selectors backed by SQL APIs. Data parsers and field mappings handle 10+ product sheet variants with minimal per-variant code, reducing update effort by 100%."
        />

        <Project
          title="Pre-Authorized Credit Modernization"
          projectDate="January 2026 – June 2026"
          subtitle="First Canadian Insurance"
          overview="Expanded a legacy pre-authorized credit system from 10 to 20 columns while maintaining full backward compatibility. Added a modern UI layer and secure cross-origin API access for the legacy frontend."
          techStack="JavaScript, HTMX, SQL, REST API"
          techOverview="Designed 6 DB2 value-definition lookup tables to support the schema expansion. Built a vanilla JavaScript popup consuming internal APIs with no framework dependency. Developed an API endpoint using HMAC-based key pairs and request timestamps for cross-origin authentication."
        />

        <Project
          title="Monthly Report Generator"
          projectDate="September – December 2022"
          subtitle="CreativeMITE"
          overview="Cut reporting time from 6 hours to under 5 minutes per cycle across 8+ hotel properties, saving $1,500+ per month. Fully automated: ZIP extraction, Excel processing, and Word population with minimal manual input."
          techStack="C#, VBA, Crazy Egg, Visual Studio, Windows Terminal"
          techOverview="Consumes Crazy Egg ZIP exports, unpacks and processes the Excel files inside, then aggregates analytics across hotel properties into structured tables and graphs. Outputs formatted data into a Word template."
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
