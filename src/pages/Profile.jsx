import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiStyledcomponents, SiMysql } from "react-icons/si";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";

export default function Profile() {
  const user = {
    name: "이용석",
    birth: "1994년 7월 17일",
    phone: "010-4124-5417",
    email: "dydtm3@naver.com",
    image: process.env.PUBLIC_URL + "/assets/ProfileImage.jpg",
    github: "https://github.com/LeeYongSeok13",
    velog: "https://velog.io/@korda28",
    career: [
      { year: "2016", description: "동서대학교 컴퓨터공학부 입학" },
      { year: "2022", description: "동서대학교 컴퓨터공학부 졸업" },
      {
        year: "2022",
        description: "부산그린컴퓨터아카데미 프론트엔드 과정 수료",
      },
      {
        year: "2024~2025",
        description: "코딩온 웹 개발자 입문과정 수료",
      },
    ],
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 color="#E34F26" size={30} />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt color="#1572B6" size={30} />,
      },
      {
        name: "JavaScript",
        icon: <FaJs color="#F7DF1E" size={30} />,
      },
      {
        name: "Git",
        icon: <FaGitAlt color="#F05032" size={30} />,
      },
      { name: "GitHub", icon: <FaGithub color="#181717" size={30} /> },
      { name: "React", icon: <FaReact color="#61DAFB" size={30} /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={30} /> },
      { name: "Node.js", icon: <FaNodeJs color="#68A063" size={30} /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={30} /> },
      {
        name: "Styled-Components",
        icon: <SiStyledcomponents color="#DB7093" size={30} />,
      },
      { name: "MySQL", icon: <SiMysql color="#4479A1" size={30} /> },
    ],
  };
  return (
    <div className="Profile">
      <Header />
      <ProfileInfo user={user} />
    </div>
  );
}
