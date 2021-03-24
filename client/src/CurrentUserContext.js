import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  // tweetIds needed for sorting tweets in feeds
  const [tweetIds, setTweetIds] = useState([]);
  const [allTweets, setAllTweets] = useState({});
  const [tweetIsPosted, setTweetIsPosted] = useState(true);

  // GET CURRENT USER'S PROFILE
  useEffect(() => {
    fetch(`/api/me/profile`)
      // .then((res) => res.json())
      .then((res) => {
        if (res.status === 500) {
          history.push("/error");
        } else return res.json();
      })
      .then((data) => {
        setCurrentUser(data.profile);
      });
  }, [history]);

  // GET ALL TWEETS FOR HOME FEED
  useEffect(() => {
    if (tweetIsPosted) {
      fetch(`/api/me/home-feed`)
        // .then((res) => res.json())
        .then((res) => {
          if (res.status === 500) {
            history.push("/error");
          } else return res.json();
        })
        .then((data) => {
          setTweetIds([...data.tweetIds]);
          setAllTweets(data.tweetsById);
          setTweetIsPosted(false);
        });
    }
  }, [history, tweetIsPosted]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        tweetIds,
        allTweets,
        tweetIsPosted,
        setTweetIsPosted,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
