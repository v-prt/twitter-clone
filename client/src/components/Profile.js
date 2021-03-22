import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { CurrentUserContext } from "../CurrentUserContext";
import { SmallTweet } from "./SmallTweet";

export const Profile = () => {
  // why doesn't "handle" work?
  const { profileId } = useParams();
  const [profile, setProfile] = useState();
  const { tweetIds, setTweetIds, setTweetObjects } = useContext(
    CurrentUserContext
  );

  // GET SPECIFIED USER'S PROFILE
  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile);
      });
  }, [profileId]);

  // GET TWEETS/RETWEETS BY SPECIFIED USER FOR PROFILE FEED
  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        setTweetIds([...data.tweetIds]);
        setTweetObjects({ ...data.tweetsById });
      });
  }, [profileId]);

  // TODO: get tweets to work
  return (
    <>
      {profile ? (
        <Wrapper>
          <img src={profile.bannerSrc} alt="banner" />
          <Avatar src={profile.avatarSrc} alt="user avatar" />
          <Name>{profile.displayName}</Name>
          <Handle>@{profile.handle}</Handle>
          <Bio>{profile.bio}</Bio>
          <Location>{profile.location}</Location>
          <JoinDate>Joined: {moment(profile.joined).format("ll")}</JoinDate>
          <Following>{profile.numFollowing} Following</Following>
          <Followers>{profile.numFollowers} Followers</Followers>

          <h2>Tweets (not working)</h2>
          {tweetIds ? (
            <>
              <Tweets>
                {tweetIds.map((tweetId) => {
                  return <SmallTweet tweetId={tweetId} />;
                })}
              </Tweets>
            </>
          ) : (
            <p>Loading tweets...</p>
          )}
        </Wrapper>
      ) : (
        <>Loading profile...</>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: 200px;
  position: relative;
  top: -100px;
  left: 50px;
`;

const Name = styled.h1``;

const Handle = styled.p``;

const Bio = styled.p``;

const Location = styled.p``;

const JoinDate = styled.p``;

const Following = styled.p``;

const Followers = styled.p``;

const Tweets = styled.ul`
  display: flex;
  flex-direction: column;
`;
