import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [tweetIds, setTweetIds] = useState([]);
  const [tweetObjects, setTweetObjects] = useState({});
  const [tweetIsPosted, setTweetIsPosted] = useState(true);

  // GET CURRENT USER'S PROFILE
  useEffect(() => {
    fetch(`/api/me/profile`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
      });
  }, []);

  // GET ALL TWEETS FOR HOME FEED
  useEffect(() => {
    if (tweetIsPosted) {
      fetch(`/api/me/home-feed`)
        .then((res) => res.json())
        .then((data) => {
          setTweetIds([...data.tweetIds]);
          setTweetObjects({ ...data.tweetsById });
          setTweetIsPosted(false);
        });
    }
  }, [tweetIsPosted]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        tweetIds,
        setTweetIds,
        tweetObjects,
        setTweetObjects,
        tweetIsPosted,
        setTweetIsPosted,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
