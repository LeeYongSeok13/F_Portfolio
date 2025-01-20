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

  .image-container {
    width: 400px;
    height: 400px;
    overflow: auto;
    margin: 0 auto 1rem;
    border: 1px solid #cccccc;
    border-radius: 10px;
  }

  img {
    width: 200%;
    height: 400%;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 600px;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    background: none;
    cursor: pointer;
    border: none;
  }
`;

const SkillsWrapper = styled.div`
  margin-top: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;

  a {
    margin-right: 10px;
    color: #007bff;
    text-decoration: none;
  }
`;

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

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
        return "#68063";
      default:
        return "#6c757d";
    }
  };
  return (
    <ModalWrapper>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <div className="image-container">
          <img src={project.pageImage} alt={project.title} />
        </div>
        <p>{project.description}</p>
        {project.useSkills && (
          <SkillsWrapper>
            {project.useSkills.map((skill, idx) => (
              <div key={idx}>
                <p>
                  {skill.name}: {skill.percentage}%
                </p>
                <div className="progress">
                  <div
                    className={`progress-bar ${skill.name.toLowerCase()}`}
                    role="progressbar"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: getSkillColor(skill.name),
                    }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </SkillsWrapper>
        )}
        <ButtonGroup>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.pageUrl} target="_blank" rel="noopener noreferrer">
            Page
          </a>
        </ButtonGroup>
      </div>
    </ModalWrapper>
  );
}
