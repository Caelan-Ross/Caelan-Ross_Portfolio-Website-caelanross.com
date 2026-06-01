import Box from "@mui/material/Box";
import Projects from "../components/projects";

const ProjectsPage = () => {
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
      <Projects />
    </Box>
  );
};

export default ProjectsPage;
