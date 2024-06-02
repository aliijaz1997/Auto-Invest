import React from "react";
import styled from "styled-components";
import avatar from "../assets/images/avatar.svg";
import bell from "../assets/images/bell.svg";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const Nav = styled.nav`
  display: inline-flex;
  alignitems: center;
  gap: 34.728px;
`;

const NavItem = styled.a`
  text-decoration: none;
  &:hover {
    font-weight: bold;
    color: #000;
  }
  color: ${({ isActive }) => (isActive ? "#000" : "#0d0f52")};
  fontsize: 10.542px;
  fontstyle: normal;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "400")};
  lineheight: 14.883px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 106.044px;
  height: 24.806px;
  justifycontent: center;
  gap: 25.208px;
  flexshrink: 0;
`;

const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const EN = styled.span`
  color: var(--Black, #0d0f52);
  fontfamily: "Proxima Nova";
  fontsize: 10.542px;
  fontstyle: normal;
  fontweight: 400;
  lineheight: 14.883px;
`;

const Header = () => {
  const isActiveLink = (href) => {
    return window.location.pathname === href;
  };
  return (
    <HeaderContainer>
      <Nav>
        <Nav>
          <NavItem href="#" isActive={isActiveLink("/")}>
            Overview
          </NavItem>
          <NavItem href="#" isActive={isActiveLink("/invest")}>
            Invest
          </NavItem>
          <NavItem href="auto-invest" isActive={isActiveLink("/auto-invest")}>
            Auto-Invest
          </NavItem>
          <NavItem href="#" isActive={isActiveLink("/portfolio")}>
            My Portfolio
          </NavItem>
        </Nav>
      </Nav>
      <Profile>
        <EN>En</EN>
        <ProfileImage src={bell} alt="Profile" />
        <ProfileImage src={avatar} alt="Profile" />
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
