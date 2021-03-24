import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { COLORS, Wrapper, Loader } from "../GlobalStyles";
import { BiLoader, BiArrowBack } from "react-icons/bi";
import { ActionBar } from "./ActionBar";

export const TweetDetails = () => {
  const history = useHistory();
  const { tweetId } = useParams();
  // {} is always true, which breaks the setTweet function
  const [tweet, setTweet] = useState(undefined);
  const date = moment().format("LT - MMM Do YYYY");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      // .then((res) => res.json())
      .then((res) => {
        if (res.status === 500) {
          history.push("/error");
        }
        return res.json();
      })
      .then((data) => {
        setTweet({ ...data.tweet });
      });
  }, [history, tweetId]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <BackBtn onClick={goBack}>
        <BackIcon>
          <BiArrowBack />
        </BackIcon>
        <Label>Meow</Label>
      </BackBtn>
      {tweet ? (
        <>
          <Tweet>
            <AuthorInfo>
              <Avatar src={tweet.author.avatarSrc} alt="user avatar" />
              <Details>
                <ProfileLink
                  to={`/${tweet.author.handle}/profile`}
                  aria-label="go to profile"
                >
                  <Name>{tweet.author.displayName}</Name>
                </ProfileLink>
                <Handle>@{tweet.author.handle}</Handle>
              </Details>
            </AuthorInfo>
            <Status>{tweet.status}</Status>
            {tweet.media.length > 0 && (
              <Media src={tweet.media[0].url} alt="" />
            )}
            <Date>{date} - chatter</Date>
          </Tweet>
          <ActionBar liked={tweet.isLiked} likes={tweet.author.numLikes} />
        </>
      ) : (
        <Loader>
          <BiLoader />
        </Loader>
      )}
    </Wrapper>
  );
};

const BackBtn = styled.button`
  background: none;
  border: none;
  text-align: left;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
`;

const BackIcon = styled.span`
  opacity: 50%;
  margin: 0 10px;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Tweet = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const Date = styled.p`
  opacity: 40%;
  margin: 10px 0;
`;

const Status = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
  overflow-wrap: break-word;
`;

const Media = styled.img`
  width: 100%;
  border-radius: 20px;
`;
