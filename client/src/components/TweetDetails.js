import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Loader } from "../GlobalStyles";
import moment from "moment";
import { BiLoader, BiArrowBack } from "react-icons/bi";
import { ActionBar } from "./ActionBar";

export const TweetDetails = () => {
  const { tweetId } = useParams();
  // {} is always true, which breaks the setTweet function
  const [tweet, setTweet] = useState(undefined);
  const date = moment().format("LT - MMM Do YYYY");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        setTweet({ ...data.tweet });
      });
  }, [tweetId]);

  return (
    <Wrapper>
      <Return to="/">
        <Icon>
          <BiArrowBack />
        </Icon>
        Meow
      </Return>

      <Tweet>
        {tweet ? (
          <>
            <AuthorInfo>
              <Avatar src={tweet.author.avatarSrc} alt="user avatar" />
              <Details>
                <Link to={`/${tweet.author.handle}/profile`}>
                  <Name>{tweet.author.displayName}</Name>
                </Link>
                <Handle>@{tweet.author.handle}</Handle>
              </Details>
            </AuthorInfo>
            <Status>{tweet.status}</Status>
            {tweet.media.length > 0 && (
              <Media src={tweet.media[0].url} alt="" />
            )}
            <Date>{date}</Date>
            <ActionBar />
          </>
        ) : (
          <Loader>
            <BiLoader />
          </Loader>
        )}
      </Tweet>
    </Wrapper>
  );
};

const Return = styled(Link)`
  display: flex;
  align-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  border: 1px solid lightgrey;
`;

const Icon = styled.div`
  margin: 0 10px;
  opacity: 40%;
`;

const Tweet = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  padding: 10px;
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
`;

const Media = styled.img`
  width: 100%;
  border-radius: 20px;
`;
