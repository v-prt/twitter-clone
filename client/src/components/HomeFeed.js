import React, { useContext } from "react";
import styled from "styled-components";
import { SmallTweet } from "./SmallTweet";
import { CurrentUserContext } from "../CurrentUserContext";

export const HomeFeed = () => {
  const { tweetIds } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      {tweetIds ? (
        <>
          <h1>Home</h1>
          <PostTweet>add form to post new tweet here</PostTweet>
          <Tweets>
            {tweetIds.map((tweetId) => {
              return <SmallTweet key={tweetId} tweetId={tweetId} />;
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
  max-width: 600px;
`;

const PostTweet = styled.form`
  border: 1px solid grey;
`;

const Tweets = styled.ul`
  display: flex;
  flex-direction: column;
`;
