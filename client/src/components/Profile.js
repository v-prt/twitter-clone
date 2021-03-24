import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Loader } from "../GlobalStyles";
import { BiLoader } from "react-icons/bi";
import moment from "moment";
import { SmallTweet } from "./SmallTweet";

export const Profile = () => {
  const { handle } = useParams();
  const [profile, setProfile] = useState();
  const [profileTweets, setProfileTweets] = useState();

  // GET SPECIFIED USER'S PROFILE
  useEffect(() => {
    fetch(`/api/${handle}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile);
      });
  }, [handle]);

  // GET TWEETS/RETWEETS BY SPECIFIED USER FOR PROFILE FEED
  useEffect(() => {
    fetch(`/api/${handle}/feed`)
      .then((res) => res.json())
      .then((data) => {
        setProfileTweets([...data.tweetIds]);
      });
  }, [handle]);

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
            {profileTweets ? (
              <>
                {profileTweets.map((tweet) => {
                  return <SmallTweet tweetId={tweet} />;
                })}
              </>
            ) : (
              <Loader>
                <BiLoader />
              </Loader>
            )}
          </Tweets>
        </>
      ) : (
        <Loader>
          <BiLoader />
        </Loader>
      )}
    </Wrapper>
  );
};

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
