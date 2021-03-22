import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import moment from "moment";

export const SmallTweet = ({ tweetId }) => {
  const { tweetObjects } = useContext(CurrentUserContext);
  const tweet = tweetObjects[tweetId];
  return (
    <Tweet>
      {tweet ? (
        <Link to={`/tweet/${tweet.id}`} key={tweet.id}>
          {tweet.retweetFrom && (
            <>
              <p>{tweet.retweetFrom.displayName} Remeowed</p>
            </>
          )}
          <Avatar src={tweet.author.avatarSrc} alt="user avatar" />
          <span>{tweet.author.displayName}</span> @{tweet.author.handle} -
          {moment(tweet.timestamp).format("MMM Do")}
          <p>{tweet.status}</p>
          {tweet.media.length > 0 && <Media src={tweet.media[0].url} alt="" />}
        </Link>
      ) : (
        <>Loading tweets...</>
      )}
    </Tweet>
  );
};

const Tweet = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Media = styled.img`
  max-width: 580px;
  max-height: 600px;
`;
