import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import About from "../components/about";

// ── Section heading with gradient accent underline ──────────────────────────
const SectionHeading = ({ children }) => (
  <Typography
    variant="h2"
    sx={{
      pb: 1,
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
    {children}
  </Typography>
);

// ── Core skills shown on the home page ─────────────────────────────────────
const CORE_SKILLS = [
  {
    label: "TypeScript / JavaScript",
    detail: "4+ years building typed, production React and Next.js apps",
  },
  {
    label: "React / Next.js",
    detail: "Component architecture, SSR, SQL-backed APIs, reusable MUI systems",
  },
  {
    label: "C# / ASP.NET Core",
    detail: "Backend services, REST APIs, Entity Framework, legacy integration",
  },
  {
    label: "SQL & Databases",
    detail: "Schema design, DB2, MariaDB, MySQL — query tuning and migrations",
  },
  {
    label: "Linux & Infrastructure",
    detail: "Proxmox, Docker Compose, TrueNAS, Ubuntu Server, self-hosted stacks",
  },
];

// ── Featured project (most recent) ─────────────────────────────────────────
const FEATURED_PROJECT = {
  title: "Pre-Authorized Credit Modernization",
  subtitle: "First Canadian Insurance",
  projectDate: "January 2026 – June 2026",
  overview:
    "Expanded a legacy pre-authorized credit system from 10 to 20 columns while maintaining full backward compatibility. Added a modern UI layer and secure cross-origin API access for the legacy frontend.",
  techStack: "JavaScript, HTMX, SQL, REST API",
  techOverview:
    "Designed 6 DB2 value-definition lookup tables to support the schema expansion. Built a vanilla JavaScript popup consuming internal APIs with no framework dependency. Developed an API endpoint using HMAC-based key pairs and request timestamps for cross-origin authentication.",
};

const FeaturedProjectCard = () => {
  const [expanded, setExpanded] = useState(false);
  const techItems = FEATURED_PROJECT.techStack.split(",").map((t) => t.trim());

  return (
    <Card
      sx={{
        backgroundColor: "#161b22",
        border: "1px solid rgba(88, 166, 255, 0.3)",
        borderRadius: 2,
        transition: "box-shadow 0.2s ease",
        "&:hover": {
          boxShadow: "0 8px 28px rgba(88, 166, 255, 0.14)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
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
            }}
          >
            {FEATURED_PROJECT.title}
          </Typography>
          <Chip
            label="Internal"
            size="small"
            sx={{
              backgroundColor: "rgba(139, 148, 158, 0.12)",
              color: "#8b949e",
              border: "1px solid #30363d",
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
          {FEATURED_PROJECT.subtitle} · {FEATURED_PROJECT.projectDate}
        </Typography>

        <Typography
          variant="body2"
          sx={{ mb: 2.5, lineHeight: 1.75, color: "rgba(230, 237, 243, 0.8)" }}
        >
          {FEATURED_PROJECT.overview}
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
                "&:hover": { borderColor: "#58a6ff", color: "#58a6ff" },
              }}
            />
          ))}
        </Box>
      </CardContent>

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
          sx={{ color: "text.secondary", textTransform: "none", fontSize: "0.75rem" }}
        >
          Technical Details
        </Button>
        <Collapse in={expanded}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pb: 1.5, lineHeight: 1.75 }}
          >
            {FEATURED_PROJECT.techOverview}
          </Typography>
        </Collapse>
      </Box>
    </Card>
  );
};

// ── Home page ───────────────────────────────────────────────────────────────
const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        width: "100%",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        pt: { xs: 4, sm: 6, md: 8 },
        pb: 8,
      }}
    >
      {/* Hero */}
      <Typography
        variant="h1"
        align="center"
        sx={{
          mb: 1,
          background: "linear-gradient(135deg, #58a6ff 0%, #a78bfa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Caelan Ross
      </Typography>
      <Divider sx={{ mx: "auto", my: 3, borderColor: "#30363d" }} />
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, color: "text.secondary" }}
      >
        Full Stack Developer
      </Typography>

      {/* About Me */}
      <About />

      {/* Core Skills Preview */}
      <Box sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <SectionHeading>Core Skills</SectionHeading>
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/skills")}
            sx={{ textTransform: "none", mb: 0.5 }}
          >
            View all skills
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {CORE_SKILLS.map((skill, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "#161b22",
                border: "1px solid #30363d",
                borderRadius: 2,
                p: 2.5,
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  borderColor: "rgba(88, 166, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(88, 166, 255, 0.08)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.9rem",
                  color: "#58a6ff",
                  mb: 0.75,
                }}
              >
                {skill.label}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6, fontSize: "0.82rem" }}
              >
                {skill.detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Featured Project Preview */}
      <Box sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <SectionHeading>Featured Project</SectionHeading>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, fontSize: "0.82rem" }}
            >
              Most recent
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/projects")}
            sx={{ textTransform: "none", mb: 0.5 }}
          >
            View all projects
          </Button>
        </Box>

        <FeaturedProjectCard />
      </Box>
    </Box>
  );
};

export default Home;
