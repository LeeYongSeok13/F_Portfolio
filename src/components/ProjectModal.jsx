import React, { useState } from "react";
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

const Title = styled.h2`
  font-family: "Caveat Brush", cursive;
  font-size: 1.5rem;
  color: ${({ type }) =>
    type === "personal" ? "#3b5998" : "#2c6b2f"}; /* 색상 적용 */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  position: relative;

  img {
    max-width: 100%;
    max-height: auto;
    object-fit: unset;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ type }) => (type === "personal" ? "#3b5998" : "#2c6b2f")};
    border-radius: 10px;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ type }) => (type === "personal" ? "#2a4887" : "#1e4d22")};
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding-right: 10px;

  p {
    font-size: 0.8rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ type }) => (type === "personal" ? "#3b5998" : "#2c6b2f")};
    border-radius: 10px;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ type }) => (type === "personal" ? "#2a4887" : "#1e4d22")};
  }
`;

const Description = styled.p`
  text-align: center;
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

const Contributions = styled.span`
  font-size: 0.8rem;
`;

const RoleParagraph = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

const ContributionText = styled.p`
  margin: 0;
  line-height: 1.5;
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

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active, type }) =>
    active ? (type === "personal" ? "#3b5998" : "#2c6b2f") : "#ccc"};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ type }) =>
      type === "personal" ? "#3b5998" : "#2c6b2f"};
  }
`;

export default function ProjectModal({ project, onClose, type }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = Array.isArray(project.pageImage)
    ? project.pageImage
    : [project.pageImage];

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
        <Title type={type}>{project.title}</Title>
        <ImageContainer type={type}>
          <img
            src={process.env.PUBLIC_URL + images[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
          />
        </ImageContainer>
        {images.length > 1 && (
          <DotContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
                type={type}
              />
            ))}
          </DotContainer>
        )}
        <ContentWrapper type={type}>
          <Description>{project.description}</Description>
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
              <Contributions>
                {type === "team" && (
                  <RoleParagraph>
                    프로젝트 담당 역할 <br />
                    <br />
                    {project.contributions.map((contribution, index) => (
                      <ContributionText key={index}>
                        {contribution}
                      </ContributionText>
                    ))}
                  </RoleParagraph>
                )}
                {type !== "team" && (
                  <RoleParagraph>
                    {project.contributions.map((contribution, index) => (
                      <ContributionText key={index}>
                        {contribution}
                      </ContributionText>
                    ))}
                  </RoleParagraph>
                )}
              </Contributions>
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
