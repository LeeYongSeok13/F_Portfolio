import styled, { keyframes } from "styled-components";

// fadeIn 애니메이션
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

// 배경 이미지와 중앙 정렬을 위한 InfoContainer 스타일
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${process.env.PUBLIC_URL}/assets/background.jpg) no-repeat
    center center fixed;
  background-size: cover;
  height: 100vh;
  justify-content: center;
  padding: 20px;
  text-align: center;
  position: relative;
  color: white;
`;

// 정보 텍스트 애니메이션을 위한 Info 스타일
const Info = styled.div`
  animation: ${fadeIn} 2s ease;
  opacity: 0;
  animation-fill-mode: forwards;
`;

// 타이틀 스타일
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 효과 추가 */
`;

// 설명 텍스트 스타일
const Description = styled.h3`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 30px;
`;

export default function MainPageInfo() {
  const info = {
    title: "Junior FrontEnd Developer Portfolio",
    description: "꿈을 만들어가는 개발자 입니다",
  };

  return (
    <InfoContainer>
      <Info>
        <Title>{info.title}</Title>
        <Description>{info.description}</Description>
      </Info>
    </InfoContainer>
  );
}
