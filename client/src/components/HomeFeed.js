import React, { useContext } from "react";
import styled from "styled-components";
import { Wrapper } from "../GlobalStyles";
import { PostTweet } from "./PostTweet";
import { SmallTweet } from "./SmallTweet";
import { CurrentUserContext } from "../CurrentUserContext";

export const HomeFeed = () => {
  const { tweetIds } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      <h1>Home</h1>
      {tweetIds ? (
        <>
          <PostTweet />
          <Tweets>
            {tweetIds.map((tweetId) => {
              return <SmallTweet tweetId={tweetId} />;
            })}
          </Tweets>
        </>
      ) : (
        <p>Loading home feed...</p>
      )}
    </Wrapper>
  );
};

const Tweets = styled.ul`
  display: flex;
  flex-direction: column;
`;
