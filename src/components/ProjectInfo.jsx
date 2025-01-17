import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./ProjectModal";
import { Carousel } from "react-bootstrap";
import ProjectModal from "./ProjectModal";

const ProjectInfoWrapper = styled.div`
  margin: 5rem auto;
  width: 100%;
  max-width: 1200px;
  h2 {
    font-family: "Caveat Brush", cursive;
    color: #719ece;
  }
`;

const ProjectCarousel = styled(Carousel)`
  .carousel-control-next,
  .carousel-control-prev {
    filter: invert(1); // 화살표 색상 반전
    z-index: 1;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#007bff" : "  #cccccc")};
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  margin: 0 auto;

  .image-container {
    width: 200px;
    height: 300px;
    overflow: hidden; // 스크롤 설정
    border: 1px solid #ccc;
    margin-right: 1rem;
    border-radius: 20px;
  }

  img {
    width: 100%; // 컨테이너 크기에 맞게 이미지 크기 조정
    height: 100%;
    object-fit: cover;
  }

  .text {
    flex: 1; // 텍스트 부분이 남은 공간을 차지
    max-width: 300px;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
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
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectInfoWrapper>
      <h2>Project</h2>
      <ProjectCarousel fade activeIndex={activeIndex} onSelect={handleSelect}>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <Card>
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <StyledButton onClick={() => setSelectedProject(project)}>
                  자세히 보기
                </StyledButton>
              </div>
            </Card>
          </Carousel.Item>
        ))}
      </ProjectCarousel>

      <DotContainer>
        {projects.map((_, index) => (
          <Dot
            key={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          ></Dot>
        ))}
      </DotContainer>

      {/* Modal 컴포넌트 추가 */}
      <ProjectModal
        project={selectedProject}
        onClose={handleModalClose}
      ></ProjectModal>
    </ProjectInfoWrapper>
  );
}
