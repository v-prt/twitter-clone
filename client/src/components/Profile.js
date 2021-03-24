import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Loader } from "../GlobalStyles";
import { BiLoader, BiCalendarHeart } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
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

  return (
    <Wrapper>
      {profile ? (
        <>
          <Banner src={profile.bannerSrc} alt="banner" />
          <Avatar src={profile.avatarSrc} alt="user avatar" />
          <UserDetails>
            <Name>{profile.displayName}</Name>
            <Div>
              <Handle>@{profile.handle}</Handle>
              {profile.isFollowingYou ? <Follows>Follows You</Follows> : <></>}
            </Div>
            <Bio>{profile.bio}</Bio>
            <Div>
              {profile.location && (
                <Location>
                  <Icon>
                    <GrLocation />
                  </Icon>
                  {profile.location}
                </Location>
              )}
              <JoinDate>
                <Icon>
                  <BiCalendarHeart />
                </Icon>
                Joined: {moment(profile.joined).format("ll")}
              </JoinDate>
            </Div>
            <Div>
              <Following>
                <b>{profile.numFollowing}</b> Following
              </Following>
              <Followers>
                <b>{profile.numFollowers}</b> Followers
              </Followers>
            </Div>
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
`;

const Name = styled.h1``;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Handle = styled.p`
  opacity: 50%;
`;

const Follows = styled.span`
  padding: 3px;
  background: lightgrey;
  border-radius: 5px;
  margin: 5px;
`;

const Bio = styled.p``;

const Icon = styled.div`
  margin-right: 5px;
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  margin-right: 20px;
  opacity: 50%;
`;

const JoinDate = styled.p`
  display: flex;
  align-items: center;
  opacity: 50%;
`;

const Following = styled.p`
  margin-right: 20px;
  opacity: 50%;
`;

const Followers = styled.p`
  opacity: 50%;
`;

const Heading = styled.h2`
  margin-top: 20px;
`;

const Tweets = styled.ul`
  position: relative;
  top: -155px;
  display: flex;
  flex-direction: column;
`;
