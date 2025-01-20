import React from "react";
import styled from "styled-components";

const Slide = styled.div`
  flex: 0 0 100%;
  text-align: center;

  .image-container {
    width: 200px;
    height: 300px;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 1px solid #cccccc;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    color: #666666;
  }
`;

export default function ProjectCard({ project, onClick }) {
  return (
    <Slide onClick={onClick}>
      <div className="image-container">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Slide>
  );
}
