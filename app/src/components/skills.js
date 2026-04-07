import React, { useState, useEffect } from "react";
import "../styles/skills.css";
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

  const skillCategories = [
    {
      label: "🖥️ Frontend",
      skills: [
        { name: "JavaScript", yearsOffset: 3 },
        { name: "TypeScript", yearsOffset: 2 },
        { name: "React", yearsOffset: 2 },
        { name: "Next.js", yearsOffset: 2 },
        { name: "HTML5", yearsOffset: 3 },
        { name: "CSS", yearsOffset: 3 },
        { name: "MUI", yearsOffset: 2 },
      ],
    },
    {
      label: "⚙️ Backend",
      skills: [
        { name: "C#", yearsStatic: 3 },
        { name: "ASP.NET Core MVC", yearsStatic: 3 },
        { name: "Python", yearsStatic: 3 },
        { name: "SQL", yearsOffset: 2 },
        { name: "MySQL", yearsOffset: 2 },
        { name: "MariaDB", yearsOffset: 2 },
      ],
    },
    {
      label: "🏗️ Infrastructure",
      skills: [
        { name: "Proxmox", yearsStatic: 1 },
        { name: "TrueNAS", yearsStatic: 1 },
        { name: "ZFS", yearsStatic: 1 },
        { name: "Docker", yearsStatic: 1 },
        { name: "Docker Compose", yearsStatic: 1 },
        { name: "Ubuntu Server", yearsStatic: 1 },
        { name: "Linux", yearsStatic: 2 },
      ],
    },
    {
      label: "🌐 Networking & Storage",
      skills: [
        { name: "SMB/CIFS", yearsStatic: 1 },
        { name: "Pi-hole", yearsStatic: 1 },
        { name: "NAS Administration", yearsStatic: 1 },
        { name: "Hardware Troubleshooting", yearsOffset: 3 },
      ],
    },
    {
      label: "☁️ Cloud & Backup",
      skills: [
        { name: "Rclone", yearsStatic: 1 },
        { name: "Cloud Sync", yearsStatic: 1 },
      ],
    },
    {
      label: "🧰 Dev Tools",
      skills: [
        { name: "Git / GitHub", yearsOffset: 3 },
        { name: "ESLint", yearsOffset: 2 },
        { name: "Visual Studio Code", yearsOffset: 3 },
        { name: "Windows Terminal", yearsOffset: 2 },
      ],
    },
    {
      label: "📐 Dev Practices",
      skills: [
        { name: "Code Reviews", yearsOffset: 2 },
        { name: "Reusable Components", yearsOffset: 2 },
        { name: "Database Integration", yearsOffset: 2 },
        { name: "Automation", yearsOffset: 2 },
      ],
    },
    {
      label: "🤖 AI-Assisted Development",
      skills: [
        { name: "GitHub Copilot", yearsStatic: 1 },
        { name: "Claude", yearsStatic: 1 },
      ],
    },
  ];

  const renderSkillTags = (skills) =>
    skills.map((skill, index) => {
      const displayYears =
        skill.yearsStatic !== undefined
          ? skill.yearsStatic
          : yearsPassed + skill.yearsOffset;
      return (
        <div key={index} className="skill-tag">
          <span style={{ userSelect: "none" }}>{skill.name}</span>
          <span style={{ fontSize: "0.85em", color: "#666", userSelect: "none" }}>
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
          {skillCategories.map((category, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {category.label}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {renderSkillTags(category.skills)}
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Skills;