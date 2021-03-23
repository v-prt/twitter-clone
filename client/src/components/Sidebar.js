import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../logo.svg";
import { BiHomeHeart, BiUserCircle, BiBell, BiBookmark } from "react-icons/bi";
import { CurrentUserContext } from "../CurrentUserContext";

export const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    currentUser && (
      <Wrapper>
        <Logo style={{ width: "40px" }} />
        <NavLink to="/">
          <Icon>
            <BiHomeHeart />
          </Icon>
          Home
        </NavLink>
        <NavLink to={`/${currentUser.handle}/profile`}>
          <Icon>
            <BiUserCircle />
          </Icon>
          Profile
        </NavLink>
        <NavLink to="/notifications">
          <Icon>
            <BiBell />
          </Icon>
          Notifications
        </NavLink>
        <NavLink to="/bookmarks">
          <Icon>
            <BiBookmark />
          </Icon>
          Bookmarks
        </NavLink>
      </Wrapper>
    )
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  float: left;
  position: fixed;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px;
  font-weight: bold;
`;

const Icon = styled.div`
  margin-right: 10px;
`;
