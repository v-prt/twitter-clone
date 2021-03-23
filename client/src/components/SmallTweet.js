import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import moment from "moment";
import { BiRefresh } from "react-icons/bi";

export const SmallTweet = ({ tweetId }) => {
  const { tweetObjects } = useContext(CurrentUserContext);
  const tweet = tweetObjects[tweetId];
  return (
    <Tweet>
      {tweet ? (
        <Link to={`/tweet/${tweet.id}`} key={tweet.id}>
          {tweet.retweetFrom && (
            <>
              <Remeow>
                <Icon>
                  <BiRefresh />
                </Icon>
                {tweet.retweetFrom.displayName} Remeowed
              </Remeow>
            </>
          )}
          <Avatar src={tweet.author.avatarSrc} alt="user avatar" />
          <Info>
            <TweetDetails>
              <Name>{tweet.author.displayName}</Name>
              <Handle>@{tweet.author.handle}</Handle>
              <Date> - {moment(tweet.timestamp).format("MMM Do")}</Date>
            </TweetDetails>
            <Status>{tweet.status}</Status>
            {tweet.media.length > 0 && (
              <Media src={tweet.media[0].url} alt="" />
            )}
          </Info>
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

const Remeow = styled.div`
  display: flex;
  opacity: 40%;
  margin: 10px 0;
`;

const Icon = styled.div`
  margin: 0 10px 0 20px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetDetails = styled.div`
  display: flex;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Handle = styled.p`
  opacity: 40%;
  margin: 0 10px;
`;

const Date = styled.p`
  opacity: 40%;
`;

const Status = styled.p`
  margin: 10px 0;
`;

const Media = styled.img`
  width: 100%;
  border-radius: 20px;
`;
