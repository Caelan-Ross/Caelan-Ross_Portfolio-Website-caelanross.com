import React, { useState, useEffect } from "react";
import "../styles/skills.css"; // keep this for .skill-tag styling
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Skills = () => {
  const [yearsPassed, setYearsPassed] = useState(null);

  useEffect(() => {
    const targetDate = new Date("2024-01-13");
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    setYearsPassed(years);
  }, []);

  const languageSkills = [
    { name: "JavaScript", yearsOffset: 3 },
    { name: "HTML5", yearsOffset: 3 },
    { name: "CSS", yearsOffset: 3 },
    { name: "React", yearsOffset: 2 },
    { name: "Next.js (TS/JS)", yearsOffset: 2 },
    { name: "TypeScript", yearsOffset: 2 },
    { name: "MySQL", yearsOffset: 2 },
    { name: "MariaDB", yearsOffset: 2 },
    { name: "Entity Framework", yearsOffset: 2 },
    { name: "C#", yearsStatic: 3 },
    { name: "ASP.NET", yearsStatic: 3 },
    { name: ".NET Core MVC", yearsStatic: 3 },
    { name: "Python", yearsStatic: 3 },
    { name: "C++", yearsStatic: 1 },
    { name: "Java", yearsStatic: 1 },
  ];

  const toolSkills = [
    { name: "Visual Studio", yearsOffset: 3 },
    { name: "Git / GitHub", yearsOffset: 3 },
    { name: "BitBucket", yearsOffset: 2 },
    { name: "SourceTree", yearsOffset: 2 },
    { name: "Thorough Code Documentation", yearsOffset: 3 },
  ];

  const renderSkillTags = (skills) =>
    skills.map((skill, index) => {
      const displayYears =
        skill.yearsStatic !== undefined
          ? skill.yearsStatic
          : yearsPassed + skill.yearsOffset;

      return (
        <div key={index} className="skill-tag">
          <span>{skill.name}</span>
          <span style={{ fontSize: "0.85em", color: "#666" }}>
            ({displayYears}+ yrs)
          </span>
        </div>
      );
    });

  return (
    <>
      <Typography variant="h2" sx={{ pl: 4, pb: 4 }}>
        Skills:
      </Typography>

      {yearsPassed !== null && (
        <Box sx={{ px: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            🧠 Languages & Frameworks
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", mb: 4 }}>
            {renderSkillTags(languageSkills)}
          </Box>

          <Typography variant="h5" sx={{ mb: 2 }}>
            🧰 Tools & Practices
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {renderSkillTags(toolSkills)}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Skills;
