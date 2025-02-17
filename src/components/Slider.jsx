import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard"; // 위에서 만든 ProjectCard
import { motion } from "framer-motion";

const SliderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 10px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function Slider({ projects, onProjectClick }) {
  return (
    <SliderWrapper>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          style={{ flex: "0 0 auto" }} // flex 속성 조정
          whileHover={{ scale: 1.05 }} // Hover 시 크기 변화
        >
          <ProjectCard project={project} onButtonClick={onProjectClick} />
        </motion.div>
      ))}
    </SliderWrapper>
  );
}
