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
  console.log(profile);

  // GET TWEETS/RETWEETS BY SPECIFIED USER FOR PROFILE FEED
  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        setTweetIds([...data.tweetIds]);
        setTweetObjects({ ...data.tweetsById });
      });
  }, [profileId]);

  // TODO: get tweets to work better (tweets on HomeFeed are getting erased after going to Profile)
  return (
    <Wrapper>
      {profile ? (
        <>
          <Banner src={profile.bannerSrc} alt="banner" />
          <Avatar src={profile.avatarSrc} alt="user avatar" />
          <UserDetails>
            <Name>{profile.displayName}</Name>
            <Handle>@{profile.handle}</Handle>{" "}
            {profile.isFollowingYou ? <Follows>Follows You</Follows> : <></>}
            <Bio>{profile.bio}</Bio>
            <Location>{profile.location}</Location>
            <JoinDate>Joined: {moment(profile.joined).format("ll")}</JoinDate>
            <Following>{profile.numFollowing} Following</Following>
            <Followers>{profile.numFollowers} Followers</Followers>
            <Heading>Tweets</Heading>
          </UserDetails>
          <Tweets>
            {tweetIds ? (
              <>
                {tweetIds.map((tweetId) => {
                  return <SmallTweet tweetId={tweetId} />;
                })}
              </>
            ) : (
              <p>Loading profile feed...</p>
            )}
          </Tweets>
        </>
      ) : (
        <>Loading profile...</>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 170px;
  width: 75%;
`;

const Banner = styled.img``;

const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: 150px;
  position: relative;
  top: -75px;
  left: 20px;
  z-index: 10;
`;

const UserDetails = styled.div`
  position: relative;
  top: -155px;
  padding: 80px 10px 10px 10px;
  border: 1px solid lightgrey;
`;

const Name = styled.h1``;

const Handle = styled.p``;

const Follows = styled.p``;

const Bio = styled.p``;

const Location = styled.p``;

const JoinDate = styled.p``;

const Following = styled.p``;

const Followers = styled.p``;

const Heading = styled.h2``;

const Tweets = styled.ul`
  position: relative;
  top: -155px;
  display: flex;
  flex-direction: column;
`;
