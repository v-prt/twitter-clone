import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import moment from "moment";

export const SmallTweet = ({ tweetId }) => {
  const { tweetObjects } = useContext(CurrentUserContext);
  const { id, status, timestamp, author, media, retweetFrom } = tweetObjects[
    tweetId
  ];

  return (
    <Tweet>
      <Link to={`/tweet/${id}`} key={id}>
        {retweetFrom && (
          <>
            <p>{retweetFrom.displayName} Remeowed</p>
          </>
        )}
        <Avatar src={author.avatarSrc} alt="user avatar" />
        <span>{author.displayName}</span> @{author.handle} -
        {moment(timestamp).format("MMM Do")}
        <p>{status}</p>
        {media.length > 0 && <Media src={media[0].url} alt="" />}
      </Link>
    </Tweet>
  );
};

const Tweet = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Media = styled.img`
  max-width: 600px;
  max-height: 600px;
`;
