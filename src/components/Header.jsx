import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: 1000;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const Brand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: ${({ active }) => (active ? "#007bff" : "#000")};
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: ${({ active }) =>
    active ? "2px solid #007bff" : "2px solid transparent"};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    color: #000;
    font-size: 1.2rem;

    &:hover {
      color: #007bff;
      transform: scale(1.2);
    }
  }
`;

export default function Header() {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <Navbar>
        <Brand to="/">포트폴리오</Brand>
        <NavLinks>
          <NavLink to="/project" active={location.pathname === "/project"}>
            프로젝트
          </NavLink>
          <NavLink to="/profile" active={location.pathname === "/profile"}>
            프로필
          </NavLink>
        </NavLinks>
        <SocialIcons>
          <a
            href="https://github.com/LeeYongSeok13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://velog.io/@korda28/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiVelog />
          </a>
        </SocialIcons>
      </Navbar>
    </HeaderWrapper>
  );
}
