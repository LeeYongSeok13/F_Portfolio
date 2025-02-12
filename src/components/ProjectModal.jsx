import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  img {
    max-width: 100%;
    max-height: auto;
    object-fit: unset;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding-right: 10px;

  p {
    font-size: 0.8rem;
  }
`;

const SkillsWrapper = styled.div`
  margin-bottom: 5px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;

  a {
    margin-right: 10px;
    color: #007bff;
    text-decoration: none;
  }
`;

const ProgressBar = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: #e0e0e0;
  overflow: hidden;
  margin-bottom: 5px;

  .progress-fill {
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  cursor: pointer;
  border: none;
`;

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-wrapper")) {
      onClose();
    }
  };

  const getSkillColor = (skillname) => {
    switch (skillname.toLowerCase()) {
      case "html":
        return "#f16529";
      case "css":
        return "#2965f1";
      case "javascript":
        return "#f7df1e";
      case "react":
        return "#61dafb";
      case "node.js":
        return "#68a063";
      case "ejs":
        return "#87c038";
      default:
        return "#6c757d";
    }
  };
  return (
    <ModalWrapper className="modal-wrapper" onClick={handleBackgroundClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{project.title}</h2>
        <ImageContainer>
          <img src={project.pageImage} alt={project.title} />
        </ImageContainer>
        <ContentWrapper>
          <p>{project.description}</p>
          {Array.isArray(project.useSkills) && project.useSkills.length > 0 && (
            <SkillsWrapper>
              {project.useSkills.map((skill, idx) => (
                <div key={idx}>
                  <span>
                    {skill.name}: {skill.percentage}%
                  </span>
                  <ProgressBar>
                    <div
                      className="progress-fill"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: getSkillColor(skill.name),
                      }}
                    ></div>
                  </ProgressBar>
                </div>
              ))}
            </SkillsWrapper>
          )}
        </ContentWrapper>
        <ButtonGroup>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.pageUrl} target="_blank" rel="noopener noreferrer">
            Page
          </a>
        </ButtonGroup>
      </ModalContent>
    </ModalWrapper>
  );
}
