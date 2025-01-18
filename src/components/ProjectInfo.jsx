import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import ProjectModal from "./ProjectModal";

const ProjectInfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  h2 {
    font-family: "Caveat Brush", cursive;
    color: #719ece;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.type === "personal" ? "#f0f8ff" : "#ffe4e1"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function ProjectInfo() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // JSON 파일 가져오기
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects: ", error));
  }, []);

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const filterProjects = (type) =>
    projects.filter((project) => project.type === type);

  return (
    <ProjectInfoWrapper>
      <Section id="personal-projects" type="personal">
        <h2>Personal Projects</h2>
        <Slider
          projects={filterProjects("personal")}
          onProjectClick={setSelectedProject}
        />
        <StyledButton onClick={() => scrollToSection("team-projects")}>
          Go To Team Projects
        </StyledButton>
      </Section>

      <Section id="team-projects" type="team">
        <h2>Team Projects</h2>
        <Slider
          projects={filterProjects("team")}
          onProjectClick={setSelectedProject}
        />
        <StyledButton onClick={() => scrollToSection("personal-projects")}>
          Go To Personal Projects
        </StyledButton>
      </Section>

      <ProjectModal
        project={selectedProject}
        onClose={handleModalClose}
      ></ProjectModal>
    </ProjectInfoWrapper>
  );
}
