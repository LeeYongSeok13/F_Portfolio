import React from "react";
import styled from "styled-components";

const ProfileInfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.div`
  text-align: center;
  padding: 50px 0;

  h2 {
    font-family: "Caveat Brush", cursive;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 40px;
`;

const ProfileImage = styled.div`
  width: 300px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 10px;
  }

  .record {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;

    a {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
    }
  }
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const Section = styled.div`
  margin-bottom: 20px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: bold;

    strong {
      color: #007bff;
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  svg {
    width: 30px;
    height: 30px;
  }
`;

export default function ProfileInfo({ user }) {
  return (
    <ProfileInfoWrapper>
      <Container>
        <Title>
          <h2>About Me</h2>
        </Title>
        <ProfileContent>
          {/* 프로필 이미지 및 링크 */}
          <ProfileImage>
            <img src={user.image} alt="Profile" />
            <div className="record">
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
              <a href={user.velog} target="_blank" rel="noopener noreferrer">
                VELOG
              </a>
            </div>
          </ProfileImage>

          {/* 프로필 상세 정보 */}
          <ProfileDetails>
            <Section>
              <h4>ABOUT ME</h4>
              <InfoGroup>
                <span>
                  <strong>NAME</strong> {user.name}
                </span>
                <span>
                  <strong>BIRTH</strong> {user.birth}
                </span>
                <span>
                  <strong>PHONE</strong> {user.phone}
                </span>
                <span>
                  <strong>EMAIL</strong> {user.email}
                </span>
              </InfoGroup>
            </Section>

            <Section>
              <h4>CAREER</h4>
              <InfoGroup>
                {user.career.map((item, index) => (
                  <span key={index}>
                    <strong>{item.year}</strong> {item.description}
                  </span>
                ))}
              </InfoGroup>
            </Section>

            <Section>
              <h4>SKILLS</h4>
              <SkillsContainer>
                {user.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    {skill.icon}
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillsContainer>
            </Section>
          </ProfileDetails>
        </ProfileContent>
      </Container>
    </ProfileInfoWrapper>
  );
}
