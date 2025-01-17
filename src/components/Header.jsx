import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #000;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Navbar>
        <Brand to="/">포트폴리오</Brand>
        <NavLinks>
          <NavLink to="/project">프로젝트</NavLink>
          <NavLink to="/profile">프로필</NavLink>
        </NavLinks>
      </Navbar>
    </HeaderWrapper>
  );
}
