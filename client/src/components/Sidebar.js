import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

export const Sidebar = () => {
  return (
    <Wrapper>
      {/* TODO: FIX BROKEN IMG */}
      <img src={logo} alt="cat logo"></img>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/me/profile">Profile</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
      <NavLink to="/bookmarks">Bookmarks</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  float: left;
`;

const NavLink = styled(Link)`
  margin: 10px;
  font-weight: bold;
`;
