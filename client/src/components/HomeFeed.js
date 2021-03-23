import React, { useContext } from "react";
import styled from "styled-components";
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

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 600px;
  position: relative;
  left: 170px;
`;

const Tweets = styled.ul`
  display: flex;
  flex-direction: column;
`;
