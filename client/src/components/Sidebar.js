import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../logo.svg";
import { BiHomeHeart, BiUserCircle, BiBell, BiBookmark } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Logo style={{ width: "40px" }} />
      <NavLink to="/">
        <BiHomeHeart />
        Home
      </NavLink>
      <NavLink to="/me/profile">
        <BiUserCircle />
        Profile
      </NavLink>
      <NavLink to="/notifications">
        <BiBell />
        Notifications
      </NavLink>
      <NavLink to="/bookmarks">
        <BiBookmark />
        Bookmarks
      </NavLink>
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
