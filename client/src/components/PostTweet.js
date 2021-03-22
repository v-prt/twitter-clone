import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import { Button } from "../GlobalStyles";

export const PostTweet = () => {
  const { currentUser, setTweetIsPosted } = useContext(CurrentUserContext);
  const [newTweet, setNewTweet] = useState("");
  const [charCount, setCharCount] = useState(280);

  const handleType = (e) => {
    let input = e.target.value;
    setNewTweet(input);
    setCharCount(280 - input.length);
  };

  const postTweet = (e) => {
    e.preventDefault();
    fetch(`/api/tweet`, {
      method: "POST",
      body: JSON.stringify({ status: newTweet }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setNewTweet("");
          setCharCount(280);
          setTweetIsPosted(true);
        }
      });
  };

  return (
    <Form method="post">
      <InputDiv>
        <Avatar src={currentUser.avatarSrc} alt="user avatar" />
        <Label for="status">Status</Label>
        <Input
          type="text"
          name="status"
          placeholder="What's happening?"
          onChange={handleType}
          value={newTweet}
        />
      </InputDiv>
      <BtnDiv>
        <Num>{charCount}</Num>
        <Button type="submit" onClick={postTweet}>
          Meow
        </Button>
      </BtnDiv>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-bottom: 3px solid lightgrey;
  padding: 10px;
  height: 150px;
`;

const InputDiv = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin: 10px;
  &:focus {
    outline: none;
  }
`;

const BtnDiv = styled.div`
  text-align: right;
`;

const Num = styled.span`
  margin-right: 10px;
`;
