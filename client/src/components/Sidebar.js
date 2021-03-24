import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, Button } from "../GlobalStyles";
import { ReactComponent as Logo } from "../logo.svg";
import { BiHomeHeart, BiUserCircle, BiBell, BiBookmark } from "react-icons/bi";
import { CurrentUserContext } from "../CurrentUserContext";

export const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    currentUser && (
      <>
        <Nav>
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
          <Button>Meow</Button>
        </Nav>
      </>
    )
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  float: left;
  position: fixed;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 1.4rem;
  font-weight: bold;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Icon = styled.div`
  margin-right: 10px;
`;
