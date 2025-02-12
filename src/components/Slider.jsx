import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard"; // 위에서 만든 ProjectCard
import { motion } from "framer-motion";

const SliderWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 10px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* 스크롤바 제거 */
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  /* 반응형 처리: 화면 크기에 맞춰 카드 크기 조정 */
  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export default function Slider({ projects, onProjectClick }) {
  return (
    <SliderWrapper>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          style={{ flex: "0 0 auto" }}
          whileHover={{ scale: 1.05 }} // Hover 시 크기 변화
        >
          <ProjectCard project={project} onButtonClick={onProjectClick} />
        </motion.div>
      ))}
    </SliderWrapper>
  );
}
