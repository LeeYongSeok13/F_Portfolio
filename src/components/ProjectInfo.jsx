import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // 아이콘
import Slider from "./Slider";
import ProjectModal from "./ProjectModal"; // 프로젝트 모달

const ProjectInfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth;
  position: relative;
`;

const Section = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ type }) =>
    type === "personal"
      ? "linear-gradient(to right, #e3f2fd, #bbdefb)" // 파란색 계열
      : "linear-gradient(to right, #a5d6a7, #81c784)"}; // 녹색 계열
  transition: background 0.5s ease-in-out;
  position: relative;
`;

const Title = styled.h2`
  font-family: "Caveat Brush", cursive;
  font-size: 2.5rem;
  color: ${({ type }) => (type === "personal" ? "#3b5998" : "#2c6b2f")};
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ type }) => (type === "personal" ? "#3b5998" : "#2c6b2f")};
    transform: scale(1.2);
  }
`;

export default function ProjectInfo() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const sections = useRef([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch projects");
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects: ", error));
  }, []);

  const scrollToSection = (index) => {
    if (sections.current[index]) {
      sections.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleModalClose = () => setSelectedProject(null);
  const filterProjects = (type) =>
    projects.filter((project) => project.type === type);

  return (
    <ProjectInfoWrapper>
      <motion.div>
        <Section ref={(el) => (sections.current[0] = el)} type="personal">
          <Title type="personal">Personal Projects</Title>{" "}
          <Slider
            projects={filterProjects("personal")}
            onProjectClick={setSelectedProject}
          />
          <ArrowContainer>
            <ArrowButton type="personal" onClick={() => scrollToSection(1)}>
              <FaChevronDown />
            </ArrowButton>
          </ArrowContainer>
        </Section>

        <Section ref={(el) => (sections.current[1] = el)} type="team">
          <Title type="team">Team Projects</Title>
          <Slider
            projects={filterProjects("team")}
            onProjectClick={setSelectedProject}
          />
          <ArrowContainer>
            <ArrowButton type="team" onClick={() => scrollToSection(0)}>
              <FaChevronUp />
            </ArrowButton>
          </ArrowContainer>
        </Section>
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleModalClose}
          type={selectedProject.type}
        />
      )}
    </ProjectInfoWrapper>
  );
}
