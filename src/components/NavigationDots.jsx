import React from "react";
import styled from "styled-components";

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
  background-color: ${(props) => (props.isActive ? "#007bff" : "#cccccc")};
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

export default function NavigationDots({ total, activeIndex, onDotClick }) {
  return (
    <DotContainer>
      {Array.from({ length: total }).map((_, index) => (
        <Dot
          key={index}
          isActive={activeIndex === index}
          onClick={() => onDotClick(index)}
        />
      ))}
    </DotContainer>
  );
}
