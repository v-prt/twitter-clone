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
      <Comment>
        <BiMessage />
      </Comment>
      <Remeow>
        <FiRepeat />
      </Remeow>
      <Likes>
        <Like aria-label="like tweet" onClick={handleToggleLike}>
          <FiHeart />
        </Like>
        <Num>{numOfLikes}</Num>
      </Likes>
      <Share>
        <FiShare />
      </Share>
    </Actions>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const Icon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: none;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Comment = styled(Icon)`
  &:focus {
    background: #cce6ff;
  }
`;

const Remeow = styled(Icon)`
  &:focus {
    background: #adebad;
  }
`;

const Like = styled(Icon)`
  &:focus {
    background: #ffccee;
  }
`;

const Share = styled(Icon)`
  &:focus {
    background: #e6ccff;
  }
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const Num = styled.span`
  margin-left: 5px;
`;
