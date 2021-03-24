import React, { useState } from "react";
import styled from "styled-components";
import { BiMessage } from "react-icons/bi";
import { FiRepeat, FiHeart, FiShare } from "react-icons/fi";

export const ActionBar = ({ liked, likes }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [numOfLikes, setNumOfLikes] = useState(likes);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? setNumOfLikes(numOfLikes - 1) : setNumOfLikes(numOfLikes + 1);
  };

  return (
    <Actions>
      <Icon>
        <BiMessage />
      </Icon>
      <Icon>
        <FiRepeat />
      </Icon>
      <Likes>
        <Icon>
          <FiHeart onClick={handleToggleLike} />
        </Icon>
        <Num>{numOfLikes}</Num>
      </Likes>
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

const Icon = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  background: pink;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const Num = styled.span`
  margin-left: 5px;
`;
