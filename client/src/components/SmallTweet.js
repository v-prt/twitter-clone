import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { COLORS, Loader } from "../GlobalStyles";
import { ActionBar } from "./ActionBar";
import { BiLoader, BiRefresh } from "react-icons/bi";
import { CurrentUserContext } from "../CurrentUserContext";

// TODO: fix empty space/loading tweet (may be a broken tweet, can change in data.js or tweet.js)
export const SmallTweet = ({ tweetId }) => {
  const { allTweets } = useContext(CurrentUserContext);
  const tweet = allTweets[tweetId];

  return (
    <Tweet>
      {tweet ? (
        <>
          <TweetLink to={`/tweet/${tweetId}`} aria-label="go to tweet">
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
                <ProfileLink
                  to={`/${tweet.author.handle}/profile`}
                  aria-label="go to profile"
                >
                  <Name>{tweet.author.displayName}</Name>
                </ProfileLink>
                <Handle>@{tweet.author.handle}</Handle>
                <Date> - {moment(tweet.timestamp).format("MMM Do")}</Date>
              </TweetDetails>
              <Status>{tweet.status}</Status>
              {tweet.media.length > 0 && (
                <Media src={tweet.media[0].url} alt="" />
              )}
            </Info>
          </TweetLink>
          <ActionBar liked={tweet.isLiked} likes={tweet.author.numLikes} />
        </>
      ) : (
        <Loader>
          <BiLoader />
        </Loader>
      )}
    </Tweet>
  );
};

const Tweet = styled.li`
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const TweetLink = styled(Link)`
  padding: 10px;
  &:hover {
    background: #f2f2f2;
  }
  &:focus {
    background: #f2f2f2;
  }
`;

const Remeow = styled.div`
  display: flex;
  opacity: 40%;
  margin: 10px 30px;
`;

const Icon = styled.div`
  margin: 0 10px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  float: left;
  margin: 0 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileLink = styled(Link)`
  padding: 5px;
  border-radius: 10px;
  &:hover {
    color: ${COLORS.primary};
    background: #f5e6ff;
  }
  &:focus {
    outline: none;
    color: ${COLORS.primary};
    background: #f5e6ff;
  }
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

const Status = styled.div`
  overflow-wrap: break-word;
  margin: 10px 0;
`;

const Media = styled.img`
  width: 100%;
  border-radius: 20px;
`;
