import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [tweetIds, setTweetIds] = useState([]);
  const [tweetObjects, setTweetObjects] = useState({});

  // get profile of current user
  useEffect(() => {
    fetch(`/api/me/profile`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      });
  }, []);

  // get all tweets by users the current user is following
  useEffect(() => {
    fetch(`/api/me/home-feed`)
      .then((res) => res.json())
      .then((data) => {
        setTweetIds([...data.tweetIds]);
        setTweetObjects({ ...data.tweetsById });
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status, tweetIds, tweetObjects }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
