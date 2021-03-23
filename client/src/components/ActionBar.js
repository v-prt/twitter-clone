import React from "react";
import styled from "styled-components";

import { BiMessage } from "react-icons/bi";
import { FiRepeat, FiHeart, FiShare } from "react-icons/fi";

export const ActionBar = () => {
  return (
    <Actions>
      <Icon>
        <BiMessage />
      </Icon>
      <Icon>
        <FiRepeat />
      </Icon>
      <Icon>
        <FiHeart />
      </Icon>
      <Icon>
        <FiShare />
      </Icon>
    </Actions>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  padding: 10px 0;
  border-top: 1px solid lightgrey;
`;

const Icon = styled.div``;
