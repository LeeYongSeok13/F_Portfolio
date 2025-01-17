import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const Info = styled.h2`
  text-align: center;
  color: white;
  animation: ${fadeIn} 2s ease;
`;

export default function MainPageInfo() {
  const info = {
    title: "Junior Web Publisher / FrontEnd Developer Portfolio",
    description: "꿈을 만들어가는 개발자 입니다",
  };

  return (
    <InfoContainer>
      <Info>
        <h2>{info.title}</h2>
        <h2>{info.description}</h2>
      </Info>
    </InfoContainer>
  );
}
