import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 250px; /* 기본 크기 */
  height: 400px; /* 기본 크기 */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 위 아래 공간 분배 */

  /* 화면 크기에 따라 크기 조정 */
  @media (max-width: 1200px) {
    width: 220px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 250px;
  }

  /* hover 시 크기 변화 */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProjectDetails = styled.div`
  padding: 10px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0.5rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem; /* 설명과 버튼 간 간격 */
`;

const OpenModalButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function ProjectCard({ project, onButtonClick }) {
  return (
    <CardWrapper>
      <ImageContainer>
        <ProjectImage src={project.image} alt={project.title} />
      </ImageContainer>
      <ProjectDetails>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <OpenModalButton onClick={() => onButtonClick(project)}>
          자세히 보기
        </OpenModalButton>
      </ProjectDetails>
    </CardWrapper>
  );
}
