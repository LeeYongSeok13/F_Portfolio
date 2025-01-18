import React, { useState } from "react";
import styled from "styled-components";
import NavigationDots from "./NavigationDots";
import ProjectCard from "./ProjectCard";

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.activeIndex * 100}%);
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: black;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 40px;
  cursor: pointer;

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}

  &:hover {
    color: #d3d3d3;
    transform: translateY(-50%)
      translateX(${(props) => (props.direction === "left" ? "-10px" : "10px")});
    transition: 1s;
  }
`;

export default function Slider({ projects, onProjectClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % projects.length;
      }
      return (prevIndex - 1 + projects.length) % projects.length;
    });
  };

  return (
    <SliderWrapper>
      <SlideContainer activeIndex={activeIndex}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </SlideContainer>
      <NavigationButton
        direction="left"
        onClick={() => handleNavigation("prev")}
      >
        <i className="fas fa-arrow-left"></i>
      </NavigationButton>
      <NavigationButton
        direction="right"
        onClick={() => handleNavigation("next")}
      >
        <i className="fas fa-arrow-right"></i>
      </NavigationButton>
      <NavigationDots
        total={projects.length}
        activeIndex={activeIndex}
        onDotClick={setActiveIndex}
      />
    </SliderWrapper>
  );
}
